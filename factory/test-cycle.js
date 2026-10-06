#!/usr/bin/env node
// AI WIKI TOTAL — kiểm thử PRODUCTION CYCLE (12-18 bài / 3 writer / scoped QA)
// Regression: buildCyclePlan (12-18, refill hint), parseCycleIds (giới hạn),
// selectRefillTopics (dedupe/target), topic-pool hợp lệ, và e2e trên bản sao
// tmp: queue-refill 0 -> 300, cycle-plan 18, cycle-qa scoped (PASS/REPAIR,
// KHÔNG quét toàn site), cycle-publish defer REPAIR + build/deploy 1 lần,
// manifest-sync 203 rows, sqlite corrupt -> rebuild phục hồi.
// State thật PHẢI byte-identical sau toàn suite (mọi e2e chạy trong tmp).
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

console.log('=== KIỂM THỬ PRODUCTION CYCLE (SCOPED QA) ===');

// State thật TRƯỚC suite — cuối suite phải KHÔNG đổi.
const REAL_STATE_SNAPSHOT = ['matrix.json', 'factory-state.json', 'checkpoint.json', 'manifest.json']
  .map(f => ({ f, b: readB(path.join(ROOT, 'factory', 'state', f)) }));

// ---------- 1. buildCyclePlan (unit) ----------
console.log('1. buildCyclePlan…');
{
  const mk = (id, state) => ({ id, slug: 's' + id, state });
  const m0 = { slots: [mk('S00001', 'PUBLISHED'), mk('S00002', 'REPAIR')] };
  const p0 = runtime.buildCyclePlan(m0);
  ok(p0.size === 0 && p0.ids.length === 0 && p0.complete === false, 'Không có slot PLANNED -> plan rỗng, incomplete');
  ok(!('writers' in p0) && !('allocations' in p0), 'buildCyclePlan: KHÔNG còn phân công writer (mô hình 3 writer đã bỏ — Writer 1 dùng writer-next)');
  ok(p0.needsRefill === true, 'planned 0 < floor 100 -> needsRefill');
  ok(runtime.CYCLE_MIN === 12 && runtime.CYCLE_MAX === 18, 'Cycle 12-18 bài (CYCLE_MIN/CYCLE_MAX)');
  ok(runtime.QUEUE_REFILL_FLOOR === 100 && runtime.QUEUE_REFILL_TARGET === 300, 'Refill floor 100 / target 300');
  const m12 = { slots: Array.from({ length: 12 }, (_, i) => mk('S' + String(i + 1).padStart(5, '0'), 'PLANNED')) };
  const p12 = runtime.buildCyclePlan(m12);
  ok(p12.size === 12 && p12.complete === true, '12 slot PLANNED -> cycle trọn vẹn (>= CYCLE_MIN)');
  ok(p12.needsRefill === true, '12 < 100 -> vẫn needsRefill');
  const m25 = { slots: Array.from({ length: 25 }, (_, i) => mk('S' + String(i + 1).padStart(5, '0'), i < 19 ? 'PLANNED' : 'QA')) };
  const p25 = runtime.buildCyclePlan(m25);
  ok(p25.size === runtime.CYCLE_MAX && p25.ids.length === 18, '19 slot PLANNED -> cắt đúng CYCLE_MAX (18)', String(p25.size));
  const nums = p25.ids.map(x => Number(x.slice(1)));
  ok(nums.every((n, i) => i === 0 || n > nums[i - 1]), 'Cycle chọn slot theo ID tăng dần (deterministic)');
  ok(!p25.ids.some(id => m25.slots.find(s => s.id === id).state === 'QA'), 'Cycle KHÔNG lôi slot QA (chỉ PLANNED)');
  const m120 = { slots: Array.from({ length: 120 }, (_, i) => mk('S' + String(i + 1).padStart(5, '0'), 'PLANNED')) };
  ok(runtime.buildCyclePlan(m120).needsRefill === false, 'planned >= 100 -> không cần refill');
}

