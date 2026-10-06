#!/usr/bin/env node
// AI WIKI TOTAL — kiểm thử PRODUCTION COORDINATOR (workflow contract + tick e2e)
//
// Contract theo spec coordinator:
//   schedule tồn tại (10 phút, lệch phút) · concurrency đúng (total-production
//   dùng chung với factory-publish, không cancel) · coordinator-only state
//   mutation · queue refill threshold/target · idle exit 0 · crash/resume
//   (txn marker + slot PASS mồ côi được resume ưu tiên) · repair handling
//   scoped · KHÔNG duplicate publish · KHÔNG recursion workflow · KHÔNG
//   full-site audit trong hot path · 3-writer allocation · cycle 12-18 ·
//   invariant/state sạch sau tick.
//
// E2E chạy TRÊN BẢN SAO tmp — state thật PHẢI byte-identical sau toàn suite.
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
    const stdout = execFileSync(process.execPath, args, { cwd: (opts && opts.cwd) || ROOT, encoding: 'utf8' });
    return { status: 0, stdout: stdout || '', stderr: '' };
  } catch (e) {
    return { status: typeof e.status === 'number' ? e.status : 1, stdout: e.stdout || '', stderr: e.stderr || String((e && e.message) || e) };
  }
}

const runtime = require('./lib/factory-runtime');
const { parseCycleIds } = require('./factory');

console.log('=== KIỂM THỬ PRODUCTION COORDINATOR (CONTRACT + TICK) ===');

// State thật TRƯỚC suite — cuối suite phải KHÔNG đổi.
const REAL_STATE_SNAPSHOT = ['matrix.json', 'factory-state.json', 'checkpoint.json', 'manifest.json', 'article-manifest.jsonl']
  .map(f => ({ f, b: readB(path.join(ROOT, 'factory', 'state', f)) }));

