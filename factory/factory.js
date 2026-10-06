#!/usr/bin/env node
// AI WIKI TOTAL — CONTENT FACTORY
//
// PRODUCTION CYCLE (mỗi cycle 12-18 bài): auto-refill queue -> allocate ->
// 3 writer chỉ viết -> scoped MINIMAL QA (chỉ bài mới của cycle) -> PASS >= 70
// -> coordinator duy nhất merge/publish/deploy đúng 1 lần -> mark PUBLISHED
// -> cycle mới. Bài FAIL vào repair queue, KHÔNG giữ cycle.
//
// MINIMAL PRODUCTION QA GATE (factory/qa.js): 70-100 PASS, <70 FAIL/REPAIR;
// chỉ 7 critical gate (not-empty/dup-id/dup-slug/canonical/render-ok/
// business/links-ok); SEO chỉ ADVISORY — KHÔNG chặn publish; KHÔNG REVIEW,
// KHÔNG EXCELLENT, KHÔNG band. KHÔNG full-site QA trong production loop —
// audit toàn site chỉ chạy ở deep audit (workflow_dispatch, manual).
//
// Writer KHÔNG sửa global state/matrix/txn/manifest/sqlite — chỉ coordinator.
//
// SIMPLE PRODUCTION MODE (pair hot path): writer ngoài viết ĐÚNG 2 bài/lần,
// publisher xử lý EXACT push scope (publish-pair/verify-pair/push-scope);
// drain-iteration/publish legacy giữ làm đường manual recovery, KHÔNG phải
// hot path production nữa.
'use strict';
// AI WIKI TOTAL — CONTENT FACTORY
// Một writer duy nhất (writer lock ownership-safe), checkpoint, bảo vệ
// transaction, resume, continuous backlog drain.
//
// HARDENING 4-TẦNG:
//   - Writer lock: acquire bằng primitive exclusive thật (open 'wx'), token
//     ownership unique từng acquisition; unlock chỉ xóa lock CỦA MÌNH
//     (--owner + --token); sai owner/token -> REFUSE exit 1; --force là lệnh
//     recovery RIÊNG, workflow không bao giờ gọi. Chi tiết: factory/lib/lock.js
//     + docs/RECOVERY.md + docs/FACTORY-RELIABILITY.md.
//   - Continuous backlog drain: một production run DRAIN TOÀN BỘ backlog
//     article-backed claimable theo chunk <= 10 ID (không dựa self-trigger của
//     bot commit), có NO-PROGRESS sentinel fail-loud. Logic thuần nằm ở
//     factory/lib/factory-runtime.js (YAML chỉ orchestration).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const lock = require('./lib/lock');
const runtime = require('./lib/factory-runtime');
const contentIndex = require('./lib/content-index');
const linkIntegrity = require('./link-integrity');

const STATE_DIR = path.join(__dirname, 'state');
const STATE_FILE = path.join(STATE_DIR, 'factory-state.json');
const MATRIX_FILE = path.join(STATE_DIR, 'matrix.json');
const LOCK_FILE = path.join(STATE_DIR, 'writer.lock');
const TXN_FILE = path.join(STATE_DIR, 'txn.json');
const CHECKPOINT_FILE = path.join(STATE_DIR, 'checkpoint.json');
// 3-ROLE PRODUCTION (docs/PRODUCTION-ROLES.md): Writer 1 báo heartbeat sau
// mỗi pair; Đốc công 2/3 dùng hàng đợi lỗi escalade theo attempts.
const HEARTBEAT_FILE = path.join(STATE_DIR, 'writer-heartbeat.json');
const ERROR_FILE = path.join(STATE_DIR, 'error-queue.json');
const MANIFEST_FILE = contentIndex.MANIFEST_FILE; // JSONL — source of truth (commit)

const TRANSITIONS = {
  PLANNED: ['RESEARCH'],
  RESEARCH: ['WRITING'],
  WRITING: ['QA'],
  QA: ['PASS', 'REPAIR', 'BLOCKED'],
  REPAIR: ['QA'],
  BLOCKED: ['PLANNED'], // sau khi người rà soát
  PASS: ['PUBLISHED'],
  PUBLISHED: [],
};

// ---------- Ghi nguyên tử ----------
function atomicWrite(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, file);
}
function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { if (fallback !== undefined) return fallback; throw e; }
}

// ---------- Writer lock (ownership-safe — chi tiết trong lib/lock.js) ----------
// Đường đọc KHÔNG mutate: lock stale KHÔNG bị xóa ở đây, chỉ được reclaim
// theo contract bên trong lock.acquire().
function lockStatus() { return lock.status(STATE_DIR); }
// Lock "sống" (chưa quá TTL) — null khi trống hoặc stale.
function activeLock() {
  const st = lockStatus();
  return st.lock && !st.expired ? st.lock : null;
}

// ---------- State + checkpoint ----------
function loadState() {
  return readJson(STATE_FILE, { version: 1, slots: [], lastAction: null });
}
function saveState(state, action) {
  state.lastAction = { action, at: new Date().toISOString() };
  atomicWrite(STATE_FILE, JSON.stringify(state, null, 1));
  // Checkpoint ghi số slot của MA TRẬN chủ đề (factory-state.slots không dùng
  // để đếm — theo docs: "checkpoint khớp số slot ma trận").
  let slotCount = (state.slots || []).length;
  try { slotCount = loadMatrix().slots.length; } catch (e) { /* ma trận chưa có — giữ giá trị dự phòng */ }
  checkpoint({ at: new Date().toISOString(), action, slotCount });
}
function checkpoint(data) {
  atomicWrite(CHECKPOINT_FILE, JSON.stringify(data, null, 1));
}

// ---------- Ma trận chủ đề (capacity là cấu hình trong state/matrix.json) ----------
function loadMatrix() {
  const m = readJson(MATRIX_FILE, null);
  if (!m) {
    console.error('Chưa có ma trận chủ đề — hãy tạo factory/state/matrix.json.');
    process.exit(1);
  }
  return m;
}
function saveMatrix(m) { atomicWrite(MATRIX_FILE, JSON.stringify(m, null, 1)); }

// ID slot: S + số thứ tự, zero-padding TỐI THIỂU 5 chữ số — số lớn hơn tự dài
// thêm (S10000, S100000...) và không bao giờ bị cắt bớt. ID sinh từ số lớn
// nhất đang có + 1 nên monotonic và không tái sử dụng ID đã dùng.
function parseSlotId(id) {
  const mm = /^S(\d{5,})$/.exec(String(id || ''));
  return mm ? Number(mm[1]) : null;
}
function formatSlotId(n) { return 'S' + String(n).padStart(5, '0'); }
function maxSlotNumber(m) {
  let max = 0;
  for (const s of m.slots) {
    const n = parseSlotId(s.id);
    if (n !== null && n > max) max = n;
  }
  return max;
}
function nextSlotId(m) { return formatSlotId(maxSlotNumber(m) + 1); }
function slotId(m) { return nextSlotId(m); }

// Intent chuẩn: <type>/<slug-chữ-thường> (ví dụ informational/thue-xe-may).
// Rỗng / khoảng trắng / format lạ -> throw: không bao giờ âm thầm tạo intent rỗng.
const INTENT_RE = /^[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)+$/;
function normalizeIntent(intent, slug) {
  const raw = String(intent == null ? '' : intent).trim();
  if (!raw) throw new Error('primaryIntent rỗng cho slot ' + slug + ' — intent bắt buộc (mặc định informational/<slug>)');
  if (/\s/.test(raw)) throw new Error('primaryIntent chứa khoảng trắng: "' + raw + '"');
  if (!INTENT_RE.test(raw)) throw new Error('primaryIntent sai format (type/slug chữ thường, gạch nối): ' + raw);
  return raw;
}
function planSlot(m, { hub, slug, title, intent, notes }) {
  if (m.slots.length + 1 > m.capacity) throw new Error('Vượt sức chứa ma trận ' + m.capacity);
  const dup = m.slots.find(s => s.slug === slug);
  if (dup) throw new Error(`Slot trùng slug: ${slug} (state ${dup.state})`);
  m.slots.push({
    id: slotId(m), hub, slug, title, primaryIntent: normalizeIntent(intent, slug), notes: notes || '',
    state: 'PLANNED', qaScore: null, attempts: 0,
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
  });
}

function transition(m, sid, to, extra) {
  const slot = m.slots.find(s => s.id === sid);
  if (!slot) throw new Error('Không tìm thấy slot ' + sid);
  const allowed = TRANSITIONS[slot.state] || [];
  if (!allowed.includes(to)) throw new Error(`Chuyển trạng thái không hợp lệ: ${slot.state} → ${to} (slot ${sid})`);
  slot.state = to;
  slot.updatedAt = new Date().toISOString();
  Object.assign(slot, extra || {});
}

// ---------- Capacity cấu hình + migration an toàn ----------
const VALID_SLOT_STATES = Object.keys(TRANSITIONS);

// Kiểm định ma trận — mọi validation capacity/ID đều đọc từ matrix.json
// (canonical source-of-truth), KHÔNG hardcode con số trong code.
function validateMatrix(m) {
  if (!m || !Array.isArray(m.slots)) throw new Error('Ma trận không hợp lệ');
  if (!Number.isInteger(m.capacity) || m.capacity <= 0) throw new Error('capacity phải là số nguyên dương (đọc từ matrix.json)');
  if (!Number.isInteger(m.plannedTarget) || m.plannedTarget <= 0) throw new Error('plannedTarget phải là số nguyên dương');
  if (m.plannedTarget > m.capacity) throw new Error(`plannedTarget (${m.plannedTarget}) vượt capacity (${m.capacity})`);
  if (m.slots.length > m.capacity) throw new Error(`Số slot (${m.slots.length}) vượt capacity (${m.capacity})`);
  const ids = new Set();
  const slugs = new Set();
  let lastNum = 0;
  for (const s of m.slots) {
    const n = parseSlotId(s.id);
    if (n === null) throw new Error('ID slot không hợp lệ: ' + s.id);
    if (n <= lastNum) throw new Error('ID slot không monotonic (trùng/lùi số): ' + s.id);
    lastNum = n;
    if (ids.has(s.id)) throw new Error('Trùng ID slot: ' + s.id);
    ids.add(s.id);
    if (!s.slug) throw new Error('Slot thiếu slug: ' + s.id);
    if (slugs.has(s.slug)) throw new Error('Trùng slug trong ma trận: ' + s.slug);
    slugs.add(s.slug);
    if (!VALID_SLOT_STATES.includes(s.state)) throw new Error('Trạng thái slot không hợp lệ: ' + s.state + ' (' + s.id + ')');
  }
  if (m.reserved) {
    if (!Number.isInteger(m.reserved.total) || m.reserved.total < 0) throw new Error('reserved.total phải là số nguyên >= 0');
    const poolSum = Object.entries(m.reserved).filter(([k]) => k !== 'total').reduce((acc, [, v]) => acc + v, 0);
    if (poolSum !== m.reserved.total) throw new Error(`Tổng pool dự phòng (${poolSum}) lệch reserved.total (${m.reserved.total})`);
    if (m.plannedTarget + m.reserved.total > m.capacity) {
      throw new Error(`plannedTarget (${m.plannedTarget}) + reserved (${m.reserved.total}) vượt capacity (${m.capacity})`);
    }
  }
  return true;
}

function parsePositiveInt(v) {
  const s = String(v === undefined || v === null ? '' : v).trim();
  if (!/^\d+$/.test(s)) return null;
  const n = Number(s);
  return Number.isSafeInteger(n) && n > 0 ? n : null;
}

// Kiểm tra yêu cầu mở rộng — THUẦN (không IO, không mutate). Trả null nếu hợp lệ.
function expansionError(m, newCapacity) {
  const n = parsePositiveInt(newCapacity);
  if (n === null) return 'NEW_CAPACITY phải là số nguyên dương (ví dụ: expand-capacity 20000)';
  if (n <= m.capacity) return `Từ chối: NEW_CAPACITY (${n}) phải LỚN HƠN capacity hiện tại (${m.capacity}) — không hỗ trợ shrink hay cùng mức`;
  const reservedTotal = m.reserved ? m.reserved.total : 0;
  if (m.plannedTarget + reservedTotal > n) {
    return `Từ chối: plannedTarget (${m.plannedTarget}) + reserved (${reservedTotal}) vượt NEW_CAPACITY (${n})`;
  }
  return null;
}

// Áp dụng mở rộng — CHỈ đổi con số logical capacity. Slots, ID, plannedTarget,
// reserved giữ nguyên; KHÔNG preallocate slot object (engine chỉ instantiate
// khi plan — tăng capacity không sinh sẵn hàng nghìn slot rỗng).
function applyExpansion(m, newCapacity) {
  const err = expansionError(m, newCapacity);
  if (err) throw new Error(err);
  m.capacity = parsePositiveInt(newCapacity);
  return m;
}

