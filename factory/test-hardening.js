#!/usr/bin/env node
// AI WIKI TOTAL — bộ kiểm thử HARDENING (regression post-UI)
// Cách chạy: node factory/test-hardening.js  (read-only với repo thật; mọi
// kịch bản ghi/xóa đều chạy trên BẢN SAO trong os.tmpdir)
//
// Phạm vi:
//   1. generate --check READ-ONLY BYTE-EXACT (thiếu / lệch nội dung / thừa /
//      lệch manifest; không soi CSS/JS; KHÔNG ghi đĩa ở mọi đường).
//   2. --out ghi ra thư mục tách biệt.
//   3. buildAll() deterministic (thuần trong bộ nhớ).
//   4. parsePublishRequest: publish THEO ID, từ chối publish-all/cờ --/trùng/
//      >10 ID/slot không PASS.
//   5. Publish ATOMIC: fault-injection (fail generate, fail test) KHÔNG ghi
//      matrix/state; publish thành công chỉ lật đúng ID yêu cầu, không sweep.
//   6. Module bài lỗi -> FAIL LOUD ở generate/audit.
//   7. Breadcrumb visual = JSON-LD BreadcrumbList trên MỌI trang (kể cả tim-kiem).
//   8. sitemap-articles/utility khớp nguồn sự thật.
//   9. Invariant capacity/ma trận.
// Cuối: khẳng định state THẬT trên repo nguyên vẹn sau toàn bộ bộ test.
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const { SITE } = require('./site.config');
const factoryMod = require('./factory');
const genMod = require('./generate');

let pass = 0, fail = 0;
function ok(cond, name, detail) {
  if (cond) { pass++; }
  else { fail++; console.log(`  ✗ ${name}${detail ? ' — ' + detail : ''}`); }
}
function readB(file) { return fs.readFileSync(file); }
function readS(file) { return fs.readFileSync(file, 'utf8'); }

console.log('=== KIỂM THỬ HARDENING AI WIKI TOTAL ===');

