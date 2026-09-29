#!/usr/bin/env node
// AI WIKI TOTAL — CONTENT FACTORY
// Một writer duy nhất (writer lock), checkpoint, bảo vệ transaction, resume.
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const STATE_DIR = path.join(__dirname, 'state');
const STATE_FILE = path.join(STATE_DIR, 'factory-state.json');
const MATRIX_FILE = path.join(STATE_DIR, 'matrix.json');
const LOCK_FILE = path.join(STATE_DIR, 'writer.lock');
const CHECKPOINT_FILE = path.join(STATE_DIR, 'checkpoint.json');
const LOCK_TTL_MS = 30 * 60 * 1000; // 30 phút

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

// ---------- Writer lock ----------
function lockOwner() {
  if (!fs.existsSync(LOCK_FILE)) return null;
  const cur = readJson(LOCK_FILE, null);
  if (!cur) return null;
  // Quá hạn TTL → coi như lock chết
  if (Date.now() - new Date(cur.at).getTime() > LOCK_TTL_MS) {
    fs.unlinkSync(LOCK_FILE);
    console.log(`Writer lock cũ của "${cur.owner}" đã quá hạn — đã giải phóng.`);
    return null;
  }
  return cur;
}
function acquireLock(owner) {
  const cur = lockOwner();
  if (cur && cur.owner !== owner) {
    console.error(`BỊ TỪ CHỐI: writer lock đang giữ bởi "${cur.owner}" (từ ${new Date(cur.at).toISOString()}).`);
    process.exit(1);
  }
  atomicWrite(LOCK_FILE, JSON.stringify({ owner, at: new Date().toISOString() }, null, 1));
  console.log(`Writer lock: cấp cho "${owner}".`);
}
function releaseLock() {
  if (fs.existsSync(LOCK_FILE)) fs.unlinkSync(LOCK_FILE);
  console.log('Writer lock: đã giải phóng.');
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

function planSlot(m, { hub, slug, title, intent, notes }) {
  if (m.slots.length + 1 > m.capacity) throw new Error('Vượt sức chứa ma trận ' + m.capacity);
  const dup = m.slots.find(s => s.slug === slug);
  if (dup) throw new Error(`Slot trùng slug: ${slug} (state ${dup.state})`);
  m.slots.push({
    id: slotId(m), hub, slug, title, primaryIntent: intent || '', notes: notes || '',
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
const PUBLISH_CHUNK_LIMIT = 10;

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

// ---------- CLI ----------
function usage() {
  console.log(`AI WIKI TOTAL — CONTENT FACTORY
Lệnh:
  status                          Xem trạng thái xưởng + ma trận
  lock <owner>                    Xin writer lock
  unlock                          Giải phóng writer lock
  plan <hub> <slug> <title>       Thêm slot PLANNED vào ma trận
  list                            Liệt kê slot
  research <id>                   PLANNED → RESEARCH
  write <id>                      RESEARCH → WRITING
  qa <id>                         Chấm QA bài của slot
  publish <ID> [<ID>...]       Publish slot PASS theo ID tường minh (atomic,
                               tối đa 10 ID; cổng sinh lại site + test xanh
                               mới ghi state, fail thì giữ nguyên để resume)
  audit [--min-score 90]          Rà mọi bài PUBLISHED
  resume                          Tiếp tục từ checkpoint
  expand-capacity <N> [--dry-run] Mở rộng capacity ma trận (chỉ tăng, KHÔNG shrink)
  set-planned-target <N> [--dry-run] Đặt mục tiêu kế hoạch (<= capacity, >= số slot đã có)`);
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
    const lo = lockOwner();
    console.log('=== AI WIKI TOTAL FACTORY ===');
    console.log('Writer lock:', lo ? `đang giữ bởi "${lo.owner}"` : 'trống');
    console.log('Sức chứa ma trận:', m.capacity, '| đã dùng:', m.slots.length, '| dự phòng:', m.capacity - m.slots.length);
    const dist = {};
    for (const s of m.slots) dist[s.state] = (dist[s.state] || 0) + 1;
    console.log('Phân bố trạng thái:', JSON.stringify(dist));
    const st = loadState();
    console.log('Hành động cuối:', st.lastAction ? `${st.lastAction.action} @ ${st.lastAction.at}` : 'chưa có');
    if (m.reserved) console.log('Reserve:', JSON.stringify(m.reserved, null, 1));
    return;
  }
  if (cmd === 'lock') { acquireLock(rest[0] || 'agent'); return; }
  if (cmd === 'unlock') { releaseLock(); return; }
  if (cmd === 'list') {
    const m = loadMatrix();
    for (const s of m.slots) console.log(`${s.id}  ${s.state.padEnd(9)} qa=${s.qaScore == null ? '-' : s.qaScore}  ${s.hub}  ${s.slug}`);
    return;
  }
  if (cmd === 'plan') {
    const m = loadMatrix();
    const [hub, slug, ...title] = rest;
    if (!hub || !slug || !title.length) { console.error('Cần: plan <hub> <slug> <tiêu đề...>'); process.exit(1); }
    planSlot(m, { hub, slug, title: title.join(' '), intent: rest[rest.length - 1] !== slug ? '' : '' });
    saveMatrix(m);
    saveState(loadState(), 'plan:' + slug);
    console.log(`Đã thêm slot ${m.slots[m.slots.length - 1].id} (${slug}) → PLANNED`);
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
    const lo = lockOwner();
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
    acquireLock(isExpand ? 'expand-capacity' : 'set-planned-target');
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
      releaseLock();
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
    releaseLock();
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
};
