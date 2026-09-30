#!/usr/bin/env node
// AI WIKI TOTAL — kiểm thử SIMPLE PRODUCTION MODE (pair hot path)
// 18 regression của engine port pair model: PAIR_SIZE=2, exact push scope,
// scoped QA (>=75) + SEO (>=70), critical override, txn crash recovery, lock
// ownership, no-sweep, không heavy suite trong hot path, state byte-safe.
// Mọi fixture chạy trên bản sao repo trong tmp — state thật PHẢI byte-identical.
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

console.log('=== KIỂM THỬ SIMPLE PRODUCTION MODE (PAIR) ===');

// ---------- Hạ tầng: bản sao repo trong tmp ----------
function copyRepoToTmp(tag) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pair-' + tag + '-'));
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
function tmpPaths(tmp) {
  return {
    root: tmp,
    factory: path.join(tmp, 'factory', 'factory.js'),
    generate: path.join(tmp, 'factory', 'generate.js'),
    matrix: path.join(tmp, 'factory', 'state', 'matrix.json'),
    checkpoint: path.join(tmp, 'factory', 'state', 'checkpoint.json'),
    fstate: path.join(tmp, 'factory', 'state', 'factory-state.json'),
    lock: path.join(tmp, 'factory', 'state', 'writer.lock'),
    txn: path.join(tmp, 'factory', 'state', 'txn.json'),
    artDir: path.join(tmp, 'factory', 'data', 'articles'),
  };
}
function runNode(args, opts) {
  try {
    const stdout = execFileSync(process.execPath, args, { cwd: (opts && opts.cwd) || ROOT, encoding: 'utf8' });
    return { status: 0, stdout: stdout || '', stderr: '' };
  } catch (e) {
    return { status: typeof e.status === 'number' ? e.status : 1, stdout: e.stdout || '', stderr: e.stderr || String((e && e.message) || e) };
  }
}

// State thật TRƯỚC suite (snapshot byte-exact) — cuối suite phải KHÔNG đổi.
const REAL_STATE_SNAPSHOT = ['matrix.json', 'factory-state.json', 'checkpoint.json', 'manifest.json']
  .map(f => ({ f, b: readB(path.join(ROOT, 'factory', 'state', f)) }));