// ---------- Hạ tầng: bản sao repo trong tmp ----------
function copyRepoToTmp(tag) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'harden-' + tag + '-'));
  const SKIP = new Set(['.git', 'node_modules']);
  (function cp(dir, rel) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      // giữ .github (test.js kiểm workflow og-image tồn tại); bỏ .git + dotfile rác
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
function writeJson(file, obj) { fs.writeFileSync(file, JSON.stringify(obj, null, 1)); }

// State thật TRƯỚC suite (snapshot byte-exact): mọi fixture chạy trên bản sao tmp,
// cuối suite state thật phải BYTE-IDENTICAL — bảo vệ đúng ở MỌI cỡ ma trận
// (12 hay 100 hay 6000 slot đều một logic), không hardcode số slot/PUBLISHED.
const REAL_STATE_SNAPSHOT = ['matrix.json', 'factory-state.json', 'checkpoint.json', 'manifest.json']
  .map(f => ({ f, b: readB(path.join(ROOT, 'factory', 'state', f)) }));

// ---------- 1. generate --check read-only byte-exact ----------
console.log('1. --check read-only byte-exact…');
{
  const tmp = copyRepoToTmp('check');
  const P = tmpPaths(tmp);
  const g = [P.generate, '--check'];
  const clean = runNode(g, { cwd: tmp });
  ok(clean.status === 0, '--check đạt trên repo nhất quán', clean.stdout + clean.stderr);

  // 1a. READ-ONLY: --check KHÔNG ghi đĩa — byte bị sửa phải NGUYÊN VẸN sau khi check fail
  const target = path.join(tmp, 'index.html');
  const orig = readB(target);
  const tampered = Buffer.concat([orig, Buffer.from('<!-- tamper -->')]);
  fs.writeFileSync(target, tampered);
  const t1 = runNode(g, { cwd: tmp });
  ok(t1.status === 1, '--check exit 1 khi 1 file lệch byte', t1.stdout + t1.stderr);
  ok((t1.stdout + t1.stderr).includes('LỆCH NỘI DUNG') && (t1.stdout + t1.stderr).includes('index.html'),
    '--check nêu đúng LỆCH NỘI DUNG + tên file', t1.stdout + t1.stderr);
  ok(readB(target).equals(tampered), '--check KHÔNG sửa lại file lệch (read-only)', 'byte bị check ghi đè');
  fs.writeFileSync(target, orig);
  ok(runNode(g, { cwd: tmp }).status === 0, '--check xanh lại sau khi trả byte gốc');

  // 1b. STALE (nội dung cũ): thay bằng chuỗi cũ
  fs.writeFileSync(target, '<html><body>stale</body></html>');
  const t2 = runNode(g, { cwd: tmp });
  ok(t2.status === 1 && (t2.stdout + t2.stderr).includes('LỆCH NỘI DUNG'), 'Nội dung cũ (stale) bị bắt', t2.stdout + t2.stderr);
  fs.writeFileSync(target, orig);

  // 1c. THIẾU: xóa 1 trang sinh
  const miss = path.join(tmp, 'gioi-thieu', 'index.html');
  const missBak = readB(miss);
  fs.unlinkSync(miss);
  const t3 = runNode(g, { cwd: tmp });
  ok(t3.status === 1 && (t3.stdout + t3.stderr).includes('THIẾU'), 'File sinh bị thiếu bị bắt', t3.stdout + t3.stderr);
  fs.writeFileSync(miss, missBak);

  // 1d. THỪA: file lạ trong namespace của generator
  fs.writeFileSync(path.join(tmp, 'stray-page.html'), '<html>stray</html>');
  fs.writeFileSync(path.join(tmp, 'assets', 'data', 'stray-data.json'), '{}');
  const t4 = runNode(g, { cwd: tmp });
  ok(t4.status === 1 && (t4.stdout + t4.stderr).includes('THỪA')
    && (t4.stdout + t4.stderr).includes('stray-page.html') && (t4.stdout + t4.stderr).includes('stray-data.json'),
    'File thừa (html + data json lạ) bị bắt đúng tên', t4.stdout + t4.stderr);
  fs.unlinkSync(path.join(tmp, 'stray-page.html'));
  fs.unlinkSync(path.join(tmp, 'assets', 'data', 'stray-data.json'));

  // 1e. Namespace generator KHÔNG soi CSS/JS/ảnh: file lạ ở assets/css vẫn xanh
  fs.writeFileSync(path.join(tmp, 'assets', 'css', 'stray-draft.css'), 'body{}');
  fs.writeFileSync(path.join(tmp, 'assets', 'js', 'stray-draft.js'), '// draft');
  const t5 = runNode(g, { cwd: tmp });
  ok(t5.status === 0, 'File nháp CSS/JS không bị --check đánh dấu thừa (ngoài namespace)', t5.stdout + t5.stderr);
  fs.unlinkSync(path.join(tmp, 'assets', 'css', 'stray-draft.css'));
  fs.unlinkSync(path.join(tmp, 'assets', 'js', 'stray-draft.js'));

  // 1f. LỆCH MANIFEST: sửa manifest trên đĩa
  const mf = readB(P.matrix.replace('matrix.json', 'manifest.json'));
  fs.writeFileSync(P.matrix.replace('matrix.json', 'manifest.json'), Buffer.concat([mf, Buffer.from('\n')]));
  const t6 = runNode(g, { cwd: tmp });
  ok(t6.status === 1 && (t6.stdout + t6.stderr).includes('LỆCH MANIFEST'), 'Manifest bị sửa tay bị bắt', t6.stdout + t6.stderr);
  fs.writeFileSync(P.matrix.replace('matrix.json', 'manifest.json'), mf);
  ok(runNode(g, { cwd: tmp }).status === 0, 'Repo nhất quán: --check xanh (kết thúc mục 1)');

  fs.rmSync(tmp, { recursive: true, force: true });
}

// ---------- 2. --out: ghi ra thư mục tách biệt ----------
console.log('2. --out ghi tách biệt…');
{
  const tmp = copyRepoToTmp('out');
  const P = tmpPaths(tmp);
  const out = path.join(tmp, 'out-dist');
  const r = runNode([P.generate, '--out', out], { cwd: tmp });
  ok(r.status === 0, 'generate --out chạy sạch', r.stdout + r.stderr);
  const b1 = genMod.buildAll();
  const expectedCount = Object.keys(b1.files).length;
  let outFiles = 0;
  (function cnt(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p2 = path.join(d, e.name);
      if (e.isDirectory()) cnt(p2); else outFiles++;
    }
  })(out);
  // +1 manifest.json
  ok(outFiles === expectedCount + 1, '--out sinh đủ mọi file + manifest', `${outFiles} vs ${expectedCount + 1}`);
  ok(fs.existsSync(path.join(out, 'index.html')) && fs.existsSync(path.join(out, 'sitemap.xml'))
    && fs.existsSync(path.join(out, 'robots.txt')) && fs.existsSync(path.join(out, 'assets', 'data', 'search-index.json')),
    '--out có trang chủ + sitemap + robots + data');
  ok(readS(path.join(out, 'index.html')) === readS(path.join(tmp, 'index.html')),
    '--out nội dung trùng root repo đã sinh');
  const checkOut = runNode([P.generate, '--check', '--out', out], { cwd: tmp });
  ok(checkOut.status === 0, '--check --out đối chiếu được thư mục đích', checkOut.stdout + checkOut.stderr);
  fs.rmSync(tmp, { recursive: true, force: true });
}

// ---------- 3. buildAll deterministic (thuần trong bộ nhớ) ----------
console.log('3. buildAll deterministic…');
{
  const a1 = genMod.buildAll();
  const a2 = genMod.buildAll();
  ok(JSON.stringify(a1.files) === JSON.stringify(a2.files), 'buildAll() chạy 2 lần cho cùng kết quả (deterministic)');
  ok(a1.manifestContent === a2.manifestContent, 'Manifest deterministic');
  const rels = Object.keys(a1.files);
  ok(rels.length >= 130, 'buildAll sinh đủ namespace (>= 130 file)', String(rels.length));
  ok(rels.every(rel => a1.files[rel].length > 0), 'Mọi file sinh ra không rỗng');
  ok(a1.manifest.every(m => a1.files[m.rel] !== undefined), 'Mọi mục manifest trỏ tới file đã sinh');
}

