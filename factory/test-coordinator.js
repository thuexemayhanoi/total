#!/usr/bin/env node
// AI WIKI TOTAL — kiểm thử PRODUCTION 3 VAI TRÒ (contract + e2e)
//
// Mô hình mới (docs/PRODUCTION-ROLES.md) — mô hình 3 writer song song ĐÃ BỎ:
//   WRITER 1 (writer duy nhất)  : writer-next -> viết pair 2 bài -> push
//                                 -> factory-publish.yml publish exact scope.
//   ĐỐC CÔNG 2 (theo dõi+sửa)   : production-status/liveness đọc heartbeat +
//                                 error-queue; sửa lỗi; quá 3 lần -> escalated.
//   ĐỐC CÔNG 3 (xử lý escalated) : error-resolve sau khi sửa đúng nguyên nhân.
//   Publisher duy nhất: factory-publish.yml (concurrency total-production).
//   Coordinator chỉ còn maintenance tick (KHÔNG cycle-plan/qa/publish).
//
// Contract kiểm tra:
//   · factory-coordinator.yml: maintenance tick đúng thứ tự, KHÔNG commit rỗng
//     (COORD_NO_CHANGES), KHÔNG còn bước cycle 3-writer.
//   · factory-publish.yml: cổng cuối dùng factory/generate.js --check (KHÔNG
//     dùng factory.js generate — lệnh không tồn tại, trước đây exit 0 âm thầm).
//   · factory-liveness.yml: watchdog read-only, exit 1 khi writer đứng/lỗi
//     escalated; KHÔNG push gì.
//   · CLI: lệnh không tồn tại exit 1.
//   · E2E trên bản sao tmp: tick rỗng KHÔNG đổi state (chống churn timestamp);
//     writer pair -> verify-sources -> publish-pair; repair queue + error
//     escalation + resolve; crash/resume orphan; duplicate-publish protection;
//     stall detection trong môi trường kiểm tra an toàn.
//   · State thật PHẢI byte-identical sau toàn suite.
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
let pass = 0, fail = 0;
function ok(cond, name, detail) {
  if (cond) { pass++; }
  else { fail++; console.log(`  ✗ ${name}${detail ? ' — ' + detail : ''}`); }
}
function readB(file) { return fs.readFileSync(file); }
function readS(file) { return fs.readFileSync(file, 'utf8'); }
function writeJson(file, obj) { fs.writeFileSync(file, JSON.stringify(obj, null, 1)); }
function runNode(args, opts) {
  try {
    const stdout = execFileSync(process.execPath, args, { cwd: (opts && opts.cwd) || ROOT, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    return { status: 0, stdout: stdout || '', stderr: '' };
  } catch (e) {
    return { status: typeof e.status === 'number' ? e.status : 1, stdout: e.stdout || '', stderr: e.stderr || String((e && e.message) || e) };
  }
}

const runtime = require('./lib/factory-runtime');

console.log('=== KIỂM THỬ PRODUCTION 3 VAI TRÒ (CONTRACT + E2E) ===');

// State thật TRƯỚC suite — cuối suite phải KHÔNG đổi.
const REAL_STATE_SNAPSHOT = ['matrix.json', 'factory-state.json', 'checkpoint.json', 'manifest.json', 'article-manifest.jsonl']
  .map(f => ({ f, b: readB(path.join(ROOT, 'factory', 'state', f)) }));

// ---------- 1. Workflow + CLI contract ----------
console.log('1. Workflow + CLI contract…');
{
  const wf = readS(path.join(ROOT, '.github', 'workflows', 'factory-coordinator.yml'));
  ok(/schedule:/.test(wf) && /cron:\s*'7,17,27,37,47,57 \* \* \* \*'/.test(wf),
    'factory-coordinator.yml: schedule mỗi 10 phút, cron lệch phút (7,17,27,37,47,57)');
  ok(/workflow_dispatch:/.test(wf), 'factory-coordinator.yml: hỗ trợ workflow_dispatch');
  ok(/permissions:/.test(wf) && /contents:\s*write/.test(wf), 'factory-coordinator.yml: permissions contents: write (commit state)');
  ok(/group:\s*total-production/.test(wf) && /cancel-in-progress:\s*false/.test(wf),
    'factory-coordinator.yml: concurrency group total-production + cancel-in-progress: false');
  // Trình tự maintenance tick.
  const order = [
    ['recover-txn', wf.indexOf('factory.js recover-txn')],
    ['check-state', wf.indexOf('factory.js check-state')],
    ['queue-refill', wf.indexOf('factory.js queue-refill --role coordinator')],
    ['production-status', wf.indexOf('factory.js production-status')],
  ];
  ok(order.every(([, i]) => i >= 0), 'factory-coordinator.yml: đủ maintenance nhẹ', JSON.stringify(order));
  ok(order.every(([n, i], k) => k === 0 || i > order[k - 1][1]),
    'factory-coordinator.yml: đúng thứ tự recover -> state -> refill -> status');
  ok(!/manifest-sync|verify-invariant/.test(wf),
    'factory-coordinator.yml: KHÔNG full O(N) manifest/invariant trong tick 10 phút');
  // MÔ HÌNH 3 WRITER ĐÃ BỎ: coordinator KHÔNG còn cycle steps.
  ok(!/cycle-plan|cycle-qa|cycle-publish|drain-iteration/.test(wf),
    'factory-coordinator.yml: KHÔNG còn cycle-plan/cycle-qa/cycle-publish (bỏ phân công 3 writer)');
  ok(!/audit --min-score/.test(wf), 'factory-coordinator.yml: KHÔNG deep audit trong hot path (manual-only)');
  ok(!/test(-hardening|-reliability|-pair|-cycle)?\.js/.test(wf), 'factory-coordinator.yml: KHÔNG chạy test suite trong tick');
  ok(!/while\s+true/.test(wf), 'factory-coordinator.yml: không vòng lặp vô hạn');
  ok(/timeout-minutes:/.test(wf), 'factory-coordinator.yml: run bounded bởi timeout-minutes');
  // Tick rỗng KHÔNG commit (chống commit/deploy chỉ vì timestamp).
  ok(/COORD_NO_CHANGES/.test(wf) && /git diff --cached --quiet/.test(wf),
    'factory-coordinator.yml: tick không diff -> KHÔNG commit (chống churn timestamp)');
  ok(/for i in 1 2 3/.test(wf), 'factory-coordinator.yml: push bounded retry <= 3');
  ok(wf.includes('Fresh truth') && wf.indexOf('git fetch origin main') < wf.indexOf('factory.js recover-txn') && wf.indexOf('git checkout -B main origin/main') < wf.indexOf('factory.js recover-txn'),
    'factory-coordinator.yml: fetch/checkout fresh main TRƯỚC recover/mutation');
  ok(!/pull_request/.test(wf), 'factory-coordinator.yml: KHÔNG trigger pull_request');

  // Publisher: factory-publish.yml.
  const pub = readS(path.join(ROOT, '.github', 'workflows', 'factory-publish.yml'));
  ok(pub.includes("- 'factory/data/articles/**'") && pub.includes("- '.github/workflows/factory-publish.yml'"),
    'factory-publish.yml: trigger article files + chính workflow');
  ok(/group:\s*total-production/.test(pub) && /cancel-in-progress:\s*false/.test(pub),
    'factory-publish.yml: dùng CHUNG concurrency group total-production — publisher duy nhất, không chạy đè coordinator');
  ok(pub.includes('publish-batch'), 'factory-publish.yml: HOT PATH publish cả batch 1-10 một transaction');
  ok(pub.includes('verify-batch'), 'factory-publish.yml: scoped QA batch trước publish');
  ok(pub.includes('link-integrity.js --ids'), 'factory-publish.yml: 404 gate scoped fail-closed');
  ok(!pub.includes('publish-plan --scope') && !pub.includes('QUEUE_RESULT'),
    'factory-publish.yml: KHÔNG chia queue thành pair trong hot path');
  ok(!pub.includes('node factory/generate.js --check'),
    'factory-publish.yml: KHÔNG full byte-exact generate check trong hot path');
  ok(pub.includes('Capture exact push scope') && pub.includes('Refresh fresh main') && pub.indexOf('Capture exact push scope') < pub.indexOf('Refresh fresh main'),
    'factory-publish.yml: capture exact event scope trước, refresh fresh main sau');
  ok(!pub.includes('backlog --fail-if-claimable'),
    'factory-publish.yml: final gate không fail backlog mới do writer push song song');

  const aq = readS(path.join(ROOT, '.github', 'workflows', 'article-quality.yml'));
  ok(/name:\s*Factory Engine Quality/.test(aq), 'article-quality.yml: engine-only heavy gate');
  ok(!aq.includes("factory/data/articles/**"), 'article-quality.yml: article push KHÔNG chạy pipeline QA trùng');
  ok(aq.includes('test-reliability.js') && aq.includes('verify-invariant') && aq.includes('generate.js --check'),
    'article-quality.yml: engine change vẫn có full heavy gate');

  // Watchdog: factory-liveness.yml.
  const lv = readS(path.join(ROOT, '.github', 'workflows', 'factory-liveness.yml'));
  ok(/cron:\s*'23 \* \* \* \*'/.test(lv), 'factory-liveness.yml: schedule mỗi giờ');
  ok(/node factory\/factory\.js liveness/.test(lv), 'factory-liveness.yml: chạy liveness (read-only stall detection)');
  ok(/contents:\s*read/.test(lv) && !/git push/.test(lv), 'factory-liveness.yml: read-only — KHÔNG push, KHÔNG recover, KHÔNG đánh thức writer');

  // YAML an toàn: MỌI workflow không có inline `run: <lệnh>` chứa ": ".
  {
    const wfDir = path.join(ROOT, '.github', 'workflows');
    const offenders = [];
    for (const f of fs.readdirSync(wfDir).filter(x => x.endsWith('.yml'))) {
      fs.readFileSync(path.join(wfDir, f), 'utf8').split('\n').forEach((l, i) => {
        const m = l.match(/^\s*run:(?!\s*\|)(.*)$/);
        if (m && m[1].trim().includes(': ')) offenders.push(f + ':' + (i + 1));
      });
    }
    ok(offenders.length === 0, 'MỌI workflow yml: inline run KHÔNG chứa ": " (cú pháp YAML hợp lệ)', offenders.join(', '));
  }

  // CLI: lệnh không tồn tại phải exit KHÁC 0.
  const bad = runNode(['factory/factory.js', 'len-khong-ton-tai']);
  ok(bad.status !== 0 && /Lệnh không tồn tại/.test(bad.stderr),
    'CLI: lệnh không tồn tại exit 1 (trước đây rơi vào usage exit 0)', 'rc=' + bad.status + ' ' + (bad.stderr || '').slice(0, 80));
}

// ---------- 2. Unit: 3 vai trò (runtime thuần) ----------
console.log('2. Unit 3 vai trò…');
{
  // selectWriterPair: resume slot dở CÓ bài trước; fresh PLANNED theo ID.
  const mk = (id, state, slug) => ({ id, state, slug: slug || ('s' + id) });
  const m = { slots: [
    mk('S00001', 'PUBLISHED', 'p1'),
    mk('S00002', 'PLANNED', 'p2'),
    mk('S00003', 'REPAIR', 'p3'),   // dở CÓ bài -> resume
    mk('S00004', 'PLANNED', 'p4'),
    mk('S00005', 'WRITING', 'p5'),  // WRITING nhưng KHÔNG có module bài -> bỏ
  ] };
  const w = runtime.selectWriterPair(m, ['p3']);
  ok(w.ids.length === 2 && w.resume[0] === 'S00003' && w.fresh[0] === 'S00002',
    'selectWriterPair: resume slot dở có bài TRƯỚC, fresh PLANNED theo ID sau', JSON.stringify(w.ids));
  ok(!w.ids.includes('S00005'), 'selectWriterPair: slot WRITING chưa có bài KHÔNG vào pair (chống viết trùng/khiếm)');
  ok(!w.ids.includes('S00001'), 'selectWriterPair: KHÔNG bao giờ trả slot PUBLISHED');
  const w1 = runtime.selectWriterPair(m, ['p3'], 1);
  ok(w1.ids.length === 1 && w1.ids[0] === 'S00003', 'selectWriterPair --count 1: đúng 1 ID (resume ưu tiên)');
  const wIdle = runtime.selectWriterPair({ slots: [mk('S00001', 'PUBLISHED')] }, []);
  ok(wIdle.ids.length === 0, 'selectWriterPair: hết queue + không bài dở -> rỗng');

  // classifyProductionState: đủ trạng thái báo cáo riêng.
  ok(runtime.WRITER_STALL_MINUTES === 120 && runtime.DOCONG2_MAX_ATTEMPTS === 3,
    'Hằng số theo dõi: WRITER_STALL_MINUTES=120, DOCONG2_MAX_ATTEMPTS=3');
  const sNone = runtime.classifyProductionState({ waitingForWriter: 5 });
  ok(sNone.phase === 'waiting-writer' && !sNone.stalled, 'classify: chưa có heartbeat + còn slot chờ -> WAITING_WRITER (không phải đứng)');
  const sFresh = runtime.classifyProductionState({ heartbeat: { at: new Date().toISOString(), phase: 'writing' }, nowMs: Date.now() });
  ok(sFresh.phase === 'writing' && !sFresh.stalled, 'classify: heartbeat tươi phase=writing -> ĐANG VIẾT');
  const oldAt = new Date(Date.now() - (runtime.WRITER_STALL_MINUTES + 10) * 60000).toISOString();
  const sStall = runtime.classifyProductionState({ heartbeat: { at: oldAt, phase: 'waiting-publish' }, nowMs: Date.now() });
  ok(sStall.phase === 'stalled' && sStall.stalled, 'classify: heartbeat cũ > ngưỡng khi writing/waiting-publish -> ĐỨNG');
  const sIdleHb = runtime.classifyProductionState({ heartbeat: { at: oldAt, phase: 'idle' }, nowMs: Date.now() });
  ok(sIdleHb.phase === 'idle' && !sIdleHb.stalled, 'classify: heartbeat cũ nhưng phase=idle -> KHÔNG coi là đứng (writer kết thúc sạch)');
  const sErr = runtime.classifyProductionState({ heartbeat: { at: new Date().toISOString(), phase: 'error' }, errors: [] });
  ok(sErr.phase === 'error', 'classify: phase=error -> GẶP LỖI');
  const sEsc = runtime.classifyProductionState({
    heartbeat: { at: new Date().toISOString(), phase: 'writing' },
    errors: [{ status: 'escalated' }], nowMs: Date.now(),
  });
  ok(sEsc.escalated && sEsc.escalatedErrors === 1, 'classify: lỗi escalated -> cần Đốc công 3');

  // upsertError: cùng khóa tăng attempts, escalated đúng ngưỡng, resolve loại khỏi match.
  let st = runtime.upsertError([], { source: 'publisher', pair: 'S00001,S00002', message: 'QA fail' });
  ok(st.entry.attempts === 1 && st.entry.status === 'open', 'upsertError: lỗi mới attempts=1 open');
  st = runtime.upsertError(st.errors, { source: 'publisher', pair: 'S00001,S00002', message: 'sửa lần 2' });
  st = runtime.upsertError(st.errors, { source: 'publisher', pair: 'S00001,S00002', message: 'sửa lần 3' });
  ok(st.entry.attempts === 3 && st.entry.status === 'escalated',
    'upsertError: lần thử thứ ' + runtime.DOCONG2_MAX_ATTEMPTS + ' -> escalated cho Đốc công 3', JSON.stringify(st.entry.status));
  st = runtime.upsertError(st.errors, { source: 'publisher', pair: 'S00001,S00002', message: 'sau resolve, lỗi MỚI' });
  ok(st.entry.attempts === 1 && st.entry.id !== 1, 'upsertError: lỗi đã resolved KHÔNG được tăng attempts — lỗi mới sinh entry riêng');
  const stOther = runtime.upsertError(st.errors, { source: 'writer', pair: '-', message: 'khác nguồn' });
  ok(stOther.entry.id !== st.entry.id, 'upsertError: khác khóa (source/pair) -> entry riêng');
}

// ---------- Hạ tầng e2e ----------
function copyRepoToTmp(tag) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'roles-' + tag + '-'));
  const SKIP = new Set(['.git', 'node_modules']);
  (function cp(dir, rel) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if ((e.name.startsWith('.') && e.name !== '.github') || SKIP.has(e.name)) continue;
      const src = path.join(dir, e.name);
      const dst = path.join(tmp, rel, e.name);
      if (e.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); cp(src, path.join(rel, e.name)); }
      else { fs.copyFileSync(src, dst); }
    }
  })(ROOT, '');
  return tmp;
}
function P(tmp) {
  return {
    root: tmp,
    factory: path.join(tmp, 'factory', 'factory.js'),
    matrix: path.join(tmp, 'factory', 'state', 'matrix.json'),
    txn: path.join(tmp, 'factory', 'state', 'txn.json'),
    lock: path.join(tmp, 'factory', 'state', 'writer.lock'),
    heartbeat: path.join(tmp, 'factory', 'state', 'writer-heartbeat.json'),
    errors: path.join(tmp, 'factory', 'state', 'error-queue.json'),
    artDir: path.join(tmp, 'factory', 'data', 'articles'),
    stateDir: path.join(tmp, 'factory', 'state'),
  };
}
function fixtureArticle(slot) {
  const [cat, hub] = String(slot.hub).split('/');
  const p = (i) => `<p>Đoạn kiểm thử ${i}: quy trình thuê xe máy tại Hà Nội gồm chuẩn bị giấy tờ, kiểm tra tình trạng xe, ký hợp đồng, đặt cọc và nghiệm thu khi hoàn trả. Người thuê nên đối chiếu kỹ từng điều khoản, chụp lại hình ảnh hiện trạng xe trước khi nhận và giữ trọn bộ giấy tờ trong suốt thời gian sử dụng. Nắm lịch bảo dưỡng giúp nhận diện sớm tiếng động bất thường ở máy, mức mòn của lốp và độ nhạy của phanh trước khi vấn đề lớn dần.</p>`;
  const sec = (h2, from, to) => ({ h2, html: Array.from({ length: to - from }, (_, k) => p(from + k)).join('\n') });
  return {
    slug: slot.slug,
    title: slot.title,
    seoTitle: 'Quy trình thuê xe máy kiểm thử 3 vai trò của xưởng nội dung',
    metaDescription: 'Bài kiểm thử 3 vai trò mô tả quy trình thuê xe máy tại Hà Nội: giấy tờ, hợp đồng, đặt cọc và nghiệm thu khi trả xe an toàn cho cả hai bên tham gia đầy đủ.',
    summary: 'Tổng hợp quy trình thuê xe máy dùng cho kiểm thử 3 vai trò của xưởng nội dung, bám sát các bước giấy tờ, hợp đồng, đặt cọc, vận hành và nghiệm thu đầy đủ.',
    quickAnswer: 'Quy trình gồm bốn bước chính: chuẩn bị giấy tờ theo yêu cầu, kiểm tra hiện trạng xe, ký hợp đồng và đặt cọc, nghiệm thu khi hoàn trả đúng hạn để nhận lại tiền cọc.',
    keyPoints: [
      'Chuẩn bị đầy đủ giấy tờ tùy thân theo yêu cầu của bên cho thuê trước khi nhận xe.',
      'Kiểm tra hiện trạng xe, chụp ảnh lưu vết và ghi rõ vào biên bản giao nhận.',
      'Đọc kỹ hợp đồng, đặc biệt các điều khoản về tiền cọc, thời hạn và bồi thường.',
      'Nghiệm thu đúng hẹn và giữ lại biên bản trả xe để tránh tranh chấp về sau.',
    ],
    category: cat, hub,
    date: '2026-10-06', updated: '2026-10-06',
    entities: ['thuê xe máy', 'Hà Nội', 'hợp đồng', 'đặt cọc'],
    keywords: ['thuê xe máy hà nội', 'quy trình thuê xe', 'hợp đồng thuê xe', 'đặt cọc thuê xe'],
    sections: [sec('Bước chuẩn bị trước khi thuê', 1, 7), sec('Kiểm tra hiện trạng xe', 7, 13), sec('Ký hợp đồng và đặt cọc', 13, 19), sec('Vận hành trong thời gian thuê', 19, 25), sec('Nghiệm thu khi hoàn trả', 25, 31), sec('Lưu ý sau lần thuê', 31, 37)],
    checklist: ['Giấy tờ tùy thân còn hiệu lực.', 'Ảnh hiện trạng xe trước và sau khi nhận.', 'Hợp đồng ghi rõ mức cọc và thời hạn.', 'Biên bản giao nhận có chữ ký hai bên.'],
    steps: [
      { title: 'Chuẩn bị giấy tờ', detail: 'Mang theo giấy tờ tùy thân còn hiệu lực và bản sao để đối chiếu.' },
      { title: 'Kiểm tra xe', detail: 'Chạy thử, thử phanh, soi đèn và ghi lại mọi vết xước.' },
      { title: 'Ký hợp đồng', detail: 'Đọc kỹ điều khoản cọc, thời hạn và trách nhiệm bồi thường.' },
      { title: 'Nghiệm thu', detail: 'Trả xe đúng hẹn, chụp ảnh đối chiếu biên bản ban đầu.' },
    ],
    warnings: ['Không thuê khi giấy tờ đã hết hạn.', 'Không ký hợp đồng thiếu điều khoản về cọc.'],
    notes: ['Nội dung chỉ mang tính tham khảo, không phải tư vấn pháp lý.'],
    references: ['Nghị định về hợp đồng thuê tài sản.', 'Hướng dẫn vận hành xe máy an toàn.'],
    related: ['kinh-nghiem-thue-xe-may-ha-noi', 'thu-honda-vision-ha-noi'],
  };
}
function lowQaArticle(slot) {
  const a = fixtureArticle(slot);
  a.seoTitle = 'Ngắn.'; a.metaDescription = 'Ngắn.';
  a.checklist = []; a.warnings = []; a.notes = [];
  a.date = 'sai-ngay'; a.updated = 'sai-ngay';
  a.keywords = ['thuê xe máy hà nội'];
  return a;
}
// Giả lập maintenance tick y hệt factory-coordinator.yml (bash -> node CLI).
function tick(p) {
  const steps = {};
  steps.recover = runNode([p.factory, 'recover-txn'], { cwd: p.root });
  if (steps.recover.status !== 0) return steps;
  steps.state = runNode([p.factory, 'check-state'], { cwd: p.root });
  if (steps.state.status !== 0) return steps;
  steps.refill = runNode([p.factory, 'queue-refill', '--role', 'coordinator'], { cwd: p.root });
  if (steps.refill.status !== 0) return steps;
  steps.status = runNode([p.factory, 'production-status'], { cwd: p.root });
  return steps;
}
function allOk(steps) {
  const names = Object.keys(steps).filter(k => typeof steps[k] === 'object' && 'status' in steps[k]);
  return names.length && names.every(k => steps[k].status === 0);
}
function writerNext(p, count) {
  const args = [p.factory, 'writer-next'];
  if (count) args.push('--count', String(count));
  const r = runNode(args, { cwd: p.root });
  const ids = ((r.stdout.match(/^WRITER_NEXT ids=([^ \n]*)/m) || [])[1] || '').split(',').filter(Boolean);
  return { r, ids };
}
function publishedCount(p) {
  return JSON.parse(readS(p.matrix)).slots.filter(s => s.state === 'PUBLISHED').length;
}