// ---------- Fixture bài viết ----------
// Bài fixture đạt QA >= 75 + SEO >= 70 (tự khẳng định ở dưới).
function fixtureArticleObject(slug, title) {
  const p = (i) => `<p>Đoạn kiểm thử ${i}: quy trình thuê xe máy tại Hà Nội gồm chuẩn bị giấy tờ, kiểm tra tình trạng xe, ký hợp đồng, đặt cọc và nghiệm thu khi hoàn trả. Người thuê nên đối chiếu kỹ từng điều khoản, chụp lại hình ảnh hiện trạng xe trước khi nhận và giữ trọn bộ giấy tờ trong suốt thời gian sử dụng. Nắm lịch bảo dưỡng giúp nhận diện sớm tiếng động bất thường ở máy, mức mòn của lốp và độ nhạy của phanh trước khi vấn đề lớn dần.</p>`;
  const sec = (h2, from, to) => ({ h2, html: Array.from({ length: to - from }, (_, k) => p(from + k)).join('\n') });
  return {
    slug,
    title,
    seoTitle: 'Quy trình thuê xe máy kiểm thử pair mode của xưởng nội dung',
    metaDescription: 'Bài kiểm thử pair mode mô tả quy trình thuê xe máy tại Hà Nội: giấy tờ, hợp đồng, đặt cọc và nghiệm thu khi trả xe an toàn cho cả hai bên.',
    summary: 'Tổng hợp quy trình thuê xe máy dùng cho kiểm thử pair mode của xưởng nội dung, bám sát các bước giấy tờ, hợp đồng, đặt cọc, vận hành và nghiệm thu.',
    quickAnswer: 'Quy trình gồm bốn bước chính: chuẩn bị giấy tờ theo yêu cầu, kiểm tra hiện trạng xe, ký hợp đồng và đặt cọc, nghiệm thu khi hoàn trả đúng hạn để nhận lại tiền cọc.',
    keyPoints: [
      'Chuẩn bị đầy đủ giấy tờ tùy thân theo yêu cầu của bên cho thuê trước khi nhận xe.',
      'Kiểm tra hiện trạng xe, chụp ảnh lưu vết và ghi rõ vào biên bản giao nhận.',
      'Đọc kỹ hợp đồng, đặc biệt các điều khoản về tiền cọc, thời hạn và bồi thường.',
      'Nghiệm thu đúng hẹn và giữ lại biên bản trả xe để tránh tranh chấp về sau.',
    ],
    category: 'thue-xe',
    hub: 'xe-may',
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
// Biến thể QA 74: fail non-critical (meta/summary/quickAnswer/checklist/
// warnings/notes) — KHÔNG critical — đúng mức "74 trở xuống = repair".
function qa74Article(slug, title) {
  const a = fixtureArticleObject(slug, title);
  a.metaDescription = 'Ngắn.'; a.summary = 'Ngắn.'; a.quickAnswer = 'Ngắn.';
  a.checklist = []; a.warnings = []; a.notes = [];
  return a;
}
// Biến thể SEO <70 (QA vẫn pass): meta ngắn, keywords <3, summary/quickAnswer
// lệch chủ đề, một mục H2 quá mỏng.
function seoFailArticle(slug, title) {
  const a = fixtureArticleObject(slug, title);
  a.metaDescription = 'Meta ngắn.';
  a.keywords = ['thuê xe máy hà nội', 'quy trình thuê xe'];
  a.summary = 'Bài viết nói về bảo quản dây curoa, vệ sinh buồng gió và cách thay dầu nhông sên đề canh đúng định kỳ ở garage gần nhà.';
  a.quickAnswer = 'Nội dung hướng dẫn bảo quản chi tiết hệ thống truyền động và làm sạch các linh kiện nhỏ nhằm kéo dài tuổi thọ phương tiện.';
  a.sections[0] = { h2: 'Mục mỏng', html: '<p>Nội dung rất ngắn.</p>' };
  return a;
}
// Tự khẳng định fixture trước khi dùng — không chạy suite với fixture hỏng.
{
  const { qaArticle } = require('./qa');
  const { seoArticle } = require('./seo');
  const known = new Set(fs.readdirSync(path.join(__dirname, 'data', 'articles')).filter(f => f.endsWith('.js'))
    .map(f => { try { return require(path.join(__dirname, 'data', 'articles', f)).slug; } catch (_) { return null; } }).filter(Boolean));
  const good = fixtureArticleObject('pair-fixture-selfcheck', 'Quy trình thuê xe máy kiểm thử pair mode của xưởng nội dung');
  const qaG = qaArticle(good), seoG = seoArticle(good, { knownSlugs: known });
  ok(qaG.pass && qaG.score >= 75 && seoG.pass && seoG.score >= 70, 'Fixture tốt đạt QA >= 75 và SEO >= 70',
    `qa=${qaG.score}/${qaG.pass} seo=${seoG.score}/${seoG.pass}`);
  const qaB = qaArticle(qa74Article('pair-fixture-qa74', 'Quy trình thuê xe máy kiểm thử pair mode của xưởng nội dung'));
  ok(!qaB.pass && qaB.score < 75 && !qaB.checks.some(c => c.critical && !c.pass), 'Fixture QA-74 fail đúng mức dưới ngưỡng, không critical',
    `qa=${qaB.score}/${qaB.pass}`);
  const seoB = seoArticle(seoFailArticle('pair-fixture-seo', 'Quy trình thuê xe máy kiểm thử pair mode của xưởng nội dung'), { knownSlugs: known });
  const qaSeoB = qaArticle(seoFailArticle('pair-fixture-seo', 'Quy trình thuê xe máy kiểm thử pair mode của xưởng nội dung'));
  ok(qaSeoB.pass && !seoB.pass && seoB.score < 70, 'Fixture SEO-fail: QA pass nhưng SEO dưới 70',
    `qa=${qaSeoB.score}/${qaSeoB.pass} seo=${seoB.score}/${seoB.pass}`);
}

// Chuẩn bị tmp cho kịch bản pair: thêm slot + module bài theo cfg.
// cfg.slots = [{ id, slug, title, state, intent, article: 'good'|'qa74'|'seoFail'|'cjk'|'relatedBad'|null }]
function pairFixturePrep(tag, cfg) {
  const tmp = copyRepoToTmp(tag);
  const P = tmpPaths(tmp);
  const now = new Date().toISOString();
  const m = JSON.parse(readS(P.matrix));
  for (const s of cfg.slots || []) {
    m.slots.push({
      id: s.id, hub: s.hub || 'thue-xe/xe-may', slug: s.slug, title: s.title,
      primaryIntent: s.intent === undefined ? ('informational/' + s.slug) : s.intent, notes: '',
      state: s.state || 'PASS', qaScore: s.qaScore == null ? null : s.qaScore,
      attempts: 0, createdAt: now, updatedAt: now,
    });
    if (s.article) {
      let a;
      if (s.article === 'good') a = fixtureArticleObject(s.slug, s.title);
      else if (s.article === 'qa74') a = qa74Article(s.slug, s.title);
      else if (s.article === 'seoFail') a = seoFailArticle(s.slug, s.title);
      else if (s.article === 'cjk') { a = fixtureArticleObject(s.slug, s.title); a.sections[0].html += ' 年限 kiểm thử.'; }
      else if (s.article === 'relatedBad') { a = fixtureArticleObject(s.slug, s.title); a.related = ['slug-khong-ton-tai-mot', 'slug-khong-ton-tai-hai']; }
      else if (s.article === 'broken') { fs.writeFileSync(path.join(P.artDir, `zz-${s.slug}.js`), 'module.exports = { slug: "' + s.slug + '", ;\n'); continue; }
      fs.writeFileSync(path.join(P.artDir, `zz-${s.slug}.js`), 'module.exports = ' + JSON.stringify(a) + ';\n');
    }
  }
  writeJson(P.matrix, m);
  const cp = JSON.parse(readS(P.checkpoint));
  cp.slotCount = m.slots.length;
  writeJson(P.checkpoint, cp);
  return { tmp, P, m };
}
function stateBytes(P) { return { matrix: readB(P.matrix), fstate: readB(P.fstate), cp: readB(P.checkpoint) }; }
function bytesEq(a, b) { return a.matrix.equals(b.matrix) && a.fstate.equals(b.fstate) && a.cp.equals(b.cp); }
function rowOf(m, id) { return m.slots.find(s => s.id === id); }

// ---------- 1. PAIR SIZE = 2 ----------
console.log('1. Pair size đúng 2…');
{
  const { tmp, P } = pairFixturePrep('t1', { slots: [
    { id: 'S10001', slug: 'pair-size-a', title: 'Bài A pair size', article: 'good' },
    { id: 'S10002', slug: 'pair-size-b', title: 'Bài B pair size', article: 'good' },
    { id: 'S10003', slug: 'pair-size-c', title: 'Bài C pair size', article: 'good' },
    { id: 'S10004', slug: 'pair-size-d', title: 'Bài D pair size', article: 'good' },
  ] });
  const mod = require(P.factory);
  let threw = false;
  try { mod.parsePairIds('S10001,S10002,S10003'); } catch (e) { threw = true; ok(/Quá 2 ID/.test(e.message), 'parsePairIds từ chối 3 ID', e.message); }
  ok(threw, 'parsePairIds từ chối quá PAIR_SIZE ID');
  ok(mod.parsePairIds('S10001,S10002').length === 2, 'parsePairIds nhận đúng 2 ID');
  ok(mod.parsePairIds('S10001').length === 1, 'parsePairIds nhận 1 ID (repair đơn lẻ)');
  threw = false;
  try { mod.parsePairIds('S10001,S10001'); } catch (e) { threw = true; ok(/ID lặp/.test(e.message), 'parsePairIds từ chối ID lặp', e.message); }
  ok(threw, 'parsePairIds từ chối ID lặp');
  const m = JSON.parse(readS(P.matrix));
  const plan = mod.runtime.buildPublishPlan(m, ['pair-size-a', 'pair-size-b', 'pair-size-c', 'pair-size-d'], []);
  ok(plan.txns.length === 2 && plan.txns[0].ids.length === 2 && plan.txns[1].ids.length === 2,
    'buildPublishPlan chia backlog thành txn đúng 2 ID', JSON.stringify(plan.txns));
  ok(plan.txns[0].mode === 'resume' && plan.txns[1].mode === 'resume', 'Txn backlog có mode resume');
}

// ---------- 2. Pair KHÔNG mutate slot thứ ba ----------
console.log('2. Pair không đụng slot thứ ba…');
let T2;
{
  T2 = pairFixturePrep('t2', { slots: [
    { id: 'S10001', slug: 'pair-third-a', title: 'Bài A slot thứ ba', article: 'good' },
    { id: 'S10002', slug: 'pair-third-b', title: 'Bài B slot thứ ba', article: 'good' },
    { id: 'S10003', slug: 'pair-third-c', title: 'Bài C slot thứ ba', article: 'good' },
    { id: 'S10004', slug: 'pair-waiting', title: 'Slot chưa có bài', state: 'PLANNED', article: null },
  ] });
  const { P } = T2;
  const mod = require(P.factory);
  const calls = [];
  const realSpawn = (file, args) => execFileSync(process.execPath, [file].concat(args || []), { cwd: path.dirname(file), stdio: 'pipe' });
  mod.publishPair(['S10001', 'S10002'], { owner: 'pair-test', spawn: (f, a) => { calls.push(f); return realSpawn(f, a); } });
  const m = JSON.parse(readS(P.matrix));
  ok(rowOf(m, 'S10001').state === 'PUBLISHED' && rowOf(m, 'S10002').state === 'PUBLISHED', 'publish-pair lật đúng 2 ID lên PUBLISHED');
  ok(rowOf(m, 'S10001').seoScore >= 70 && rowOf(m, 'S10002').seoScore >= 70, 'publish-pair ghi seoScore >= 70 cho pair');
  ok(rowOf(m, 'S10001').qaScore >= 75, 'publish-pair ghi qaScore >= 75');
  const third = rowOf(m, 'S10003');
  ok(third.state === 'PASS' && third.qaScore === null && third.attempts === 0, 'Slot thứ ba (có bài, ngoài scope) KHÔNG bị mutate', JSON.stringify(third));
  ok(rowOf(m, 'S10004').state === 'PLANNED', 'Slot WAITING_FOR_WRITER (PLANNED, chưa có bài) không bị đụng');
  ok(!fs.existsSync(P.txn), 'Txn marker đã COMMIT (xóa) sau thành công');
  ok(!fs.existsSync(P.lock), 'Writer lock đã thả sau publish-pair');
  ok(calls.length === 1 && /generate\.js$/.test(calls[0]), 'Hot path chỉ spawn generate.js — không test/hardening/reliability', JSON.stringify(calls));
}

// ---------- 3. QA 74 = reject, state giữ nguyên ----------
console.log('3. QA 74 reject…');
{
  const { tmp, P } = pairFixturePrep('t3', { slots: [
    { id: 'S10001', slug: 'pair-qa74-a', title: 'Bài A QA 74', article: 'qa74' },
    { id: 'S10002', slug: 'pair-qa74-b', title: 'Bài B QA 74', article: 'good' },
  ] });
  const before = stateBytes(P);
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r.status !== 0, 'publish-pair exit != 0 khi một bài QA 74', r.stdout + r.stderr);
  ok(/PAIR_REJECT/.test(r.stdout + r.stderr), 'Output nêu rõ PAIR_REJECT QA dưới ngưỡng');
  ok(!/PAIR_RESULT ok=published/.test(r.stdout + r.stderr), 'KHÔNG có PAIR_RESULT ok khi reject');
  ok(bytesEq(before, stateBytes(P)), 'Matrix/state/checkpoint BYTE-IDENTICAL sau reject QA');
  ok(!fs.existsSync(P.txn) && !fs.existsSync(P.lock), 'Không sót txn/lock sau reject');
}

// ---------- 4. QA >= 75 + SEO >= 70 = PASS (CLI end-to-end) ----------
console.log('4. Pair tốt publish qua CLI…');
let T4;
{
  T4 = pairFixturePrep('t4', { slots: [
    { id: 'S10001', slug: 'pair-good-a', title: 'Bài A pair tốt', article: 'good' },
    { id: 'S10002', slug: 'pair-good-b', title: 'Bài B pair tốt', article: 'good' },
  ] });
  const { tmp, P } = T4;
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test', '--token-file', path.join(tmp, 'tok')], { cwd: tmp });
  ok(r.status === 0, 'publish-pair CLI exit 0 với pair đạt QA+SEO', r.stdout + r.stderr);
  ok(/PAIR_RESULT ok=published ids=S10001,S10002/.test(r.stdout), 'PAIR_RESULT ok=published đúng IDs', r.stdout);
  const m = JSON.parse(readS(P.matrix));
  ok(rowOf(m, 'S10001').state === 'PUBLISHED' && rowOf(m, 'S10002').state === 'PUBLISHED', 'Hai slot PUBLISHED sau CLI publish-pair');
  const v = runNode([P.factory, 'verify-pair', 'S10001,S10002'], { cwd: tmp });
  ok(v.status === 0 && /VERIFY_PAIR_OK/.test(v.stdout), 'verify-pair OK sau publish (nhẹ, vài giây)', v.stdout + v.stderr);
  const cs = runNode([P.factory, 'check-state'], { cwd: tmp });
  ok(cs.status === 0 && /STATE_OK/.test(cs.stdout), 'check-state OK sau publish-pair', cs.stdout + cs.stderr);
}

// ---------- 5. SEO dưới 70 = reject dù QA pass ----------
console.log('5. SEO dưới ngưỡng reject…');
{
  const { tmp, P } = pairFixturePrep('t5', { slots: [
    { id: 'S10001', slug: 'pair-seo-a', title: 'Bài A SEO thấp', article: 'seoFail' },
    { id: 'S10002', slug: 'pair-seo-b', title: 'Bài B SEO thấp', article: 'good' },
  ] });
  const before = stateBytes(P);
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r.status !== 0, 'publish-pair exit != 0 khi SEO dưới 70 (dù QA pass)', r.stdout + r.stderr);
  ok(/SEO \d+\/100 TRƯỢT|PAIR_REJECT/.test(r.stdout + r.stderr), 'Output nêu SEO TRƯỢT/PAIR_REJECT');
  ok(bytesEq(before, stateBytes(P)), 'State byte-identical sau reject SEO');
}