// ---------- 4. parsePublishRequest (unit, thuần) ----------
console.log('4. parsePublishRequest…');
{
  ok(factoryMod.PUBLISH_CHUNK_LIMIT === 10, 'PUBLISH_CHUNK_LIMIT = 10', String(factoryMod.PUBLISH_CHUNK_LIMIT));
  const base = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'matrix.json')));
  const now = new Date().toISOString();
  // Ma trận fixture: thêm S10001, S10002 (PASS) + S10003 (PLANNED)
  const fx = JSON.parse(JSON.stringify(base));
  fx.slots.push(
    { id: 'S10001', hub: 'thue-xe/xe-may', slug: 'hardening-fixture-article', title: 'Fixture A', primaryIntent: 'informational/hardening-fixture-article', notes: '', state: 'PASS', qaScore: 96, attempts: 1, createdAt: now, updatedAt: now },
    { id: 'S10002', hub: 'thue-xe/xe-may', slug: 'hardening-bystander-article', title: 'Fixture B', primaryIntent: 'informational/hardening-bystander-article', notes: '', state: 'PASS', qaScore: 95, attempts: 1, createdAt: now, updatedAt: now },
    { id: 'S10003', hub: 'thue-xe/xe-may', slug: 'hardening-planned-article', title: 'Fixture C', primaryIntent: 'informational/hardening-planned-article', notes: '', state: 'PLANNED', qaScore: null, attempts: 0, createdAt: now, updatedAt: now },
  );
  const throws = (name, fn, want) => {
    try { fn(); ok(false, name, 'không ném lỗi'); }
    catch (e) { ok(want ? String(e.message).includes(want) : true, name, String(e.message)); }
  };
  ok(factoryMod.parsePublishRequest(fx, 'S10001').ids.join() === 'S10001', 'Chấp nhận 1 ID PASS');
  ok(factoryMod.parsePublishRequest(fx, 'S10001 S10002').ids.join() === 'S10001,S10002', 'Chấp nhận nhiều ID PASS');
  ok(factoryMod.parsePublishRequest(fx, 'S00001 S10001').ids.join() === 'S10001',
    'ID đã PUBLISHED bị bỏ qua (resume idempotent), ID PASS còn lại được publish');
  throws('Từ chối publish không đối số', () => factoryMod.parsePublishRequest(fx, ''), 'ID tường minh');
  throws('Từ chối cờ --', () => factoryMod.parsePublishRequest(fx, '--all'), 'không nhận cờ');
  throws('Từ chối ID lạ (không có trong ma trận)', () => factoryMod.parsePublishRequest(fx, 'S99999'), 'Không tìm thấy slot');
  throws('Từ chối slot chưa PASS', () => factoryMod.parsePublishRequest(fx, 'S10003'), 'chỉ publish slot PASS');
  throws('Từ chối ID trùng', () => factoryMod.parsePublishRequest(fx, 'S10001 S10001'), 'lặp');
  // 11 ID PASS -> quá giới hạn chunk
  const fx11 = JSON.parse(JSON.stringify(fx));
  for (let i = 4; i <= 13; i++) {
    fx11.slots.push({ id: 'S100' + String(i).padStart(2, '0'), hub: 'thue-xe/xe-may', slug: 'x-' + i, title: 'X' + i, primaryIntent: 'informational/x-' + i, notes: '', state: 'PASS', qaScore: 95, attempts: 1, createdAt: now, updatedAt: now });
  }
  throws('Từ chối > 10 ID mỗi lệnh', () => factoryMod.parsePublishRequest(fx11, 'S10001 S10002 S10004 S10005 S10006 S10007 S10008 S10009 S10010 S10011 S10012'), 'chia nhỏ');
  ok(factoryMod.parsePublishRequest(fx11, 'S10001 S10002 S10004 S10005 S10006 S10007 S10008 S10009 S10010 S10011').ids.length === 10,
    'Chấp nhận đúng 10 ID (giới hạn chunk)');
}