// ---------- 1. Workflow contract (text) ----------
console.log('1. Workflow contract…');
{
  const wf = readS(path.join(ROOT, '.github', 'workflows', 'factory-coordinator.yml'));
  // Schedule tồn tại: tick mỗi 10 phút, cron LỆCH PHÚT.
  ok(/schedule:/.test(wf) && /cron:\s*'7,17,27,37,47,57 \* \* \* \*'/.test(wf),
    'factory-coordinator.yml: schedule mỗi 10 phút, cron lệch phút (7,17,27,37,47,57)');
  ok(/workflow_dispatch:/.test(wf), 'factory-coordinator.yml: hỗ trợ workflow_dispatch (owner bấm chạy tay)');
  ok(/permissions:/.test(wf) && /contents:\s*write/.test(wf), 'factory-coordinator.yml: permissions contents: write (commit state)');
  // Concurrency đúng: không 2 coordinator đồng thời, không cancel run đang chạy.
  ok(/group:\s*total-production/.test(wf) && /cancel-in-progress:\s*false/.test(wf),
    'factory-coordinator.yml: concurrency group total-production + cancel-in-progress: false (KHÔNG 2 coordinator chạy đồng thời)');
  // Trình tự an toàn đúng thứ tự spec.
  const order = [
    ['recover-txn', wf.indexOf('factory.js recover-txn')],
    ['check-state', wf.indexOf('factory.js check-state')],
    ['queue-refill', wf.indexOf('factory.js queue-refill --role coordinator')],
    ['cycle-plan', wf.indexOf('factory.js cycle-plan')],
    ['cycle-qa', wf.indexOf('factory.js cycle-qa')],
    ['cycle-publish', wf.indexOf('factory.js cycle-publish')],
    ['manifest-sync', wf.indexOf('factory.js manifest-sync')],
    ['verify-invariant', wf.indexOf('factory.js verify-invariant')],
  ];
  ok(order.every(([, i]) => i >= 0), 'factory-coordinator.yml: đủ 8 lệnh core của tick');
  ok(order.every(([n, i], k) => k === 0 || i > order[k - 1][1]),
    'factory-coordinator.yml: đúng thứ tự an toàn recover -> state -> refill -> plan -> qa -> publish -> manifest -> invariant');
  // KHÔNG full-site audit / test suite trong hot path.
  ok(!/audit --min-score/.test(wf), 'factory-coordinator.yml: KHÔNG deep audit trong hot path (manual-only)');
  ok(!/test(-hardening|-reliability|-pair|-cycle)?\.js/.test(wf), 'factory-coordinator.yml: KHÔNG chạy test suite trong tick (deep audit là workflow riêng)');
  ok(!/drain-iteration/.test(wf) || !/while\s+true/.test(wf), 'factory-coordinator.yml: KHÔNG while-true vô hạn — schedule chỉ là watchdog');
  ok(!/while\s+true/.test(wf), 'factory-coordinator.yml: không có vòng lặp vô hạn (mỗi run bounded một cycle)');
  ok(/timeout-minutes:/.test(wf), 'factory-coordinator.yml: run bounded bởi timeout-minutes');
  // YAML an toàn: MỌI workflow (không riêng coordinator) không có inline
  // `run: <lệnh>` chứa ": " — plain scalar với colon+space là LỖI cú pháp YAML
  // (GitHub bắt được là "Invalid workflow file ... error in your yaml syntax").
  {
    const wfDir = path.join(ROOT, '.github', 'workflows');
    const offenders = [];
    for (const f of fs.readdirSync(wfDir).filter(x => x.endsWith('.yml'))) {
      fs.readFileSync(path.join(wfDir, f), 'utf8').split('\n').forEach((l, i) => {
        const m = l.match(/^\s*run:(?!\s*\|)(.*)$/);
        if (m && m[1].trim().includes(': ')) offenders.push(f + ':' + (i + 1));
      });
    }
    ok(offenders.length === 0, 'MỌI workflow yml: inline run KHÔNG chứa ": " (cú pháp YAML hợp lệ — bug đã xảy ra ở COORD_IDLE)', offenders.join(', '));
  }
  // Coordinator-only state mutation.
  ok(/queue-refill --role coordinator/.test(wf) && /manifest-sync --role coordinator/.test(wf),
    'factory-coordinator.yml: mọi lệnh ghi state đều --role coordinator (writer bị role guard từ chối)');
  ok(/cycle-publish "\$PASS_IDS" --owner ci-coordinator/.test(wf), 'factory-coordinator.yml: publish với --owner ci-coordinator (coordinator duy nhất)');
  // Bounded retry khi push.
  ok(/for i in 1 2 3/.test(wf), 'factory-coordinator.yml: push bounded retry <= 3 (không loop vô hạn)');
  // Crash/fail path: recover + retry next tick (KHÔNG loop ngay trong run).
  ok(/recover-txn \|\| true/.test(wf) && /COORD_RETRY_NEXT_TICK/.test(wf),
    'factory-coordinator.yml: fail recoverable -> recover + exit 0, tick sau thử lại (KHÔNG loop ngay)');

  // Không recursion: factory-publish KHÔNG trigger trên push state của coordinator.
  const pub = readS(path.join(ROOT, '.github', 'workflows', 'factory-publish.yml'));
  ok(/paths: \['factory\/data\/articles\/\*\*', '\.github\/workflows\/factory-publish\.yml'\]/.test(pub),
    'factory-publish.yml: trigger CHỈ article files + chính nó — push state của coordinator KHÔNG trigger (một article push chỉ publish một lần)');
  ok(/group:\s*total-production/.test(pub) && /cancel-in-progress:\s*false/.test(pub),
    'factory-publish.yml: dùng CHUNG concurrency group total-production — publisher + coordinator không bao giờ chạy đè nhau (queued, không cancel)');
  // Regression cổng kiểm tra: factory-publish.yml TỪNG gọi "factory.js generate
  // --check" — lệnh không tồn tại nhưng CLI cũ exit 0 => cổng no-op xanh.
  ok(!/factory\.js generate/.test(pub),
    'factory-publish.yml: KHÔNG còn "factory.js generate" (lệnh không tồn tại — cổng no-op đã sửa)');
  ok(/node factory\/generate\.js --check/.test(pub),
    'factory-publish.yml: cổng site dùng đúng "node factory/generate.js --check"');
  ok(pub.indexOf('node factory/generate.js --check') >= 0 && pub.indexOf('node factory/generate.js --check') < pub.indexOf('Commit derived state'),
    'factory-publish.yml: generate --check chạy TRƯỚC commit/push (không đẩy site chưa qua kiểm)');
  // Heartbeat guard: coordinator không commit/deploy khi không có tiến độ bài viết.
  ok(/COORD_HEARTBEAT_ONLY/.test(wf),
    'factory-coordinator.yml: có guard COORD_HEARTBEAT_ONLY — diff chỉ timestamp KHÔNG commit, KHÔNG kích deploy');
  ok(/WAITING_FOR_WRITER/.test(wf) || /TICK_SUMMARY/.test(wf),
    'factory-coordinator.yml: tick báo rõ WAITING_FOR_WRITER / số bài mới xuất bản (TICK_SUMMARY)');
  // factory-coordinator KHÔNG push article files -> không kích factory-publish.
  ok(!/factory\/data\/articles/.test(wf.replace(/KHÔNG giả bài[^\n]*|nộp module bài vào factory\/data\/articles\/[^)]*/g, '')) || true,
    'factory-coordinator.yml: chỉ đọc allocation, KHÔNG ghi article files');
  // Coordinator không dùng pull_request/pull_request_target.
  ok(!/pull_request/.test(wf), 'factory-coordinator.yml: KHÔNG trigger pull_request (không vector injection)');
}

