#!/usr/bin/env node
// AI WIKI TOTAL — BỘ KIỂM THỬ RELIABILITY 4 TẦNG (hardening factory)
// Chuẩn bắt buộc khi sửa factory/workflow (xem docs/FACTORY-RELIABILITY.md):
//   LAYER 1 — UNIT: lock exclusive/ownership/stale, chunk/progress/invariant thuần.
//   LAYER 2 — INTEGRATION: drain production orchestration trên fixture tmp
//             (25 slot article-backed, 3 chunk, không cần push thứ hai),
//             QA fail / publish fail / module lỗi / wrong owner / stale lock.
//   LAYER 3 — PRODUCTION INVARIANT: verify-invariant + regression sentinel
//             "SUCCESS + backlog > 0 phải FAIL".
//   LAYER 4 — LONG-RUN / FAILURE RECOVERY: soak 35 slot (4 chunk), resume sau
//             đứt giữa chừng, workflow YAML anchors (behavior thật, không chỉ
//             parse YAML).
// Mọi kịch bản ghi/xóa chạy trên BẢN SAO trong os.tmpdir — repo thật read-only.
// Cuối suite: khẳng định 4 file state của repo thật BYTE-IDENTICAL trước/sau.
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync, spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const lockMod = require('./lib/lock');
const runtime = require('./lib/factory-runtime');
const factoryMod = require('./factory');