// ---------- Hạ tầng fixture publish ----------
// Bài viết fixture đạt QA (>= 1600 từ, đủ seoTitle/meta/summary/quickAnswer/
// keyPoints/sections/checklist/warnings/notes/references/related).
function fixtureArticleObject(slug, title) {
  const p = (i) => `<p>Đoạn kiểm thử ${i}: quy trình thuê xe máy tại Hà Nội gồm chuẩn bị giấy tờ, kiểm tra tình trạng xe, ký hợp đồng, đặt cọc và nghiệm thu khi hoàn trả. Người thuê nên đối chiếu kỹ từng điều khoản, chụp lại hình ảnh hiện trạng xe trước khi nhận và giữ trọn bộ giấy tờ trong suốt thời gian sử dụng. Nắm lịch bảo dưỡng giúp nhận diện sớm tiếng động bất thường ở máy, mức mòn của lốp và độ nhạy của phanh trước khi vấn đề lớn dần.</p>`;
  const sec = (h2, from, to) => ({ h2, html: Array.from({ length: to - from }, (_, k) => p(from + k)).join('\n') });
  const a = {
    slug,
    title,
    seoTitle: 'Quy trình thuê xe máy kiểm thử hardening của xưởng nội dung',
    metaDescription: 'Bài kiểm thử hardening mô tả quy trình thuê xe máy tại Hà Nội: giấy tờ, hợp đồng, đặt cọc và nghiệm thu khi trả xe an toàn cho cả hai bên.',
    summary: 'Tổng hợp quy trình thuê xe máy dùng cho kiểm thử hardening của xưởng nội dung, bám sát các bước giấy tờ, hợp đồng, đặt cọc, vận hành và nghiệm thu.',
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
  return a;
}
// Bài fixture phải ĐẠT QA — tự khẳng định ở đây để không bỏ sót fixture hỏng.
{
  const { qaArticle } = require('./qa');
  const r = qaArticle(fixtureArticleObject('hardening-fixture-article', 'Quy trình thuê xe máy kiểm thử hardening của xưởng nội dung'));
  ok(r.pass && r.score >= 70 && r.words >= 1600, 'Fixture article đạt QA >= 70 (không có check critical hỏng)',
    `score=${r.score} words=${r.words} fails=${r.checks.filter(c => !c.pass).map(c => c.name).join(';')}`);
}
// Chuẩn bị repo tmp cho kịch bản publish: 12 slot thật + S10001/S10002 PASS,
// checkpoint khớp ma trận (14) — publish gate (test.js) đọc state từ đĩa.
function fixturePrep(tag, opts) {
  const tmp = copyRepoToTmp(tag);
  const P = tmpPaths(tmp);
  const now = new Date().toISOString();
  const m = JSON.parse(readS(P.matrix));
  m.slots.push(
    { id: 'S10001', hub: 'thue-xe/xe-may', slug: 'hardening-fixture-article', title: 'Fixture A', primaryIntent: 'informational/hardening-fixture-article', notes: '', state: 'PASS', qaScore: 96, attempts: 1, createdAt: now, updatedAt: now },
    { id: 'S10002', hub: 'thue-xe/xe-may', slug: 'hardening-bystander-article', title: 'Fixture B', primaryIntent: 'informational/hardening-bystander-article', notes: '', state: 'PASS', qaScore: 95, attempts: 1, createdAt: now, updatedAt: now },
  );
  writeJson(P.matrix, m);
  const cp = JSON.parse(readS(P.checkpoint));
  cp.slotCount = m.slots.length;
  writeJson(P.checkpoint, cp);
  const artDir = path.join(tmp, 'factory', 'data', 'articles');
  for (const [slug, title] of [['hardening-fixture-article', 'Quy trình thuê xe máy kiểm thử hardening của xưởng nội dung'], ['hardening-bystander-article', 'Bài bên lề kiểm thử hardening của xưởng nội dung']]) {
    const a = fixtureArticleObject(slug, title);
    fs.writeFileSync(path.join(artDir, `zz-${slug}.js`), 'module.exports = ' + JSON.stringify(a) + ';\n');
  }
  if (opts && opts.breakFixtureModule) {
    fs.writeFileSync(path.join(artDir, 'zz-hardening-fixture-article.js'), 'module.exports = { slug: "hardening-fixture-article", ;\n');
  }
  if (opts && opts.failTestGate) {
    fs.writeFileSync(path.join(tmp, 'factory', 'test.js'), "process.exit(1);\n");
  }
  return { tmp, P, m };
}

// ---------- 5. Publish atomic: fault-injection + selective theo ID ----------
console.log('5. Publish atomic theo ID…');
{
  // 5a. FAIL TRƯỚC GHI: module fixture bị hỏng -> generate fail -> KHÔNG ghi state
  const { tmp, P } = fixturePrep('pubfail', { breakFixtureModule: true });
  const before = { matrix: readB(P.matrix), fstate: readB(P.fstate), cp: readB(P.checkpoint) };
  const r = runNode([P.factory, 'publish', 'S10001'], { cwd: tmp });
  ok(r.status !== 0, 'Publish exit != 0 khi generate fail (fail loud)', r.stdout + r.stderr);
  ok((r.stdout + r.stderr).includes('TỪ CHỐI'), 'Publish báo rõ TỪ CHỐI, không lặng lẽ bỏ qua', r.stdout + r.stderr);
  ok(readB(P.matrix).equals(before.matrix), 'Matrix KHÔNG bị ghi khi publish fail');
  ok(readB(P.fstate).equals(before.fstate), 'factory-state KHÔNG bị ghi khi publish fail');
  ok(readB(P.checkpoint).equals(before.cp), 'checkpoint KHÔNG bị ghi khi publish fail');
  ok(!fs.existsSync(P.lock), 'Không bỏ lại writer lock khi publish fail');
  const m1 = JSON.parse(readS(P.matrix));
  ok(m1.slots.find(s => s.id === 'S10001').state === 'PASS', 'Slot giữ nguyên PASS để resume khi publish fail');
  fs.rmSync(tmp, { recursive: true, force: true });

  // 5b. FAIL GIỮA CHUNK: generate xong nhưng test gate fail -> state vẫn KHÔNG ghi
  const f2 = fixturePrep('pubtestfail', { failTestGate: true });
  const before2 = { matrix: readB(f2.P.matrix), fstate: readB(f2.P.fstate), cp: readB(f2.P.checkpoint) };
  const r2 = runNode([f2.P.factory, 'publish', 'S10001'], { cwd: f2.tmp });
  ok(r2.status !== 0, 'Publish exit != 0 khi test gate fail', r2.stdout + r2.stderr);
  ok(readB(f2.P.matrix).equals(before2.matrix), 'Matrix KHÔNG bị ghi khi test fail (atomic)');
  ok(readB(f2.P.fstate).equals(before2.fstate), 'factory-state KHÔNG bị ghi khi test fail');
  ok(readB(f2.P.checkpoint).equals(before2.cp), 'checkpoint KHÔNG bị ghi khi test fail');
  ok(fs.existsSync(path.join(f2.tmp, 'thue-xe', 'xe-may', 'hardening-fixture-article', 'index.html')),
    'generate đã chạy trong chunk (trang sinh có trên đĩa) nhưng state không commit — đúng semantics repo-checkpoint');
  fs.rmSync(f2.tmp, { recursive: true, force: true });

  // 5c. THÀNH CÔNG: chỉ đúng ID yêu cầu được lật, không sweep
  const f3 = fixturePrep('pubok', {});
  const before3 = { matrix: readB(f3.P.matrix), fstate: readB(f3.P.fstate), cp: readB(f3.P.checkpoint) };
  const r3 = runNode([f3.P.factory, 'publish', 'S10001'], { cwd: f3.tmp });
  ok(r3.status === 0, 'Publish S10001 thành công (cổng generate + test xanh)', r3.stdout + r3.stderr);
  const m3 = JSON.parse(readS(f3.P.matrix));
  const s1 = m3.slots.find(s => s.id === 'S10001');
  const s2 = m3.slots.find(s => s.id === 'S10002');
  ok(s1 && s1.state === 'PUBLISHED', 'S10001 (được yêu cầu) -> PUBLISHED');
  ok(s2 && s2.state === 'PASS', 'S10002 (PASS ngoài yêu cầu) GIỮ NGUYÊN PASS — không sweep');
  const othersBefore = JSON.stringify(JSON.parse(before3.matrix).slots.filter(s => !['S10001', 'S10002'].includes(s.id)));
  ok(JSON.stringify(m3.slots.filter(s => !['S10001', 'S10002'].includes(s.id))) === othersBefore,
    'Mọi slot khác (kể cả PUBLISHED cũ) không đổi gì');
  const cp3 = JSON.parse(readS(f3.P.checkpoint));
  ok(cp3.slotCount === m3.slots.length, 'Checkpoint khớp ma trận sau publish thành công', cp3.slotCount + ' vs ' + m3.slots.length);
  const st3 = JSON.parse(readS(f3.P.fstate));
  ok(st3.lastAction && st3.lastAction.action === 'publish:S10001', 'factory-state ghi đúng transaction publish:S10001', st3.lastAction && st3.lastAction.action);
  ok(fs.existsSync(path.join(f3.tmp, 'thue-xe', 'xe-may', 'hardening-fixture-article', 'index.html')), 'Trang của bài vừa publish đã được sinh');
  ok(!fs.existsSync(f3.P.lock), 'Không writer lock sau publish thành công');
  const mAfter = JSON.parse(readS(f3.P.matrix));
  ok(factoryMod.validateMatrix(mAfter), 'Ma trận sau publish vẫn hợp lệ (validateMatrix)');
  const sm3 = readS(path.join(f3.tmp, 'sitemap-articles.xml'));
  ok(sm3.includes(SITE.baseUrl + 'thue-xe/xe-may/hardening-fixture-article/'), 'Bài mới nằm trong sitemap-articles sau publish');
  const chk = runNode([f3.P.generate, '--check'], { cwd: f3.tmp });
  ok(chk.status === 0, 'Site sau publish khớp generator (--check xanh)', chk.stdout + chk.stderr);
  const aud = runNode([f3.P.factory, 'audit', '--min-score', '70'], { cwd: f3.tmp });
  ok(aud.status === 0, 'Audit mọi bài PUBLISHED (gồm fixture) >= 70 sau publish', aud.stdout + aud.stderr);
  fs.rmSync(f3.tmp, { recursive: true, force: true });

  // 5d. CLI từ chối các cú pháp sai — KHÔNG đụng state
  const f4 = fixturePrep('pubrefuse', {});
  const snap = readB(f4.P.matrix);
  const cases = [
    ['publish (không ID)', [f4.P.factory, 'publish']],
    ['publish --all', [f4.P.factory, 'publish', '--all']],
    ['publish S10001 S10001 (trùng)', [f4.P.factory, 'publish', 'S10001', 'S10001']],
    ['publish S00010 (PLANNED)', [f4.P.factory, 'publish', 'S00010']],
    ['publish S99999 (không tồn tại)', [f4.P.factory, 'publish', 'S99999']],
  ];
  for (const [name, args] of cases) {
    const rr = runNode(args, { cwd: f4.tmp });
    ok(rr.status !== 0, `CLI từ chối: ${name}`, rr.stdout + rr.stderr);
  }
  ok(readB(f4.P.matrix).equals(snap), 'Ma trận nguyên vẹn sau mọi lời gọi publish sai cú pháp');
  fs.rmSync(f4.tmp, { recursive: true, force: true });
}

// ---------- 6. Module bài viết lỗi -> FAIL LOUD ở mọi đường production ----------
console.log('6. Module bài viết lỗi fail loud…');
{
  const tmp = copyRepoToTmp('broken');
  const P = tmpPaths(tmp);
  fs.writeFileSync(path.join(tmp, 'factory', 'data', 'articles', 'zz-broken-module.js'), 'module.exports = { slug: "zz-broken", ;\n');
  const g = runNode([P.generate, '--check'], { cwd: tmp });
  ok(g.status !== 0 && (g.stdout + g.stderr).includes('zz-broken-module.js'), 'generate --check fail loud khi module lỗi (tên file + lỗi parse)');
  const g2 = runNode([P.generate], { cwd: tmp });
  ok(g2.status !== 0 && (g2.stdout + g2.stderr).includes('zz-broken-module.js'), 'generate fail loud khi module lỗi (exit != 0)');
  const a = runNode([P.factory, 'audit', '--min-score', '70'], { cwd: tmp });
  ok(a.status !== 0 && (a.stdout + a.stderr).includes('zz-broken-module.js'), 'audit fail loud khi module lỗi (không âm thầm "không có bài")');
  fs.rmSync(tmp, { recursive: true, force: true });
}

// ---------- 7. Breadcrumb hiển thị KHỚP JSON-LD BreadcrumbList trên MỌI trang ----------
console.log('7. Visual breadcrumb = JSON-LD BreadcrumbList…');
{
  const manifest = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'manifest.json')));
  const pages = manifest
    .filter(e => ['category', 'hub', 'article'].includes(e.kind))
    .map(e => e.rel)
    .concat(['gioi-thieu/index.html', 'lien-he/index.html', 'chinh-sach-bao-mat/index.html', 'dieu-khoan-su-dung/index.html', 'tim-kiem/index.html']);
  let checked = 0;
  for (const rel of pages) {
    const html = readS(path.join(ROOT, rel));
    const bcStart = html.indexOf('class="breadcrumb"');
    const bcEnd = html.indexOf('</nav>', bcStart);
    ok(bcStart >= 0 && bcEnd > bcStart, `Có breadcrumb hiển thị: ${rel}`);
    const bcHtml = html.slice(bcStart, bcEnd);
    const visualNames = [...bcHtml.matchAll(/<a class="crumb" href="[^"]*">([^<]*)<\/a>/g)].map(mm => mm[1]);
    const current = bcHtml.match(/<span class="crumb" aria-current="page">([^<]*)<\/span>/);
    if (current) visualNames.push(current[1]);
    let bcLd = null;
    for (const sm of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const obj = JSON.parse(sm[1]);
        if (obj['@type'] === 'BreadcrumbList') bcLd = obj;
      } catch (e) { /* script JSON-LD khác không parse được sẽ bị bắt ở test.js */ }
    }
    ok(!!bcLd, `Có JSON-LD BreadcrumbList: ${rel}`);
    if (bcLd) {
      const ldNames = bcLd.itemListElement.map(x => x.name);
      ok(JSON.stringify(ldNames) === JSON.stringify(visualNames),
        `Breadcrumb visual = JSON-LD (names, theo thứ tự): ${rel}`, `visual=[${visualNames}] ld=[${ldNames}]`);
      const ldUrls = bcLd.itemListElement.map(x => x.item);
      const hrefs = [...bcHtml.matchAll(/<a class="crumb" href="([^"]*)"/g)].map(mm => mm[1]);
      const expectUrls = hrefs.map(h => SITE.baseUrl + h.replace(SITE.basePath, ''));
      // Crumb cuối (trang hiện tại) không phải <a> — kỳ vọng URL = absUrl của chính trang đó
      expectUrls.push(SITE.baseUrl + rel.replace(/index\.html$/, ''));
      ok(JSON.stringify(ldUrls) === JSON.stringify(expectUrls), `Breadcrumb URL hierarchy khớp JSON-LD item: ${rel}`, `ld=[${ldUrls}] expect=[${expectUrls}]`);
    }
    checked++;
  }
  ok(checked > 100, 'Đã kiểm breadcrumb khớp JSON-LD trên mọi trang có breadcrumb', String(checked));
  // Trang tìm kiếm (hardening này) phải CÓ JSON-LD breadcrumb (trước đây thiếu)
  const tk = readS(path.join(ROOT, 'tim-kiem', 'index.html'));
  ok(tk.includes('"@type": "BreadcrumbList"') || tk.includes('"@type":"BreadcrumbList"'), 'tim-kiem có JSON-LD BreadcrumbList (bổ sung hardening)');
}

