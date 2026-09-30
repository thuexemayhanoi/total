#!/usr/bin/env node
// AI WIKI TOTAL — CONTENT FACTORY
// Một writer duy nhất (writer lock), checkpoint, bảo vệ transaction, resume.
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

const STATE_DIR = path.join(__dirname, 'state');
const STATE_FILE = path.join(STATE_DIR, 'factory-state.json');
const MATRIX_FILE = path.join(STATE_DIR, 'matrix.json');
const LOCK_FILE = path.join(STATE_DIR, 'writer.lock');
const CHECKPOINT_FILE = path.join(STATE_DIR, 'checkpoint.json');

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

function runQa(m, sid) {
  const slot = m.slots.find(s => s.id === sid);
  const { qaArticle } = require('./qa');
  const article = loadArticleBySlug(slot.slug);
  if (!article) throw new Error('Chưa có nội dung bài cho slot ' + sid + ' — hãy viết trước (lệnh write).');
  const result = qaArticle(article);
  slot.attempts = (slot.attempts || 0) + 1;
  console.log(`QA ${sid} (${slot.slug}): điểm ${result.score}/100 — ${result.pass ? 'ĐẠT' : 'KHÔNG ĐẠT'}`);
  for (const c of result.checks.filter(x => !x.pass)) console.log(`  - [${c.name}] ${c.note}`);
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
function publishAll() {
  execFileSync(process.execPath, [path.join(__dirname, 'generate.js')], { stdio: 'inherit' });
  execFileSync(process.execPath, [path.join(__dirname, 'test.js')], { stdio: 'inherit' });
}

// ---------- Continuous backlog drain (DEFECT B hardening) ----------
// MỘT vòng drain của production run (workflow gọi lặp tới done=true):
//   READ STATE -> acquire lock (ownership-safe) -> tìm backlog claimable
//   -> chọn chunk <= 10 ID (resume trước, claim sau) -> QA từng slot
//   -> publish explicit IDs (atomic) -> thả lock CỦA MÌNH -> NO-PROGRESS
//   sentinel. KHÔNG dựa vào self-trigger của bot commit; KHÔNG sweep PASS.
// Trả exit code (0 = vòng sạch; done=true nghĩa là backlog đã drain hết).
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
        publishAll();
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
  qa <id>                         Chấm QA bài của slot
  qa-preview <id>                 QA thử read-only (KHÔNG ghi state)
  publish <ID> [<ID>...]       Publish slot PASS theo ID tường minh (atomic,
                               tối đa 10 ID; cổng sinh lại site + test xanh
                               mới ghi state, fail thì giữ nguyên để resume)
  audit [--min-score 90]          Rà mọi bài PUBLISHED
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
                                  lặp tới khi done=true)`);
}

function opt(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
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
      publishAll();
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
    const min = Number(opt('--min-score') || 90);
    const m = loadMatrix();
    const { qaArticle } = require('./qa');
    let fail = 0;
    for (const s of m.slots.filter(x => x.state === 'PUBLISHED')) {
      const a = loadArticleBySlug(s.slug);
      if (!a) { console.log(`✗ ${s.slug} — KHÔNG TÌM THẤY bài`); fail++; continue; }
      const r = qaArticle(a);
      const mark = r.score >= min ? '✓' : '✗';
      console.log(`${mark} ${s.slug.padEnd(45)} ${r.score}/100  ${r.words} từ`);
      if (r.score < min) fail++;
    }
    if (fail) { console.log(`Audit: ${fail} bài dưới ${min} điểm.`); process.exit(1); }
    console.log(`Audit đạt: mọi bài >= ${min} điểm.`);
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
    const r = qaArticle(article);
    console.log(`QA thử ${slot.id} (${slot.slug}): ${r.score}/100 — ${r.pass ? 'ĐẠT' : 'KHÔNG ĐẠT'} (${r.words} từ) — KHÔNG ghi state.`);
    for (const c of r.checks.filter(x => !x.pass)) console.log(`  - [${c.name}] ${c.note}`);
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
        console.log('  5. verify: generate --check + test.js + audit --min-score 90 (fail -> ROLLBACK toàn vẹn)');
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
      execFileSync(process.execPath, [__filename, 'audit', '--min-score', '90'], { stdio: 'inherit' });
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
  usage();
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
};