// ---------- 3. E2E tick rỗng: KHÔNG đổi state (chống churn timestamp) ----------
console.log('3. Tick rỗng — maintenance không churn state…');
let T3;
{
  const tmp = copyRepoToTmp('t3');
  const p = P(tmp);
  const before = { matrix: readB(p.matrix), state: readB(path.join(p.stateDir, 'factory-state.json')), cp: readB(path.join(p.stateDir, 'checkpoint.json')) };
  const steps = tick(p);
  ok(steps.recover.status === 0 && /TXN_RECOVER none/.test(steps.recover.stdout), 'Tick bắt đầu: recover-txn sạch');
  ok(allOk(steps), 'Tick nhẹ: mọi bước exit 0', JSON.stringify(Object.fromEntries(Object.entries(steps).map(([k, v]) => [k, v.status]))));
  ok(/QUEUE_REFILL (none|added=0)/.test(steps.refill.stdout), 'queue-refill không topic tự do -> added=0/none, KHÔNG thêm slot', steps.refill.stdout);
  ok(readB(p.matrix).equals(before.matrix) &&
     readB(path.join(p.stateDir, 'factory-state.json')).equals(before.state) &&
     readB(path.join(p.stateDir, 'checkpoint.json')).equals(before.cp),
    'Tick rỗng: matrix/factory-state/checkpoint BYTE-IDENTICAL — không commit chỉ vì timestamp');
  ok(/PRODUCTION_STATUS phase=/.test(steps.status.stdout), 'Tick báo production-status rõ ràng', steps.status.stdout.split('\n')[0]);
  // Tick lặp ngay sau: vẫn sạch, vẫn không churn.
  const steps2 = tick(p);
  ok(allOk(steps2) && readB(p.matrix).equals(before.matrix), 'Tick lặp: idempotent, không phình ma trận');
  T3 = { tmp, p, before };
}