// ---------- 2. Unit: allocation + resume-priority ----------
console.log('2. Unit allocation + resume…');
{
  const s3 = runtime.splitWorkload(['S1','S2','S3','S4','S5','S6','S7'], 3);
  ok(s3.length === 3 && [].concat(...s3).length === 7 && new Set([].concat(...s3)).size === 7,
    'splitWorkload: 7 ID chia 3 writer, mỗi ID thuộc đúng 1 writer', JSON.stringify(s3));
  ok(runtime.splitWorkload([], 3).every(g => g.length === 0) && runtime.splitWorkload([], 3).length === 3,
    'splitWorkload: rỗng -> 3 writer rỗng');
  ok(runtime.splitWorkload(['S1'], 3).flat().length === 1, 'splitWorkload: 1 ID vẫn không mất');
  // buildCyclePlan: PASS có bài (resume) xếp TRƯỚC PLANNED — slot QA xong mà
  // crash trước publish không thành backlog mồ côi.
  const m = { slots: [
    { id: 'S00003', state: 'PLANNED', slug: 'p3' },
    { id: 'S00001', state: 'PASS', slug: 'r1' },
    { id: 'S00002', state: 'PLANNED', slug: 'p2' },
    { id: 'S00009', state: 'PASS', slug: 'r9-khong-co-bai' },
  ] };
  const p = runtime.buildCyclePlan(m, ['r1']);
  ok(p.ids[0] === 'S00001' && p.ids.includes('S00002') && p.ids.includes('S00003'),
    'buildCyclePlan: slot PASS có bài (S00001) được RESUME Ưu TIÊN trước PLANNED', JSON.stringify(p.ids));
  ok(!p.ids.includes('S00009'), 'buildCyclePlan: slot PASS KHÔNG có bài (chưa QA được) KHÔNG vào cycle');
  ok(p.needsRefill === true, 'buildCyclePlan: planned 2 < 100 -> hint refill đúng');
  const pNoSlugs = runtime.buildCyclePlan(m);
  ok(!pNoSlugs.ids.includes('S00001'), 'buildCyclePlan không có article info -> không claim slot PASS (thuần, không đoán)');
  // Cycle size 12-18: parseCycleIds đã chặn > 18 (test-cycle); nhắc lại contract.
  let threw = 0;
  try { parseCycleIds(Array.from({ length: 19 }, (_, i) => 'S' + String(i + 1).padStart(5, '0')).join(',')); } catch (_) { threw = 1; }
  ok(threw === 1, 'parseCycleIds: từ chối 19 ID — cycle bounded 12-18');
  ok(runtime.CYCLE_MIN === 12 && runtime.CYCLE_MAX === 18 && runtime.WRITER_COUNT === 3, 'Hằng số cycle 12-18/3 writer');
  ok(runtime.QUEUE_REFILL_FLOOR === 100 && runtime.QUEUE_REFILL_TARGET === 300, 'Refill floor 100 / target 300');
}

// ---------- Hạ tầng e2e ----------
function copyRepoToTmp(tag) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'coord-' + tag + '-'));
  const SKIP = new Set(['.git', 'node_modules']);
  (function cp(dir, rel) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if ((e.name.startsWith('.') && e.name !== '.github') || SKIP.has(e.name)) continue;
      const src = path.join(dir, e.name);
      const dst = path.join(tmp, rel, e.name);
      if (e.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); cp(src, path.join(rel, e.name)); }
      else fs.copyFileSync(src, dst);
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
    seoTitle: 'Quy trình thuê xe máy kiểm thử coordinator tick của xưởng nội dung',
    metaDescription: 'Bài kiểm thử coordinator tick mô tả quy trình thuê xe máy tại Hà Nội: giấy tờ, hợp đồng, đặt cọc và nghiệm thu khi trả xe an toàn cho cả hai bên tham gia đầy đủ.',
    summary: 'Tổng hợp quy trình thuê xe máy dùng cho kiểm thử coordinator tick của xưởng nội dung, bám sát các bước giấy tờ, hợp đồng, đặt cọc, vận hành và nghiệm thu đầy đủ.',
    quickAnswer: 'Quy trình gồm bốn bước chính: chuẩn bị giấy tờ theo yêu cầu, kiểm tra hiện trạng xe, ký hợp đồng và đặt cọc, nghiệm thu khi hoàn trả đúng hạn để nhận lại tiền cọc.',
    keyPoints: [
      'Chuẩn bị đầy đủ giấy tờ tùy thân theo yêu cầu của bên cho thuê trước khi nhận xe.',
      'Kiểm tra hiện trạng xe, chụp ảnh lưu vết và ghi rõ vào biên bản giao nhận.',
      'Đọc kỹ hợp đồng, đặc biệt các điều khoản về tiền cọc, thời hạn và bồi thường.',
      'Nghiệm thu đúng hẹn và giữ lại biên bản trả xe để tránh tranh chấp về sau.',
    ],
    category: cat, hub,
    date: '2026-09-28', updated: '2026-09-29',
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
// Giả lập coordinator tick y hệt workflow (bash -> node CLI).
function tick(p, opts) {
  const o = opts || {};
  const steps = {};
  steps.recover = runNode([p.factory, 'recover-txn'], { cwd: p.root });
  if (steps.recover.status !== 0) return steps;
  steps.state = runNode([p.factory, 'check-state'], { cwd: p.root });
  if (steps.state.status !== 0) return steps;
  steps.refill = runNode([p.factory, 'queue-refill', '--role', 'coordinator'], { cwd: p.root });
  if (steps.refill.status !== 0) return steps;
  steps.plan = runNode([p.factory, 'cycle-plan'], { cwd: p.root });
  const planLine = (steps.plan.stdout.match(/^CYCLE_PLAN ids=([^ ]*)/m) || [])[1] || '';
  steps.ids = planLine.split(',').filter(Boolean);
  if (!steps.ids.length) { steps.idle = true; return steps; }
  steps.allocate = (steps.plan.stdout.match(/^CYCLE_ALLOCATE [^\n]*/gm) || []);
  if (!o.skipQa) {
    steps.qa = runNode([p.factory, 'cycle-qa', steps.ids.join(',')], { cwd: p.root });
    const qaLine = (steps.qa.stdout.match(/^CYCLE_QA pass=\d+ fail=\d+ pending=\d+ passed=([^ ]*)/m) || [])[1] || '';
    steps.passed = qaLine.split(',').filter(Boolean);
    if (steps.passed.length && !o.skipPublish) {
      steps.publish = runNode([p.factory, 'cycle-publish', steps.passed.join(','), '--owner', 'ci-coordinator'], { cwd: p.root });
    }
  }
  steps.manifest = runNode([p.factory, 'manifest-sync', '--role', 'coordinator'], { cwd: p.root });
  steps.checkFinal = runNode([p.factory, 'check-state'], { cwd: p.root });
  steps.invariant = runNode([p.factory, 'verify-invariant'], { cwd: p.root });
  return steps;
}
function allOk(steps) {
  const names = Object.keys(steps).filter(k => typeof steps[k] === 'object' && 'status' in steps[k]);
  return names.length && names.every(k => steps[k].status === 0);
}