// ---------- 8. sitemap-articles + utility khớp nguồn sự thật ----------
console.log('8. Sitemap/utility khớp nguồn…');
{
  const matrix = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'matrix.json')));
  const sm = readS(path.join(ROOT, 'sitemap-articles.xml'));
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x => x[1]);
  const slotBySlug = new Map(matrix.slots.map(s => [s.slug, s]));
  let bad = 0;
  const pubUrls = new Set();
  for (const s of matrix.slots.filter(x => x.state === 'PUBLISHED')) {
    const url = SITE.baseUrl + s.hub + '/' + s.slug + '/';
    pubUrls.add(url);
    if (!locs.includes(url)) bad++;
    if (!fs.existsSync(path.join(ROOT, s.hub, s.slug, 'index.html'))) bad++;
  }
  ok(bad === 0, 'Mọi slot PUBLISHED có URL trong sitemap-articles + trang sinh tồn tại', String(bad));
  ok(locs.every(l => pubUrls.has(l)), 'Mọi URL trong sitemap-articles thuộc slot PUBLISHED (không rác)');
  ok(locs.length === matrix.slots.filter(x => x.state === 'PUBLISHED').length, 'Số URL sitemap-articles = số slot PUBLISHED', locs.length + ' vs ' + matrix.slots.filter(x => x.state === 'PUBLISHED').length);
  // Utility routes
  const sp = readS(path.join(ROOT, 'sitemap-pages.xml'));
  for (const u of ['', 'gioi-thieu/', 'lien-he/', 'chinh-sach-bao-mat/', 'dieu-khoan-su-dung/']) {
    ok(sp.includes(SITE.baseUrl + u), 'sitemap-pages có utility route: ' + (u || '(trang chủ)'));
  }
  ok(!sp.includes('tim-kiem/'), 'sitemap-pages KHÔNG chứa trang tìm kiếm (noindex)');
}