// ---------- 6/7. CRITICAL override điểm ----------
console.log('6+7. Critical fail override điểm cao…');
{
  const cases = [
    { art: 'cjk', label: 'QA critical (ký tự rác CJK)' },
    { art: 'relatedBad', label: 'SEO critical (related không tồn tại)' },
  ];
  for (const c of cases) {
    const { tmp, P } = pairFixturePrep('t7' + c.art, { slots: [
      { id: 'S10001', slug: 'pair-crit-' + c.art, title: 'Bài critical ' + c.art, article: c.art },
      { id: 'S10002', slug: 'pair-crit-b-' + c.art, title: 'Bài kèm critical ' + c.art, article: 'good' },
    ] });
    const before = stateBytes(P);
    const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
    ok(r.status !== 0, `publish-pair từ chối ${c.label} dù phần còn lại đạt`, r.stdout + r.stderr);
    ok(bytesEq(before, stateBytes(P)), `State byte-identical sau critical reject (${c.label})`);
  }
}

// ---------- 8/9/15. EXACT PUSH SCOPE + repair + không sweep ----------
console.log('8+9+15. Exact push scope, repair, không sweep…');
{
  const { tmp, P } = pairFixturePrep('t8', { slots: [
    { id: 'S10001', slug: 'pair-scope-a', title: 'Bài A scope', article: 'good' },
    { id: 'S10002', slug: 'pair-scope-b', title: 'Bài B scope', article: 'good' },
    { id: 'S10003', slug: 'pair-scope-old', title: 'Bài backlog cũ', article: 'good' },
    { id: 'S10004', slug: 'pair-scope-wait', title: 'Slot chưa viết', state: 'PLANNED', article: null },
  ] });
  const mod = require(P.factory);
  const m = JSON.parse(readS(P.matrix));
  // scope từ git-like entries: A = bài mới, M = sửa bài đã có, D = xóa.
  const scA = mod.runtime.scopeFromSlugEntries(m, [{ status: 'A', slug: 'pair-scope-a' }, { status: 'A', slug: 'pair-scope-b' }]);
  ok(scA.newIds.length === 2 && scA.repairIds.length === 0 && scA.deletedSlugs.length === 0, 'scopeFromSlugEntries: A -> newIds đúng 2', JSON.stringify(scA));
  const scD = mod.runtime.scopeFromSlugEntries(m, [{ status: 'D', slug: 'pair-scope-a' }]);
  ok(scD.deletedSlugs.length === 1, 'scopeFromSlugEntries: D -> deletedSlugs (từ chối push xóa)');
  // Repair: chỉ M một slot đã PUBLISHED -> đúng 1 ID, không claim slot mới.
  const m2 = JSON.parse(readS(P.matrix));
  rowOf(m2, 'S10001').state = 'PUBLISHED'; rowOf(m2, 'S10001').qaScore = 96; rowOf(m2, 'S10001').seoScore = 90;
  const scM = mod.runtime.scopeFromSlugEntries(m2, [{ status: 'M', slug: 'pair-scope-a' }]);
  ok(scM.repairIds.length === 1 && scM.repairIds[0] === 'S10001' && scM.newIds.length === 0, 'scopeFromSlugEntries: M -> repairIds đúng ID, không lẫn new');
  // Plan: resume backlog cũ TRƯỚC, scope pair SAU, không trộn; WAITING không vào.
  const slugs = ['pair-scope-a', 'pair-scope-b', 'pair-scope-old'];
  const plan = mod.runtime.buildPublishPlan(m, slugs, ['S10001', 'S10002']);
  ok(plan.txns.length === 2, 'Plan tách 2 txn (resume + pair), không trộn', JSON.stringify(plan.txns));
  ok(plan.txns[0].mode === 'resume' && plan.txns[0].ids.join() === 'S10003', 'Txn resume chứa đúng backlog cũ S10003');
  ok(plan.txns[1].mode === 'pair' && plan.txns[1].ids.join() === 'S10001,S10002', 'Txn pair chứa đúng scope S10001,S10002');
  const flat = plan.txns.reduce((n, t) => n.concat(t.ids), []);
  ok(!flat.includes('S10004'), 'WAITING_FOR_WRITER (chưa có bài) KHÔNG BAO GIỜ vào plan');
  // Repair đơn: scope 1 ID không kéo slot mới. Backlog cũ (S10002/S10003)
  // được resume TRƯỚC theo thiết kế, nhưng txn repair chỉ chứa đúng S10001.
  const planR = mod.runtime.buildPublishPlan(m, slugs, ['S10001']);
  const repairTxn = planR.txns.find(t => t.mode === 'repair');
  ok(repairTxn && repairTxn.ids.join() === 'S10001', 'Repair scope 1 ID -> txn repair đúng S10001, không lẫn slot khác', JSON.stringify(planR.txns));
  ok(!planR.txns.some(t => t.ids.includes('S10004')), 'Repair không sweep WAITING');
  ok(planR.txns.filter(t => t.mode === 'resume').every(t => t.ids.every(id => ['S10002', 'S10003'].includes(id))),
    'Txn resume chỉ chứa backlog cũ, không trộn scope', JSON.stringify(planR.txns));
  // publish-pair đúng scope KHÔNG đụng backlog cũ (e2e từ test 2: S10003 nguyên vẹn).
  const m3 = JSON.parse(readS(P.matrix));
  ok(rowOf(m3, 'S10003').state === 'PASS' && rowOf(m3, 'S10004').state === 'PLANNED',
    'Backlog cũ + WAITING không bị publish-pair pair khác đụng đến');
}