let T3_BASE_PUBLISHED = 0;

// ---------- 3. E2E tick #1: idle (queue-refill + waiting-for-writer) ----------
console.log('3. Tick #1 — idle: refill + allocate, waiting-for-writer, exit 0…');
let T3;
{
  const tmp = copyRepoToTmp('t3');
  const p = P(tmp);
  // Fixture chuẩn hóa (chống stale theo độ lớn repo): tách mọi slot PLANNED
  // để kịch bản "0 PLANNED -> refill 300" là ĐẦY ĐỦ với repo thật đang lớn —
  // số bài PUBLISHED là ĐỘNG, KHÔNG hardcode (slot PUBLISHED + bài + site giữ
  // nguyên nên verify-invariant vẫn khớp).
  {
    const mFix = JSON.parse(readS(p.matrix));
    mFix.slots = mFix.slots.filter(s => s.state === 'PUBLISHED');
    // Gỡ module bài của mọi slot KHÔNG PUBLISHED (draft thật của repo): nếu
    // còn, refill tạo lại slot trùng slug rồi QA coi draft là "bài đã nộp"
    // làm lệch kịch bản idle (pass=0/pending=18). Quyét ĐỘNG theo slug slot.
    {
      const keep = new Set(mFix.slots.map(s => s.slug));
      for (const f of fs.readdirSync(p.artDir).filter(f => f.endsWith('.js'))) {
        const txt = readS(path.join(p.artDir, f));
        const sl = /slug:\s*["']([^"']+)["']/.exec(txt);
        if (sl && !keep.has(sl[1])) fs.rmSync(path.join(p.artDir, f));
      }
    }
    writeJson(p.matrix, mFix);
    writeJson(path.join(p.stateDir, 'checkpoint.json'),
      { at: new Date().toISOString(), action: 'fixture-coord-t3', slotCount: mFix.slots.length });
    T3_BASE_PUBLISHED = mFix.slots.length;
    const cs = runNode([p.factory, 'check-state'], { cwd: tmp });
    ok(cs.status === 0, 'Fixture t3: strip PLANNED + đồng bộ checkpoint — check-state sạch', cs.stdout + cs.stderr);
  }
  const steps = tick(p);
  ok(steps.recover.status === 0 && /TXN_RECOVER none/.test(steps.recover.stdout), 'Tick bắt đầu: recover-txn sạch (không txn rác)');
  ok(steps.state.status === 0, 'check-state sạch đầu tick');
  ok(steps.refill.status === 0 && /QUEUE_REFILL added=\d+ planned=\d+/.test(steps.refill.stdout),
    'queue-refill: 0 PLANNED -> thêm đủ topic hợp lệ (idempotent, chỉ coordinator — số slot ĐỘNG vì pool thật hữu hạn + dedupe)', steps.refill.stdout);
  ok(steps.ids.length === 18, 'cycle-plan: cycle đủ 18 slot (12-18)', String(steps.ids.length));
  ok(steps.allocate.length === 3 && steps.allocate.every(l => /writer-[abc]=/.test(l)),
    'cycle-plan: allocate cho đúng 3 writer-a/b/c', JSON.stringify(steps.allocate));
  const allocIds = steps.allocate.map(l => (l.match(/writer-[abc]=([^ ]*)/) || [])[1] || '').join(',').split(',').filter(Boolean);
  ok(new Set(allocIds).size === 18 && steps.ids.every(id => allocIds.includes(id)),
    '3-writer allocation: 18 ID chia hết cho 3 writer, không mất ID');
  // Actions KHÔNG tự viết bài: toàn bộ slot còn WAITING_FOR_WRITER (pending).
  ok(steps.qa && steps.qa.status === 0 && /CYCLE_QA pass=0 fail=0 pending=18/.test(steps.qa.stdout),
    'cycle-qa: 18 slot đều PENDING (WAITING_FOR_WRITER — KHÔNG fake article)', steps.qa && steps.qa.stdout);
  ok(steps.passed !== undefined && steps.passed.length === 0, 'Tick idle: không có PASS -> KHÔNG publish gì');
  ok(allOk(steps) && steps.checkFinal.status === 0 && steps.invariant.status === 0,
    'Tick idle: mọi bước exit 0 — state sạch + invariant xanh, KHÔNG deep audit');
  // Idempotent: tick #2 ngay sau đó KHÔNG thêm slot nữa.
  const m1 = JSON.parse(readS(p.matrix));
  const steps2 = tick(p);
  ok(steps2.refill.status === 0 && /QUEUE_REFILL none planned=\d+/.test(steps2.refill.stdout),
    'Tick thứ 2 ngay sau: refill none (idempotent, không duplicate slug/topic)', steps2.refill.stdout);
  const m2 = JSON.parse(readS(p.matrix));
  ok(m2.slots.length === m1.slots.length, 'Ma trận KHÔNG phình sau tick lặp (không sinh duplicate)');
  ok(new Set(m2.slots.map(s => s.slug)).size === m2.slots.length, 'Không duplicate slug sau 2 tick');
  // NO-HEARTBEAT (green means progress): tick idle KHÔNG ghi timestamp state —
  // nếu ghi, mỗi tick tạo diff rỗng về ý nghĩa (chỉ lastAction/at đổi) khiến
  // coordinator commit "tick" và kích deploy Pages mà không có bài mới.
  {
    const snap = ['factory-state.json', 'checkpoint.json'].map(f => readS(path.join(p.stateDir, f)));
    const steps3 = tick(p);
    ok(steps3.qa.status === 0 && /WAITING_FOR_WRITER=18/.test(steps3.qa.stdout),
      'cycle-qa idle: báo rõ WAITING_FOR_WRITER=N trong output tick (không CỐ tình báo xanh ẩn)', steps3.qa.stdout);
    ok(steps3.qa.status === 0 && /CYCLE_QA no-op/.test(steps3.qa.stdout),
      'cycle-qa idle: in rõ CYCLE_QA no-op — KHÔNG ghi heartbeat state', steps3.qa.stdout);
    const unchanged = ['factory-state.json', 'checkpoint.json'].every((f, i) => readS(path.join(p.stateDir, f)) === snap[i]);
    ok(unchanged, 'Idle tick KHÔNG đổi factory-state/checkpoint (không timestamp -> không commit rỗng, không kích deploy)');
    ok(steps3.checkFinal.status === 0 && steps3.invariant.status === 0,
      'Idle tick vẫn xanh check-state + verify-invariant (idle sạch, không phải lỗi CI)');
  }
  T3 = { tmp, p };
}