// Kiểm tra yêu cầu đổi plannedTarget — THUẦN. Trả null nếu hợp lệ.
function plannedTargetError(m, nRaw) {
  const n = parsePositiveInt(nRaw);
  if (n === null) return 'N phải là số nguyên dương (ví dụ: set-planned-target 8000)';
  if (n > m.capacity) return `Từ chối: N (${n}) vượt capacity (${m.capacity}) — mở rộng capacity trước bằng expand-capacity`;
  if (n < m.slots.length) return `Từ chối: không giảm plannedTarget (${n}) xuống dưới số slot đã tồn tại (${m.slots.length})`;
  const reservedTotal = m.reserved ? m.reserved.total : 0;
  if (n + reservedTotal > m.capacity) {
    return `Từ chối: N (${n}) + reserved (${reservedTotal}) vượt capacity (${m.capacity}) — điều chỉnh pool dự phòng trước theo lệnh của chủ repo`;
  }
  return null;
}

// ---------- QA ----------
// FAIL LOUD + DETERMINISTIC: nạp TOÀN BỘ module bài trước khi trả về một bài —
// module lỗi bất kỳ nào cũng làm cả xưởng dừng (in tên file + exit khác 0),
// không phụ thuộc thứ tự readdirSync hay slot nào đang được hỏi.
let _articlesBySlugCache = null;
function loadAllArticlesBySlug() {
  if (!_articlesBySlugCache) {
    const dir = path.join(__dirname, 'data', 'articles');
    const map = new Map();
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (!f.endsWith('.js')) continue;
        let a;
        try {
          a = require(path.join(dir, f));
        } catch (e) {
          e.message = 'Không nạp được module bài factory/data/articles/' + f + ' — ' + (e && e.message ? e.message : e);
          throw e;
        }
        map.set(a.slug, { ...a, path: a.hub ? `${a.category}/${a.hub}/${a.slug}/` : `${a.category}/${a.slug}/` });
      }
    }
    _articlesBySlugCache = map;
  }
  return _articlesBySlugCache;
}
function loadArticleBySlug(slug) {
  return loadAllArticlesBySlug().get(slug) || null;
}

// QA ctx cho MINIMAL GATE (scoped, deterministic): knownIds/knownSlugs lấy từ
// ma trận, ĐÃ LỌC entry self — bài đang QA không tự bị coi là trùng chính nó.
function buildQaCtx(m, opts) {
  const o = opts || {};
  const knownIds = new Map();
  const knownSlugs = new Set();
  for (const s of m.slots) {
    if (o.excludeSlug && s.slug === o.excludeSlug) continue;
    knownIds.set(s.id, s.slug);
    knownSlugs.add(s.slug);
  }
  const slot = o.slot || null;
  return {
    knownIds, knownSlugs,
    slotId: slot ? slot.id : null,
    slot: slot ? { id: slot.id, hub: slot.hub, slug: slot.slug } : null,
  };
}

function runQa(m, sid) {
  const slot = m.slots.find(s => s.id === sid);
  const { qaArticle } = require('./qa');
  const article = loadArticleBySlug(slot.slug);
  if (!article) throw new Error('Chưa có nội dung bài cho slot ' + sid + ' — hãy viết trước (lệnh write).');
  const result = qaArticle(article, buildQaCtx(m, { excludeSlug: slot.slug, slot }));
  slot.attempts = (slot.attempts || 0) + 1;
  console.log(`QA ${sid} (${slot.slug}): điểm ${result.score}/100 — ${result.pass ? 'ĐẠT' : 'KHÔNG ĐẠT'} (minimal gate, ngưỡng ${runtime.QA_PASS_MIN})`);
  for (const c of result.checks.filter(x => !x.pass)) console.log(`  - [${c.critical ? 'CRITICAL' : 'WARNING'}] ${c.name} ${c.note}`);
  slot.qaScore = result.score;
  slot.words = result.words;
  if (result.pass) {
    if (['QA', 'WRITING', 'REPAIR'].includes(slot.state)) {
      slot.state = 'PASS';
      slot.updatedAt = new Date().toISOString();
    }
  } else {
    slot.attempts >= 2
      ? (slot.state = 'BLOCKED', console.log(`  → BLOCKED (đã thử ${slot.attempts} lần). Cần người rà soát.`))
      : (slot.state = 'REPAIR', console.log('  → REPAIR: sửa bài rồi chạy lại qa.'));
  }
  return result;
}

// ---------- Publish theo ID (selective + atomic) ----------
// Chỉ nhận ID tường minh — KHÔNG sweep mọi slot PASS, KHÔNG cờ --.
// Giới hạn chunk lấy từ factory-runtime (canonical, single source).
const PUBLISH_CHUNK_LIMIT = runtime.PUBLISH_CHUNK_LIMIT;

// Thuần (không IO): trả { ids } nếu yêu cầu hợp lệ, ném Error tiếng Việt nếu không.
// Quy tắc: cú pháp duy nhất `publish <ID> [<ID>...]`; slot đã PUBLISHED được bỏ qua
// (idempotent khi resume); slot phải tồn tại và đang PASS; không trùng ID; tối đa
// PUBLISH_CHUNK_LIMIT ID mỗi lệnh; không chấp nhận cờ `--`.
function parsePublishRequest(m, args) {
  const ids = String(args || '').split(/\s+/).filter(Boolean);
  if (!ids.length) {
    throw new Error('publish cần ID tường minh: publish <ID> [<ID>...] — KHÔNG hỗ trợ publish-all');
  }
  for (const a of ids) {
    if (!/^S\d{5,}$/.test(a)) throw new Error('Đối số không hợp lệ: "' + a + '" — chỉ nhận ID slot (S00001...), không nhận cờ --');
  }
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) throw new Error('ID bị lặp trong yêu cầu publish: ' + id);
    seen.add(id);
  }
  if (ids.length > PUBLISH_CHUNK_LIMIT) {
    throw new Error('Quá ' + PUBLISH_CHUNK_LIMIT + ' ID mỗi lệnh publish (nhận ' + ids.length + ') — chia nhỏ chunk');
  }
  const out = [];
  for (const id of ids) {
    const s = m.slots.find(x => x.id === id);
    if (!s) throw new Error('Không tìm thấy slot ' + id + ' trong ma trận');
    if (s.state === 'PUBLISHED') continue; // đã publish — bỏ qua (resume an toàn)
    if (s.state !== 'PASS') {
      throw new Error('Slot ' + id + ' đang ' + s.state + ' — chỉ publish slot PASS; slot khác giữ nguyên để resume');
    }
    out.push(id);
  }
  if (!out.length) throw new Error('Không còn slot nào cần publish — mọi ID đã PUBLISHED từ trước');
  return { ids: out };
}

// ---------- Publish: sinh lại site + indexes + test ----------
// slugs: bài đang được publish trong lệnh này (slot trên đĩa có thể còn PASS/
// PLANNED) — truyền qua FACTORY_GEN_INCLUDE để generate render chúng; mọi
// draft khác (REPAIR/...) KHÔNG lên site.
function publishAll(slugs) {
  const prev = process.env.FACTORY_GEN_INCLUDE;
  if (Array.isArray(slugs) && slugs.length) process.env.FACTORY_GEN_INCLUDE = slugs.join(',');
  try {
    execFileSync(process.execPath, [path.join(__dirname, 'generate.js')], { stdio: 'inherit' });
    execFileSync(process.execPath, [path.join(__dirname, 'test.js')], { stdio: 'inherit' });
  } finally {
    if (prev === undefined) delete process.env.FACTORY_GEN_INCLUDE;
    else process.env.FACTORY_GEN_INCLUDE = prev;
  }
}

// ---------- Continuous backlog drain (DEFECT B hardening) ----------
// MỘT vòng drain của production run (workflow gọi lặp tới done=true):
//   READ STATE -> acquire lock (ownership-safe) -> tìm backlog claimable
//   -> chọn chunk <= 10 ID (resume trước, claim sau) -> QA từng slot
//   -> publish explicit IDs (atomic) -> thả lock CỦA MÌNH -> NO-PROGRESS
//   sentinel. KHÔNG dựa vào self-trigger của bot commit; KHÔNG sweep PASS.
// Trả exit code (0 = vòng sạch; done=true nghĩa là backlog đã drain hết).
// ---------- SIMPLE PRODUCTION MODE (pair hot path — exact push scope) ----------
// PAIR_SIZE = 2 (canonical trong factory-runtime). HOT PATH chỉ: 1-2 ID tường
// minh -> scoped QA+SEO -> generate -> verify-pair (nhẹ) -> lật đúng rows ->
// save atomic. KHÔNG audit toàn site, KHÔNG test.js trong từng pair; heavy gate
// chạy ở deep audit (engine change / dispatch / mốc 100 bài).
function loadTxn() { return readJson(TXN_FILE, null); }
function writeTxn(t) { atomicWrite(TXN_FILE, JSON.stringify(t, null, 1)); }
function clearTxn() { try { fs.unlinkSync(TXN_FILE); } catch (_) { /* chưa có */ } }

// RECOVERY txn crash — idempotent, fail-closed: mọi ID đã PUBLISHED -> complete
// (xóa marker); ngược lại -> rollback (matrix chỉ ghi SAU mọi cổng nên marker
// sót nghĩa là chưa từng ghi). Trả null khi không có marker.
function recoverTxn(m) {
  const t = loadTxn();
  if (!t || !Array.isArray(t.ids)) return null;
  const states = t.ids.map((id) => { const s = m.slots.find((x) => x.id === id); return s ? s.state : 'MISSING'; });
  const done = states.every((st) => st === 'PUBLISHED');
  clearTxn();
  return { txn: t, outcome: done ? 'completed' : 'rolled-back' };
}

// Scoped QA + SEO một slot (đúng module của slot, KHÔNG scan toàn site).
// QA = MINIMAL GATE (chặn); SEO = ADVISORY (không chặn — chỉ ghi điểm).
function qaSeoArticle(slot) {
  const article = loadArticleBySlug(slot.slug);
  if (!article) throw new Error('Chưa có module bài cho slot ' + slot.id + ' (' + slot.slug + ') — WAITING_FOR_WRITER');
  const { qaArticle } = require('./qa');
  const { seoArticle } = require('./seo');
  const m = loadMatrix();
  const qa = qaArticle(article, buildQaCtx(m, { excludeSlug: slot.slug, slot }));
  const seo = seoArticle(article, { knownSlugs: new Set(loadAllArticlesBySlug().keys()) });
  return { article, qa, seo };
}

// Cannibalization scoped: intent của từng ID phải rỗng-không-bị, đúng format,
// và KHÔNG trùng intent của slot khác trong ma trận.
function intentConflicts(m, ids) {
  const errs = [];
  const others = m.slots.filter((s) => !ids.includes(s.id));
  for (const id of ids) {
    const s = m.slots.find((x) => x.id === id);
    if (!s) { errs.push('không tìm thấy slot ' + id); continue; }
    const v = String(s.primaryIntent || '').trim();
    if (!v) errs.push('Slot ' + id + ' primaryIntent RỖNG — intent bắt buộc (cannibalization guard)');
    else if (!INTENT_RE.test(v)) errs.push('Slot ' + id + ' primaryIntent sai format: ' + v);
    else if (others.some((o) => String(o.primaryIntent || '').trim() === v)) {
      errs.push('Slot ' + id + ' trùng primaryIntent với slot khác (' + v + ') — cannibalization');
    }
  }
  return errs;
}