// ---------- 10. TXN crash recovery ----------
console.log('10. Transaction crash recover…');
{
  // (a) ids đã PUBLISHED -> completed; check-state fail khi có marker.
  const { tmp, P } = T4;
  const mBefore = readB(P.matrix);
  writeJson(P.txn, { ids: ['S10001', 'S10002'], phase: 'publishing', at: new Date().toISOString(), owner: 'pair-test' });
  const cs1 = runNode([P.factory, 'check-state'], { cwd: tmp });
  ok(cs1.status !== 0 && /txn marker/.test(cs1.stderr + cs1.stdout), 'check-state FAIL-LOUD khi txn marker sót', cs1.stdout + cs1.stderr);
  const rec1 = runNode([P.factory, 'recover-txn'], { cwd: tmp });
  ok(rec1.status === 0 && /TXN_RECOVER completed ids=S10001,S10002/.test(rec1.stdout), 'recover-txn: ids đã PUBLISHED -> completed', rec1.stdout + rec1.stderr);
  ok(readB(P.matrix).equals(mBefore), 'Matrix không đổi khi recover completed');
  const cs2 = runNode([P.factory, 'check-state'], { cwd: tmp });
  ok(cs2.status === 0, 'check-state OK sau recover completed');
  // (b) ids chưa PUBLISHED -> rolled-back, matrix giữ nguyên.
  const f = pairFixturePrep('t10b', { slots: [
    { id: 'S10001', slug: 'pair-crash-a', title: 'Bài A crash', article: 'good' },
    { id: 'S10002', slug: 'pair-crash-b', title: 'Bài B crash', article: 'good' },
  ] });
  const before = stateBytes(f.P);
  writeJson(f.P.txn, { ids: ['S10001', 'S10002'], phase: 'publishing', at: new Date().toISOString(), owner: 'pair-test' });
  const rec2 = runNode([f.P.factory, 'recover-txn'], { cwd: f.tmp });
  ok(rec2.status === 0 && /TXN_RECOVER rolled-back ids=S10001,S10002/.test(rec2.stdout), 'recover-txn: ids chưa PUBLISHED -> rolled-back', rec2.stdout + rec2.stderr);
  ok(bytesEq(before, stateBytes(f.P)), 'State byte-identical sau rolled-back');
  const cs3 = runNode([f.P.factory, 'check-state'], { cwd: f.tmp });
  ok(cs3.status === 0, 'check-state OK sau rolled-back');
  const none = runNode([f.P.factory, 'recover-txn'], { cwd: f.tmp });
  ok(none.status === 0 && /TXN_RECOVER none/.test(none.stdout), 'recover-txn idempotent khi không có marker');
}

