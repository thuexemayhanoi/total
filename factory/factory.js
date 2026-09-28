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

// ---------- Ma trận chủ đề (10.000 slot) ----------
function loadMatrix() {
  const m = readJson(MATRIX_FILE, null);
  if (!m) {
    console.error('Chưa có ma trận chủ đề — hãy tạo factory/state/matrix.json.');
    process.exit(1);
  }
  return m;
}
function saveMatrix(m) { atomicWrite(MATRIX_FILE, JSON.stringify(m, null, 1)); }

function slotId(m) { return 'S' + String(m.slots.length + 1).padStart(5, '0'); }

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

// ---------- QA ----------
function loadArticleBySlug(slug) {
  const dir = path.join(__dirname, 'data', 'articles');
  if (!fs.existsSync(dir)) return null;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js')) continue;
    try {
      const a = require(path.join(dir, f));
      if (a.slug === slug) {
        return { ...a, path: a.hub ? `${a.category}/${a.hub}/${a.slug}/` : `${a.category}/${a.slug}/` };
      }
    } catch (e) { /* bỏ qua file lỗi */ }
  }
  return null;
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
  publish                         Sinh lại site + chạy toàn bộ test
  audit [--min-score 90]          Rà mọi bài PUBLISHED
  resume                          Tiếp tục từ checkpoint`);
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
    const m = loadMatrix();
    for (const s of m.slots.filter(x => x.state === 'PASS')) {
      s.state = 'PUBLISHED';
      s.updatedAt = new Date().toISOString();
    }
    saveMatrix(m);
    saveState(loadState(), 'publish');
    publishAll();
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
module.exports = { TRANSITIONS, planSlot, transition };