// ---------- 9. Invariant capacity/ma trận ----------
console.log('9. Invariant capacity…');
{
  const m = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'matrix.json')));
  ok(factoryMod.validateMatrix(m), 'Ma trận thật hợp lệ (validateMatrix)');
  ok(m.capacity >= m.slots.length && m.capacity >= m.plannedTarget, 'capacity >= slots & plannedTarget', `${m.slots.length}/${m.plannedTarget}/${m.capacity}`);
  if (m.reserved) {
    ok(m.plannedTarget + m.reserved.total <= m.capacity, 'plannedTarget + reserved <= capacity', `${m.plannedTarget}+${m.reserved.total} > ${m.capacity}?`);
    const poolSum = Object.entries(m.reserved).filter(([k]) => k !== 'total').reduce((n, [, v]) => n + v, 0);
    ok(poolSum === m.reserved.total, 'Tổng pool dự phòng = reserved.total', `${poolSum} vs ${m.reserved.total}`);
  }
  const cp = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'checkpoint.json')));
  ok(cp.slotCount === m.slots.length, 'Checkpoint khớp số slot ma trận', `${cp.slotCount} vs ${m.slots.length}`);
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'writer.lock')), 'Không writer lock bỏ lại trên repo thật');
}

// ---------- 10. Regression scale: ma trận tăng slot -> hardening vẫn xanh ----------
// Dùng CHÍNH CLI plan (canonical) để thêm slot trên bản sao tmp — đồng thời là
// regression cho fix intent của lệnh plan: default informational/<slug>, override
// --intent không rơi vào tiêu đề, và slot mới KHÔNG BAO GIỜ có primaryIntent rỗng.
console.log('10. Regression scale (ma trận tăng slot qua CLI plan)…');
{
  const tmp = copyRepoToTmp('growth');
  const P = tmpPaths(tmp);
  const beforeCount = JSON.parse(readS(P.matrix)).slots.length;
  // 10a. plan mặc định -> informational/<slug>
  const r1 = runNode([P.factory, 'plan', 'thue-xe/xe-may', 'growth-fixture-a', 'Slot tăng trưởng A của hardening'], { cwd: tmp });
  ok(r1.status === 0, 'plan mặc định xanh trên tmp', r1.stdout + r1.stderr);
  const m1 = JSON.parse(readS(P.matrix));
  const a1 = m1.slots[m1.slots.length - 1];
  ok(a1.primaryIntent === 'informational/growth-fixture-a', 'plan mặc định sinh intent informational/<slug>', a1.primaryIntent);
  // 10b. --intent override
  const r2 = runNode([P.factory, 'plan', 'moto/yamaha', 'growth-fixture-b', 'Slot tăng trưởng B', '--intent', 'informational/yamaha-growth-b'], { cwd: tmp });
  ok(r2.status === 0, 'plan --intent override xanh', r2.stdout + r2.stderr);
  const b1 = JSON.parse(readS(P.matrix)).slots.slice(-1)[0];
  ok(b1.primaryIntent === 'informational/yamaha-growth-b', 'plan --intent ghi đúng intent override', b1.primaryIntent);
  // 10c. --intent đặt GIỮA các phần tiêu đề: cờ + giá trị không được vào title
  const r3 = runNode([P.factory, 'plan', 'garage/lop', 'growth-fixture-c', 'Tiêu đề thứ nhất', '--intent', 'informational/growth-fixture-c', 'Tiêu đề thứ hai'], { cwd: tmp });
  ok(r3.status === 0, 'plan với --intent ở giữa title xanh', r3.stdout + r3.stderr);
  const c1 = JSON.parse(readS(P.matrix)).slots.slice(-1)[0];
  ok(c1.title === 'Tiêu đề thứ nhất Tiêu đề thứ hai', 'title KHÔNG nuốt --intent + giá trị', c1.title);
  ok(c1.primaryIntent === 'informational/growth-fixture-c', 'intent đúng khi cờ ở giữa title', c1.primaryIntent);
  // 10d. --intent sai format -> từ chối, KHÔNG tạo slot rỗng intent
  const before = JSON.parse(readS(P.matrix));
  const r4 = runNode([P.factory, 'plan', 'tips/meo-lai-xe', 'growth-fixture-d', 'Slot sai intent', '--intent', 'bad intent'], { cwd: tmp });
  ok(r4.status !== 0, 'plan từ chối --intent chứa khoảng trắng', r4.stdout + r4.stderr);
  const r5 = runNode([P.factory, 'plan', 'tips/meo-lai-xe', 'growth-fixture-d', 'Slot sai intent', '--intent', 'wrongformat'], { cwd: tmp });
  ok(r5.status !== 0, 'plan từ chối --intent sai format (thiếu type/slug)', r5.stdout + r5.stderr);
  const after = JSON.parse(readS(P.matrix));
  ok(after.slots.length === before.slots.length, 'Slot KHÔNG được tạo khi intent sai');
  // 10e. Ma trận lớn hơn: state hợp lệ + cây sinh không đổi
  ok(after.slots.length === beforeCount + 3, 'Ma trận tăng đúng 3 slot qua plan', String(after.slots.length) + ' vs ' + String(beforeCount + 3));
  ok(after.slots.every(sx => typeof sx.primaryIntent === 'string' && sx.primaryIntent.trim() !== ''),
    'Mọi slot (thật + fixture) có primaryIntent không rỗng');
  ok(runNode([P.factory, 'check-state'], { cwd: tmp }).status === 0, 'check-state xanh trên ma trận đã tăng');
  const chk = runNode([P.generate, '--check'], { cwd: tmp });
  ok(chk.status === 0, 'generate --check xanh khi ma trận thêm slot PLANNED (cây sinh không đổi)', chk.stdout + chk.stderr);
  fs.rmSync(tmp, { recursive: true, force: true });
}