// ---------- 11. Writer lock ownership ----------
console.log('11. Lock ownership…');
{
  const { tmp, P } = pairFixturePrep('t11', { slots: [
    { id: 'S10001', slug: 'pair-lock-a', title: 'Bài A lock', article: 'good' },
    { id: 'S10002', slug: 'pair-lock-b', title: 'Bài B lock', article: 'good' },
  ] });
  const before = stateBytes(P);
  fs.writeFileSync(P.lock, JSON.stringify({ owner: 'other-operator', token: 'tok-nguoi-khac', at: new Date().toISOString(), pid: process.pid, ttlMs: 600000 }, null, 1) + '\n');
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r.status !== 0, 'publish-pair từ chối khi writer lock thuộc owner khác', r.stdout + r.stderr);
  ok(/lock|Lock|REFUSE|refuse/.test(r.stdout + r.stderr), 'Thông báo refuse lock rõ ràng', r.stdout + r.stderr);
  ok(bytesEq(before, stateBytes(P)), 'State byte-identical khi bị refuse lock');
  ok(fs.readFileSync(P.lock, 'utf8').includes('other-operator'), 'Lock của owner khác KHÔNG bị ghi đè/xóa');
}

// ---------- 12. Fail giữa chừng -> resumable ----------
console.log('12. Crash giữa pair -> resumable…');
{
  const { tmp, P } = pairFixturePrep('t12', { slots: [
    { id: 'S10001', slug: 'pair-resume-a', title: 'Bài A resume', article: 'broken' },
    { id: 'S10002', slug: 'pair-resume-b', title: 'Bài B resume', article: 'good' },
  ] });
  const before = stateBytes(P);
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r.status !== 0, 'publish-pair fail khi module bài hỏng (như network/session loss)', r.stdout + r.stderr);
  ok(bytesEq(before, stateBytes(P)), 'State byte-identical sau fail giữa chừng (không ghi dở)');
  // Sửa xong -> cùng lệnh RESUME thành công, không cần thao tác đặc biệt.
  const a = fixtureArticleObject('pair-resume-a', 'Bài A resume');
  fs.writeFileSync(path.join(P.artDir, 'zz-pair-resume-a.js'), 'module.exports = ' + JSON.stringify(a) + ';\n');
  const r2 = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r2.status === 0 && /PAIR_RESULT ok=published ids=S10001,S10002/.test(r2.stdout), 'Sau repair, cùng lệnh publish-pair thành công (resumable)', r2.stdout + r2.stderr);
  const m = JSON.parse(readS(P.matrix));
  ok(rowOf(m, 'S10001').state === 'PUBLISHED' && rowOf(m, 'S10002').state === 'PUBLISHED', 'Cả hai slot PUBLISHED sau resume');
}