// VERIFY-PAIR (nhẹ, deterministic): đúng IDs — source + QA MINIMAL GATE
// (>= 70, critical override) + trang sinh tồn tại + canonical/schema/H1 +
// sitemap entry + không ký tự rác + checkpoint/lock/txn sạch. SEO + intent
// chỉ ADVISORY (in ra, KHÔNG chặn).
function verifyPair(m, ids, opts) {
  const errors = [];
  const requirePublished = !opts || opts.requirePublished !== false;
  const checkLock = !opts || opts.checkLock !== false;
  const root = path.join(__dirname, '..');
  const { SITE } = require('./site.config');
  const cp = readJson(CHECKPOINT_FILE, {}) || {};
  if (cp.slotCount !== m.slots.length) {
    errors.push('checkpoint.slotCount (' + cp.slotCount + ') != matrix.slots.length (' + m.slots.length + ')');
  }
  if (checkLock && fs.existsSync(LOCK_FILE)) errors.push('writer lock còn tồn tại — không verify OK khi lock chưa giải phóng');
  if (checkLock && fs.existsSync(TXN_FILE)) errors.push('txn marker còn sót — recover trước khi verify');
  let sm = '';
  try { sm = fs.readFileSync(path.join(root, 'sitemap-articles.xml'), 'utf8'); }
  catch (e) { errors.push('không đọc được sitemap-articles.xml — ' + e.message); }
  const GARBAGE = /[\u4e00-\u9fff\u0400-\u04ff\u3040-\u30ff\uac00-\ud7ff]/;
  for (const id of ids) {
    const s = m.slots.find((x) => x.id === id);
    if (!s) { errors.push('không tìm thấy slot ' + id); continue; }
    if (requirePublished && s.state !== 'PUBLISHED') errors.push('Slot ' + id + ' đang ' + s.state + ' — phải PUBLISHED');
    let res;
    try { res = qaSeoArticle(s); } catch (e) { errors.push('Slot ' + id + ': ' + e.message); continue; }
    if (!res.qa.pass) errors.push('Slot ' + id + ' QA ' + res.qa.score + '/100 — FAIL minimal gate (<70 hoặc critical)');
    if (!res.seo.pass) console.log('SEO_ADVISORY ' + id + ' — SEO ' + res.seo.score + '/100 (KHÔNG chặn publish)');
    for (const e of intentConflicts(m, [id])) console.log('INTENT_WARNING ' + id + ' — ' + e + ' (KHÔNG chặn publish)');
    const url = SITE.baseUrl + s.hub + '/' + s.slug + '/';
    let html = '';
    try { html = fs.readFileSync(path.join(root, s.hub, s.slug, 'index.html'), 'utf8'); }
    catch (e) { errors.push('Slot ' + id + ' KHÔNG có trang sinh (' + s.hub + '/' + s.slug + '/index.html)'); continue; }
    if (!/rel=["']canonical["']/.test(html) || !html.includes(url)) errors.push('Slot ' + id + ' canonical thiếu/sai (kỳ ' + url + ')');
    if (!(/["']?@type["']?:\s*["']Article["']/.test(html))) errors.push('Slot ' + id + ' thiếu JSON-LD @type Article');
    if (!html.includes('datePublished')) errors.push('Slot ' + id + ' thiếu datePublished trong schema');
    const h1n = (html.match(/<h1[\s>]/g) || []).length;
    if (h1n !== 1) errors.push('Slot ' + id + ' phải có đúng 1 thẻ H1 (có ' + h1n + ')');
    if (!sm.includes(url)) errors.push('Slot ' + id + ' KHÔNG nằm trong sitemap-articles');
    if (GARBAGE.test(html)) errors.push('Slot ' + id + ' trang sinh chứa ký tự rác');
  }
  return { ok: errors.length === 0, errors };
}

// VERIFY-SOURCES (read-only, chạy được TRƯỚC publish — writer commit): scoped
// QA + SEO + intent cho đúng IDs, không đòi trang sinh.
function verifySources(m, ids) {
  const errors = [];
  for (const id of ids) {
    const s = m.slots.find((x) => x.id === id);
    if (!s) { errors.push('không tìm thấy slot ' + id); continue; }
    let res;
    try { res = qaSeoArticle(s); } catch (e) { errors.push('Slot ' + id + ': ' + e.message); continue; }
    if (!res.qa.pass) errors.push('Slot ' + id + ' (QA ' + res.qa.score + '/100): ' + res.qa.checks.filter((x) => !x.pass).map((x) => x.name).join('; '));
    if (!res.seo.pass) console.log('SEO_ADVISORY ' + id + ' — SEO ' + res.seo.score + '/100 (KHÔNG chặn publish)');
    for (const e of intentConflicts(m, [id])) console.log('INTENT_WARNING ' + id + ' — ' + e + ' (KHÔNG chặn publish)');
  }
  return { ok: errors.length === 0, errors };
}

function parsePairIds(args) {
  const ids = String(args || '').split(/[\s,]+/).filter(Boolean);
  if (!ids.length) throw new Error('publish-pair / verify-pair cần 1-' + runtime.PAIR_SIZE + ' ID tường minh (S00055,S00056)');
  const seen = new Set();
  for (const id of ids) {
    if (!/^S\d{5,}$/.test(id)) throw new Error('ID không hợp lệ: ' + id);
    if (seen.has(id)) throw new Error('ID lặp trong pair: ' + id);
    seen.add(id);
  }
  if (ids.length > runtime.PAIR_SIZE) throw new Error('Quá ' + runtime.PAIR_SIZE + ' ID mỗi transaction (nhận ' + ids.length + ') — chia pair');
  return ids;
}

function parseBatchIds(args) {
  const ids = String(args || '').split(/[\s,]+/).filter(Boolean);
  if (!ids.length) throw new Error('batch cần 1-' + runtime.PUBLISH_CHUNK_LIMIT + ' ID tường minh');
  const seen = new Set();
  for (const id of ids) {
    if (!/^S\d{5,}$/.test(id)) throw new Error('ID không hợp lệ: ' + id);
    if (seen.has(id)) throw new Error('ID lặp trong batch: ' + id);
    seen.add(id);
  }
  if (ids.length > runtime.PUBLISH_CHUNK_LIMIT) {
    throw new Error('Quá ' + runtime.PUBLISH_CHUNK_LIMIT + ' ID mỗi batch (nhận ' + ids.length + ')');
  }
  return ids;
}

// PUBLISH-PAIR — transaction đúng 1-2 ID: VALIDATE -> LOCK -> scoped QA
// (MINIMAL GATE) -> FAIL vào REPAIR QUEUE (KHÔNG giữ pair), PASS publish ->
// BEGIN TXN -> generate -> verify-pair -> lật đúng rows -> save atomic ->
// COMMIT (xóa txn) -> thả lock. SEO/intent chỉ ADVISORY (stdout, không chặn).
// Fail hạ tầng bất kỳ bước nào: KHÔNG ghi state (resumable).
function publishPair(ids, opts) {
  const o = opts || {};
  const t0 = Date.now();
  const spawn = o.spawn || ((file, args) => execFileSync(process.execPath, [file].concat(args || []), { stdio: 'inherit' }));
  let m = loadMatrix();
  validateMatrix(m);
  const rec = recoverTxn(m);
  if (rec) console.log('TXN_RECOVER ' + rec.outcome + ' (ids ' + (rec.txn.ids || []).join(',') + ')');
  m = loadMatrix();
  validateMatrix(m);
  for (const id of ids) {
    const s = m.slots.find((x) => x.id === id);
    if (!s) throw new Error('Không tìm thấy slot ' + id);
    if (s.state === 'BLOCKED') throw new Error('Slot ' + id + ' BLOCKED — cần người rà, KHÔNG tự publish');
    if (!runtime.CLAIMABLE_STATES.includes(s.state) && s.state !== 'PUBLISHED') {
      throw new Error('Slot ' + id + ' đang ' + s.state + ' — không publish được');
    }
  }
  const pending = ids.filter((id) => m.slots.find((x) => x.id === id).state !== 'PUBLISHED');
  // REPAIR: mọi ID đã PUBLISHED (writer sửa bài đã xuất bản) -> chấm lại
  // QA/SEO + sinh lại trang + cập nhật điểm cho ĐÚNG IDs, KHÔNG đụng slot khác.
  const isRepair = pending.length === 0;
  const work = isRepair ? ids.slice() : pending;
  if (isRepair) console.log('PAIR_REPAIR: mọi ID đã PUBLISHED — chấm lại QA/SEO + sinh lại trang (repair scope).');
  const owner = o.owner || 'ci-publisher';
  const record = lock.acquire(STATE_DIR, owner);
  if (o.tokenFile) atomicWrite(o.tokenFile, record.token);
  let committed = false;
  try {
    m = loadMatrix();
    validateMatrix(m);
    const tQa = Date.now();
    const results = [];
    for (const id of work) {
      const s = m.slots.find((x) => x.id === id);
      const res = qaSeoArticle(s);
      results.push({ s, res });
      console.log('QA+SEO ' + id + ' (' + s.slug + '): QA ' + res.qa.score + '/100 ' + (res.qa.pass ? 'ĐẠT' : 'TRƯỢT') + ' | SEO ' + res.seo.score + '/100 (advisory)');
    }
    const qaTime = Date.now() - tQa;
    // ADVISORY (stdout, KHÔNG chặn): intent + SEO.
    for (const e of intentConflicts(m, pending)) console.log('PAIR_ADVISORY: ' + e + ' (KHÔNG chặn publish)');
    for (const r of results) {
      if (!r.res.seo.pass) console.log('PAIR_ADVISORY: ' + r.s.id + ' — SEO ' + r.res.seo.score + '/100 dưới 70 (advisory, KHÔNG chặn publish)');
    }
    // MINIMAL GATE: FAIL -> REPAIR QUEUE (không giữ pair); PASS -> publish.
    const failedResults = results.filter((r) => !r.res.qa.pass);
    for (const r of failedResults) {
      console.log('PAIR_REJECT: ' + r.s.id + ' (' + r.s.slug + ') — QA ' + r.res.qa.score + '/100 FAIL minimal gate -> REPAIR queue' +
        (r.res.qa.criticals.length ? ' (critical: ' + r.res.qa.criticals.join('; ') + ')' : ' (điểm < 70)'));
    }
    const okResults = results.filter((r) => r.res.qa.pass);
    // Đánh dấu repair queue cho slot FAIL (lưu cùng transaction — resumable).
    for (const r of failedResults) {
      r.s.state = 'REPAIR';
      r.s.qaScore = r.res.qa.score;
      r.s.attempts = (r.s.attempts || 0) + 1;
      r.s.updatedAt = new Date().toISOString();
    }
    const publishable = okResults.map((r) => r.s.id);
    if (!publishable.length) {
      // Mọi slot FAIL -> toàn bộ vào repair queue, KHÔNG publish gì. Ghi state
      // repair (trong lock) rồi thoát sạch — bài sửa xong sẽ publish ở pair sau.
      validateMatrix(m);
      saveMatrix(m);
      saveState(loadState(), 'publish-pair:repair-queue:' + work.join(','));
      console.log('PAIR_RESULT ok=repair-queue ids= (repaired=' + work.join(',') + ') qa_time=' + qaTime + 'ms total=' + (Date.now() - t0) + 'ms');
      committed = true;
      return;
    }
    const publishWork = publishable;
    writeTxn({ ids: publishWork, phase: isRepair ? 'repairing' : 'publishing', at: new Date().toISOString(), owner });
    const tGen = Date.now();
    // Chỉ render bài PUBLISHED + đúng scope đang publish — bài FAIL (repair
    // queue) KHÔNG được lên site/sitemap trong lần generate này.
    const prevInc = process.env.FACTORY_GEN_INCLUDE;
    process.env.FACTORY_GEN_INCLUDE = publishWork.map(id => (m.slots.find(x => x.id === id) || {}).slug).filter(Boolean).join(',');
    try {
      spawn(path.join(__dirname, 'generate.js'), []);
    } finally {
      if (prevInc === undefined) delete process.env.FACTORY_GEN_INCLUDE;
      else process.env.FACTORY_GEN_INCLUDE = prevInc;
    }
    const genTime = Date.now() - tGen;
    // FAIL-CLOSED 404 GATE: chỉ quét các trang vừa sinh của scope này,
    // nhưng resolve mọi href nội bộ tới file thật trên cây production.
    // Không quét lại 20k trang mỗi batch; link sai của bài mới vẫn bị chặn
    // TRƯỚC khi matrix lật PUBLISHED.
    const tLink = Date.now();
    const li = linkIntegrity.checkScopeIds(publishWork, path.join(__dirname, '..'));
    if (!li.ok) {
      for (const e of li.errors) console.error('LINK_404_FAIL: ' + e);
      throw new Error('link-integrity không đạt — KHÔNG ghi state.');
    }
    console.log('LINK_INTEGRITY_OK ids=' + publishWork.join(',') + ' checked=' + li.checkedLinks);
    const linkTime = Date.now() - tLink;
    const tVer = Date.now();
    const v = verifyPair(m, publishWork, { requirePublished: isRepair, checkLock: false });
    const verTime = Date.now() - tVer;
    if (!v.ok) { for (const e of v.errors) console.error('VERIFY_PAIR_FAIL: ' + e); throw new Error('verify-pair không đạt — KHÔNG ghi state.'); }
    for (const id of publishWork) {
      const s = m.slots.find((x) => x.id === id);
      const res = results.find((r) => r.s.id === id).res;
      s.state = 'PUBLISHED';
      s.qaScore = res.qa.score;
      s.seoScore = res.seo.score;
      s.words = res.qa.words;
      s.attempts = (s.attempts || 0) + 1;
      s.updatedAt = new Date().toISOString();
    }
    validateMatrix(m);
    saveMatrix(m);
    saveState(loadState(), 'publish-pair:' + publishWork.join(','));
    clearTxn();
    committed = true;
    console.log('PAIR_RESULT ok=' + (isRepair ? 'republished' : 'published') + ' ids=' + publishWork.join(',') +
      (failedResults.length ? ' repaired=' + failedResults.map((r) => r.s.id).join(',') : '') +
      ' qa_time=' + qaTime + 'ms generate_time=' + genTime + 'ms link_time=' + linkTime + 'ms verify_time=' + verTime + 'ms total=' + (Date.now() - t0) + 'ms');
  } finally {
    try { lock.release(STATE_DIR, record); }
    catch (e) { console.error('LỖI giải phóng lock (có thể bị reclaim): ' + e.message); }
    if (!committed && fs.existsSync(TXN_FILE)) clearTxn();
    if (o.tokenFile) { try { fs.unlinkSync(o.tokenFile); } catch (_) { /* đã xóa */ } }
  }
}

// ---------- PRODUCTION CYCLE (12-18 bài, 3 writer) ----------
// parseCycleIds: 1-CYCLE_MAX ID tường minh, unique, đúng format S-format.
function parseCycleIds(args) {
  const ids = String(args || '').split(/[\s,]+/).filter(Boolean);
  if (!ids.length) throw new Error('cycle-qa/cycle-publish cần 1-' + runtime.CYCLE_MAX + ' ID tường minh (S00055,S00056,...)');
  const seen = new Set();
  for (const id of ids) {
    if (!/^S\d{5,}$/.test(id)) throw new Error('ID không hợp lệ: ' + id);
    if (seen.has(id)) throw new Error('ID lặp trong cycle: ' + id);
    seen.add(id);
  }
  if (ids.length > runtime.CYCLE_MAX) throw new Error('Quá ' + runtime.CYCLE_MAX + ' ID mỗi cycle (nhận ' + ids.length + ')');
  return ids;
}

// CYCLE-QA: scoped minimal QA CHỈ bài mới của cycle hiện tại — KHÔNG bao giờ
// quét lại toàn site, KHÔNG re-audit bài đã PUBLISHED. FAIL -> REPAIR queue
// (một bài FAIL KHÔNG giữ cycle); PASS -> state PASS để coordinator publish.
function cycleQa(m, ids) {
  const passed = [], failed = [], pending = [];
  const { qaArticle } = require('./qa');
  for (const id of ids) {
    const s = m.slots.find(x => x.id === id);
    if (!s) throw new Error('Không tìm thấy slot ' + id);
    if (s.state === 'PUBLISHED') {
      console.log('CYCLE_QA_SKIP ' + id + ' (' + s.slug + ') đã PUBLISHED — không re-audit bài đã xuất bản');
      continue;
    }
    const article = loadArticleBySlug(s.slug);
    if (!article) {
      pending.push(id);
      console.log('CYCLE_QA_PENDING ' + id + ' (' + s.slug + ') chưa có module bài — writer chưa nộp (KHÔNG giữ cycle)');
      continue;
    }
    const result = qaArticle(article, buildQaCtx(m, { excludeSlug: s.slug, slot: s }));
    s.attempts = (s.attempts || 0) + 1;
    s.qaScore = result.score;
    s.words = result.words;
    console.log('QA ' + id + ' (' + s.slug + '): ' + result.score + '/100 — ' + (result.pass ? 'ĐẠT' : 'TRƯỢT') + ' (minimal gate ' + runtime.QA_PASS_MIN + ', scoped cycle)');
    for (const c of result.checks.filter(x => !x.pass)) console.log('  - [' + (c.critical ? 'CRITICAL' : 'WARNING') + '] ' + c.name + ' ' + c.note);
    s.updatedAt = new Date().toISOString();
    if (result.pass) { s.state = 'PASS'; passed.push(id); }
    else { s.state = 'REPAIR'; failed.push(id); console.log('  → REPAIR queue (điểm < 70 hoặc critical) — KHÔNG giữ cycle'); }
  }
  return { passed, failed, pending };
}

// CYCLE-PUBLISH: coordinator duy nhất merge + build/deploy ĐÚNG 1 LẦN cho cả
// cycle. Chỉ publish slot PASS; slot FAIL đã ở REPAIR queue được DEFER (không
// giữ cycle). Txn atomic + resumable như publish-pair nhưng N <= CYCLE_MAX ID.
function cyclePublish(ids, opts) {
  const o = opts || {};
  const t0 = Date.now();
  const spawn = o.spawn || ((file, args) => execFileSync(process.execPath, [file].concat(args || []), { stdio: 'inherit' }));
  let m = loadMatrix();
  validateMatrix(m);
  const rec = recoverTxn(m);
  if (rec) console.log('TXN_RECOVER ' + rec.outcome + ' (ids ' + (rec.txn.ids || []).join(',') + ')');
  m = loadMatrix();
  validateMatrix(m);
  for (const id of ids) {
    const s = m.slots.find((x) => x.id === id);
    if (!s) throw new Error('Không tìm thấy slot ' + id);
    if (s.state === 'BLOCKED') throw new Error('Slot ' + id + ' BLOCKED — cần người rà, KHÔNG tự publish');
    if (!runtime.CLAIMABLE_STATES.includes(s.state) && s.state !== 'PUBLISHED') {
      throw new Error('Slot ' + id + ' đang ' + s.state + ' — không publish được');
    }
  }
  const work = ids.filter((id) => m.slots.find((x) => x.id === id).state !== 'PUBLISHED');
  if (!work.length) {
    // IDLE: mọi ID đã PUBLISHED (thường do factory-publish đã publish khi
    // writer push bài) — KHÔNG đụng state, KHÔNG double-publish, exit sạch.
    console.log('CYCLE_PUBLISH idle: mọi ID đã PUBLISHED — không có gì để publish (không đụng state).');
    console.log('CYCLE_RESULT ok=idle ids=' + ids.join(','));
    return;
  }
  const owner = o.owner || 'coordinator';
  const record = lock.acquire(STATE_DIR, owner);
  let committed = false;
  try {
    m = loadMatrix();
    validateMatrix(m);
    const tQa = Date.now();
    const results = [];
    for (const id of work) {
      const s = m.slots.find((x) => x.id === id);
      const res = qaSeoArticle(s);
      results.push({ s, res });
      console.log('QA+SEO ' + id + ' (' + s.slug + '): QA ' + res.qa.score + '/100 ' + (res.qa.pass ? 'ĐẠT' : 'TRƯỢT') + ' | SEO ' + res.seo.score + '/100 (advisory)');
    }
    const qaTime = Date.now() - tQa;
    for (const r of results) {
      if (!r.res.seo.pass) console.log('PAIR_ADVISORY: ' + r.s.id + ' — SEO ' + r.res.seo.score + '/100 dưới 70 (advisory, KHÔNG chặn publish)');
    }
    for (const e of intentConflicts(m, work)) console.log('PAIR_ADVISORY: ' + e + ' (KHÔNG chặn publish)');
    const failedResults = results.filter((r) => !r.res.qa.pass);
    for (const r of failedResults) {
      console.log('CYCLE_REJECT: ' + r.s.id + ' (' + r.s.slug + ') — QA ' + r.res.qa.score + '/100 FAIL minimal gate -> REPAIR queue (defer, KHÔNG giữ cycle)' +
        (r.res.qa.criticals.length ? ' (critical: ' + r.res.qa.criticals.join('; ') + ')' : ' (điểm < 70)'));
      r.s.state = 'REPAIR';
      r.s.qaScore = r.res.qa.score;
      r.s.attempts = (r.s.attempts || 0) + 1;
      r.s.updatedAt = new Date().toISOString();
    }
    const publishable = results.filter((r) => r.res.qa.pass).map((r) => r.s.id);
    if (!publishable.length) {
      validateMatrix(m);
      saveMatrix(m);
      saveState(loadState(), 'cycle-publish:repair-queue:' + work.join(','));
      console.log('CYCLE_RESULT ok=repair-queue ids= (repaired=' + work.join(',') + ') qa_time=' + qaTime + 'ms total=' + (Date.now() - t0) + 'ms');
      committed = true;
      return;
    }
    writeTxn({ ids: publishable, phase: 'publishing', at: new Date().toISOString(), owner });
    const tGen = Date.now();
    // Chỉ render bài PUBLISHED + đúng scope cycle đang publish — bài FAIL
    // (repair queue) KHÔNG được lên site/sitemap trong lần generate này.
    const prevInc = process.env.FACTORY_GEN_INCLUDE;
    process.env.FACTORY_GEN_INCLUDE = publishable.map(id => (m.slots.find(x => x.id === id) || {}).slug).filter(Boolean).join(',');
    try {
      spawn(path.join(__dirname, 'generate.js'), []); // build/deploy ĐÚNG 1 LẦN cho cả cycle
    } finally {
      if (prevInc === undefined) delete process.env.FACTORY_GEN_INCLUDE;
      else process.env.FACTORY_GEN_INCLUDE = prevInc;
    }
    const genTime = Date.now() - tGen;
    const v = verifyPair(m, publishable, { requirePublished: false, checkLock: false });
    if (!v.ok) { for (const e of v.errors) console.error('VERIFY_PAIR_FAIL: ' + e); throw new Error('verify-pair không đạt — KHÔNG ghi state.'); }
    for (const id of publishable) {
      const s = m.slots.find((x) => x.id === id);
      const res = results.find((r) => r.s.id === id).res;
      s.state = 'PUBLISHED';
      s.qaScore = res.qa.score;
      s.seoScore = res.seo.score;
      s.words = res.qa.words;
      s.attempts = (s.attempts || 0) + 1;
      s.updatedAt = new Date().toISOString();
    }
    validateMatrix(m);
    saveMatrix(m);
    saveState(loadState(), 'cycle-publish:' + publishable.join(','));
    clearTxn();
    committed = true;
    console.log('CYCLE_RESULT ok=published ids=' + publishable.join(',') +
      (failedResults.length ? ' repaired=' + failedResults.map((r) => r.s.id).join(',') : '') +
      ' generate=1 deploy=1 qa_time=' + qaTime + 'ms generate_time=' + genTime + 'ms total=' + (Date.now() - t0) + 'ms');
  } finally {
    try { lock.release(STATE_DIR, record); }
    catch (e) { console.error('LỖI giải phóng lock (có thể bị reclaim): ' + e.message); }
    if (!committed && fs.existsSync(TXN_FILE)) clearTxn();
  }
}

function drainIteration(owner, tokenFile) {
  let slugs;
  try {
    slugs = new Set(loadAllArticlesBySlug().keys()); // fail loud khi module bài lỗi
  } catch (e) {
    console.error('TỪ CHỐI drain: ' + (e && e.message ? e.message : e));
    return 1;
  }
  let m = loadMatrix();
  validateMatrix(m);
  let before = runtime.snapshotState(m, slugs);
  if (before.claimableBacklog === 0) {
    console.log('Không còn backlog claimable (article-backed) — không cần lock.');
    console.log(`DRAIN_RESULT done=true published=${before.published} backlog=0 waiting=${before.waitingForWriter}`);
    return 0;
  }
  // ACQUIRE LOCK — primitive exclusive + token ownership; stale reclaim race-safe.
  let record;
  try {
    record = lock.acquire(STATE_DIR, owner);
  } catch (e) {
    console.error((e && e.message) || String(e));
    console.error('TỪ CHỐI drain: không xin được writer lock — KHÔNG đụng state.');
    return 1;
  }
  if (tokenFile) atomicWrite(tokenFile, record.token);
  let code = 0;
  try {
    // Re-read state SAU khi có lock (chờ lock có thể làm state đổi).
    m = loadMatrix();
    validateMatrix(m);
    before = runtime.snapshotState(m, slugs);
    if (before.claimableBacklog === 0) {
      console.log('Backlog đã bị drain bởi writer khác trong lúc chờ lock.');
      console.log(`DRAIN_RESULT done=true published=${before.published} backlog=0 waiting=${before.waitingForWriter}`);
      return 0;
    }
    const { chunk, limit } = runtime.selectChunk(m, slugs);
    console.log(`Chunk: ${chunk.length}/${limit} slot (resume trước, claim sau): ${chunk.map(s => s.id + ':' + s.state).join(', ')}`);
    // PROCESS từng slot: transitions chuẩn + QA (state save từng bước — repo là checkpoint).
    for (const ref of chunk) {
      let s = m.slots.find(x => x.id === ref.id);
      if (s.state === 'PLANNED') {
        transition(m, s.id, 'RESEARCH');
        saveMatrix(m); saveState(loadState(), 'drain:research:' + s.id);
      }
      s = m.slots.find(x => x.id === ref.id);
      if (s.state === 'RESEARCH') {
        transition(m, s.id, 'WRITING');
        saveMatrix(m); saveState(loadState(), 'drain:write:' + s.id);
      }
      s = m.slots.find(x => x.id === ref.id);
      if (s.state !== 'PASS') {
        runQa(m, s.id);
        saveMatrix(m); saveState(loadState(), 'drain:qa:' + s.id);
      }
    }
    // PUBLISH explicit IDs — chỉ ID PASS của CHÍNH chunk này (atomic).
    const passIds = chunk
      .map(ref => m.slots.find(x => x.id === ref.id))
      .filter(s => s && s.state === 'PASS')
      .map(s => s.id);
    if (passIds.length) {
      const { ids } = parsePublishRequest(m, passIds.join(' '));
      for (const id of ids) {
        const s = m.slots.find(x => x.id === id);
        s.state = 'PUBLISHED';
        s.updatedAt = new Date().toISOString();
      }
      try {
        publishAll(ids.map(id => { const s = m.slots.find(x => x.id === id); return s && s.slug; }));
      } catch (e) {
        console.error('PUBLISH TỪ CHỐI: sinh lại site/test thất bại — KHÔNG ghi matrix/state của phần publish, slot giữ nguyên để resume.');
        console.error('  Chi tiết: ' + (e && e.message ? e.message : e));
        code = 1;
        return code;
      }
      saveMatrix(m);
      saveState(loadState(), 'publish:' + ids.join(','));
      console.log('Đã publish ' + ids.length + ' slot theo ID: ' + ids.join(', '));
    } else {
      console.log('Không có slot PASS nào trong chunk này (QA chưa đạt) — không publish.');
    }
    // NO-PROGRESS SENTINEL: backlog > 0 mà không tiến -> FAIL LOUD.
    const after = runtime.snapshotState(m, slugs);
    runtime.assertProgress(before, after);
    console.log(`DRAIN_RESULT done=${after.claimableBacklog === 0} published=${after.published} backlog=${after.claimableBacklog} waiting=${after.waitingForWriter}`);
    return 0;
  } catch (e) {
    console.error('DRAIN FAIL: ' + (e && e.message ? e.message : e));
    code = 1;
    return code;
  } finally {
    // RELEASE OWN LOCK — chỉ xóa được lock của chính run này (token khớp).
    try {
      lock.release(STATE_DIR, record);
    } catch (relErr) {
      console.error('LỖI giải phóng lock (có thể lock đã bị reclaim): ' + relErr.message);
      code = 1;
    }
    if (tokenFile) { try { fs.unlinkSync(tokenFile); } catch (_) { /* đã xóa */ } }
  }
}


// ---------- CLI ----------
function usage() {
  console.log(`AI WIKI TOTAL — CONTENT FACTORY
Lệnh:
  status                          Xem trạng thái xưởng + ma trận
  lock <owner>                    Xin writer lock (in WRITER_LOCK_TOKEN=<token>)
  unlock --owner O --token T      Giải phóng writer lock CỦA MÌNH (sai owner/token bị REFUSE);
                                  unlock --force = recovery thủ công (workflow không dùng)
  plan <hub> <slug> <title>       Thêm slot PLANNED vào ma trận (intent mặc định informational/<slug>,
                                  override bằng --intent <type/slug>; cờ không rơi vào tiêu đề)
  list                            Liệt kê slot
  research <id>                   PLANNED → RESEARCH
  write <id>                      RESEARCH → WRITING
  qa <id>                         Chấm QA minimal gate (70-100 PASS, <70
                                  FAIL/REPAIR — 7 critical gate, SEO chỉ
                                  warning) bài của slot
  qa-preview <id>                 QA thử read-only (KHÔNG ghi state)
  publish <ID> [<ID>...]       Publish slot PASS theo ID tường minh (atomic,
                               tối đa 10 ID; cổng sinh lại site + test xanh
                               mới ghi state, fail thì giữ nguyên để resume)
  audit [--min-score 70]          Deep audit MANUAL-ONLY: rà mọi bài
                                  PUBLISHED theo minimal gate (KHÔNG chạy
                                  trong production loop)
  resume                          Tiếp tục từ checkpoint
  expand-capacity <N> [--dry-run] Mở rộng capacity ma trận (chỉ tăng, KHÔNG shrink)
  set-planned-target <N> [--dry-run] Đặt mục tiêu kế hoạch (<= capacity, >= số slot đã có)
  backlog [--fail-if-claimable] [--head-sha S]
                                  Đếm backlog claimable (article-backed) +
                                  WAITING_FOR_WRITER; --fail-if-claimable: exit 1
                                  nếu còn backlog (dùng làm cổng CI)
  check-state                     Guard: không lock bị commit, ma trận hợp lệ,
                                  checkpoint khớp (exit 1 nếu state bẩn)
  plan-chunk [--limit N]          Kế hoạch chunk read-only (resume trước, claim sau)
  verify-invariant                Bất biến production (PUBLISHED ↔ source ↔ trang
                                  ↔ sitemap, checkpoint, không lock) — fail loud
  drain-bound <N>                 Giới hạn vòng drain an toàn từ workload thực tế
  drain-iteration [--owner O] [--token-file F]
                                  MỘT vòng drain: lock -> chọn chunk <= 10 -> QA ->
                                  publish explicit IDs -> thả lock -> NO-PROGRESS
                                  sentinel; in DRAIN_RESULT done=... (workflow gọi
                                  lặp tới khi done=true)
  publish-batch <ID,...> [--owner O] [--token-file F]
                                  HOT PATH LITE: publish 1-10 ID trong MỘT batch —
                                  scoped QA >=70 + generate một lần + link 404
                                  fail-closed + verify + flip state atomic
  verify-batch <ID,...>           Read-only pre-publish QA cho 1-10 ID (writer)
  publish-pair <ID,ID> [--owner O] [--token-file F]
                                  Hot path: publish ĐÚNG pair (tối đa 2 ID) —
                                  lock -> QA minimal scoped (FAIL -> repair
                                  queue, KHÔNG giữ pair) -> generate ->
                                  verify-pair -> flip PUBLISHED -> COMMIT txn
                                  (atomic, idempotent, resumable sau crash);
                                  SEO/intent chỉ advisory
  verify-pair <ID,ID>            Light verify chỉ pair (QA minimal/HTML/
                                  canonical/schema/sitemap/checkpoint; SEO/
                                  intent chỉ advisory, không scan toàn site)
  verify-sources <ID,ID>         Read-only pre-publish: rà source pair trước
                                  khi writer push (QA minimal chặn; SEO/
                                  intent advisory)
  recover-txn                    Recover txn marker sót sau crash (in TXN_RECOVER)
  push-scope [--base B]          Xác định EXACT article IDs được ADD/MODIFY bởi
                                  commit vừa push (in SCOPE_MODE/SCOPE_IDS/…)
  publish-plan [--scope ID,ID]   Kế hoạch txn pair từ exact push scope (resume
                                  backlog cũ trước, pair mới sau; WAITING_FOR_WRITER
                                  không bao giờ vào plan)
  change-mode                    Phân loại commit: CONTENT_ONLY | ENGINE_CHANGE
                                  (cho CI chọn gate nhẹ/nặng)
  manifest-sync [--role R]       Đồng bộ article-manifest.jsonl từ articles+matrix
                                  (JSONL — source of truth; chỉ role=coordinator)
  index-rebuild [--role R]       Dựng lại content-index.sqlite (derived cache,
                                  KHÔNG commit) từ manifest + content — an toàn
                                  khi missing/corrupt/stale; chỉ role=coordinator
  index-check                    Read-only: kiểm SQLite vs manifest (quick_check,
                                  số dòng, manifest_sha256) — exit 1 khi cần rebuild
  cycle-plan                     (Legacy recovery) Kế hoạch cycle: 12-18 slot
                                  PASS/PLANNED, không còn phân công writer
                                  (hot path nay la Writer 1 pair — writer-next)
  cycle-qa <ID,ID,...>           Scoped minimal QA CHỈ bài mới của cycle (1-18
                                  ID) — KHÔNG quét toàn site; FAIL -> REPAIR
                                  queue, PASS tiếp tục publish
  cycle-publish <ID,ID,...>      Coordinator duy nhất: publish slot PASS của
                                  cycle, defer REPAIR, build/deploy ĐÚNG 1 lần
  queue-refill [--role R]        Planned < 100 -> refill queue lên ~300 topic
                                  hợp lệ từ topic-pool (chỉ role=coordinator)
  writer-next [--count N]        WRITER 1: pair kế tiếp (resume slot dở có bài
                                  TRƯỚC, sau đó slot PLANNED theo ID tăng dần)
  writer-heartbeat --phase P     WRITER 1: báo heartbeat (P = writing |
                                  [--note T] [--pair I,I]       waiting-publish | waiting-writer | idle | error)
  production-status              ĐỐC CÔNG 2: một trạng thái rõ ràng — đang
                                  viết / chờ publish / chờ writer / đứng /
                                  gặp lỗi (heartbeat + error queue + ma trận)
  liveness                       Watchdog read-only: exit 1 khi writer ĐỨNG
                                  (heartbeat quá ngưỡng) hoặc lỗi escalated
  error-log --source S --message M [--context C] [--pair I,I]
                                  ĐỐC CÔNG 2: ghi lỗi + lần thử; quá
                                  ${runtime.DOCONG2_MAX_ATTEMPTS} lần tự escalated cho Đốc công 3
  error-queue                    Liệt kê hàng đợi lỗi (open/escalated/resolved)
  error-resolve --id N [--note T]
                                  Đóng lỗi N sau khi đã sửa đúng nguyên nhân`);
}

function opt(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}
// Tham số vị trí của lệnh: bỏ flag + giá trị flag (--owner O, --scope ID, ...).
function positional(rest) {
  const WITH_VALUE = new Set(['--owner', '--token-file', '--base', '--scope', '--head-sha', '--limit', '--intent', '--min-score', '--fail-if-claimable', '--role']);
  const out = [];
  for (let i = 0; i < rest.length; i++) {
    if (String(rest[i]).startsWith('--')) { if (WITH_VALUE.has(rest[i])) i++; continue; }
    out.push(rest[i]);
  }
  return out;
}

function main() {
  const [, , cmd, ...rest] = process.argv;
  if (!cmd || cmd === 'help' || cmd === '--help') { usage(); return; }

  if (cmd === 'status') {
    const m = loadMatrix();
    const st = lockStatus();
    const lo = st.lock;
    console.log('=== AI WIKI TOTAL FACTORY ===');
    console.log('Writer lock:', lo
      ? `đang giữ bởi "${lo.owner}" (từ ${lo.at}, pid ${lo.pid})${st.expired ? ' — QUÁ HẠN TTL, reclaim được ở lần acquire kế (không tự xóa)' : ''}`
      : 'trống');
    const back = runtime.findClaimableBacklog(m, new Set(loadAllArticlesBySlug().keys()));
    console.log('Backlog claimable (article-backed):', back.claimable.length,
      '| WAITING_FOR_WRITER:', back.waitingForWriter.length);
    console.log('Sức chứa ma trận:', m.capacity, '| đã dùng:', m.slots.length, '| dự phòng:', m.capacity - m.slots.length);
    const dist = {};
    for (const s of m.slots) dist[s.state] = (dist[s.state] || 0) + 1;
    console.log('Phân bố trạng thái:', JSON.stringify(dist));
    const stt = loadState();
    console.log('Hành động cuối:', stt.lastAction ? `${stt.lastAction.action} @ ${stt.lastAction.at}` : 'chưa có');
    if (m.reserved) console.log('Reserve:', JSON.stringify(m.reserved, null, 1));
    return;
  }
  if (cmd === 'lock') {
    const record = lock.acquire(STATE_DIR, rest[0] || 'agent');
    console.log(`Writer lock: cấp cho "${record.owner}" (token ${record.token}).`);
    console.log('WRITER_LOCK_TOKEN=' + record.token);
    return;
  }
  if (cmd === 'unlock') {
    const force = process.argv.includes('--force');
    const owner = opt('--owner');
    const token = opt('--token');
    const st = lockStatus();
    if (!st.lock) { console.log('Writer lock: trống — không có gì để giải phóng (idempotent).'); return; }
    if (force) {
      const r = lock.forceRelease(STATE_DIR);
      console.log(`Force release (recovery thủ công): đã xóa lock của "${r.holder ? r.holder.owner : '?'}" — CHỈ dùng sau khi xác minh writer không còn sống.`);
      return;
    }
    if (!owner || !token) {
      console.error(`TỪ CHỐI unlock: lock đang giữ bởi "${st.lock.owner}" — cần --owner + --token của CHÍNH acquisition này (hoặc --force cho recovery thủ công). Không xóa lock của writer khác.`);
      process.exit(1);
    }
    try {
      lock.release(STATE_DIR, { owner, token });
      console.log(`Writer lock: đã giải phóng (owner "${owner}", token khớp).`);
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
    return;
  }
  if (cmd === 'list') {
    const m = loadMatrix();
    for (const s of m.slots) console.log(`${s.id}  ${s.state.padEnd(9)} qa=${s.qaScore == null ? '-' : s.qaScore}  ${s.hub}  ${s.slug}`);
    return;
  }
  if (cmd === 'plan') {
    const m = loadMatrix();
    // Tách cờ --intent <giá trị> (hoặc --intent=<giá trị>) TRƯỚC khi parse
    // hub/slug/title — cờ và giá trị của nó không được rơi vào tiêu đề slot.
    const intents = [];
    const cleaned = [];
    for (let i = 0; i < rest.length; i++) {
      const a = rest[i];
      if (a === '--intent') {
        const v = rest[i + 1];
        if (v === undefined) { console.error('TỪ CHỐI plan: --intent cần một giá trị theo sau (ví dụ --intent informational/thue-xe-may).'); process.exit(1); }
        intents.push(v); i += 1; continue;
      }
      if (a.startsWith('--intent=')) { intents.push(a.slice('--intent='.length)); continue; }
      cleaned.push(a);
    }
    const [hub, slug, ...title] = cleaned;
    if (!hub || !slug || !title.length) { console.error('Cần: plan <hub> <slug> <tiêu đề...> [--intent <type/slug>]'); process.exit(1); }
    const intent = intents.length ? intents[intents.length - 1] : ('informational/' + slug);
    try {
      planSlot(m, { hub, slug, title: title.join(' '), intent });
    } catch (e) { console.error('TỪ CHỐI plan: ' + e.message); process.exit(1); }
    saveMatrix(m);
    saveState(loadState(), 'plan:' + slug);
    const added = m.slots[m.slots.length - 1];
    console.log(`Đã thêm slot ${added.id} (${slug}) → PLANNED (intent: ${added.primaryIntent})`);
    return;
  }
  if (cmd === 'research' || cmd === 'write') {
    const m = loadMatrix();
    transition(m, rest[0], cmd === 'research' ? 'RESEARCH' : 'WRITING');
    saveMatrix(m);
    saveState(loadState(), cmd + ':' + rest[0]);
    console.log(`${rest[0]} → ${cmd === 'research' ? 'RESEARCH' : 'WRITING'}`);
    return;
  }
  if (cmd === 'qa') {
    const m = loadMatrix();
    runQa(m, rest[0]);
    saveMatrix(m);
    saveState(loadState(), 'qa:' + rest[0]);
    return;
  }
  if (cmd === 'publish') {
    // PUBLISH SELECTIVE + ATOMIC THEO ID: validate -> flip TRONG BẢN NHỚ ->
    // cổng generate/test -> CHỈ khi mọi cổng xanh mới ghi matrix/state ra đĩa.
    // Publish fail -> exit 1, KHÔNG ghi state: repo vẫn là checkpoint resumable.
    const m = loadMatrix();
    validateMatrix(m);
    const { ids } = parsePublishRequest(m, rest.join(' '));
    for (const id of ids) {
      const s = m.slots.find(x => x.id === id);
      s.state = 'PUBLISHED';
      s.updatedAt = new Date().toISOString();
    }
    try {
      publishAll(ids.map(id => { const s = m.slots.find(x => x.id === id); return s && s.slug; }));
    } catch (e) {
      console.error('PUBLISH TỪ CHỐI: sinh lại site/test thất bại — KHÔNG ghi matrix/state, slot giữ nguyên để resume.');
      console.error('  Chi tiết: ' + (e && e.message ? e.message : e));
      process.exit(1);
    }
    saveMatrix(m);
    saveState(loadState(), 'publish:' + ids.join(','));
    console.log('Đã publish ' + ids.length + ' slot theo ID: ' + ids.join(', '));
    return;
  }
  if (cmd === 'audit') {
    // Deep audit MANUAL-ONLY (workflow_dispatch) — KHÔNG chạy trong production
    // loop. Ngưỡng mặc định theo MINIMAL GATE (70).
    const min = Number(opt('--min-score') || runtime.QA_PASS_MIN);
    const m = loadMatrix();
    const { qaArticle } = require('./qa');
    let fail = 0;
    for (const s of m.slots.filter(x => x.state === 'PUBLISHED')) {
      const a = loadArticleBySlug(s.slug);
      if (!a) { console.log(`✗ ${s.slug} — KHÔNG TÌM THẤY bài`); fail++; continue; }
      const r = qaArticle(a, buildQaCtx(m, { excludeSlug: s.slug, slot: s }));
      const mark = r.pass && r.score >= min ? '✓' : '✗';
      console.log(`${mark} ${s.slug.padEnd(45)} ${r.score}/100  ${r.words} từ`);
      if (mark !== '✓') fail++;
    }
    if (fail) { console.log(`Audit: ${fail} bài không đạt minimal gate ${min}.`); process.exit(1); }
    console.log(`Audit đạt: mọi bài >= ${min} điểm (minimal gate).`);
    return;
  }
  if (cmd === 'qa-preview') {
    const m = loadMatrix();
    const slot = m.slots.find(s => s.id === rest[0]);
    if (!slot) { console.error('Không tìm thấy slot ' + rest[0]); process.exit(1); }
    const article = loadArticleBySlug(slot.slug);
    if (!article) {
      console.log(`QA thử ${slot.id} (${slot.slug}): CHƯA CÓ module bài — WAITING_FOR_WRITER (dry-run, không ghi state).`);
      return;
    }
    const { qaArticle } = require('./qa');
    const r = qaArticle(article, buildQaCtx(m, { excludeSlug: slot.slug, slot }));
    console.log(`QA thử ${slot.id} (${slot.slug}): ${r.score}/100 — ${r.pass ? 'ĐẠT' : 'KHÔNG ĐẠT'} (minimal gate ${runtime.QA_PASS_MIN}+, ${r.words} từ) — KHÔNG ghi state.`);
    for (const c of r.checks.filter(x => !x.pass)) console.log(`  - [${c.critical ? 'CRITICAL' : 'WARNING'}] ${c.name} ${c.note}`);
    const { seoArticle } = require('./seo');
    const sr = seoArticle(article, { knownSlugs: new Set(loadAllArticlesBySlug().keys()) });
    console.log(`SEO thử ${slot.id} (${slot.slug}): ${sr.score}/100 — ${sr.pass ? 'ĐẠT' : 'KHÔNG ĐẠT'} (advisory — KHÔNG chặn publish) — KHÔNG ghi state.`);
    for (const c of sr.checks.filter(x => !x.pass)) console.log(`  - [${c.name}] ${c.note}`);
    return;
  }
  if (cmd === 'backlog') {
    const failIfClaimable = process.argv.includes('--fail-if-claimable');
    const headSha = opt('--head-sha') || '(không rõ)';
    const m = loadMatrix();
    const slugs = new Set(loadAllArticlesBySlug().keys()); // fail loud khi module lỗi
    const { claimable, waitingForWriter } = runtime.findClaimableBacklog(m, slugs);
    console.log('CLAIMABLE_BACKLOG=' + claimable.length);
    console.log('WAITING_FOR_WRITER=' + waitingForWriter.length);
    for (const s of claimable) console.log(`PENDING ${s.id} state=${s.state} article=yes`);
    for (const s of waitingForWriter) console.log(`PENDING ${s.id} state=${s.state} article=no`);
    if (failIfClaimable && claimable.length > 0) {
      console.error(`FAIL: còn ${claimable.length} slot claimable (article-backed) sau run publish — "SUCCESS + backlog > 0" là regression của continuous drain.`);
      console.error(`HEAD_SHA: ${headSha}`);
      console.error('Chẩn đoán từng ID: xem các dòng PENDING ở trên (state + có/không article source).');
      console.error('WAITING_FOR_WRITER không fail CI — writer chưa viết bài không phải lỗi.');
      process.exit(1);
    }
    return;
  }
  if (cmd === 'check-state') {
    if (fs.existsSync(LOCK_FILE)) { console.error('writer lock bị commit lại vào repo — state bẩn, rà soát trước khi chạy production.'); process.exit(1); }
    if (fs.existsSync(TXN_FILE)) { console.error('txn marker còn sót (crash giữa transaction) — chạy recover-txn / publish-pair để recover.'); process.exit(1); }
    const m = loadMatrix();
    validateMatrix(m);
    const cp = readJson(CHECKPOINT_FILE, null);
    if (!cp || cp.slotCount !== m.slots.length) {
      console.error(`checkpoint (${cp ? cp.slotCount : 'không có'}) lệch ma trận (${m.slots.length}) — chạy recovery trước.`);
      process.exit(1);
    }
    console.log(`STATE_OK: ma trận hợp lệ (${m.slots.length} slot, capacity ${m.capacity} đọc từ matrix.json), checkpoint khớp, không writer lock.`);
    return;
  }
  if (cmd === 'plan-chunk') {
    const m = loadMatrix();
    const slugs = new Set(loadAllArticlesBySlug().keys()); // fail loud khi module lỗi
    const limit = parsePositiveInt(opt('--limit'));
    const { chunk, limit: usedLimit, resume, claimed } = runtime.selectChunk(m, slugs, limit || undefined);
    console.log('PLAN ids=' + chunk.map(s => s.id + ':' + s.state).join(' '));
    console.log('PLAN count=' + chunk.length);
    console.log('PLAN limit=' + usedLimit);
    console.log('PLAN resume=' + resume);
    console.log('PLAN claimed=' + claimed);
    return;
  }
  if (cmd === 'verify-invariant') {
    const root = path.join(__dirname, '..');
    const m = loadMatrix();
    const { SITE } = require('./site.config');
    let sm = '';
    try { sm = fs.readFileSync(path.join(root, 'sitemap-articles.xml'), 'utf8'); }
    catch (e) { console.error('Không đọc được sitemap-articles.xml — ' + e.message); process.exit(1); }
    const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x => x[1]);
    const url = s => SITE.baseUrl + s.hub + '/' + s.slug + '/';
    const result = runtime.checkProductionInvariant(m, {
      hasLock: fs.existsSync(LOCK_FILE),
      checkpointSlotCount: (readJson(CHECKPOINT_FILE, {}) || {}).slotCount,
      validateMatrix,
      articleExists: slug => !!loadArticleBySlug(slug),
      pageExists: s => fs.existsSync(path.join(root, s.hub, s.slug, 'index.html')),
      sitemapHas: u => locs.includes(u),
      url,
      sitemapUrls: locs,
    });
    if (!result.ok) {
      for (const e of result.errors) console.error('INVARIANT_FAIL: ' + e);
      process.exit(1);
    }
    const published = m.slots.filter(s => s.state === 'PUBLISHED').length;
    console.log(`INVARIANT_OK: ${m.slots.length} slot, ${published} PUBLISHED, checkpoint khớp, sitemap-articles khớp, không writer lock.`);
    return;
  }
  if (cmd === 'drain-bound') {
    // Chấp nhận 0 (push bài mới nhưng chưa có slot claimable) -> 1 vòng xác nhận sạch.
    const n = /^\d+$/.test(String(rest[0] === undefined ? '' : rest[0]).trim()) ? Number(rest[0]) : null;
    if (n === null) { console.error('Cần: drain-bound <số slot claimable ban đầu>'); process.exit(1); }
    console.log('MAX_ITERATIONS=' + runtime.maxIterations(n, runtime.PUBLISH_CHUNK_LIMIT));
    return;
  }
  if (cmd === 'drain-iteration') {
    const owner = opt('--owner') || 'ci-publisher';
    const tokenFile = opt('--token-file') || null;
    const code = drainIteration(owner, tokenFile);
    if (code !== 0) process.exit(code);
    return;
  }
  if (cmd === 'expand-capacity' || cmd === 'set-planned-target') {
    const isExpand = cmd === 'expand-capacity';
    const dry = rest.includes('--dry-run') || process.argv.includes('--dry-run');
    const rawArg = rest.find(a => a && !a.startsWith('--')) || null;
    const m = loadMatrix();
    const prefix = dry ? 'STATE_SAFE: false — ' : 'TỪ CHỐI: ';
    try { validateMatrix(m); }
    catch (e) { console.error(prefix + 'ma trận không hợp lệ — ' + e.message); process.exit(1); }
    // Migration chỉ chạy khi state an toàn: checkpoint khớp + không có mutation/transaction đang chạy.
    const cp = readJson(CHECKPOINT_FILE, null);
    if (!cp || cp.slotCount !== m.slots.length) {
      console.error(prefix + `checkpoint (${cp ? cp.slotCount : 'không có'}) lệch ma trận (${m.slots.length}) — chạy recovery/rà soát trước khi migrate`);
      process.exit(1);
    }
    const lo = activeLock();
    if (lo) {
      console.error(prefix + `writer lock đang giữ bởi "${lo.owner}" — không migrate khi transaction/mutation đang chạy`);
      process.exit(1);
    }
    if (isExpand) {
      const n = parsePositiveInt(rawArg);
      const err = expansionError(m, n);
      if (dry) {
        console.log('=== EXPAND CAPACITY — DRY RUN (KHÔNG ghi file) ===');
        console.log('CURRENT_CAPACITY: ' + m.capacity);
        console.log('REQUESTED_CAPACITY: ' + (rawArg === null ? '(thiếu đối số)' : rawArg));
        console.log('DELTA: ' + (n === null || err ? 'N/A' : n - m.capacity));
        console.log('EXISTING_SLOT_COUNT: ' + m.slots.length);
        console.log('MAX_EXISTING_ID: ' + formatSlotId(maxSlotNumber(m)));
        console.log('NEXT_AVAILABLE_ID: ' + nextSlotId(m));
        console.log('PLANNED_TARGET: ' + m.plannedTarget + ' (giữ nguyên)');
        console.log('RESERVED_TOTAL: ' + (m.reserved ? m.reserved.total : 0) + ' (giữ nguyên từng pool)');
        console.log('STATE_SAFE: ' + (err ? 'false' : 'true'));
        if (err) { console.log('REFUSE: ' + err); process.exit(1); }
        console.log('MIGRATION_ACTIONS:');
        console.log('  1. acquire writer lock (expand-capacity)');
        console.log('  2. snapshot + hash ma trận (sha1) ghi vào factory-state.lastAction');
        console.log(`  3. matrix.capacity: ${m.capacity} -> ${n} — KHÔNG preallocate slot; ID/slots/plannedTarget/reserved giữ nguyên`);
        console.log('  4. validate IDs + validate ma trận + khớp checkpoint');
        console.log('  5. verify: generate --check + test.js + audit --min-score 70 (fail -> ROLLBACK toàn vẹn)');
        console.log('  6. commit state + release lock sạch');
        return;
      }
      if (err) { console.error('TỪ CHỐI: ' + err); process.exit(1); }
    } else {
      const n = parsePositiveInt(rawArg);
      const err = plannedTargetError(m, n);
      if (dry) {
        console.log('=== SET PLANNED TARGET — DRY RUN (KHÔNG ghi file) ===');
        console.log('CURRENT_PLANNED_TARGET: ' + m.plannedTarget);
        console.log('REQUESTED_PLANNED_TARGET: ' + (rawArg === null ? '(thiếu đối số)' : rawArg));
        console.log('CAPACITY: ' + m.capacity + ' (giữ nguyên)');
        console.log('EXISTING_SLOT_COUNT: ' + m.slots.length);
        console.log('RESERVED_TOTAL: ' + (m.reserved ? m.reserved.total : 0) + ' (giữ nguyên từng pool)');
        console.log('STATE_SAFE: ' + (err ? 'false' : 'true'));
        if (err) { console.log('REFUSE: ' + err); process.exit(1); }
        console.log('MIGRATION_ACTIONS:');
        console.log('  1. acquire writer lock (set-planned-target)');
        console.log(`  2. matrix.plannedTarget: ${m.plannedTarget} -> ${n} — capacity/reserved/slots giữ nguyên`);
        console.log('  3. validate ma trận + verify test.js (fail -> ROLLBACK toàn vẹn)');
        console.log('  4. commit state + release lock sạch');
        return;
      }
      if (err) { console.error('TỪ CHỐI: ' + err); process.exit(1); }
    }
    // ---- REAL migration: READ STATE -> VALIDATE -> LOCK -> SNAPSHOT -> MIGRATE -> VERIFY -> COMMIT -> UNLOCK ----
    const n = parsePositiveInt(rawArg);
    const before = JSON.stringify(m, null, 1);
    let beforeSha = '';
    try {
      const crypto = require('crypto');
      beforeSha = crypto.createHash('sha1').update(before).digest('hex');
    } catch (e) { beforeSha = 'unavailable'; }
    const oldVal = isExpand ? m.capacity : m.plannedTarget;
    // Acquire bằng primitive exclusive (token ownership-safe) — lock stale
    // (quá TTL) được reclaim race-safe bên trong lock.acquire.
    const lockRecord = lock.acquire(STATE_DIR, isExpand ? 'expand-capacity' : 'set-planned-target');
    let migrated = false;
    try {
      if (isExpand) applyExpansion(m, n);
      else m.plannedTarget = n;
      validateMatrix(m);
      saveMatrix(m);
      migrated = true;
      // Verify sau migration — bất kỳ bước nào fail thì rollback toàn vẹn.
      execFileSync(process.execPath, [path.join(__dirname, 'generate.js'), '--check'], { stdio: 'inherit' });
      execFileSync(process.execPath, [path.join(__dirname, 'test.js')], { stdio: 'inherit' });
      execFileSync(process.execPath, [__filename, 'audit', '--min-score', '70'], { stdio: 'inherit' });
    } catch (e) {
      if (migrated) {
        atomicWrite(MATRIX_FILE, before);
        console.error(`Kiểm định sau migration thất bại — ĐÃ ROLLBACK ${isExpand ? 'capacity' : 'plannedTarget'} về ${oldVal}. Không để state half-migrated.`);
      } else {
        console.error('TỪ CHỐI migration: ' + (e && e.message ? e.message : e));
      }
      try { lock.release(STATE_DIR, lockRecord); }
      catch (relErr) { console.error('CẢNH BÁO: ' + relErr.message); }
      process.exit(1);
    }
    const st = loadState();
    st.lastAction = {
      action: `${cmd}:${oldVal}->${n}`,
      at: new Date().toISOString(),
      ...(isExpand ? { matrixShaBefore: beforeSha } : { prevPlannedTarget: oldVal }),
    };
    atomicWrite(STATE_FILE, JSON.stringify(st, null, 1));
    checkpoint({ at: new Date().toISOString(), action: `${cmd}:${oldVal}->${n}`, slotCount: m.slots.length });
    try { lock.release(STATE_DIR, lockRecord); }
    catch (relErr) { console.error('LỖI giải phóng lock: ' + relErr.message); process.exit(1); }
    console.log(`Đã migrate ${isExpand ? 'capacity' : 'plannedTarget'}: ${oldVal} -> ${n}.`);
    if (isExpand) {
      console.log(`Slots/ID/PUBLISHED giữ nguyên; plannedTarget (${m.plannedTarget}) + reserved (${m.reserved ? m.reserved.total : 0}) giữ nguyên — phần tăng thêm là unallocated/future-reserve.`);
    } else {
      console.log('Capacity + reserved pools giữ nguyên; các slot hiện tại không bị ảnh hưởng.');
    }
    return;
  }
  if (cmd === 'resume') {
    const cp = readJson(CHECKPOINT_FILE, null);
    const st = loadState();
    const m = loadMatrix();
    console.log('Checkpoint:', JSON.stringify(cp));
    const next = m.slots.filter(s => !['PUBLISHED', 'BLOCKED'].includes(s.state));
    console.log('Slot đang dở:', next.length ? next.map(s => s.id + ':' + s.state).join(', ') : 'không có');
    console.log('Hành động cuối:', st.lastAction ? st.lastAction.action : 'chưa có');
    return;
  }
  if (cmd === 'publish-batch') {
    const ids = parseBatchIds(positional(rest).join(' '));
    const owner = opt('--owner') || 'ci-publisher';
    const tokenFile = opt('--token-file');
    try {
      // Reuse transaction core của publishPair, nhưng chạy 1-10 ID trong MỘT
      // generate + MỘT scoped link gate + MỘT state commit.
      publishPair(ids, { owner, tokenFile });
    } catch (e) {
      console.error('PUBLISH_BATCH_FAIL: ' + (e && e.message ? e.message : e));
      process.exit(1);
    }
    return;
  }
  if (cmd === 'verify-batch') {
    const ids = parseBatchIds(positional(rest).join(' '));
    const m = loadMatrix();
    const v = verifySources(m, ids);
    if (!v.ok) { for (const e of v.errors) console.error('VERIFY_BATCH_FAIL: ' + e); process.exit(1); }
    console.log('VERIFY_BATCH_OK: ' + ids.join(','));
    return;
  }
  if (cmd === 'publish-pair') {
    const ids = parsePairIds(positional(rest).join(' '));
    const owner = opt('--owner') || 'ci-publisher';
    const tokenFile = opt('--token-file');
    try {
      publishPair(ids, { owner, tokenFile });
    } catch (e) {
      console.error('PUBLISH_PAIR_FAIL: ' + (e && e.message ? e.message : e));
      process.exit(1);
    }
    return;
  }
  if (cmd === 'verify-pair') {
    const ids = parsePairIds(positional(rest).join(' '));
    const m = loadMatrix();
    const v = verifyPair(m, ids, { requirePublished: true });
    if (!v.ok) { for (const e of v.errors) console.error('VERIFY_PAIR_FAIL: ' + e); process.exit(1); }
    console.log('VERIFY_PAIR_OK: ' + ids.join(','));
    return;
  }
  if (cmd === 'verify-sources') {
    const ids = parsePairIds(positional(rest).join(' '));
    const m = loadMatrix();
    const v = verifySources(m, ids);
    if (!v.ok) { for (const e of v.errors) console.error('VERIFY_SOURCES_FAIL: ' + e); process.exit(1); }
    console.log('VERIFY_SOURCES_OK: ' + ids.join(','));
    return;
  }
  if (cmd === 'recover-txn') {
    if (!fs.existsSync(TXN_FILE)) { console.log('TXN_RECOVER none'); return; }
    const m = loadMatrix();
    validateMatrix(m);
    const out = recoverTxn(m);
    if (!out) { console.log('TXN_RECOVER none'); return; }
    console.log('TXN_RECOVER ' + out.outcome + ' ids=' + (out.txn.ids || []).join(','));
    return;
  }
  if (cmd === 'manifest-sync') {
    // JSONL manifest là SOURCE OF TRUTH (được commit). CHỈ coordinator ghi.
    contentIndex.assertCoordinator(opt('--role') || 'coordinator');
    const rows = contentIndex.buildManifestFromRepo(path.join(__dirname, '..'));
    const n = contentIndex.writeManifestAtomic(MANIFEST_FILE, rows);
    console.log('MANIFEST_SYNC rows=' + n + ' file=factory/state/article-manifest.jsonl');
    return;
  }
  if (cmd === 'index-rebuild') {
    // SQLite derived cache — KHÔNG commit. Rebuild an toàn từ manifest + content.
    contentIndex.assertCoordinator(opt('--role') || 'coordinator');
    const rows = contentIndex.buildManifestFromRepo(path.join(__dirname, '..'));
    contentIndex.writeManifestAtomic(MANIFEST_FILE, rows);
    const n = contentIndex.rebuild(contentIndex.DB_FILE, rows, MANIFEST_FILE);
    console.log('INDEX_REBUILD rows=' + n + ' db=factory/state/content-index.sqlite (derived, gitignored)');
    return;
  }
  if (cmd === 'index-check') {
    // Read-only: missing/corrupt/stale -> exit 1 (gợi ý index-rebuild).
    const st = contentIndex.status(contentIndex.DB_FILE, MANIFEST_FILE);
    if (!st.ok) { console.error('INDEX_CHECK_FAIL: ' + st.why); process.exit(1); }
    console.log('INDEX_OK rows=' + st.dbRows + '/' + st.manifestRows + ' quick_check=ok manifest_sha256=match');
    return;
  }
  if (cmd === 'push-scope') {
    const base = opt('--base') || 'HEAD~1';
    const out = execFileSync('git', ['diff', '--name-status', base, 'HEAD', '--', 'factory/data/articles/'], { encoding: 'utf8' });
    const entries = [];
    for (const line of out.split('\n')) {
      if (!line.trim()) continue;
      const parts = line.split('\t');
      if (parts.length < 2) { console.error('PUSH_SCOPE_FAIL: dòng diff lạ: ' + line); process.exit(1); }
      const status = parts[0][0];
      const file = parts[parts.length - 1];
      if (!file.endsWith('.js')) continue;
      let mod;
      try { mod = require(path.join(process.cwd(), file)); }
      catch (e) { console.error('PUSH_SCOPE_FAIL: không require được ' + file + ': ' + e.message); process.exit(1); }
      if (!mod || !mod.slug) { console.error('PUSH_SCOPE_FAIL: module không có slug: ' + file); process.exit(1); }
      entries.push({ status, slug: mod.slug });
    }
    const m = loadMatrix();
    const scope = runtime.scopeFromSlugEntries(m, entries);
    if (scope.deletedSlugs.length) { console.error('PUSH_SCOPE_FAIL: commit chứa DELETE article: ' + scope.deletedSlugs.join(',')); process.exit(1); }
    const ids = scope.newIds.concat(scope.repairIds);
    const mode = ids.length === 0 ? 'empty' : (scope.newIds.length === 0 ? 'repair' : 'pair');
    console.log('SCOPE_MODE=' + mode);
    console.log('SCOPE_IDS=' + ids.join(','));
    console.log('SCOPE_NEW=' + scope.newIds.join(','));
    console.log('SCOPE_REPAIR=' + scope.repairIds.join(','));
    return;
  }
  if (cmd === 'publish-plan') {
    const m = loadMatrix();
    const scopeArg = opt('--scope');
    let scopeIds = [];
    if (scopeArg) {
      scopeIds = scopeArg.split(',').map(x => x.trim()).filter(Boolean);
      for (const id of scopeIds) {
        if (!m.slots.find(sl => sl.id === id)) { console.error('PUBLISH_PLAN_FAIL: ID không tồn tại trong ma trận: ' + id); process.exit(1); }
      }
    }
    const slugs = new Set(loadAllArticlesBySlug().keys());
    const plan = runtime.buildPublishPlan(m, slugs, scopeIds);
    if (!plan.txns.length) { console.log('PLAN_TXNS=0'); return; }
    for (let i = 0; i < plan.txns.length; i++) {
      const t = plan.txns[i];
      console.log('TXN ' + (i + 1) + ' ' + t.ids.join(',') + ' mode=' + t.mode);
    }
    console.log('PLAN_TXNS=' + plan.txns.length);
    return;
  }
  if (cmd === 'cycle-plan') {
    // Read-only (legacy recovery path — hot path nay la Writer 1 pair):
    // ke hoach cycle hien tai (12-18 slot). Slot PASS da co bai (QA xong,
    // chua publish — crash giua tick) duoc RESUME TRUOC.
    // MÔ HÌNH 3 WRITER ĐÃ BỎ — không còn phân công writer-a/b/c; Writer 1
    // duy nhất lấy bài bằng lệnh writer-next.
    const m = loadMatrix();
    validateMatrix(m);
    const plan = runtime.buildCyclePlan(m, new Set(loadAllArticlesBySlug().keys()));
    console.log('CYCLE_PLAN ids=' + plan.ids.join(',') + ' size=' + plan.size +
      ' (min ' + runtime.CYCLE_MIN + ', max ' + runtime.CYCLE_MAX + ')');
    if (!plan.complete) console.log('CYCLE_PLAN incomplete: chỉ còn ' + plan.size + ' bài PLANNED (< ' + runtime.CYCLE_MIN + ')');
    if (plan.needsRefill) console.log('CYCLE_PLAN refill: planned < ' + runtime.QUEUE_REFILL_FLOOR + ' -> chạy queue-refill (coordinator, target ' + runtime.QUEUE_REFILL_TARGET + ')');
    return;
  }
  if (cmd === 'cycle-qa') {
    // Scoped minimal QA CHỈ bài mới của cycle (12-18 ID) — KHÔNG quét toàn site.
    const ids = parseCycleIds(positional(rest).join(' '));
    const m = loadMatrix();
    validateMatrix(m);
    const before = JSON.stringify(m.slots.filter(s => ids.includes(s.id)));
    const out = cycleQa(m, ids);
    const after = JSON.stringify(m.slots.filter(s => ids.includes(s.id)));
    // CHỐNG TIMESTAMP CHURN: mọi slot pending/skip (không QA gì) -> KHÔNG ghi
    // state — tick lặp không tạo commit rỗng chỉ vì `at` đổi.
    if (before === after) {
      console.log('CYCLE_QA no-change: mọi slot pending/skip — KHÔNG ghi state (chống commit rỗng theo timestamp).');
      return;
    }
    validateMatrix(m);
    saveMatrix(m);
    saveState(loadState(), 'cycle-qa:' + out.passed.length + '/' + ids.length);
    console.log('CYCLE_QA pass=' + out.passed.length + ' fail=' + out.failed.length + ' pending=' + out.pending.length +
      (out.passed.length ? ' passed=' + out.passed.join(',') : '') +
      (out.failed.length ? ' failed=' + out.failed.join(',') : '') +
      ' (scoped ' + ids.length + '/' + runtime.CYCLE_MAX + ' bài — KHÔNG quét toàn site, KHÔNG re-audit bài đã PUBLISHED)');
    return;
  }
  if (cmd === 'cycle-publish') {
    // Coordinator duy nhất: chỉ publish slot PASS, defer REPAIR, build/deploy 1 lần.
    const ids = parseCycleIds(positional(rest).join(' '));
    cyclePublish(ids, { owner: opt('--owner') || 'coordinator' });
    return;
  }
  if (cmd === 'queue-refill') {
    // Allocator: planned < QUEUE_REFILL_FLOOR -> refill lên ~QUEUE_REFILL_TARGET
    // topic hợp lệ từ topic-pool. CHỈ coordinator được chạy.
    contentIndex.assertCoordinator(opt('--role') || 'coordinator');
    const m = loadMatrix();
    validateMatrix(m);
    const planned = m.slots.filter(s => s.state === 'PLANNED').length;
    if (planned >= runtime.QUEUE_REFILL_FLOOR) {
      console.log('QUEUE_REFILL none planned=' + planned + ' (>= floor ' + runtime.QUEUE_REFILL_FLOOR + ') — đủ queue, không refill.');
      return;
    }
    const { TOPICS } = require('./data/topic-pool');
    const topics = runtime.selectRefillTopics(TOPICS, m.slots.map(s => s.slug), planned, runtime.QUEUE_REFILL_TARGET);
    const room = m.capacity - m.slots.length;
    const picked = topics.slice(0, Math.max(0, Math.min(topics.length, room)));
    let added = 0;
    for (const t of picked) {
      try {
        planSlot(m, { hub: t.hub, slug: t.slug, title: t.title, intent: 'informational/' + t.slug });
        added++;
      } catch (e) {
        console.error('BỎ topic ' + t.slug + ': ' + e.message);
      }
    }
    validateMatrix(m);
    saveMatrix(m);
    saveState(loadState(), 'queue-refill:+' + added);
    console.log('QUEUE_REFILL added=' + added + ' planned=' + (planned + added) +
      ' (floor ' + runtime.QUEUE_REFILL_FLOOR + ', target ' + runtime.QUEUE_REFILL_TARGET + ') — intent mặc định informational/<slug>');
    return;
  }
  // ---------- 3-ROLE PRODUCTION: WRITER 1 + ĐỐC CÔNG 2/3 ----------
  if (cmd === 'writer-next') {
    // WRITER 1 (writer duy nhất): pair kế tiếp, deterministic — resume slot
    // dở CÓ bài trước, sau đó slot PLANNED chưa có bài theo ID tăng dần.
    // KHÔNG bao giờ trả slot đã có bài cho reason "new" (chống viết trùng).
    const m = loadMatrix();
    validateMatrix(m);
    const count = parsePositiveInt(opt('--count')) || runtime.PAIR_SIZE;
    const plan = runtime.selectWriterPair(m, new Set(loadAllArticlesBySlug().keys()), count);
    if (!plan.ids.length) {
      console.log('WRITER_NEXT ids= (không còn gì để viết — queue rỗng và không có bài dở)');
      return;
    }
    console.log('WRITER_NEXT ids=' + plan.ids.join(',') +
      ' reason=resume:' + plan.resume.length + ',new:' + plan.fresh.length);
    for (const d of plan.details) {
      console.log('NEXT ' + d.id + ' state=' + d.state + ' hub=' + d.hub + ' slug=' + d.slug +
        ' intent=' + d.intent + ' title=' + d.title);
    }
    return;
  }
  if (cmd === 'writer-heartbeat') {
    // WRITER 1 báo heartbeat sau mỗi pair (push cùng commit bài). File là
    // operational state thật — Đốc công 2/watchdog đo tuổi từ đây.
    const phase = opt('--phase');
    if (!runtime.WRITER_PHASES.includes(phase)) {
      console.error('TỪ CHỐI writer-heartbeat: --phase phải là một trong ' + runtime.WRITER_PHASES.join('|'));
      process.exit(1);
    }
    const hb = {
      schemaVersion: 1,
      at: new Date().toISOString(),
      phase,
      pair: (opt('--pair') || '').trim() || null,
      note: (opt('--note') || '').trim() || null,
    };
    atomicWrite(HEARTBEAT_FILE, JSON.stringify(hb, null, 1));
    console.log('WRITER_HEARTBEAT at=' + hb.at + ' phase=' + hb.phase + (hb.pair ? ' pair=' + hb.pair : ''));
    return;
  }
  if (cmd === 'production-status' || cmd === 'liveness') {
    // ĐỐC CÔNG 2 (production-status) + watchdog (liveness) dùng CÙNG logic
    // classifyProductionState — một chân lý, không phân vẹn status.
    const m = loadMatrix();
    validateMatrix(m);
    const slugs = new Set(loadAllArticlesBySlug().keys());
    const { claimable, waitingForWriter } = runtime.findClaimableBacklog(m, slugs);
    const hb = readJson(HEARTBEAT_FILE, null);
    const errors = (readJson(ERROR_FILE, { errors: [] }) || { errors: [] }).errors || [];
    const st = runtime.classifyProductionState({
      heartbeat: hb, errors,
      waitingForWriter: waitingForWriter.length,
      claimableBacklog: claimable.length,
      nowMs: Date.now(),
      stallMinutes: runtime.WRITER_STALL_MINUTES,
    });
    const dist = {};
    for (const s of m.slots) dist[s.state] = (dist[s.state] || 0) + 1;
    const stallMin = opt('--stall-minutes');
    console.log('PRODUCTION_STATUS phase=' + st.phase + ' stalled=' + st.stalled +
      ' heartbeat_age_min=' + st.heartbeatAgeMinutes + ' (ngưỡng ' + (stallMin || runtime.WRITER_STALL_MINUTES) + ' phút)');
    console.log('PUBLISHED=' + (dist.PUBLISHED || 0) + ' WAITING_FOR_WRITER=' + waitingForWriter.length +
      ' CLAIMABLE_BACKLOG=' + claimable.length + ' REPAIR=' + (dist.REPAIR || 0) + ' BLOCKED=' + (dist.BLOCKED || 0));
    console.log('ERRORS open=' + st.openErrors + ' escalated=' + st.escalatedErrors);
    const stt = loadState();
    console.log('LAST_ACTION ' + (stt.lastAction ? stt.lastAction.action + ' @ ' + stt.lastAction.at : 'chưa có'));
    for (const r of st.reasons) console.log('REASON ' + r);
    if (cmd === 'liveness') {
      if (st.stalled) {
        console.error('LIVENESS_FAIL: Writer 1 ĐỨNG — heartbeat cũ ' + st.heartbeatAgeMinutes +
          ' phút (phase ' + st.phase + '). Đốc công 2 kiểm tra: đang viết / chờ publish / hết phiên / lỗi; không có kết nối đánh thức phiên Mistral từ Actions — cần session writer mới resume từ checkpoint.');
        process.exit(1);
      }
      if (st.escalated) {
        console.error('LIVENESS_FAIL: ' + st.escalatedErrors + ' lỗi đã escalated — Đốc công 3 xử lý (xem error-queue).');
        process.exit(1);
      }
      console.log('LIVENESS_OK: ' + st.phase + (st.openErrors ? ' (có ' + st.openErrors + ' lỗi open — Đốc công 2 đang xử)' : ''));
      return;
    }
    return;
  }
  if (cmd === 'error-log') {
    // ĐỐC CÔNG 2: mỗi lần thử sửa lỗi được ghi lại; cùng khóa (source+pair)
    // tăng attempts; đạt DOCONG2_MAX_ATTEMPTS -> escalated cho Đốc công 3.
    const source = opt('--source');
    const message = opt('--message');
    if (!source || !message) {
      console.error('Cần: error-log --source <writer|publisher|engine> --message <mô tả> [--context C] [--pair I,I]');
      process.exit(1);
    }
    const cur = readJson(ERROR_FILE, { errors: [] }) || { errors: [] };
    const { errors, entry } = runtime.upsertError(cur.errors || [], {
      source, message, context: opt('--context') || '', pair: opt('--pair') || '',
    });
    atomicWrite(ERROR_FILE, JSON.stringify({ schemaVersion: 1, errors }, null, 1));
    console.log('ERROR_LOG id=' + entry.id + ' source=' + entry.source + ' pair=' + (entry.pair || '-') +
      ' attempts=' + entry.attempts + ' status=' + entry.status +
      (entry.status === 'escalated' ? ' — ĐÃ CHUYỂN ĐỐC CÔNG 3' : ''));
    return;
  }
  if (cmd === 'error-queue') {
    const cur = readJson(ERROR_FILE, { errors: [] }) || { errors: [] };
    const errors = cur.errors || [];
    if (!errors.length) { console.log('ERROR_QUEUE empty — không có lỗi nào đang theo dõi.'); return; }
    for (const e of errors) {
      console.log('ERROR #' + e.id + ' status=' + e.status + ' source=' + e.source + ' pair=' + (e.pair || '-') +
        ' attempts=' + e.attempts + ' at=' + e.at + (e.updatedAt ? ' updated=' + e.updatedAt : ''));
      if (e.message) console.log('  message: ' + e.message);
      if (e.context) console.log('  context: ' + e.context);
      if (e.resolveNote) console.log('  resolved: ' + e.resolveNote);
    }
    const open = errors.filter(e => e.status === 'open').length;
    const esc = errors.filter(e => e.status === 'escalated').length;
    console.log('ERROR_QUEUE total=' + errors.length + ' open=' + open + ' escalated=' + esc +
      ' resolved=' + errors.filter(e => e.status === 'resolved').length);
    return;
  }
  if (cmd === 'error-resolve') {
    const id = parsePositiveInt(opt('--id'));
    if (!id) { console.error('Cần: error-resolve --id <N> [--note mô tả cách sửa]'); process.exit(1); }
    const cur = readJson(ERROR_FILE, { errors: [] }) || { errors: [] };
    const errors = cur.errors || [];
    const e = errors.find(x => Number(x.id) === id);
    if (!e) { console.error('Không tìm thấy lỗi #' + id + ' (xem error-queue).'); process.exit(1); }
    if (e.status === 'resolved') { console.log('ERROR #' + id + ' đã resolved từ trước (idempotent).'); return; }
    e.status = 'resolved';
    e.resolvedAt = new Date().toISOString();
    e.resolveNote = (opt('--note') || '').trim() || null;
    atomicWrite(ERROR_FILE, JSON.stringify({ schemaVersion: 1, errors }, null, 1));
    console.log('ERROR_RESOLVE id=' + id + ' — bàn giao lại Đốc công 2, Writer 1 chạy tiếp.');
    return;
  }
  if (cmd === 'change-mode') {
    let mode;
    if ((process.env.GITHUB_EVENT_NAME || '') === 'push') {
      const paths = execFileSync('git', ['diff', '--name-only', 'HEAD~1', 'HEAD'], { encoding: 'utf8' }).split('\n').filter(Boolean);
      mode = runtime.classifyChangeMode(paths);
    } else {
      mode = 'ENGINE_CHANGE'; // workflow_dispatch/manual: mặc định engine
    }
    console.log('CHANGE_MODE=' + mode);
    return;
  }
  console.error('Lệnh không tồn tại: "' + cmd + '" (exit 1) — chạy không đối số xem usage.');
  usage();
  process.exit(1);
}

if (require.main === module) main();
module.exports = {
  TRANSITIONS, planSlot, transition,
  validateMatrix, parseSlotId, formatSlotId, maxSlotNumber, nextSlotId,
  parsePositiveInt, expansionError, applyExpansion, plannedTargetError,
  loadArticleBySlug, PUBLISH_CHUNK_LIMIT, parsePublishRequest,
  // hardening 4-tầng: lock ownership-safe + runtime thuần cho CI/test
  lock: { status: lockStatus, active: activeLock },
  runtime,
  // simple production mode (pair hot path)
  publishPair, parsePairIds, parseBatchIds, verifyPair, verifySources, intentConflicts,
  recoverTxn, loadTxn, writeTxn, clearTxn, TXN_FILE,
  // content-index: manifest JSONL (source of truth) + sqlite derived cache
  MANIFEST_FILE, contentIndex,
  // minimal production QA gate
  runQa, buildQaCtx,
  // production cycle (12-18 bài, 3 writer, scoped QA, repair queue)
  parseCycleIds, cycleQa, cyclePublish,
};