// ---------- 4. E2E Writer 1 pair: writer-next -> viết -> verify-sources -> publish-pair ----------
console.log('4. Writer 1 pair e2e…');
let T4;
{
  const { tmp, p } = T3;
  const hb1 = runNode([p.factory, 'writer-heartbeat', '--phase', 'writing', '--note', 'bắt đầu pair'], { cwd: tmp });
  ok(hb1.status === 0 && /WRITER_HEARTBEAT/.test(hb1.stdout), 'Writer 1 báo heartbeat writing');
  const { r: wn, ids } = writerNext(p);
  ok(wn.status === 0 && ids.length === 2, 'writer-next: trả đúng pair 2 ID', wn.stdout);
  ok(/reason=resume:0,new:2/.test(wn.stdout), 'writer-next: 2 slot PLANNED mới (không trùng bài đã có)', wn.stdout.split('\n')[0]);
  const m0 = JSON.parse(readS(p.matrix));
  const byId = new Map(m0.slots.map(s => [s.id, s]));
  const basePublished = publishedCount(p);
  const baseRows = Number(((runNode([p.factory, 'manifest-sync', '--role', 'coordinator'], { cwd: tmp }).stdout.match(/rows=(\d+)/) || [])[1]) || 0);
  // Writer viết 2 bài thật (module chuẩn) cho đúng 2 slot.
  for (const id of ids) {
    const slot = byId.get(id);
    fs.writeFileSync(path.join(p.artDir, 'zz-roles-' + slot.slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(slot)) + ';\n');
  }
  // Pre-publish gate read-only (writer chạy TRƯỚC khi push).
  const vs = runNode([p.factory, 'verify-sources', ids.join(',')], { cwd: tmp });
  ok(vs.status === 0 && /VERIFY_SOURCES_OK/.test(vs.stdout), 'verify-sources: pair đạt QA trước khi push', vs.stdout + vs.stderr);
  const hb2 = runNode([p.factory, 'writer-heartbeat', '--phase', 'waiting-publish', '--pair', ids.join(',')], { cwd: tmp });
  ok(hb2.status === 0, 'Writer 1 báo heartbeat waiting-publish sau khi nộp pair');
  // Publisher (factory-publish.yml mô phỏng bằng publish-pair exact scope).
  const pp = runNode([p.factory, 'publish-pair', ids.join(','), '--owner', 'ci-publisher'], { cwd: tmp });
  ok(pp.status === 0 && /PAIR_RESULT ok=published ids=/.test(pp.stdout), 'publish-pair: pair PUBLISHED đúng một lần', pp.stdout + pp.stderr);
  ok(publishedCount(p) === basePublished + 2, 'PUBLISHED tăng đúng +2 (không trùng, không mất)', publishedCount(p) + ' vs ' + (basePublished + 2));
  const m1 = JSON.parse(readS(p.matrix));
  for (const id of ids) {
    const s = m1.slots.find(x => x.id === id);
    ok(s.state === 'PUBLISHED', 'Slot ' + id + ' PUBLISHED');
    ok(fs.existsSync(path.join(tmp, s.hub, s.slug, 'index.html')), 'Trang sinh đúng hub/slug cho ' + id);
    ok(readS(path.join(tmp, 'sitemap-articles.xml')).includes(s.slug), 'Sitemap chứa bài ' + id);
  }
  ok(!fs.existsSync(p.txn) && !fs.existsSync(p.lock), 'Txn COMMIT + lock thả sạch sau publish');
  const ms = runNode([p.factory, 'manifest-sync', '--role', 'coordinator'], { cwd: tmp });
  const rows = Number(((ms.stdout.match(/rows=(\d+)/) || [])[1]) || 0);
  ok(rows === baseRows + 2, 'Manifest JSONL: thêm đúng 2 row cho 2 bài mới (source of truth)', rows + ' vs ' + (baseRows + 2));
  const st = runNode([p.factory, 'production-status'], { cwd: tmp });
  ok(/phase=waiting-publish/.test(st.stdout), 'production-status: báo riêng trạng thái chờ publish', st.stdout.split('\n')[0]);
  T4 = { tmp, p, ids, basePublished };
}