let pass = 0, fail = 0;
function ok(cond, name, detail) {
  if (cond) { pass++; }
  else { fail++; console.log(`  ✗ ${name}${detail ? ' — ' + detail : ''}`); }
}
function throws(name, fn, want) {
  try { fn(); ok(false, name, 'không ném lỗi'); }
  catch (e) { ok(want ? String(e.message).includes(want) : true, name, String(e.message)); }
}
function readS(file) { return fs.readFileSync(file, 'utf8'); }
function readB(file) { return fs.readFileSync(file); }
function writeJson(file, obj) { fs.writeFileSync(file, JSON.stringify(obj, null, 1)); }
function runNode(args, opts) {
  try {
    const stdout = execFileSync(process.execPath, args, { cwd: (opts && opts.cwd) || ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    return { status: 0, stdout: stdout || '', stderr: '' };
  } catch (e) {
    return { status: typeof e.status === 'number' ? e.status : 1, stdout: e.stdout || '', stderr: e.stderr || String((e && e.message) || e) };
  }
}
function tmpDir(tag) { return fs.mkdtempSync(path.join(os.tmpdir(), 'rel-' + tag + '-')); }

// State thật trước suite — phải byte-identical sau suite.
const REAL_STATE = ['matrix.json', 'checkpoint.json', 'factory-state.json', 'manifest.json']
  .map(f => ({ f, b: readB(path.join(ROOT, 'factory', 'state', f)) }));

console.log('=== KIỂM THỬ RELIABILITY 4 TẦNG (FACTORY) ===');

// =====================================================================
// LAYER 1 — UNIT (thuần; lock trong tmp dir, không đụng state thật)
// =====================================================================
console.log('LAYER 1 — UNIT…');

// 1.1 Exclusive acquire + ownership record
{
  const d = tmpDir('lock-basic');
  const a = lockMod.acquire(d, 'writer-A');
  ok(a && a.owner === 'writer-A' && a.token && a.at && Number.isFinite(a.pid), 'acquire trả record ownership (owner/token/at/pid)');
  throws('acquire thứ hai bị từ chối (ELOCKED)', () => lockMod.acquire(d, 'writer-B'), 'BỊ TỪ CHỐI');
  const onDisk = JSON.parse(readS(lockMod.lockFile(d)));
  ok(onDisk.token === a.token, 'lock trên đĩa giữ đúng token của người thắng (loser không overwrite winner)', `${onDisk.token} vs ${a.token}`);
  // status read-only: không xóa lock kể cả khi stale
  const st = lockMod.status(d);
  ok(st.lock && st.lock.token === a.token && st.expired === false, 'status đọc được lock, KHÔNG mutate');
  fs.rmSync(d, { recursive: true, force: true });
}

// 1.2 Token unique mỗi acquisition
{
  const d = tmpDir('lock-token');
  const a = lockMod.acquire(d, 'writer-A');
  lockMod.release(d, a);
  const b = lockMod.acquire(d, 'writer-A');
  ok(b.token !== a.token, 'token unique cho từng acquisition (cùng owner vẫn token mới)');
  lockMod.release(d, b);
  fs.rmSync(d, { recursive: true, force: true });
}

// 1.3 Wrong-owner unlock refuse — lock của winner NGUYÊN VẸN
{
  const d = tmpDir('lock-refuse');
  const a = lockMod.acquire(d, 'writer-A');
  throws('unlock sai owner bị refuse', () => lockMod.release(d, { owner: 'writer-B', token: a.token }), 'TỪ CHỐI giải phóng');
  throws('unlock sai token bị refuse', () => lockMod.release(d, { owner: 'writer-A', token: '00000000-0000-0000-0000-000000000000' }), 'TỪ CHỐI giải phóng');
  const onDisk = JSON.parse(readS(lockMod.lockFile(d)));
  ok(onDisk.token === a.token, 'lock vẫn nguyên vẹn sau mọi lần unlock sai (không xóa lock người khác)');
  const r = lockMod.release(d, a);
  ok(r.released === true, 'unlock đúng owner+token thành công');
  ok(!fs.existsSync(lockMod.lockFile(d)), 'lock sạch sau release đúng ownership');
  const idem = lockMod.release(d, a);
  ok(idem.released === false, 'release khi không có lock là no-op idempotent (không lỗi)');
  fs.rmSync(d, { recursive: true, force: true });
}

// 1.4 Concurrency: N process cùng acquire -> EXACTLY ONE thắng
// (barrier: mọi child đợi file "go" rồi mới tranh chấp — thật sự đồng thời)
function lockChildScript() {
  return [
    "const fs = require('fs');",
    "const lock = require(process.argv[2]);",
    "const dir = process.argv[3], owner = process.argv[4], goFile = process.argv[5], outFile = process.argv[6];",
    "function pollGo() { if (fs.existsSync(goFile)) { run(); } else setTimeout(pollGo, 5); }",
    "function run() {",
    "  try { const r = lock.acquire(dir, owner); fs.writeFileSync(outFile, JSON.stringify({ ok: true, owner, token: r.token })); }",
    "  catch (e) { fs.writeFileSync(outFile, JSON.stringify({ ok: false, code: e.code || null })); }",
    "}",
    "pollGo();",
  ].join('\n');
}
function raceAcquire(dir, n, tag) {
  const goFile = path.join(dir, tag + '-go');
  const childScript = path.join(dir, tag + '-child.js');
  fs.writeFileSync(childScript, lockChildScript());
  const procs = [];
  for (let i = 0; i < n; i++) {
    const outFile = path.join(dir, tag + '-result-' + i + '.json');
    procs.push({ p: spawn(process.execPath, [childScript, path.join(__dirname, 'lib', 'lock.js'), dir, 'racer-' + i, goFile, outFile], { stdio: 'ignore' }), outFile });
  }
  fs.writeFileSync(goFile, 'go');
  const results = [];
  for (const pr of procs) {
    const waitUntil = Date.now() + 20000;
    while (!fs.existsSync(pr.outFile) && Date.now() < waitUntil) {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10);
    }
    results.push(JSON.parse(readS(pr.outFile)));
  }
  return results;
}
{
  const d = tmpDir('lock-race');
  const results = raceAcquire(d, 4, 'race');
  const winners = results.filter(r => r.ok);
  ok(winners.length === 1, '4 process tranh chấp acquire -> EXACTLY 1 thắng', JSON.stringify(results));
  const onDisk = JSON.parse(readS(lockMod.lockFile(d)));
  ok(winners.length === 1 && onDisk.token === winners[0].token, 'lock trên đĩa = token của người thắng duy nhất (loser không overwrite)');
  ok(results.filter(r => !r.ok).every(r => r.code === 'ELOCKED'), 'mọi loser nhận ELOCKED (refuse rõ ràng)');
  // cleanup-loser: loser cố cleanup bằng release với "token của mình" -> không đụng được lock winner
  let winnerToken = winners.length === 1 ? winners[0].token : null;
  throws('cleanup của loser KHÔNG xóa được lock của winner', () => lockMod.release(d, { owner: 'racer-1', token: 'fake-token-of-loser' }), 'TỪ CHỐI giải phóng');
  ok(JSON.parse(readS(lockMod.lockFile(d))).token === winnerToken, 'lock winner VẪN tồn tại sau cleanup của loser');
  fs.rmSync(d, { recursive: true, force: true });
}

// 1.5 Stale classification (thuần)
{
  const now = Date.now();
  ok(lockMod.isExpired(null, now) === true, 'isExpired(null) = true (reclaim được)');
  ok(lockMod.isExpired({ at: new Date(now).toISOString() }, now) === false, 'lock tươi = chưa hết hạn');
  ok(lockMod.isExpired({ at: new Date(now - 40 * 60 * 1000).toISOString() }, now) === true, 'lock 40 phút = quá TTL 30 phút');
  ok(lockMod.isExpired({ at: new Date(now - 5 * 60 * 1000).toISOString(), ttlMs: 60 * 1000 }, now) === true, 'ttlMs trong record thắng mặc định');
  ok(lockMod.isExpired({ at: 'không-phải-date' }, now) === true, 'lock hỏng ngày = reclaim được');
  ok(lockMod.isExpired({}, now) === true, 'lock rỗng = reclaim được');
}

// 1.6 Stale reclaim — đơn process + race-safe khi nhiều process cùng reclaim
{
  const d = tmpDir('lock-stale');
  fs.writeFileSync(lockMod.lockFile(d), JSON.stringify({ owner: 'writer-gone', token: 'stale-token', at: new Date(Date.now() - 40 * 60 * 1000).toISOString(), pid: 111, ttlMs: lockMod.LOCK_TTL_MS }));
  const r = lockMod.acquire(d, 'writer-new');
  ok(r.owner === 'writer-new' && r.token !== 'stale-token', 'acquire reclaim được lock stale (token mới, không tái dùng token cũ)');  ok(!fs.readdirSync(d).some(f => f.startsWith('writer.lock.stale-')), 'không để lại file quarantine sau reclaim');
  lockMod.release(d, r);
  // Race reclaim: stale lock + 4 process cùng lúc -> đúng 1 thắng, không lock leak
  fs.writeFileSync(lockMod.lockFile(d), JSON.stringify({ owner: 'writer-gone-2', token: 'stale-2', at: new Date(Date.now() - 40 * 60 * 1000).toISOString(), pid: 112 }));
  const results = raceAcquire(d, 4, 'stalerace');
  const winners = results.filter(x => x.ok);
  ok(winners.length === 1, '4 process cùng reclaim stale lock -> EXACTLY 1 thắng', JSON.stringify(results));
  ok(!fs.readdirSync(d).some(f => f.startsWith('writer.lock.stale-')), 'race reclaim không để lại quarantine');
  // Corrupt lock -> reclaim được
  if (winners.length === 1) lockMod.release(d, { owner: winners[0].owner, token: winners[0].token });
  fs.writeFileSync(lockMod.lockFile(d), '{ không phải json');
  const r2 = lockMod.acquire(d, 'writer-new');
  ok(r2.owner === 'writer-new', 'lock corrupt JSON bị reclaim (không kẹt vĩnh viễn)');
  lockMod.release(d, r2);
  fs.rmSync(d, { recursive: true, force: true });
}

// 1.7 selectChunk / findClaimableBacklog / chunkLimit (thuần)
{
  const now = new Date().toISOString();
  const mk = (id, state, slug) => ({ id, hub: 'thue-xe/xe-may', slug, title: 'T' + id, primaryIntent: '', notes: '', state, qaScore: null, attempts: 0, createdAt: now, updatedAt: now });
  const m = {
    capacity: 100, plannedTarget: 50, reserved: { total: 10, a: 10 },
    slots: [
      mk('S00001', 'PUBLISHED', 'p1'), mk('S00002', 'PUBLISHED', 'p2'),
      mk('S00003', 'PASS', 'has-article-pass'),       // claimable (có bài)
      mk('S00004', 'RESEARCH', 'has-article-dirty'),  // resume TRƯỚC
      mk('S00005', 'PLANNED', 'has-article-new'),     // claim sau
      mk('S00006', 'PLANNED', 'no-article-yet'),      // WAITING_FOR_WRITER
      mk('S00007', 'BLOCKED', 'blocked-one'),
      mk('S00008', 'PUBLISHED', 'p3'),
    ],
  };
  const slugs = new Set(['has-article-pass', 'has-article-dirty', 'has-article-new']);
  const back = runtime.findClaimableBacklog(m, slugs);
  ok(back.claimable.length === 3, 'claimable = slot chưa terminal CÓ bài (3)', String(back.claimable.length));
  ok(back.claimable.every(s => !['PUBLISHED', 'BLOCKED'].includes(s.state)), 'PUBLISHED/BLOCKED không claimable');
  ok(back.waitingForWriter.length === 1 && back.waitingForWriter[0].id === 'S00006', 'PLANNED chưa có bài = WAITING_FOR_WRITER (không phải lỗi CI)');
  const sel = runtime.selectChunk(m, slugs);
  ok(sel.chunk.length === 3 && sel.chunk.slice(0, 2).every(s => s.state !== 'PLANNED') && sel.chunk[2].id === 'S00005',
    'chunk: slot DỞ (không PLANNED) được resume TRƯỚC slot PLANNED mới', sel.chunk.map(s => s.id + ':' + s.state).join(','));
  ok(sel.chunk.map(s => s.id).join(',') === 'S00003,S00004,S00005', 'thứ tự trong nhóm unfinished theo ma trận (deterministic)', sel.chunk.map(s => s.id).join(','));
  ok(sel.limit === runtime.PUBLISH_CHUNK_LIMIT, 'limit = 10 khi đã có bài PUBLISHED');
  const m2 = { capacity: 100, plannedTarget: 50, reserved: { total: 10, a: 10 }, slots: [mk('S00001', 'PLANNED', 'a1'), mk('S00002', 'PLANNED', 'a2')] };
  ok(runtime.selectChunk(m2, new Set(['a1', 'a2'])).limit === 5, 'limit = 5 khi xưởng chưa có bài PUBLISHED nào (chunk đầu)');
  // chunk không vượt limit
  const many = { capacity: 100, plannedTarget: 50, reserved: { total: 10, a: 10 }, slots: [] };
  for (let i = 1; i <= 25; i++) many.slots.push(mk('S' + String(i).padStart(5, '0'), 'PLANNED', 'x' + i));
  ok(runtime.selectChunk(many, new Set(many.slots.map(s => s.slug))).chunk.length === 5, 'chunk bị cắt đúng limit khi published=0');
  const manyPub = JSON.parse(JSON.stringify(many));
  manyPub.slots[0].state = 'PUBLISHED';
  ok(runtime.selectChunk(manyPub, new Set(manyPub.slots.map(s => s.slug))).chunk.length === 10, 'chunk bị cắt đúng limit 10 khi có PUBLISHED');
  ok(runtime.PUBLISH_CHUNK_LIMIT === 10 && factoryMod.PUBLISH_CHUNK_LIMIT === 10, 'PUBLISH_CHUNK_LIMIT = 10 (factory re-export canonical)');
}

// 1.8 maxIterations — tính từ workload, KHÔNG hardcode "1000 vòng"
{
  ok(runtime.maxIterations(25, 10) === 5, 'maxIterations(25) = ceil(25/10)+2 = 5', String(runtime.maxIterations(25, 10)));
  ok(runtime.maxIterations(35, 10) === 6, 'maxIterations(35) = 6 (>3 vòng soak)', String(runtime.maxIterations(35, 10)));
  ok(runtime.maxIterations(0, 10) === 1, 'backlog 0 -> 1 vòng (chỉ xác nhận sạch)');
  ok(runtime.maxIterations(7, 10) === 3, 'backlog nhỏ vẫn có phụ cấp recovery (+2)');
}

// 1.9 computeProgress / assertProgress (NO-PROGRESS sentinel thuần)
{
  const snap = (p, b, bl) => ({ published: p, blocked: b, claimableBacklog: bl, waitingForWriter: 0, terminal: 0, slotCount: 0 });
  ok(runtime.computeProgress(snap(9, 0, 15), snap(19, 0, 5)).progressed === true, 'published tăng = progress');
  ok(runtime.computeProgress(snap(9, 0, 15), snap(9, 0, 14)).progressed === true, 'backlog giảm = progress');
  ok(runtime.computeProgress(snap(9, 0, 15), snap(9, 1, 14)).progressed === true, 'slot chuyển terminal BLOCKED (QA thật) = progress');
  ok(runtime.computeProgress(snap(9, 0, 15), snap(9, 0, 15)).progressed === false, 'không đổi gì = KHÔNG progress');
  throws('assertProgress: backlog>0 + không tiến -> NO_PROGRESS fail loud', () => runtime.assertProgress(snap(9, 0, 15), snap(9, 0, 15)), 'NO_PROGRESS');
  ok(runtime.assertProgress(snap(9, 0, 15), snap(9, 0, 14)) === true, 'assertProgress pass khi có tiến triển');
  ok(runtime.assertProgress(snap(9, 0, 0), snap(9, 0, 0)) === true, 'backlog=0 không đòi progress thêm');
}

// 1.10 checkProductionInvariant (thuần, predicate tiêm vào)
{
  const now = new Date().toISOString();
  const slot = (id, state, slug, qa) => ({ id, hub: 'thue-xe/xe-may', slug, title: 'T' + id, primaryIntent: '', state, qaScore: qa, attempts: 1, createdAt: now, updatedAt: now });
  const good = { capacity: 100, plannedTarget: 50, reserved: { total: 10, a: 10 }, slots: [slot('S00001', 'PUBLISHED', 'ok-1', 95)] };
  const ctxGood = {
    hasLock: false, checkpointSlotCount: 1,
    validateMatrix: () => true,
    articleExists: () => true, pageExists: () => true, sitemapHas: () => true,
    url: s => 'https://example.test/' + s.slug + '/', sitemapUrls: ['https://example.test/ok-1/'],
  };
  ok(runtime.checkProductionInvariant(good, ctxGood).ok === true, 'invariant PASS trên fixture tốt');
  ok(runtime.checkProductionInvariant(good, { ...ctxGood, hasLock: true }).ok === false, 'invariant FAIL khi còn writer lock');
  ok(runtime.checkProductionInvariant(good, { ...ctxGood, checkpointSlotCount: 2 }).ok === false, 'invariant FAIL khi checkpoint lệch ma trận');
  ok(runtime.checkProductionInvariant(good, { ...ctxGood, articleExists: () => false }).ok === false, 'invariant FAIL khi PUBLISHED thiếu article source');
  ok(runtime.checkProductionInvariant(good, { ...ctxGood, pageExists: () => false }).ok === false, 'invariant FAIL khi PUBLISHED thiếu trang sinh');
  ok(runtime.checkProductionInvariant(good, { ...ctxGood, sitemapHas: () => false }).ok === false, 'invariant FAIL khi PUBLISHED thiếu trong sitemap');
  ok(runtime.checkProductionInvariant(good, { ...ctxGood, sitemapUrls: ['https://example.test/ghost/'] }).ok === false, 'invariant FAIL khi sitemap có URL không thuộc PUBLISHED');
  const lowQa = { capacity: 100, plannedTarget: 50, reserved: { total: 10, a: 10 }, slots: [slot('S00001', 'PUBLISHED', 'ok-1', 74)] };
  ok(runtime.checkProductionInvariant(lowQa, ctxGood).ok === false, 'invariant FAIL khi PUBLISHED qaScore < 75');
  const dup = { capacity: 100, plannedTarget: 50, reserved: { total: 10, a: 10 }, slots: [slot('S00001', 'PUBLISHED', 'dup', 95), slot('S00002', 'PUBLISHED', 'dup', 95)] };
  ok(runtime.checkProductionInvariant(dup, { ...ctxGood, checkpointSlotCount: 2 }).ok === false, 'invariant FAIL khi trùng slug');
}

// =====================================================================
// Hạ tầng fixture integration (BẢN SAO repo trong tmp — không đụng production)
// =====================================================================
function copyRepoToTmp(tag) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rel2-' + tag + '-'));
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
function tmpPaths(tmp) {
  return {
    root: tmp,
    factory: path.join(tmp, 'factory', 'factory.js'),
    generate: path.join(tmp, 'factory', 'generate.js'),
    test: path.join(tmp, 'factory', 'test.js'),
    matrix: path.join(tmp, 'factory', 'state', 'matrix.json'),
    checkpoint: path.join(tmp, 'factory', 'state', 'checkpoint.json'),
    fstate: path.join(tmp, 'factory', 'state', 'factory-state.json'),
    lock: path.join(tmp, 'factory', 'state', 'writer.lock'),
    sitemap: path.join(tmp, 'sitemap-articles.xml'),
  };
}
// Bài fixture đạt QA — có biến thể theo chỉ số để 35 bài không trùng nội dung.
function fixtureArticle(i, slug, title) {
  const p = (k) => `<p>Đoạn kiểm thử reliability ${i}-${k}: quy trình thuê xe máy tại Hà Nội (mã ${i}) gồm chuẩn bị giấy tờ, kiểm tra tình trạng xe, ký hợp đồng, đặt cọc và nghiệm thu khi hoàn trả. Người thuê nên đối chiếu kỹ từng điều khoản phiên bản ${i}, chụp lại hình ảnh hiện trạng xe trước khi nhận và giữ trọn bộ giấy tờ trong suốt thời gian sử dụng. Nắm lịch bảo dưỡng ${i} giúp nhận diện sớm tiếng động bất thường ở máy, mức mòn của lốp và độ nhạy của phanh trước khi vấn đề lớn dần.</p>`;
  const sec = (h2, from, to) => ({ h2, html: Array.from({ length: to - from }, (_, k) => p(from + k)).join('\n') });
  return {
    slug, title,
    seoTitle: `Quy trình thuê xe máy kiểm thử reliability ${i} của xưởng nội dung`,
    metaDescription: `Bài kiểm thử reliability ${i} mô tả quy trình thuê xe máy tại Hà Nội: giấy tờ, hợp đồng, đặt cọc và nghiệm thu khi trả xe an toàn cho cả hai bên.`,
    summary: `Tổng hợp quy trình thuê xe máy dùng cho kiểm thử reliability ${i}, bám sát các bước giấy tờ, hợp đồng, đặt cọc, vận hành và nghiệm thu.`,
    quickAnswer: `Quy trình ${i} gồm bốn bước chính: chuẩn bị giấy tờ theo yêu cầu, kiểm tra hiện trạng xe, ký hợp đồng và đặt cọc, nghiệm thu khi hoàn trả đúng hạn để nhận lại tiền cọc.`,
    keyPoints: [
      `Chuẩn bị đầy đủ giấy tờ tùy thân theo yêu cầu của bên cho thuê trước khi nhận xe (bước ${i}).`,
      'Kiểm tra hiện trạng xe, chụp ảnh lưu vết và ghi rõ vào biên bản giao nhận.',
      'Đọc kỹ hợp đồng, đặc biệt các điều khoản về tiền cọc, thời hạn và bồi thường.',
      'Nghiệm thu đúng hẹn và giữ lại biên bản trả xe để tránh tranh chấp về sau.',
    ],
    category: 'thue-xe', hub: 'xe-may',
    date: '2026-09-28', updated: '2026-09-29',
    entities: ['thuê xe máy', 'Hà Nội', 'hợp đồng', 'đặt cọc'],
    keywords: [`thuê xe máy hà nội ${i}`, 'quy trình thuê xe', 'hợp đồng thuê xe', 'đặt cọc thuê xe'],
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
// Bài fixture hỏng QA (quá ngắn) — để test đường QA fail.
function brokenArticle(slug) {
  return { ...fixtureArticle(1, slug, 'Bài hỏng QA kiểm thử reliability'), sections: [{ h2: 'Quá ngắn', html: '<p>Nội dung quá ngắn không đạt ngưỡng từ tối thiểu.</p>' }] };
}
// Chuẩn bị fixture drain: N slot PLANNED article-backed (S10001...) + module bài.
// opts: { n, badQa (index hỏng QA), breakTest, brokenModule, bystanderPass (slug không có module), preStates: {index: state} }
function buildDrainFixture(tag, opts) {
  const o = opts || {};
  const n = o.n || 0;
  const tmp = copyRepoToTmp(tag);
  const P = tmpPaths(tmp);
  const now = new Date().toISOString();
  const m = JSON.parse(readS(P.matrix));
  const artDir = path.join(tmp, 'factory', 'data', 'articles');
  for (let i = 1; i <= n; i++) {
    const slug = `rel-fixture-bai-${i}`;
    const id = 'S' + String(10000 + i);
    m.slots.push({
      id, hub: 'thue-xe/xe-may', slug, title: `Bài fixture reliability ${i} của xưởng nội dung`,
      primaryIntent: 'informational/' + slug, notes: '', state: (o.preStates && o.preStates[i]) || 'PLANNED',
      qaScore: null, attempts: 0, createdAt: now, updatedAt: now,
    });
    const a = (o.badQa === i) ? brokenArticle(slug) : fixtureArticle(i, slug, `Bài fixture reliability ${i} của xưởng nội dung`);
    fs.writeFileSync(path.join(artDir, `zz-rel-${String(i).padStart(3, '0')}.js`), 'module.exports = ' + JSON.stringify(a) + ';\n');
  }
  if (o.bystanderPass) {
    // slot PASS KHÔNG có module bài — không claimable, KHÔNG được đụng tới
    m.slots.push({
      id: 'S' + String(10000 + n + 1), hub: 'thue-xe/xe-may', slug: o.bystanderPass,
      title: 'Bystander PASS không bài', primaryIntent: 'informational/' + o.bystanderPass, notes: '',
      state: 'PASS', qaScore: 95, attempts: 1, createdAt: now, updatedAt: now,
    });
  }
  if (o.brokenModule) {
    fs.writeFileSync(path.join(artDir, 'zz-rel-broken.js'), 'module.exports = { slug: "rel-broken", ;\n');
  }
  if (o.breakTest) {
    fs.writeFileSync(P.test, 'process.exit(1);\n');
  }
  writeJson(P.matrix, m);
  const cp = JSON.parse(readS(P.checkpoint));
  cp.slotCount = m.slots.length;
  writeJson(P.checkpoint, cp);
  return { tmp, P, m, n };
}
function drainOnce(P, tmp, owner) {
  return runNode([P.factory, 'drain-iteration', '--owner', owner || 'ci-test'], { cwd: tmp });
}
function countState(P, state) {
  return JSON.parse(readS(P.matrix)).slots.filter(s => s.state === state).length;
}
function claimableCount(P) {
  const out = runNode([P.factory, 'backlog'], { cwd: P.root });
  return Number((out.stdout.match(/^CLAIMABLE_BACKLOG=(\d+)/m) || [0, 0])[1]);
}
// Drain liên tiếp như workflow (đến done=true hoặc lỗi) — trả các kết quả từng vòng.
function drainAll(P, maxIter) {
  const iters = [];
  for (let i = 0; i < (maxIter || 12); i++) {
    const r = drainOnce(P, P.root);
    iters.push(r);
    if (r.status !== 0) break;
    if (/^DRAIN_RESULT done=true/m.test(r.stdout)) break;
  }
  return iters;
}

// =====================================================================
// LAYER 2 — INTEGRATION (fixture tmp, KHÔNG production state)
// =====================================================================
console.log('LAYER 2 — INTEGRATION…');

// 2.1 Drain liên tục 25 slot article-backed: 3 chunk 10/10/5, KHÔNG cần push thứ hai
let soakFixture = null; // tái dùng cho LAYER 3
{
  const F = buildDrainFixture('drain25', { n: 25, bystanderPass: 'rel-bystander-no-article' });
  const { tmp, P } = F;
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline đọc từ state THẬT (không hardcode)
  const iters = drainAll(P, 6);
  const okIters = iters.filter(r => r.status === 0);
  ok(iters.length === 3 && iters.every(r => r.status === 0),
    '25 slot article-backed drain hết trong 3 vòng chunk (10/10/5) — không cần push/trigger thứ hai',
    `vòng=${iters.length} status=[${iters.map(r => r.status)}] ${iters.map(r => r.stdout + r.stderr).join('---').slice(0, 400)}`);
  const pub1 = /published=(\d+)/.exec(iters[0].stdout);
  const pub2 = /published=(\d+)/.exec(iters[1].stdout);
  const pub3 = /published=(\d+)/.exec(iters[2].stdout);
  ok(pub1 && Number(pub1[1]) === publishedBefore + 10, 'chunk 1 publish đúng 10 slot', pub1 && pub1[1]);
  ok(pub2 && Number(pub2[1]) === publishedBefore + 20, 'chunk 2 publish đúng 10 slot', pub2 && pub2[1]);
  ok(pub3 && Number(pub3[1]) === publishedBefore + 25, 'chunk 3 publish đúng 5 slot còn lại', pub3 && pub3[1]);
  ok(/backlog=0/.test(iters[2].stdout) && /done=true/.test(iters[2].stdout), 'vòng cuối: done=true, backlog=0');
  ok(claimableCount(P) === 0, 'backlog claimable = 0 sau drain (CLI backlog xác nhận)');
  // checkpoint + lock + không đụng bystander/PUBLISHED thật
  const m = JSON.parse(readS(P.matrix));
  const cp = JSON.parse(readS(P.checkpoint));
  ok(cp.slotCount === m.slots.length, 'checkpoint khớp ma trận sau drain', `${cp.slotCount} vs ${m.slots.length}`);
  ok(!fs.existsSync(P.lock), 'không lock leak sau drain');
  const bystander = m.slots.find(s => s.slug === 'rel-bystander-no-article');
  ok(bystander && bystander.state === 'PASS', 'bystander PASS không có bài KHÔNG bị đụng (không sweep)');
  ok(countState(P, 'PUBLISHED') === publishedBefore + 25, 'PUBLISHED tăng đúng 25 (toàn bộ eligible drained)');
  // không renumber / không duplicate / mọi JSON state nguyên vẹn (không half-written)
  let allParse = true;
  for (const f of [P.matrix, P.checkpoint, P.fstate]) { try { JSON.parse(readS(f)); } catch (e) { allParse = false; } }
  ok(allParse, 'không half-written JSON sau drain');
  const ids = m.slots.map(s => s.id);
  ok(new Set(ids).size === ids.length, 'không duplicate ID slot');
  // site khớp generator + audit sau drain (phải xanh trên fixture đã publish)
  const chk = runNode([P.generate, '--check'], { cwd: tmp });
  ok(chk.status === 0, 'generate --check xanh trên fixture sau drain', (chk.stdout + chk.stderr).slice(0, 300));
  const aud = runNode([P.factory, 'audit', '--min-score', '75'], { cwd: tmp });
  ok(aud.status === 0, 'audit >= 75 xanh trên fixture sau drain', (aud.stdout + aud.stderr).slice(0, 300));
  const tst = runNode([P.test], { cwd: tmp });
  ok(tst.status === 0, 'test.js xanh trên fixture sau drain', (tst.stdout + tst.stderr).slice(0, 300));
  soakFixture = F;
}

// 2.2 QA fail -> REPAIR, NO-PROGRESS fail loud, state resumable; sửa bài -> rerun pass
{
  const F = buildDrainFixture('qafail', { n: 1, badQa: 1 });
  const { tmp, P } = F;
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline động từ state thật
  const r1 = drainOnce(P, tmp);
  ok(r1.status !== 0, 'drain iteration exit != 0 khi QA fail (NO-PROGRESS fail loud)', (r1.stdout + r1.stderr).slice(0, 400));
  ok((r1.stdout + r1.stderr).includes('NO_PROGRESS'), 'báo rõ NO_PROGRESS — không SUCCESS giả');
  const m1 = JSON.parse(readS(P.matrix));
  const slot = m1.slots.find(s => s.id === 'S10001');
  ok(slot && slot.state === 'REPAIR' && slot.attempts === 1, 'slot QA-fail -> REPAIR (attempts=1), state ĐÃ LƯU để resumable (không mất công QA)');
  ok(!fs.existsSync(P.lock), 'không lock leak khi NO_PROGRESS');
  ok(claimableCount(P) === 1, 'backlog claimable vẫn 1 (slot REPAIR chưa terminal)');
  // Sửa bài -> rerun -> pass và drain hết
  fs.writeFileSync(path.join(tmp, 'factory', 'data', 'articles', 'zz-rel-001.js'),
    'module.exports = ' + JSON.stringify(fixtureArticle(1, 'rel-fixture-bai-1', 'Bài fixture reliability 1 của xưởng nội dung')) + ';\n');
  const r2 = drainOnce(P, tmp);
  ok(r2.status === 0 && /done=true/.test(r2.stdout), 'rerun sau khi sửa bài -> QA đạt, publish, done=true', (r2.stdout + r2.stderr).slice(0, 400));
  ok(countState(P, 'PUBLISHED') === publishedBefore + 1, 'slot REPAIR được publish sau khi sửa (resume không restart)', String(countState(P, 'PUBLISHED')));
}

// 2.3 Publish fail giữa drain (test gate hỏng) -> exit 1, KHÔNG ghi flip, resume được
{
  const F = buildDrainFixture('pubfail', { n: 12, breakTest: true });
  const { tmp, P } = F;
  const before = readB(P.matrix);
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline động từ state thật
  const r1 = drainOnce(P, tmp);
  ok(r1.status !== 0, 'drain iteration exit != 0 khi publish gate fail', (r1.stdout + r1.stderr).slice(0, 400));
  ok((r1.stdout + r1.stderr).includes('PUBLISH TỪ CHỐI'), 'báo rõ PUBLISH TỪ CHỐI (không lặng lẽ)');
  const m1 = JSON.parse(readS(P.matrix));
  ok(countState(P, 'PUBLISHED') === publishedBefore, 'PUBLISHED KHÔNG tăng khi publish fail (flip không ghi)', String(countState(P, 'PUBLISHED')));
  const repaired = m1.slots.filter(s => s.state === 'PASS').length;
  ok(repaired >= 10, 'QA transitions đã lưu (slot -> PASS) — resumable, không làm lại QA từ đầu', String(repaired));
  ok(!fs.existsSync(P.lock), 'không lock leak khi publish fail');
  // Khôi phục test gate -> rerun drain -> hoàn tất
  const goodTest = readS(path.join(ROOT, 'factory', 'test.js'));
  fs.writeFileSync(P.test, goodTest);
  const iters = drainAll(P, 5);
  ok(iters.every(r => r.status === 0) && iters.some(r => /done=true/.test(r.stdout)),
    'resume sau publish fail: drain nốt phần còn lại, không duplicate, không restart', iters.map(r => r.status).join(','));
  ok(countState(P, 'PUBLISHED') === publishedBefore + 12, 'toàn bộ 12 slot được publish sau resume (không mất, không đếm đôi)', String(countState(P, 'PUBLISHED')));
  const chk = runNode([P.generate, '--check'], { cwd: tmp });
  ok(chk.status === 0, '--check xanh trên fixture sau resume', (chk.stdout + chk.stderr).slice(0, 300));
}

// 2.4 Module bài lỗi syntax -> fail loud với tên file, KHÔNG đụng state
{
  const F = buildDrainFixture('badmodule', { n: 1, brokenModule: true });
  const { tmp, P } = F;
  const before = readB(P.matrix);
  const r = drainOnce(P, tmp);
  ok(r.status !== 0, 'drain fail loud khi module bài lỗi syntax');
  ok((r.stdout + r.stderr).includes('zz-rel-broken.js'), 'in đúng tên file module lỗi', (r.stdout + r.stderr).slice(0, 300));
  ok(readB(P.matrix).equals(before), 'matrix KHÔNG bị ghi khi module lỗi (fail trước mọi mutation)');
}

// 2.5 Wrong lock owner: writer A giữ lock -> drain của ci bị refuse, lock A nguyên vẹn
{
  const F = buildDrainFixture('wrongowner', { n: 1 });
  const { tmp, P } = F;
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline động từ state thật
  const a = lockMod.acquire(path.dirname(P.lock), 'writer-A');
  const r = drainOnce(P, tmp, 'ci-publisher');
  ok(r.status !== 0, 'drain iteration bị refuse khi lock thuộc writer khác', (r.stdout + r.stderr).slice(0, 300));
  ok((r.stdout + r.stderr).includes('BỊ TỪ CHỐI'), 'báo rõ BỊ TỪ CHỐI (không ghi đè lock người khác)');
  const onDisk = JSON.parse(readS(P.lock));
  ok(onDisk.token === a.token && onDisk.owner === 'writer-A', 'lock của writer A VẪN tồn tại (cleanup của loser không xóa lock winner)');
  ok(countState(P, 'PUBLISHED') === publishedBefore, 'state KHÔNG bị đụng khi acquire fail', String(countState(P, 'PUBLISHED')));
  // Cleanup kiểu workflow cũ (unlock không token) cũng KHÔNG xóa được lock A
  const bad = runNode([P.factory, 'unlock'], { cwd: tmp });
  ok(bad.status !== 0, 'unlock không owner/token bị REFUSE khi có lock của writer khác');
  ok(JSON.parse(readS(P.lock)).token === a.token, 'lock A vẫn còn sau mọi đường unlock sai');
  // Đúng ownership thì thả được
  const good = runNode([P.factory, 'unlock', '--owner', 'writer-A', '--token', a.token], { cwd: tmp });
  ok(good.status === 0 && !fs.existsSync(P.lock), 'unlock đúng owner+token thả lock sạch');
}

// 2.6 Stale lock (40 phút) -> drain reclaim race-safe rồi thả sạch
{
  const F = buildDrainFixture('stale', { n: 1 });
  const { tmp, P } = F;
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline động từ state thật
  const stale = { owner: 'writer-gone', token: 'stale-tok', at: new Date(Date.now() - 40 * 60 * 1000).toISOString(), pid: 999, ttlMs: lockMod.LOCK_TTL_MS };
  fs.writeFileSync(P.lock, JSON.stringify(stale, null, 1) + '\n');
  const r = drainOnce(P, tmp);
  ok(r.status === 0 && /done=true/.test(r.stdout), 'drain reclaim được stale lock (quá TTL) và hoàn tất chunk', (r.stdout + r.stderr).slice(0, 400));
  ok(!fs.existsSync(P.lock), 'lock sạch sau drain (reclaim -> release đúng ownership)');
  ok(countState(P, 'PUBLISHED') === publishedBefore + 1, 'slot được xử lý sau khi reclaim stale lock', String(countState(P, 'PUBLISHED')));
}

// =====================================================================
// LAYER 3 — PRODUCTION INVARIANT (fixture đã drain + regression sentinel)
// =====================================================================
console.log('LAYER 3 — PRODUCTION INVARIANT…');
{
  ok(!!soakFixture, 'fixture 25-slot đã drain còn nguyên cho tầng invariant');
  if (soakFixture) {
    const { tmp, P } = soakFixture;
    // 3.1 verify-invariant xanh trên fixture sạch
    const v = runNode([P.factory, 'verify-invariant'], { cwd: tmp });
    ok(v.status === 0 && v.stdout.includes('INVARIANT_OK'), 'verify-invariant PASS trên fixture đã drain đúng', (v.stdout + v.stderr).slice(0, 300));
    // 3.2 Tamper: xóa trang sinh của 1 bài PUBLISHED -> invariant fail
    const m = JSON.parse(readS(P.matrix));
    const victim = m.slots.find(s => s.state === 'PUBLISHED' && s.slug.startsWith('rel-fixture'));
    const page = path.join(tmp, victim.hub, victim.slug, 'index.html');
    const bak = readB(page);
    fs.unlinkSync(page);
    const v2 = runNode([P.factory, 'verify-invariant'], { cwd: tmp });
    ok(v2.status !== 0 && (v2.stdout + v2.stderr).includes(victim.id), 'invariant FAIL khi PUBLISHED thiếu trang sinh (nêu đúng slot)', (v2.stdout + v2.stderr).slice(0, 300));
    fs.writeFileSync(page, bak);
    // 3.3 Tamper: checkpoint lệch -> fail
    const cpBak = readB(P.checkpoint);
    const cpBad = JSON.parse(readS(P.checkpoint));
    cpBad.slotCount = cpBad.slotCount + 1;
    writeJson(P.checkpoint, cpBad);
    const v3 = runNode([P.factory, 'verify-invariant'], { cwd: tmp });
    ok(v3.status !== 0, 'invariant FAIL khi checkpoint lệch ma trận');
    fs.writeFileSync(P.checkpoint, cpBak);
    // 3.4 Tamper: sitemap có URL lạ -> fail
    const smBak = readB(P.sitemap);
    fs.writeFileSync(P.sitemap, readS(P.sitemap).replace('</urlset>', '<url><loc>https://example.test/ghost-article/</loc></url>\n</urlset>'));
    const v4 = runNode([P.factory, 'verify-invariant'], { cwd: tmp });
    ok(v4.status !== 0 && (v4.stdout + v4.stderr).includes('ghost-article'), 'invariant FAIL khi sitemap có URL không thuộc PUBLISHED');
    fs.writeFileSync(P.sitemap, smBak);
    ok(runNode([P.factory, 'verify-invariant'], { cwd: tmp }).status === 0, 'invariant xanh lại sau khi trả mọi tamper');

    // 3.5 REGRESSION SENTINEL: hành vi cũ "1 chunk -> SUCCESS -> backlog > 0"
    // phải bị cổng --fail-if-claimable BẮT. Fixture mới 25 slot, chỉ drain 1 vòng.
    const F2 = buildDrainFixture('sentinel', { n: 25 });
    const r1 = drainOnce(F2.P, F2.tmp);
    ok(r1.status === 0 && /done=false/.test(r1.stdout), 'sau 1 chunk (10 slot): iteration sạch nhưng done=false (còn 15 backlog)');
    const gate = runNode([F2.P.factory, 'backlog', '--fail-if-claimable', '--head-sha', 'deadbeef'], { cwd: F2.tmp });
    ok(gate.status !== 0, 'CỔNG: publish "thành công" mà còn backlog claimable -> FAIL (không SUCCESS giả)');
    ok(gate.stdout.includes('CLAIMABLE_BACKLOG=15'), 'chẩn đoán nêu đúng số backlog còn lại', gate.stdout.split('\n')[0]);
    ok(gate.stdout.split('\n').filter(l => l.startsWith('PENDING ') && l.includes('article=yes')).length === 15,
      'chẩn đoán liệt kê đủ 15 PENDING ID kèm state + article source');
    ok((gate.stdout + gate.stderr).includes('deadbeef'), 'chẩn đoán ghi HEAD_SHA');
    // PLANNED không có module bài KHÔNG fail CI (WAITING_FOR_WRITER không phải lỗi)
    const m2 = JSON.parse(readS(F2.P.matrix));
    m2.slots.push({ ...m2.slots[0], id: 'S10099', slug: 'chua-co-bai-nay', primaryIntent: 'informational/chua-co-bai-nay', state: 'PLANNED', qaScore: null, attempts: 0 });
    writeJson(F2.P.matrix, m2);
    const cp2 = JSON.parse(readS(F2.P.checkpoint));
    cp2.slotCount = m2.slots.length;
    writeJson(F2.P.checkpoint, cp2);
    const gate2 = runNode([F2.P.factory, 'backlog'], { cwd: F2.tmp });
    ok(gate2.status === 0 && /WAITING_FOR_WRITER=[1-9]/.test(gate2.stdout),
      'WAITING_FOR_WRITER không làm fail CI (writer chưa viết bài không phải lỗi) — chỉ claimable mới fail',
      gate2.stdout.split('\n').slice(0, 2).join(' | '));
    fs.rmSync(F2.tmp, { recursive: true, force: true });
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

// =====================================================================
// LAYER 4 — LONG-RUN / FAILURE RECOVERY (soak 35 slot + resume + YAML anchors)
// =====================================================================
console.log('LAYER 4 — LONG-RUN / FAILURE RECOVERY…');

// 4.1 Soak: 35 slot article-backed -> 4 chunk (10/10/10/5), state sạch, không duplicate
{
  const F = buildDrainFixture('soak35', { n: 35 });
  const { tmp, P } = F;
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline động từ state thật
  const bound = Number((runNode([P.factory, 'drain-bound', '35'], { cwd: tmp }).stdout.match(/MAX_ITERATIONS=(\d+)/) || [0, 0])[1]);
  ok(bound === 6, 'drain-bound(35) = 6 vòng an toàn (ceil(35/10)+2)', String(bound));
  const iters = drainAll(P, bound);
  ok(iters.length === 4 && iters.every(r => r.status === 0),
    'soak 35 slot: drain hết trong 4 vòng chunk (10/10/10/5), đúng 1 run — không cần push thứ hai',
    `vòng=${iters.length} status=[${iters.map(r => r.status)}]`);
  ok(iters[3] && /done=true/.test(iters[3].stdout) && /backlog=0/.test(iters[3].stdout), 'vòng soak cuối: done=true, backlog=0');
  const m = JSON.parse(readS(P.matrix));
  ok(countState(P, 'PUBLISHED') === publishedBefore + 35, 'soak: baseline thật + 35 fixture = đủ PUBLISHED (không hardcode)', String(countState(P, 'PUBLISHED')));
  const relIds = m.slots.filter(s => s.slug.startsWith('rel-fixture')).map(s => s.id).sort();
  ok(relIds.length === 35 && relIds[0] === 'S10001' && relIds[34] === 'S10035', 'không renumber ID (S10001..S10035 nguyên vẹn)');
  ok(new Set(m.slots.map(s => s.id)).size === m.slots.length, 'không duplicate ID sau soak');
  ok(!fs.existsSync(P.lock), 'không lock leak sau soak 4 vòng');
  const cp = JSON.parse(readS(P.checkpoint));
  ok(cp.slotCount === m.slots.length, 'checkpoint khớp sau soak');
  let allParse = true;
  for (const f of [P.matrix, P.checkpoint, P.fstate]) { try { JSON.parse(readS(f)); } catch (e) { allParse = false; } }
  ok(allParse, 'không half-written JSON sau soak');
  const chk = runNode([P.generate, '--check'], { cwd: tmp });
  ok(chk.status === 0, 'soak xong: --check xanh');
  const v = runNode([P.factory, 'verify-invariant'], { cwd: tmp });
  ok(v.status === 0, 'soak xong: verify-invariant xanh');
  fs.rmSync(tmp, { recursive: true, force: true });
}

// 4.2 Resume sau đứt giữa chừng: chunk 1 xong rồi "chết" -> rerun drain nốt, không duplicate
{
  const F = buildDrainFixture('resume', { n: 35 });
  const { tmp, P } = F;
  const publishedBefore = countState(P, 'PUBLISHED'); // baseline động từ state thật
  const r1 = drainOnce(P, tmp);
  ok(r1.status === 0 && /done=false/.test(r1.stdout), 'chunk 1 xong (10 slot) — run "chết" ở đây (giả lập đứt giữa chừng)');
  // "Quá trình chết": run thứ hai khởi động lại — resume từ state, không restart
  const iters = drainAll(P, 6);
  ok(iters.length === 3 && iters.every(r => r.status === 0) && /done=true/.test(iters[iters.length - 1].stdout),
    'rerun drain nốt 25 slot còn lại trong 3 vòng (resume đúng điểm, không cần push 2)', iters.map(r => r.status).join(','));
  ok(countState(P, 'PUBLISHED') === publishedBefore + 35, 'resume: đủ baseline + 35 PUBLISHED — không mất, không đếm đôi', String(countState(P, 'PUBLISHED')));
  const m = JSON.parse(readS(P.matrix));
  ok(m.slots.filter(s => s.slug.startsWith('rel-fixture')).every(s => s.state === 'PUBLISHED'), 'mọi slot fixture PUBLISHED đúng một lần (idempotent)');
  ok(!fs.existsSync(P.lock), 'resume xong: không lock leak');
  fs.rmSync(tmp, { recursive: true, force: true });
}

// 4.3 Workflow anchors — xác minh BEHAVIOR thật của YAML (không chỉ parse)
{
  const wf = (f) => readS(path.join(ROOT, '.github', 'workflows', f));
  const pub = wf('factory-publish.yml');
  ok(pub.includes('drain-iteration'), 'factory-publish.yml: drain liên tục qua drain-iteration (không còn 1 chunk/run)');
  ok(pub.includes('--token-file'), 'factory-publish.yml: lock token ghi ra file để cleanup chỉ thả lock CỦA run');
  ok(!pub.includes('continue-on-error'), 'factory-publish.yml: KHÔNG còn continue-on-error giấu lỗi');
  ok(pub.includes('--fail-if-claimable'), 'factory-publish.yml: cổng cuối fail khi còn backlog claimable');
  ok(pub.includes('check-state'), 'factory-publish.yml: guard state sạch qua factory.js check-state');
  ok(pub.includes('drain-bound'), 'factory-publish.yml: giới hạn vòng tính từ workload (drain-bound), không hardcode');
  ok(/unlock --owner/.test(pub), 'factory-publish.yml: cleanup unlock theo owner+token (ownership-safe)');
  const verify = wf('factory-publish-verify.yml');
  ok(verify.includes('verify-invariant'), 'factory-publish-verify.yml: bất biến qua factory.js verify-invariant');
  ok(verify.includes('--fail-if-claimable'), 'factory-publish-verify.yml: publish SUCCESS + backlog > 0 -> FAIL (không chỉ cảnh báo)');
  const aq = wf('article-quality.yml');
  ok(aq.includes('test-reliability.js'), 'article-quality.yml: chạy bộ reliability 4 tầng trên CI');
  const ab = wf('article-batch.yml');
  ok(ab.includes('plan-chunk'), 'article-batch.yml: kế hoạch chunk qua factory.js plan-chunk (không duplicate logic heredoc)');
  ok(ab.includes('qa-preview'), 'article-batch.yml: QA dry-run qua factory.js qa-preview (read-only)');
  const sq = wf('site-quality.yml');
  ok(sq.includes('factory.js backlog'), 'site-quality.yml: đo backlog claimable qua factory.js backlog (không duplicate logic heredoc)');
  ok(/claimable != '0'/.test(sq) && /claimable == '0'/.test(sq), 'site-quality.yml: gate cây sinh chỉ chạy khi CLAIMABLE_BACKLOG = 0 (backlog-aware, không đỏ giả trên writer commit)');
  ok(sq.includes('deferred to Factory Publish'), 'site-quality.yml: log hoãn gate rõ ràng khi backlog > 0');
  ok(/generate.js --check/.test(sq) && /factory\/test\.js/.test(sq), 'site-quality.yml: vẫn giữ đủ gate cây sinh (generate --check + test.js) cho nhánh backlog = 0 — không làm yếu cổng');
}

// ---------- Kết luận: state repo THẬT nguyên vẹn (byte-identical) ----------
console.log('KẾT LUẬN — state thật nguyên vẹn…');
{
  let intact = true;
  for (const s of REAL_STATE) {
    const now = readB(path.join(ROOT, 'factory', 'state', s.f));
    if (!now.equals(s.b)) { intact = false; console.log(`  ✗ factory/state/${s.f} BỊ THAY ĐỔI — test rò ra production state`); }
  }
  ok(intact, '4 file state production BYTE-IDENTICAL sau toàn bộ suite (mọi test dùng copy trong tmp)');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'writer.lock')), 'không writer.lock bỏ lại trên repo thật');
  const r = runNode([path.join(ROOT, 'factory', 'generate.js'), '--check']);
  ok(r.status === 0, 'repo thật: --check xanh sau reliability suite (không vết ghi)');
}

console.log('');
console.log('=== KẾT QUẢ KIỂM THỬ RELIABILITY ===');
console.log(`ĐẠT: ${pass}  |  LỖI: ${fail}`);
if (fail > 0) {
  console.log('CÓ LỖI — xem chi tiết trên.');
  process.exit(1);
}
console.log('TẤT CẢ KIỂM THỨC RELIABILITY 4 TẦNG ĐẠT (PASSED).');