// ---------- 13. Duplicate slug reject ----------
console.log('13. Duplicate slug…');
{
  const { P } = pairFixturePrep('t13', { slots: [] });
  const mod = require(P.factory);
  const m = JSON.parse(readS(P.matrix));
  const realSlug = m.slots[0].slug;
  let threw = false;
  try { mod.planSlot(m, { hub: 'thue-xe/xe-may', slug: realSlug, title: 'Trùng slug', intent: 'informational/' + realSlug }); }
  catch (e) { threw = true; ok(/trùng slug/i.test(e.message), 'planSlot từ chối slug trùng', e.message); }
  ok(threw, 'planSlot throw khi duplicate slug');
}

// ---------- 14. primaryIntent rỗng reject ----------
console.log('14. primaryIntent rỗng…');
{
  const { tmp, P } = pairFixturePrep('t14', { slots: [
    { id: 'S10001', slug: 'pair-intent-a', title: 'Bài A intent rỗng', article: 'good', intent: '' },
    { id: 'S10002', slug: 'pair-intent-b', title: 'Bài B intent rỗng', article: 'good' },
  ] });
  const vs = runNode([P.factory, 'verify-sources', 'S10001,S10002'], { cwd: tmp });
  ok(vs.status !== 0 && /primaryIntent RỖNG/.test(vs.stdout + vs.stderr), 'verify-sources bắt primaryIntent rỗng', vs.stdout + vs.stderr);
  const before = stateBytes(P);
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r.status !== 0, 'publish-pair từ chối primaryIntent rỗng (cannibalization guard)', r.stdout + r.stderr);
  ok(bytesEq(before, stateBytes(P)), 'State byte-identical sau reject intent rỗng');
}