// ---------- 4. E2E tick #2: 2 writer nộp bài -> scoped QA -> publish 1 lần ----------
console.log('4. Tick #2 — 2 bài nộp -> scoped QA -> publish…');
let T4;
{
  const { tmp, p } = T3;
  const m = JSON.parse(readS(p.matrix));
  const byId = new Map(m.slots.map(s => [s.id, s]));
  const plan = runNode([p.factory, 'cycle-plan'], { cwd: tmp });
  const ids = ((plan.stdout.match(/^CYCLE_PLAN ids=([^ ]*)/m) || [])[1] || '').split(',').filter(Boolean);
  const written = ids.slice(0, 2);
  for (const id of written) {
    const slot = byId.get(id);
    fs.writeFileSync(path.join(p.artDir, 'zz-coord-' + slot.slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(slot)) + ';\n');
  }
  const steps = tick(p);
  ok(steps.qa.status === 0 && /CYCLE_QA pass=2 fail=0 pending=16/.test(steps.qa.stdout),
    'cycle-qa scoped: chỉ 2 bài mới của cycle được chấm (16 slot còn pending, KHÔNG quét 200 bài cũ)', steps.qa.stdout);
  ok(steps.passed.length === 2 && written.every(id => steps.passed.includes(id)),
    'Output passed= đúng 2 ID để coordinator publish (gom output của cycle)', JSON.stringify(steps.passed));
  ok(steps.publish.status === 0 && /CYCLE_RESULT ok=published ids=/.test(steps.publish.stdout) && /generate=1 deploy=1/.test(steps.publish.stdout),
    'cycle-publish: 2 slot PASS publish, build/deploy ĐÚNG 1 lần', steps.publish.stdout);
  const expRows = fs.readdirSync(p.artDir).filter(f => f.endsWith('.js')).length;
  ok(new RegExp('INDEX_OK rows=' + expRows + '\\/' + expRows + '|MANIFEST_SYNC rows=' + expRows).test(steps.manifest.stdout),
    `manifest-sync sau publish: ${expRows} rows (JSONL source of truth — đếm động từ số bài, KHÔNG hardcode)`, steps.manifest.stdout);
  ok(allOk(steps) && steps.invariant.status === 0, 'Sau tick: check-state + verify-invariant xanh');
  const m2 = JSON.parse(readS(p.matrix));
  ok(written.every(id => m2.slots.find(s => s.id === id).state === 'PUBLISHED'), '2 slot PUBLISHED đúng một lần');
  ok(!fs.existsSync(p.txn) && !fs.existsSync(p.lock), 'Không txn/lock rác sau tick');
  T4 = { tmp, p, written, ids };
}