// ---------- 5. KHÔNG duplicate publish / resume không xuất bản lại bài cũ ----------
console.log('5. Duplicate-publish protection…');
{
  const { tmp, p, ids, basePublished } = T4;
  // Publisher nhận lại cùng scope (push repair/idempotent): chấm lại + sinh lại
  // đúng IDs, KHÔNG tăng PUBLISHED, KHÔNG double-publish.
  const again = runNode([p.factory, 'publish-pair', ids.join(','), '--owner', 'ci-publisher'], { cwd: tmp });
  ok(again.status === 0 && /PAIR_RESULT ok=republished/.test(again.stdout),
    'publish-pair trên ID đã PUBLISHED: repair mode (chấm lại đúng IDs) — KHÔNG double-publish', again.stdout);
  ok(publishedCount(p) === basePublished + 2, 'PUBLISHED KHÔNG tăng khi xử lý lại scope cũ (resume an toàn)');
  const bl = runNode([p.factory, 'backlog', '--fail-if-claimable'], { cwd: tmp });
  ok(bl.status === 0, 'backlog --fail-if-claimable: hết backlog article-backed sau pair (CI xanh thật)');
  const cs = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(cs.status === 0, 'check-state sạch sau pair + republish');
}

// ---------- 6. Repair queue + Đốc công 2 escalation -> Đốc công 3 resolve ----------
console.log('6. Repair + error-queue escalation…');
let T6;
{
  const { tmp, p } = T4;
  const { ids } = writerNext(p);
  ok(ids.length === 2, 'writer-next pair tiếp theo');
  const m = JSON.parse(readS(p.matrix));
  const byId = new Map(m.slots.map(s => [s.id, s]));
  const goodId = ids[0], badId = ids[1];
  fs.writeFileSync(path.join(p.artDir, 'zz-roles-' + byId.get(goodId).slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(byId.get(goodId))) + ';\n');
  fs.writeFileSync(path.join(p.artDir, 'zz-roles-' + byId.get(badId).slug + '.js'), 'module.exports = ' + JSON.stringify(lowQaArticle(byId.get(badId))) + ';\n');
  const before = publishedCount(p);
  const pp = runNode([p.factory, 'publish-pair', ids.join(','), '--owner', 'ci-publisher'], { cwd: tmp });
  ok(pp.status === 0 && /PAIR_REJECT/.test(pp.stdout) && /repaired=/.test(pp.stdout),
    'Bài FAIL -> REPAIR queue (KHÔNG giữ pair); bài PASS vẫn publish', pp.stdout);
  ok(publishedCount(p) === before + 1, 'Chỉ bài PASS lên PUBLISHED (+1)', publishedCount(p) + ' vs ' + (before + 1));
  const m2 = JSON.parse(readS(p.matrix));
  const bad = m2.slots.find(s => s.id === badId);
  ok(bad.state === 'REPAIR' && bad.qaScore < 70, 'Slot FAIL vào REPAIR queue (qaScore < 70)');
  ok(!fs.existsSync(path.join(tmp, bad.hub, bad.slug, 'index.html')), 'Bài FAIL KHÔNG render trang (draft không rò lên site)');
  // Đối chiếu URL CHÍNH XÁC (/slug/</loc>) — includes() cho false positive khi
  // repo thật có bài PUBLISHED trùng/trùng tiền tố slug fixture ( tăng trưởng bình thường).
  ok(!new RegExp('/' + bad.slug + '/</loc>').test(readS(path.join(tmp, 'sitemap-articles.xml'))),
    'Bài FAIL KHÔNG nằm trong sitemap-articles (URL chính xác, không substring)');
  // ĐỐC CÔNG 2: theo dõi, thử sửa, ghi từng lần thử; quá ngưỡng -> escalated.
  const e1 = runNode([p.factory, 'error-log', '--source', 'publisher', '--pair', badId, '--message', 'QA fail ' + badId + ' — thử 1: sửa meta'], { cwd: tmp });
  ok(e1.status === 0 && /attempts=1 status=open/.test(e1.stdout), 'error-log lần 1: open', e1.stdout);
  runNode([p.factory, 'error-log', '--source', 'publisher', '--pair', badId, '--message', 'thử 2: sửa checklist'], { cwd: tmp });
  const e3 = runNode([p.factory, 'error-log', '--source', 'publisher', '--pair', badId, '--message', 'thử 3: vẫn fail'], { cwd: tmp });
  ok(/status=escalated/.test(e3.stdout) && /ĐỐC CÔNG 3/.test(e3.stdout), 'Lần thử thứ 3 -> escalated cho Đốc công 3', e3.stdout);
  const lv1 = runNode([p.factory, 'liveness'], { cwd: tmp });
  ok(lv1.status !== 0 && /escalated/.test(lv1.stderr + lv1.stdout), 'Watchdog liveness: ĐỎ khi có lỗi escalated (phát hiện chuyển lỗi)', (lv1.stderr || lv1.stdout).slice(0, 150));
  // ĐỐC CÔNG 3: audit đúng lỗi escalated, sửa đúng nguyên nhân (bài thật sự
  // đạt QA), bàn giao lại Đốc công 2 — Writer 1 chạy tiếp.
  fs.writeFileSync(path.join(p.artDir, 'zz-roles-' + bad.slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(byId.get(badId))) + ';\n');
  const fix = runNode([p.factory, 'publish-pair', badId, '--owner', 'docong3'], { cwd: tmp });
  ok(fix.status === 0 && /ok=published|ok=republished/.test(fix.stdout), 'Đốc công 3 sửa xong: bài REPAIR publish lại thành công', fix.stdout);
  const res = runNode([p.factory, 'error-resolve', '--id', '1', '--note', 'gốc rễ: bài thiếu cấu trúc QA — đã viết lại đủ chuẩn'], { cwd: tmp });
  ok(res.status === 0 && /ERROR_RESOLVE id=1/.test(res.stdout), 'error-resolve: đóng lỗi, bàn giao Đốc công 2', res.stdout);
  const lv2 = runNode([p.factory, 'liveness'], { cwd: tmp });
  ok(lv2.status === 0, 'Watchdog liveness XANH lại sau khi lỗi được giải quyết');
  const eq = runNode([p.factory, 'error-queue'], { cwd: tmp });
  ok(/escalated=0/.test(eq.stdout) && /resolved=1/.test(eq.stdout), 'error-queue: escalated=0, resolved=1 (sạch phiếu)', eq.stdout.split('\n').pop());
  T6 = { tmp, p };
}