// ---------- 2. parseCycleIds (unit) ----------
console.log('2. parseCycleIds…');
{
  const ids18 = Array.from({ length: 18 }, (_, i) => 'S' + String(i + 1).padStart(5, '0'));
  ok(parseCycleIds('S00001').length === 1, 'parseCycleIds nhận 1 ID');
  ok(parseCycleIds(ids18.join(',')).length === 18, 'parseCycleIds nhận đúng 18 ID (CYCLE_MAX)');
  let threw = 0;
  try { parseCycleIds(ids18.concat('S00019').join(',')); } catch (e) { threw = 1; ok(/Quá 18/.test(e.message), 'Từ chối 19 ID (quá CYCLE_MAX)', e.message); }
  ok(threw === 1, 'parseCycleIds từ chối quá 18 ID');
  threw = 0;
  try { parseCycleIds('S00001,S00001'); } catch (e) { threw = 1; ok(/lặp/.test(e.message), 'Từ chối ID lặp', e.message); }
  ok(threw === 1, 'parseCycleIds từ chối ID lặp');
  threw = 0;
  try { parseCycleIds('S00001,abc'); } catch (e) { threw = 1; ok(/không hợp lệ/.test(e.message), 'Từ chối ID sai format', e.message); }
  ok(threw === 1, 'parseCycleIds từ chối format lạ');
  threw = 0;
  try { parseCycleIds(''); } catch (e) { threw = 1; }
  ok(threw === 1, 'parseCycleIds từ chối rỗng');
}

// ---------- 3. selectRefillTopics (unit) ----------
console.log('3. selectRefillTopics…');
{
  const pool = [
    { hub: 'a/b', slug: 'p1', title: 'T1' },
    { hub: 'a/b', slug: 'p2', title: 'T2' },
    { hub: 'a/b', slug: 'p3', title: 'T3' },
    { hub: 'a/b', slug: 'p1', title: 'T1-dup' },
    null, { slug: 'khong-hub' }, { hub: 'a/b' },
  ];
  const r1 = runtime.selectRefillTopics(pool, ['p2'], 0, 3);
  ok(r1.length === 2 && r1[0].slug === 'p1' && r1[1].slug === 'p3', 'Bỏ slug đã có (dedupe) + phần tử pool hỏng');
  const r2 = runtime.selectRefillTopics(pool, [], 250, 300);
  ok(r2.length === 3, 'planned 250 -> chỉ cần 50 nhưng pool có 3 -> lấy đủ 3 (bounded bởi need? KHÔNG — pool nhỏ hơn need)');
  const r3 = runtime.selectRefillTopics(pool, [], 2, 2);
  ok(r3.length === 0, 'planned đã đạt target -> không chọn thêm (need=0)');
  const r4 = runtime.selectRefillTopics([], [], 0, 300);
  ok(r4.length === 0, 'pool rỗng -> trả rỗng, không throw');
  const r5 = runtime.selectRefillTopics(pool, [], 0, 1);
  ok(r5.length === 1, 'target nhỏ -> dừng đúng need');
}

// ---------- 4. topic-pool hợp lệ (unit) ----------
console.log('4. topic-pool…');
{
  const { TOPICS } = require('./data/topic-pool');
  const { CATEGORIES } = require('./data/categories');
  ok(TOPICS.length === 327, 'Pool có 327 topic', String(TOPICS.length));
  const hubs = new Set();
  for (const c of CATEGORIES) for (const h of c.children) hubs.add(c.slug + '/' + h.slug);
  ok(TOPICS.every(t => hubs.has(t.hub)), 'Mọi hub của topic thuộc taxonomy categories.js (15 cha/97 hub)');
  const slugs = new Set(TOPICS.map(t => t.slug));
  ok(slugs.size === TOPICS.length, 'Slug topic unique trong pool');
  const artSlugs = new Set(fs.readdirSync(path.join(__dirname, 'data', 'articles')).filter(f => f.endsWith('.js'))
    .map(f => { try { return require(path.join(__dirname, 'data', 'articles', f)).slug; } catch (_) { return null; } }).filter(Boolean));
  // Topic trùng slug bài/matrix KHÔNG phải lỗi pool — queue-refill dedupe bỏ
  // (unit mục 3 đã chặn); invariant quan trọng là refill không bao giờ tạo
  // slot trùng slug (e2e mục 5 assert).
  ok(TOPICS.every(t => typeof t.title === 'string' && t.title.length >= 8), 'Mọi topic có tiêu đề hợp lệ');
  ok(!TOPICS.some(t => t.intent !== undefined), 'Topic KHÔNG có intent (intent gán lúc queue-refill)');
}