// ---------- 16/17. Change mode + gate nhẹ/nặng ----------
console.log('16+17. Change-mode và heavy gate…');
{
  const { P } = pairFixturePrep('t16', { slots: [] });
  const mod = require(P.factory);
  const cm = mod.runtime.classifyChangeMode;
  ok(cm(['factory/data/articles/zz-a.js', 'factory/state/matrix.json', 'factory/state/checkpoint.json']) === 'CONTENT_ONLY',
    'classifyChangeMode: chỉ articles+state -> CONTENT_ONLY');
  ok(cm(['factory/data/articles/zz-a.js', 'factory/factory.js']) === 'ENGINE_CHANGE', 'Mix engine -> ENGINE_CHANGE');
  ok(cm(['.github/workflows/factory-publish.yml']) === 'ENGINE_CHANGE', 'Workflow đổi -> ENGINE_CHANGE');
  ok(cm([]) === 'EMPTY' && cm(null) === 'EMPTY', 'Không có path đổi -> EMPTY');
  ok(cm(['factory/data/articles/zz-a.js']) === 'CONTENT_ONLY', 'Chỉ article -> CONTENT_ONLY');
  // Heavy suite KHÔNG nằm trong hot path (test 2 đã spy spawn chỉ generate.js).
  // Engine change -> CI phải chạy heavy: workflow phải tham chiếu đủ bộ test.
  const wf = (f) => { try { return readS(path.join(ROOT, '.github/workflows', f)); } catch (_) { return ''; } };
  const deep = wf('factory-deep-audit.yml');
  ok(/test-hardening\.js/.test(deep) && /test-reliability\.js/.test(deep) && /test-pair\.js/.test(deep) && /verify-invariant/.test(deep),
    'factory-deep-audit.yml chạy full heavy gate (hardening/reliability/pair/invariant)');
  const pub = wf('factory-publish.yml');
  ok(/publish-pair/.test(pub) && /push-scope/.test(pub), 'factory-publish.yml dùng exact push scope (publish-pair + push-scope)');
  ok(!/drain-iteration/.test(pub) || /workflow_dispatch/.test(pub), 'Publish workflow không còn drain liên tục làm hot path');
  const aq = wf('article-quality.yml');
  ok(/change-mode/.test(aq) && /verify-sources/.test(aq), 'article-quality.yml phân mode + verify-sources scoped');
}