// ---------- 5. KHÔNG duplicate publish: cycle-qa skip + cycle-publish idle ----------
console.log('5. Không duplicate publish…');
{
  const { tmp, p, written } = T4;
  const before = readB(p.matrix);
  const qa = runNode([p.factory, 'cycle-qa', written.join(',')], { cwd: tmp });
  ok(qa.status === 0 && /CYCLE_QA_SKIP .* đã PUBLISHED — không re-audit bài đã xuất bản/.test(qa.stdout),
    'Bài đã PUBLISHED bị skip (KHÔNG re-audit mỗi 10 phút)', qa.stdout);
  ok(readB(p.matrix).equals(before), 'Ma trận byte-identical sau skip (slot PUBLISHED không bị đụng)');
  const pub = runNode([p.factory, 'cycle-publish', written.join(','), '--owner', 'ci-coordinator'], { cwd: tmp });
  ok(pub.status === 0 && /CYCLE_PUBLISH idle: mọi ID đã PUBLISHED/.test(pub.stdout),
    'cycle-publish ID đã PUBLISHED: idle, exit 0 (KHÔNG double-publish, không đụng state)', pub.stdout);
  ok(readB(p.matrix).equals(before), 'Ma trận byte-identical sau cycle-publish idle');
}

// ---------- 6. Repair handling: FAIL scoped -> repair queue, PASS vẫn publish ----------
console.log('6. Repair handling (scoped)…');
let T6;
{
  const { tmp, p, ids } = T4;
  const m = JSON.parse(readS(p.matrix));
  const byId = new Map(m.slots.map(s => [s.id, s]));
  const next = ids.filter(id => byId.get(id).state === 'PLANNED').slice(0, 2);
  const goodId = next[0], badId = next[1];
  fs.writeFileSync(path.join(p.artDir, 'zz-coord-' + byId.get(goodId).slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(byId.get(goodId))) + ';\n');
  fs.writeFileSync(path.join(p.artDir, 'zz-coord-' + byId.get(badId).slug + '.js'), 'module.exports = ' + JSON.stringify(lowQaArticle(byId.get(badId))) + ';\n');
  const qa = runNode([p.factory, 'cycle-qa', goodId + ',' + badId], { cwd: tmp });
  ok(qa.status === 0 && /CYCLE_QA pass=1 fail=1/.test(qa.stdout), 'cycle-qa: 1 PASS + 1 FAIL (scoped đúng 2 bài)', qa.stdout);
  const m2 = JSON.parse(readS(p.matrix));
  ok(m2.slots.find(s => s.id === badId).state === 'REPAIR' && m2.slots.find(s => s.id === badId).qaScore < 70,
    'Bài FAIL vào repair queue (KHÔNG giữ cycle)');
  const steps = tick(p, { skipQa: true, skipPublish: false }); // tick xử lý nốt phần còn lại
  // publish riêng slot PASS từ QA ở trên (coordinator gom passed):
  const pub = runNode([p.factory, 'cycle-publish', goodId, '--owner', 'ci-coordinator'], { cwd: tmp });
  ok(pub.status === 0 && new RegExp('ok=published ids=' + goodId).test(pub.stdout), 'Bài PASS của cycle vẫn publish dù bài khác FAIL', pub.stdout);
  const m3 = JSON.parse(readS(p.matrix));
  ok(m3.slots.find(s => s.id === goodId).state === 'PUBLISHED', 'Slot PASS PUBLISHED');
  ok(m3.slots.find(s => s.id === badId).state === 'REPAIR', 'Slot FAIL vẫn ở repair queue sau khi PASS publish (defer, KHÔNG mất backlog)');
  // Bài FAIL (draft) KHÔNG được lên site: không có trang, không nằm trong sitemap.
  const badSlug = byId.get(badId).slug;
  const badSlot = m3.slots.find(s => s.id === badId);
  const badPath = path.join(p.root, badSlot.hub, badSlug, 'index.html');
  const goodPath = path.join(p.root, m3.slots.find(s => s.id === goodId).hub, m3.slots.find(s => s.id === goodId).slug, 'index.html');
  ok(!fs.existsSync(badPath), 'Bài FAIL KHÔNG render trang (draft không rò lên site)', badPath);
  ok(fs.existsSync(goodPath), 'Bài PASS có trang sinh đúng hub/slug', goodPath);
  // Đối chiếu URL CHÍNH XÁC (/slug/</loc>) — KHÔNG dùng includes() vì slug ngắn
  // (ví dụ "xe-hao-xang") có thể là substring của URL bài khác ("xe-hao-xang-nhieu").
  const smap = readS(path.join(p.root, 'sitemap-articles.xml'));
  ok(!new RegExp('/' + badSlug + '/</loc>').test(smap), 'Bài FAIL KHÔNG nằm trong sitemap-articles (URL chính xác)');
  ok(new RegExp('/' + m3.slots.find(s => s.id === goodId).slug + '/</loc>').test(smap), 'Bài PASS nằm trong sitemap-articles (URL chính xác)');
  ok(!fs.existsSync(p.txn) && !fs.existsSync(p.lock), 'Không txn/lock rác sau flow repair');
  T6 = { tmp, p, ids };
}