// ---------- Kết luận: state THẬT nguyên vẹn ----------
console.log('11. State thật nguyên vẹn sau bộ test…');
{
  // Snapshot byte-exact TRƯỚC suite (REAL_STATE_SNAPSHOT) — so lại SAU toàn bộ
  // fixture: chứng minh fixture KHÔNG rò/mutate repo thật, ở mọi cỡ ma trận
  // (không hardcode số slot hay số PUBLISHED — scale vô hạn 100/1000/6000 bài).
  let intact = true;
  for (const st of REAL_STATE_SNAPSHOT) {
    const nowB = readB(path.join(ROOT, 'factory', 'state', st.f));
    if (!nowB.equals(st.b)) { intact = false; console.log('  ✗ factory/state/' + st.f + ' BỊ THAY ĐỔI — test rò ra production state'); }
  }
  ok(intact, 'State thật BYTE-IDENTICAL sau suite (matrix/factory-state/checkpoint/manifest)', String(REAL_STATE_SNAPSHOT.length) + ' file');
  const m = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'matrix.json')));
  const cp = JSON.parse(readS(path.join(ROOT, 'factory', 'state', 'checkpoint.json')));
  ok(cp.slotCount === m.slots.length, 'checkpoint slotCount khớp ma trận thật (mọi cỡ)', String(cp.slotCount) + ' vs ' + String(m.slots.length));
  ok(m.slots.every(sx => typeof sx.primaryIntent === 'string' && sx.primaryIntent.trim() !== ''),
    'Mọi slot thật có primaryIntent không rỗng (regression intent)');
  ok(!fs.existsSync(path.join(ROOT, 'factory', 'state', 'writer.lock')), 'Không writer lock bỏ lại trên repo thật');
  // --check xanh trên repo thật lần cuối: bộ test KHÔNG để lại vết trên đĩa
  const r = runNode([path.join(ROOT, 'factory', 'generate.js'), '--check']);
  ok(r.status === 0, 'Repo thật: --check xanh sau toàn bộ bộ test (không vết ghi)', r.stdout + r.stderr);
}

// ---------- Kết quả ----------
console.log('');
console.log('=== KẾT QUẢ KIỂM THỬ HARDENING ===');
console.log(`ĐẠT: ${pass}  |  LỖI: ${fail}`);
if (fail > 0) {
  console.log('CÓ LỖI — xem chi tiết trên.');
  process.exit(1);
}
console.log('TẤT CẢ KIỂM THỨC THỨ HARDENING ĐẠT (PASSED).');