// ---------- 7. Crash/resume: txn marker + slot PASS mồ côi resume đúng một lần ----------
console.log('7. Crash/resume…');
{
  const { tmp, p } = T6;
  const { ids: orphanIds } = writerNext(p, 1);
  const orphanId = orphanIds[0];
  const m = JSON.parse(readS(p.matrix));
  const byId = new Map(m.slots.map(s => [s.id, s]));
  // Writer hoàn thành bài, QA PASS, "crash" TRƯỚC publish -> txn sót.
  fs.writeFileSync(path.join(p.artDir, 'zz-roles-' + byId.get(orphanId).slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(byId.get(orphanId))) + ';\n');
  runNode([p.factory, 'research', orphanId], { cwd: tmp });
  runNode([p.factory, 'write', orphanId], { cwd: tmp });
  const qa = runNode([p.factory, 'qa', orphanId], { cwd: tmp });
  ok(qa.status === 0 && /ĐẠT/.test(qa.stdout), 'Bài mồ côi QA PASS trước khi "crash"', qa.stdout);
  writeJson(p.txn, { ids: [orphanId], phase: 'publishing', at: new Date().toISOString(), owner: 'ci-publisher' });
  const csDirty = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(csDirty.status !== 0, 'txn marker sót: check-state từ chối (state bẩn phát hiện được)');
  const rec = runNode([p.factory, 'recover-txn'], { cwd: tmp });
  ok(rec.status === 0 && /TXN_RECOVER rolled-back ids=/.test(rec.stdout), 'recover-txn: rolled-back idempotent', rec.stdout);
  // Writer 1 resume từ trạng thái thật: writer-next trả slot dở CÓ bài trước.
  const { r: wn, ids } = writerNext(p, 1);
  ok(ids[0] === orphanId && /reason=resume:1/.test(wn.stdout),
    'writer-next sau crash: RESUME đúng slot dở có bài (không viết trùng, không mất)', wn.stdout);
  const before = publishedCount(p);
  const pp = runNode([p.factory, 'publish-pair', orphanId, '--owner', 'ci-publisher'], { cwd: tmp });
  ok(pp.status === 0 && /ok=published/.test(pp.stdout), 'Bài mồ côi publish đúng MỘT lần sau resume', pp.stdout);
  ok(publishedCount(p) === before + 1, 'PUBLISHED +1 đúng (không xuất bản lại bài cũ)');
  const bl = runNode([p.factory, 'backlog', '--fail-if-claimable'], { cwd: tmp });
  ok(bl.status === 0, 'Hết backlog claimable — luồng pair drain sạch');
}