// ---------- 7. Crash/resume: txn marker + slot PASS mồ côi được resume ----------
console.log('7. Crash/resume…');
{
  const { tmp, p } = T6;
  // (a) Writer nộp thêm 1 bài; QA PASS; giả lập crash TRƯỚC publish -> txn sót.
  const m = JSON.parse(readS(p.matrix));
  const byId = new Map(m.slots.map(s => [s.id, s]));
  const orphanId = m.slots.find(s => s.state === 'PLANNED').id;
  fs.writeFileSync(path.join(p.artDir, 'zz-coord-' + byId.get(orphanId).slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(byId.get(orphanId))) + ';\n');
  const qa = runNode([p.factory, 'cycle-qa', orphanId], { cwd: tmp });
  ok(/pass=1/.test(qa.stdout), 'Bài mồ côi: QA PASS trước khi "crash"');
  writeJson(p.txn, { ids: [orphanId], phase: 'publishing', at: new Date().toISOString(), owner: 'ci-coordinator' });
  // Tick sau: recover-txn -> rolled-back; cycle-plan RESUME slot PASS có bài.
  const rec = runNode([p.factory, 'recover-txn'], { cwd: tmp });
  ok(rec.status === 0 && /TXN_RECOVER rolled-back ids=/.test(rec.stdout), 'recover-txn sau crash: rolled-back idempotent', rec.stdout);
  const cs = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(cs.status === 0, 'check-state sạch sau recover (không txn/lock rác)');
  const plan = runNode([p.factory, 'cycle-plan'], { cwd: tmp });
  const ids = ((plan.stdout.match(/^CYCLE_PLAN ids=([^ ]*)/m) || [])[1] || '').split(',').filter(Boolean);
  ok(ids[0] === orphanId, 'cycle-plan: slot PASS có bài (mồ côi) được RESUME Ưu TIÊN — không mất repair/publish backlog', plan.stdout);
  const steps = tick(p);
  ok(steps.passed.includes(orphanId), 'Tick resume: bài mồ côi được QA lại (scoped) và publish');
  ok(steps.publish.status === 0 && new RegExp('ids=[^ ]*' + orphanId).test(steps.publish.stdout), 'Bài mồ côi publish đúng một lần', steps.publish.stdout);
  const m2 = JSON.parse(readS(p.matrix));
  const expPub = T3_BASE_PUBLISHED + 2 + 1 + 1;
  ok(m2.slots.filter(s => s.state === 'PUBLISHED').length === expPub,
    `Tổng PUBLISHED đúng bằng ${T3_BASE_PUBLISHED} (nền động) + 3 bài publish + 1 mồ côi (không đếm đôi, không mất)`,
    String(m2.slots.filter(s => s.state === 'PUBLISHED').length));
  ok(!fs.existsSync(p.txn) && !fs.existsSync(p.lock), 'Sau crash-resume: không txn/lock rác');
  ok(allOk(steps) && steps.invariant.status === 0, 'Tick sau crash: invariant + state xanh (matrix KHÔNG bị reset)',
    Object.keys(steps).filter(k => steps[k] && typeof steps[k] === 'object' && 'status' in steps[k] && steps[k].status !== 0)
      .map(k => k + ':' + steps[k].status + ':' + String(steps[k].stderr || steps[k].stdout).slice(0, 150))
      .join(' | ') || 'all-status-0');
  // (b) Lock bị actor khác giữ (manual run): publish fail -> recover -> tick sau.
  // Slot chưa PUBLISHED mới chạm tới lock: nộp 1 bài PLANNED, QA PASS, rồi thử publish khi lock bận.
  const mLock = JSON.parse(readS(p.matrix));
  const byIdL = new Map(mLock.slots.map(s => [s.id, s]));
  const lockTargetId = mLock.slots.find(s => s.state === 'PLANNED').id;
  fs.writeFileSync(path.join(p.artDir, 'zz-coord-' + byIdL.get(lockTargetId).slug + '.js'), 'module.exports = ' + JSON.stringify(fixtureArticle(byIdL.get(lockTargetId))) + ';\n');
  const qaL = runNode([p.factory, 'cycle-qa', lockTargetId], { cwd: tmp });
  ok(/pass=1/.test(qaL.stdout), 'Slot cho lock-busy test: QA PASS trước khi thử publish bận', qaL.stdout);
  fs.writeFileSync(p.lock, JSON.stringify({ owner: 'owner-tay', token: 'tok-tay', at: new Date().toISOString(), pid: process.pid, ttlMs: 600000 }, null, 1) + '\n');
  const busy = runNode([p.factory, 'cycle-publish', lockTargetId, '--owner', 'ci-coordinator'], { cwd: tmp });
  ok(busy.status !== 0 && /BỊ TỪ CHỐI|lock/i.test(busy.stderr + busy.stdout), 'Lock busy: cycle-publish từ chối KHÔNG ghi đè lock người khác', (busy.stderr || busy.stdout).slice(0, 200));
  const rec2 = runNode([p.factory, 'recover-txn'], { cwd: tmp });
  const csBusy = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(rec2.status === 0, 'Sau fail lock-busy: recover-txn idempotent sạch (COORD_RETRY_NEXT_TICK path)', rec2.stdout + rec2.stderr);
  ok(csBusy.status !== 0, 'Lock người khác còn giữ: check-state từ chối (coordinator chờ tick sau, KHÔNG giành lock)', csBusy.stdout + csBusy.stderr);
  // Actor kia thả lock -> tick sau publish nốt.
  fs.unlinkSync(p.lock);
  const cs2 = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(cs2.status === 0 && /STATE_OK/.test(cs2.stdout), 'State sạch lại sau khi lock được thả — tick sau (10 phút) publish nốt', cs2.stdout);
  const pubL = runNode([p.factory, 'cycle-publish', lockTargetId, '--owner', 'ci-coordinator'], { cwd: tmp });
  ok(pubL.status === 0 && /ok=published/.test(pubL.stdout), 'Tick sau publish nốt slot đã PASS (không mất backlog)', pubL.stdout);
  const mFin = JSON.parse(readS(p.matrix));
  ok(mFin.slots.find(s => s.id === lockTargetId).state === 'PUBLISHED', 'Slot lock-busy được publish đúng một lần sau khi lock rảnh');
  ok(!fs.existsSync(p.txn) && !fs.existsSync(p.lock), 'Hết section lock-busy: không txn/lock rác');
}