// ---------- 18. State thật byte-safe + idempotent ----------
console.log('18. Idempotent + state thật byte-safe…');
{
  // publish-pair lại đúng IDs đã PUBLISHED -> repair flow, không double-publish.
  const { tmp, P } = T4;
  const mBefore = JSON.parse(readS(P.matrix));
  const r = runNode([P.factory, 'publish-pair', 'S10001,S10002', '--owner', 'pair-test'], { cwd: tmp });
  ok(r.status === 0 && /PAIR_REPAIR/.test(r.stdout) && /ok=republished/.test(r.stdout), 'Chạy lại publish-pair đúng IDs đã publish -> repair idempotent, KHÔNG lật gì thêm', r.stdout + r.stderr);
  const mAfter = JSON.parse(readS(P.matrix));
  ok(rowOf(mAfter, 'S10001').state === 'PUBLISHED' && rowOf(mAfter, 'S10002').state === 'PUBLISHED', 'State vẫn PUBLISHED sau re-run');
  const publishedBefore = mBefore.slots.filter(s => s.state === 'PUBLISHED').length;
  ok(mAfter.slots.filter(s => s.state === 'PUBLISHED').length === publishedBefore, 'Số PUBLISHED không tăng khi re-run (không double-publish)');
  // State thật của repo KHÔNG đổi sau toàn suite.
  for (const { f, b } of REAL_STATE_SNAPSHOT) {
    ok(readB(path.join(ROOT, 'factory', 'state', f)).equals(b), `State thật ${f} byte-identical sau toàn suite`);
  }
}

console.log(`\nKẾT QUẢ: ${pass} pass, ${fail} fail.`);
if (fail > 0) { console.log('KIỂM TRA THẤT BẠI: pair mode có regression.'); process.exit(1); }
console.log('PASS: SIMPLE PRODUCTION MODE (pair) đạt toàn bộ regression.');