// ---------- 8. Stall detection (môi trường kiểm tra an toàn) ----------
console.log('8. Stall detection an toàn…');
{
  const { tmp, p } = T6;
  runNode([p.factory, 'writer-heartbeat', '--phase', 'writing', '--note', 'đang viết'], { cwd: tmp });
  const st1 = runNode([p.factory, 'production-status'], { cwd: tmp });
  ok(/phase=writing stalled=false/.test(st1.stdout), 'Heartbeat tươi: ĐANG VIẾT — không báo đứng', st1.stdout.split('\n')[0]);
  ok(runNode([p.factory, 'liveness'], { cwd: tmp }).status === 0, 'Liveness XANH khi writer đang tiến triển');
  // Giả lập writer đứng: heartbeat cũ hơn ngưỡng khi phase=writing.
  const old = new Date(Date.now() - (runtime.WRITER_STALL_MINUTES + 30) * 60000).toISOString();
  writeJson(p.heartbeat, { schemaVersion: 1, at: old, phase: 'writing', pair: null, note: 'giả lập mất phiên' });
  const st2 = runNode([p.factory, 'production-status'], { cwd: tmp });
  ok(/phase=stalled stalled=true/.test(st2.stdout), 'Heartbeat cũ > ngưỡng: báo ĐỨNG rõ ràng (stalled=true)', st2.stdout.split('\n')[0]);
  ok(/REASON heartbeat cũ/.test(st2.stdout), 'Lý do đứng được ghi rõ kèm số phút', st2.stdout);
  const lv = runNode([p.factory, 'liveness'], { cwd: tmp });
  ok(lv.status !== 0 && /ĐỨNG/.test(lv.stderr), 'Watchdog liveness: ĐỎ khi writer đứng — Actions thấy đỏ, không ẩn sau tick xanh', (lv.stderr || '').slice(0, 120));
  // Writer resume (phiên mới) -> heartbeat tươi -> XANH lại.
  runNode([p.factory, 'writer-heartbeat', '--phase', 'waiting-writer'], { cwd: tmp });
  ok(runNode([p.factory, 'liveness'], { cwd: tmp }).status === 0, 'Phiên writer mới resume: liveness XANH lại');
  // Idle thật: hết slot chờ writer -> phase=idle, KHÔNG phải lỗi.
  const tmpIdle = copyRepoToTmp('t8');
  const pIdle = P(tmpIdle);
  const mi = JSON.parse(readS(pIdle.matrix));
  for (const s of mi.slots) { s.state = 'PUBLISHED'; if (s.qaScore == null) s.qaScore = 75; }
  writeJson(pIdle.matrix, mi);
  const cp = JSON.parse(readS(path.join(tmpIdle, 'factory', 'state', 'checkpoint.json')));
  cp.slotCount = mi.slots.length;
  writeJson(path.join(tmpIdle, 'factory', 'state', 'checkpoint.json'), cp);
  const stIdle = runNode([pIdle.factory, 'production-status'], { cwd: tmpIdle });
  ok(/phase=idle/.test(stIdle.stdout) && /WAITING_FOR_WRITER=0/.test(stIdle.stdout),
    'Hết queue: phase=idle (hoàn tất) — KHÔNG coi là đứng', stIdle.stdout.split('\n')[0]);
  ok(runNode([pIdle.factory, 'liveness'], { cwd: tmpIdle }).status === 0, 'Idle sạch: liveness XANH');
  fs.rmSync(tmpIdle, { recursive: true, force: true });
}

// ---------- 9. State thật byte-safe ----------
console.log('9. State thật nguyên vẹn…');
{
  let intact = true;
  for (const { f, b } of REAL_STATE_SNAPSHOT) {
    const now = readB(path.join(ROOT, 'factory', 'state', f));
    if (!now.equals(b)) { intact = false; console.log(`  ✗ factory/state/${f} BỊ THAY ĐỔI`); }
  }
  ok(intact, '5 file state production BYTE-IDENTICAL sau toàn bộ suite (mọi e2e dùng copy tmp)');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'writer.lock')), 'Không writer.lock bỏ lại trên repo thật');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'txn.json')), 'Không txn marker bỏ lại trên repo thật');
}

console.log(`\nKẾT QUẢ: ${pass} pass, ${fail} fail.`);
if (fail > 0) { console.log('KIỂM TRA THẤT BẠI: production 3 vai trò có regression.'); process.exit(1); }
console.log('PASS: PRODUCTION 3 VAI TRÒ (writer pair + watchdog + escalation + crash-resume) đạt toàn bộ contract.');