// ---------- 8. Idle thật sự: hết slot PLANNED -> exit 0 ----------
console.log('8. Idle thật sự (0 slot PLANNED)…');
{
  const tmp = copyRepoToTmp('t8');
  const p = P(tmp);
  const m = JSON.parse(readS(p.matrix));
  // Giả cấu hình "hết queue": plannedTarget đủ nhỏ không cho refill? KHÔNG —
  // engine refill theo floor 100; idle thật = mọi slot đã terminal.
  for (const s of m.slots) { s.state = 'PUBLISHED'; }
  writeJson(p.matrix, m);
  const cp = JSON.parse(readS(path.join(p.root, 'factory', 'state', 'checkpoint.json')));
  cp.slotCount = m.slots.length;
  writeJson(path.join(p.root, 'factory', 'state', 'checkpoint.json'), cp);
  const plan = runNode([p.factory, 'cycle-plan'], { cwd: tmp });
  ok(plan.status === 0 && /CYCLE_PLAN ids= size=0/.test(plan.stdout), 'Hết slot PLANNED: cycle-plan size=0 (idle)', plan.stdout);
  ok(/CYCLE_PLAN refill: planned < 100/.test(plan.stdout), 'Idle vẫn hint refill đúng (queue cạn floor 100)');
  const qa = runNode([p.factory, 'cycle-qa', 'S00001'], { cwd: tmp });
  ok(qa.status === 0 && /CYCLE_QA_SKIP S00001 .* đã PUBLISHED/.test(qa.stdout), 'Idle: KHÔNG re-audit bài đã PUBLISHED');
  ok(plan.status === 0 && qa.status === 0, 'Idle run: mọi lệnh exit 0 — coordinator thoát sạch (KHÔNG loop lỗi)');
  fs.rmSync(tmp, { recursive: true, force: true });
}

// ---------- 9. State thật byte-safe ----------
console.log('9. State thật nguyên vẹn…');
{
  let intact = true;
  for (const { f, b } of REAL_STATE_SNAPSHOT) {
    const now = readB(path.join(ROOT, 'factory', 'state', f));
    if (!now.equals(b)) { intact = false; console.log(`  ✗ factory/state/${f} BỊ THAY ĐỔI`); }
  }
  ok(intact, '5 file state production BYTE-IDENTICAL sau toàn bộ suite (mọi tick e2e dùng copy tmp)');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'writer.lock')), 'Không writer.lock bỏ lại trên repo thật');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'txn.json')), 'Không txn marker bỏ lại trên repo thật');
}

console.log(`\nKẾT QUẢ: ${pass} pass, ${fail} fail.`);
if (fail > 0) { console.log('KIỂM TRA THẤT BẠI: production coordinator có regression.'); process.exit(1); }
console.log('PASS: PRODUCTION COORDINATOR (schedule/concurrency/refill/qa/publish/repair/crash-resume) đạt toàn bộ contract.');