// ---------- Hạ tầng e2e: bản sao repo trong tmp ----------
function copyRepoToTmp(tag) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cycle-' + tag + '-'));
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
    sqlite: path.join(tmp, 'factory', 'state', 'content-index.sqlite'),
    manifest: path.join(tmp, 'factory', 'state', 'article-manifest.jsonl'),
    lock: path.join(tmp, 'factory', 'state', 'writer.lock'),
    txn: path.join(tmp, 'factory', 'state', 'txn.json'),
    artDir: path.join(tmp, 'factory', 'data', 'articles'),
  };
}

// Fixture bài tốt cho slot topic (category/hub suy từ slot.hub 'cat/hub').
function fixtureArticle(slot) {
  const [cat, hub] = String(slot.hub).split('/');
  const p = (i) => `<p>Đoạn kiểm thử ${i}: quy trình thuê xe máy tại Hà Nội gồm chuẩn bị giấy tờ, kiểm tra tình trạng xe, ký hợp đồng, đặt cọc và nghiệm thu khi hoàn trả. Người thuê nên đối chiếu kỹ từng điều khoản, chụp lại hình ảnh hiện trạng xe trước khi nhận và giữ trọn bộ giấy tờ trong suốt thời gian sử dụng. Nắm lịch bảo dưỡng giúp nhận diện sớm tiếng động bất thường ở máy, mức mòn của lốp và độ nhạy của phanh trước khi vấn đề lớn dần.</p>`;
  const sec = (h2, from, to) => ({ h2, html: Array.from({ length: to - from }, (_, k) => p(from + k)).join('\n') });
  return {
    slug: slot.slug,
    title: slot.title,
    seoTitle: 'Quy trình thuê xe máy kiểm thử production cycle của xưởng nội dung',
    metaDescription: 'Bài kiểm thử production cycle mô tả quy trình thuê xe máy tại Hà Nội: giấy tờ, hợp đồng, đặt cọc và nghiệm thu khi trả xe an toàn cho cả hai bên tham gia.',
    summary: 'Tổng hợp quy trình thuê xe máy dùng cho kiểm thử production cycle của xưởng nội dung, bám sát các bước giấy tờ, hợp đồng, đặt cọc, vận hành và nghiệm thu đầy đủ.',
    quickAnswer: 'Quy trình gồm bốn bước chính: chuẩn bị giấy tờ theo yêu cầu, kiểm tra hiện trạng xe, ký hợp đồng và đặt cọc, nghiệm thu khi hoàn trả đúng hạn để nhận lại tiền cọc.',
    keyPoints: [
      'Chuẩn bị đầy đủ giấy tờ tùy thân theo yêu cầu của bên cho thuê trước khi nhận xe.',
      'Kiểm tra hiện trạng xe, chụp ảnh lưu vết và ghi rõ vào biên bản giao nhận.',
      'Đọc kỹ hợp đồng, đặc biệt các điều khoản về tiền cọc, thời hạn và bồi thường.',
      'Nghiệm thu đúng hẹn và giữ lại biên bản trả xe để tránh tranh chấp về sau.',
    ],
    category: cat,
    hub,
    date: '2026-09-28',
    updated: '2026-09-29',
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
// Biến thể low-QA (65 < 70, KHÔNG critical) — đúng mức REPAIR queue.
function lowQaArticle(slot) {
  const a = fixtureArticle(slot);
  a.seoTitle = 'Ngắn.'; a.metaDescription = 'Ngắn.';
  a.checklist = []; a.warnings = []; a.notes = [];
  a.date = 'sai-ngay'; a.updated = 'sai-ngay';
  a.keywords = ['thuê xe máy hà nội'];
  return a;
}

// ---------- 5. E2E queue-refill: 0 -> mọi topic còn tự do ----------
console.log('5. queue-refill e2e (0 PLANNED -> toàn bộ topic còn tự do)…');
let T5;
{
  const tmp = copyRepoToTmp('t5');
  const p = P(tmp);
  // Fixture TẠO RÕ (không phụ thuộc số bài thật trên main — chống stale test):
  // ép mọi slot về PUBLISHED, checkpoint khớp, rồi refill từ 0 PLANNED.
  const mFix = JSON.parse(readS(p.matrix));
  for (const s of mFix.slots) { s.state = 'PUBLISHED'; if (s.qaScore == null) s.qaScore = 75; }
  writeJson(p.matrix, mFix);
  const cpF = JSON.parse(readS(path.join(tmp, 'factory', 'state', 'checkpoint.json')));
  cpF.slotCount = mFix.slots.length;
  writeJson(path.join(tmp, 'factory', 'state', 'checkpoint.json'), cpF);
  const origSlots = mFix.slots.length;
  const { TOPICS } = require('./data/topic-pool');
  // Refill bị chặn bởi pool: chỉ topic KHÔNG trùng slug đã có được nhận. Số
  // kỳ vọng TÍNH ĐỘNG (pool gần cạn khi ma trận lớn — không hardcode).
  const expected = runtime.selectRefillTopics(TOPICS, mFix.slots.map(s => s.slug), 0, runtime.QUEUE_REFILL_TARGET).length;
  const m0 = JSON.parse(readS(p.matrix));
  ok(m0.slots.every(s => s.state === 'PUBLISHED') && m0.slots.filter(s => s.state === 'PLANNED').length === 0,
    'Fixture bắt đầu: mọi slot PUBLISHED, 0 PLANNED (refill từ đầu, không stale)');
  ok(expected >= 18, 'Pool còn đủ topic tự do cho cycle 18 bài (>= 18)', String(expected));
  // Writer KHÔNG được refill (role guard).
  const rw = runNode([p.factory, 'queue-refill', '--role', 'writer'], { cwd: tmp });
  ok(rw.status !== 0, 'queue-refill từ chối role=writer (chỉ coordinator)', rw.stdout + rw.stderr);
  ok(/coordinator/i.test(rw.stderr + rw.stdout), 'Thông báo role guard rõ ràng', (rw.stderr || rw.stdout).slice(0, 200));
  const before = readS(p.matrix);
  const r = runNode([p.factory, 'queue-refill', '--role', 'coordinator'], { cwd: tmp });
  ok(r.status === 0, 'queue-refill (coordinator) exit 0', r.stdout + r.stderr);
  const addRe = new RegExp('QUEUE_REFILL added=' + expected + ' planned=' + expected);
  ok(addRe.test(r.stdout), 'Refill thêm đúng ' + expected + ' slot (mọi topic còn tự do, dedupe)', r.stdout);
  const m1 = JSON.parse(readS(p.matrix));
  const planned = m1.slots.filter(s => s.state === 'PLANNED');
  ok(planned.length === expected, 'Ma trận có đúng ' + expected + ' slot PLANNED mới', String(planned.length));
  ok(m1.slots.length === origSlots + expected, 'Tổng slot ' + origSlots + ' + ' + expected + ' (capacity đủ)', String(m1.slots.length));
  ok(planned.every(s => s.primaryIntent === 'informational/' + s.slug), 'Mọi slot mới: intent mặc định informational/<slug>');
  ok(new Set(m1.slots.map(s => s.slug)).size === m1.slots.length, 'Không slug trùng sau refill');
  const cs = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(cs.status === 0 && /STATE_OK/.test(cs.stdout), 'check-state OK sau refill (checkpoint tự khớp)', cs.stdout + cs.stderr);
  const r2 = runNode([p.factory, 'queue-refill', '--role', 'coordinator'], { cwd: tmp });
  // Pool đủ (>= floor) -> "none planned=<expected>"; pool cạn (< floor) ->
  // thử refill thêm nhưng added=0 planned=<expected>. Cả hai đều idempotent.
  const idleMsg = expected >= runtime.QUEUE_REFILL_FLOOR
    ? new RegExp('QUEUE_REFILL none planned=' + expected)
    : new RegExp('QUEUE_REFILL added=0 planned=' + expected);
  ok(r2.status === 0 && idleMsg.test(r2.stdout), 'Refill idempotent: không thêm slot trùng (planned=' + expected + ')', r2.stdout);
  T5 = { tmp, p, expected, rowsBase: null };
}

// ---------- 6. E2E cycle-plan: 18 ID ----------
console.log('6. cycle-plan e2e…');
let T6;
{
  const { tmp, p, expected } = T5;
  const r = runNode([p.factory, 'cycle-plan'], { cwd: tmp });
  ok(r.status === 0, 'cycle-plan exit 0', r.stdout + r.stderr);
  const ids = (r.stdout.match(/^CYCLE_PLAN ids=([^ ]*)/m) || [])[1] || '';
  const arr = ids.split(',').filter(Boolean);
  ok(arr.length === 18, 'cycle-plan chọn đúng 18 slot (CYCLE_MAX)', String(arr.length));
  ok(!/writers=|CYCLE_ALLOCATE/.test(r.stdout), 'cycle-plan: KHÔNG còn writers/CYCLE_ALLOCATE (bỏ phân công 3 writer)');
  if (expected >= runtime.QUEUE_REFILL_FLOOR) {
    ok(!/refill:/.test(r.stdout), 'planned >= floor -> KHÔNG hint refill');
  } else {
    ok(/refill:/.test(r.stdout), 'planned < floor (pool cạn) -> cycle-plan hint refill đúng');
  }
  ok(arr.every(id => /^S\d{5,}$/.test(id)), 'ID đúng format S');
  ok(!/incomplete/.test(r.stdout), 'Cycle đủ 18 bài -> complete (không incomplete)');
  T6 = { tmp, p, ids: arr };
}

// ---------- 7. E2E cycle-qa: scoped 4 bài (3 pass, 1 fail -> REPAIR) ----------
console.log('7. cycle-qa e2e (scoped, KHÔNG quét toàn site)…');
let T7;
{
  const { tmp, p, ids } = T6;
  const m = JSON.parse(readS(p.matrix));
  const byId = new Map(m.slots.map(s => [s.id, s]));
  // Baseline manifest + SQLite TRƯỚC khi fixture bài mới xuất hiện — số row
  // TÍNH ĐỘNG theo state thật (không hardcode — chống stale test khi số bài
  // trên main tăng). SQLite là derived cache KHÔNG commit nên fixture tự dựng.
  const msBase = runNode([p.factory, 'manifest-sync', '--role', 'coordinator'], { cwd: tmp });
  const rowsBase = Number(((msBase.stdout.match(/rows=(\d+)/) || [])[1]) || 0);
  ok(msBase.status === 0 && rowsBase > 0, 'manifest-sync dựng baseline JSONL (rows động: ' + rowsBase + ')', msBase.stdout + msBase.stderr);
  const rbBase = runNode([p.factory, 'index-rebuild', '--role', 'coordinator'], { cwd: tmp });
  ok(rbBase.status === 0, 'index-rebuild dựng baseline SQLite từ manifest cũ', rbBase.stdout + rbBase.stderr);
  const icBase = runNode([p.factory, 'index-check'], { cwd: tmp });
  ok(icBase.status === 0 && new RegExp('INDEX_OK rows=' + rowsBase + '/' + rowsBase).test(icBase.stdout), 'Baseline SQLite khớp manifest cũ (' + rowsBase + '/' + rowsBase + ')', icBase.stdout + icBase.stderr);
  // Writer "nộp bài" cho 4 slot đầu cycle: 3 tốt + 1 low-QA.
  const qaIds = ids.slice(0, 4);
  const lowId = qaIds[3];
  for (const id of qaIds) {
    const slot = byId.get(id);
    const art = id === lowId ? lowQaArticle(slot) : fixtureArticle(slot);
    fs.writeFileSync(path.join(p.artDir, 'zz-cycle-' + slot.slug + '.js'), 'module.exports = ' + JSON.stringify(art) + ';\n');
  }
  const r = runNode([p.factory, 'cycle-qa', qaIds.join(',')], { cwd: tmp });
  ok(r.status === 0, 'cycle-qa exit 0 (FAIL đi repair queue, KHÔNG giữ cycle)', r.stdout + r.stderr);
  ok(/CYCLE_QA pass=3 fail=1/.test(r.stdout), 'Scoped QA: 3 PASS + 1 FAIL (chỉ 4 bài của cycle, KHÔNG quét bài đã xuất bản)', r.stdout);
  ok(new RegExp('failed=' + lowId).test(r.stdout), 'Output nêu đúng ID bài FAIL', r.stdout);
  const m2 = JSON.parse(readS(p.matrix));
  const passedIds = qaIds.filter(x => x !== lowId);
  ok(m2.slots.find(s => s.id === passedIds[0]).state === 'PASS' &&
     m2.slots.find(s => s.id === passedIds[1]).state === 'PASS' &&
     m2.slots.find(s => s.id === passedIds[2]).state === 'PASS', '3 slot PASS sau scoped QA');
  const low = m2.slots.find(s => s.id === lowId);
  ok(low.state === 'REPAIR' && low.qaScore < 70, 'Slot FAIL vào REPAIR queue (qaScore < 70)', JSON.stringify({ state: low.state, qaScore: low.qaScore }));
  // Bài đã PUBLISHED KHÔNG bị re-audit.
  const pub = m2.slots.find(s => s.state === 'PUBLISHED');
  const beforeAt = pub.updatedAt;
  const r2 = runNode([p.factory, 'cycle-qa', pub.id], { cwd: tmp });
  ok(r2.status === 0 && /CYCLE_QA_SKIP .* đã PUBLISHED/.test(r2.stdout), 'Bài PUBLISHED bị skip — KHÔNG re-audit bài đã xuất bản', r2.stdout);
  const m3 = JSON.parse(readS(p.matrix));
  ok(m3.slots.find(s => s.id === pub.id).updatedAt === beforeAt, 'Slot PUBLISHED KHÔNG bị đụng');
  T7 = { tmp, p, qaIds, lowId, rowsBase };
}

// ---------- 8. E2E cycle-publish: defer REPAIR, publish PASS, 1 build/deploy ----------
console.log('8. cycle-publish e2e…');
{
  const { tmp, p, qaIds, lowId } = T7;
  const passIds = qaIds.filter(x => x !== lowId);
  const r = runNode([p.factory, 'cycle-publish', qaIds.join(','), '--owner', 'coordinator'], { cwd: tmp });
  ok(r.status === 0, 'cycle-publish exit 0 (slot REPAIR được defer, không giữ cycle)', r.stdout + r.stderr);
  ok(new RegExp('CYCLE_RESULT ok=published ids=' + passIds.join(',')).test(r.stdout), 'CYCLE_RESULT publish đúng 3 slot PASS', r.stdout);
  ok(new RegExp('repaired=' + lowId).test(r.stdout), 'Slot FAIL được ghi nhận repaired= (defer sang repair queue)', r.stdout);
  ok(/generate=1 deploy=1/.test(r.stdout), 'Build/deploy ĐÚNG 1 LẦN cho cả cycle', r.stdout);
  const m = JSON.parse(readS(p.matrix));
  ok(passIds.every(id => m.slots.find(s => s.id === id).state === 'PUBLISHED'), '3 slot PASS lật PUBLISHED');
  const low = m.slots.find(s => s.id === lowId);
  ok(low.state === 'REPAIR' && low.qaScore < 70, 'Slot FAIL vẫn ở REPAIR queue sau cycle-publish');
  ok(!fs.existsSync(p.txn) && !fs.existsSync(p.lock), 'Txn COMMIT + lock thả sạch sau cycle-publish');
  const cs = runNode([p.factory, 'check-state'], { cwd: tmp });
  ok(cs.status === 0, 'check-state OK sau cycle-publish', cs.stdout + cs.stderr);
  const cp = JSON.parse(readS(path.join(tmp, 'factory', 'state', 'checkpoint.json')));
  ok(cp.slotCount === m.slots.length, 'Checkpoint khớp ma trận (' + m.slots.length + ' slot)');
  const vp = runNode([p.factory, 'verify-pair', passIds[0] + ',' + passIds[1]], { cwd: tmp });
  ok(vp.status === 0 && /VERIFY_PAIR_OK/.test(vp.stdout), 'verify-pair OK với 2 slot vừa publish', vp.stdout + vp.stderr);
}

// ---------- 9. E2E manifest + sqlite derived cache trên tmp ----------
console.log('9. manifest-sync + index (tmp)…');
{
  const { tmp, p, rowsBase } = T7;
  const rowsAfter = rowsBase + 4; // 3 bài publish + 1 bài REPAIR (module có file)
  const ms = runNode([p.factory, 'manifest-sync', '--role', 'coordinator'], { cwd: tmp });
  ok(ms.status === 0 && new RegExp('MANIFEST_SYNC rows=' + rowsAfter).test(ms.stdout),
    'Manifest sync: ' + rowsBase + ' cũ + 3 bài mới + 1 bài REPAIR = ' + rowsAfter + ' rows', ms.stdout + ms.stderr);
  const ic = runNode([p.factory, 'index-check'], { cwd: tmp });
  ok(ic.status !== 0 && /stale/.test(ic.stdout + ic.stderr), 'SQLite cũ (' + rowsBase + ' dòng) đúng báo STALE so với manifest ' + rowsAfter + ' — phát hiện cần rebuild', ic.stdout + ic.stderr);
  const rb0 = runNode([p.factory, 'index-rebuild', '--role', 'coordinator'], { cwd: tmp });
  ok(rb0.status === 0, 'index-rebuild cập nhật SQLite derived cache từ manifest mới', rb0.stdout + rb0.stderr);
  const ic0 = runNode([p.factory, 'index-check'], { cwd: tmp });
  ok(ic0.status === 0 && new RegExp('INDEX_OK rows=' + rowsAfter + '/' + rowsAfter).test(ic0.stdout), 'Sau rebuild: SQLite khớp manifest (' + rowsAfter + '/' + rowsAfter + ')', ic0.stdout + ic0.stderr);
  // Corrupt sqlite -> index-check fail -> index-rebuild phục hồi.
  fs.writeFileSync(p.sqlite, Buffer.from('day-khong-phai-sqlite'));
  const icBad = runNode([p.factory, 'index-check'], { cwd: tmp });
  ok(icBad.status !== 0, 'SQLite corrupt -> index-check FAIL (phát hiện cần rebuild)', icBad.stdout + icBad.stderr);
  const rb = runNode([p.factory, 'index-rebuild', '--role', 'coordinator'], { cwd: tmp });
  ok(rb.status === 0, 'index-rebuild phục hồi an toàn từ manifest + content (coordinator)', rb.stdout + rb.stderr);
  const ic2 = runNode([p.factory, 'index-check'], { cwd: tmp });
  ok(ic2.status === 0 && new RegExp('INDEX_OK rows=' + rowsAfter + '/' + rowsAfter).test(ic2.stdout), 'Sau rebuild: INDEX_OK trở lại', ic2.stdout + ic2.stderr);
  const rw = runNode([p.factory, 'index-rebuild', '--role', 'writer'], { cwd: tmp });
  ok(rw.status !== 0, 'Writer KHÔNG được rebuild SQLite (role guard)', (rw.stderr || rw.stdout).slice(0, 120));
}

// ---------- 10. State thật byte-safe ----------
console.log('10. State thật nguyên vẹn…');
{
  let intact = true;
  for (const { f, b } of REAL_STATE_SNAPSHOT) {
    const now = readB(path.join(ROOT, 'factory', 'state', f));
    if (!now.equals(b)) { intact = false; console.log(`  ✗ factory/state/${f} BỊ THAY ĐỔI`); }
  }
  ok(intact, '4 file state production BYTE-IDENTICAL sau toàn bộ suite (mọi e2e dùng copy tmp)');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'writer.lock')), 'Không writer.lock bỏ lại trên repo thật');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'txn.json')), 'Không txn marker bỏ lại trên repo thật');
}

console.log(`\nKẾT QUẢ: ${pass} pass, ${fail} fail.`);
if (fail > 0) { console.log('KIỂM TRA THẤT BẠI: production cycle có regression.'); process.exit(1); }
console.log('PASS: PRODUCTION CYCLE (scoped QA, refill, defer REPAIR, 1 build/deploy) đạt toàn bộ regression.');
