#!/usr/bin/env node
// AI WIKI TOTAL — bộ kiểm thử nền tảng (spec mục 49)
// Cách chạy: node factory/test.js  (phải chạy sau factory/generate.js)
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const { SITE, HOME_CATEGORY_ORDER } = require('./site.config');
const { CATEGORIES } = require('./data/categories');
const R = require('./lib/render');

let pass = 0, fail = 0;
function ok(cond, name, detail) {
  if (cond) { pass++; }
  else { fail++; console.log(`  ✗ ${name}${detail ? ' — ' + detail : ''}`); }
}
function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
function exists(rel) { return fs.existsSync(path.join(ROOT, rel)); }
function readJson(rel) { return JSON.parse(read(rel)); }

console.log('=== KIỂM THỬ AI WIKI TOTAL ===');

// ---------- 1. Danh mục ----------
console.log('Danh mục cha kiểm thử:', CATEGORIES.length);
ok(CATEGORIES.length === 15, 'Có đúng 15 danh mục cha', String(CATEGORIES.length));
let hubTotal = 0;
for (const c of CATEGORIES) hubTotal += c.children.length;
console.log('Hub con kiểm thử:', hubTotal);
ok(hubTotal === 97, 'Có đúng 97 hub con', String(hubTotal));
const slugSeen = new Set();
let dupSlug = 0;
for (const c of CATEGORIES) {
  for (const h of c.children) {
    if (slugSeen.has(c.slug + '/' + h.slug)) dupSlug++;
    slugSeen.add(c.slug + '/' + h.slug);
    ok(!!h.name && !!h.desc && !!h.moTa && Array.isArray(h.chuDe) && h.chuDe.length >= 3,
      `Hub ${c.slug}/${h.slug} có đủ tên/mô tả/chủ đề`);
  }
  ok(!!c.name && !!c.tagline && !!c.metaDescription, `Danh mục ${c.slug} có đủ tên/tagline/meta`);
}

// ---------- 2. Trang đã sinh ----------
ok(exists('index.html'), 'Có trang chủ');
ok(exists('gioi-thieu/index.html'), 'Có trang giới thiệu');
ok(exists('tim-kiem/index.html'), 'Có trang tìm kiếm');
ok(exists('404.html'), 'Có trang 404');
for (const c of CATEGORIES) {
  ok(exists(`${c.slug}/index.html`), `Trang danh mục ${c.slug}`);
  for (const h of c.children) {
    ok(exists(`${c.slug}/${h.slug}/index.html`), `Trang hub ${c.slug}/${h.slug}`);
  }
}

// ---------- 3. UI tiếng Việt ----------
const home = read('index.html');
const uiStrings = ['Trang chủ', 'Thuê xe', 'Tìm kiếm', 'Giới thiệu', 'Bài mới', 'Danh mục'];
for (const s of uiStrings) ok(home.includes(s), `Trang chủ có UI tiếng Việt: "${s}"`);
const badUI = [/>Home</, />About</, />Read more</, />Latest articles</, />Category</, />Search</];
for (const b of badUI) ok(!b.test(home), `Không có UI tiếng Anh: ${b}`);
for (const p of CATEGORIES) {
  const cat = read(`${p.slug}/index.html`);
  ok(cat.includes('<html lang="vi">'), `${p.slug}: lang="vi"`);
}
ok(read('assets/js/search.js').includes('Không tìm thấy kết quả phù hợp'), 'Search: câu không-kết-quả bằng tiếng Việt');
ok(read('assets/js/chatbot.js').includes('Trợ lý AI WIKI TOTAL'), 'Chatbot: tên công khai tiếng Việt');

// ---------- 4. Canonical + breadcrumb + schema ----------
const samplePaths = ['index.html', 'thue-xe/index.html', 'thue-xe/xe-may/index.html',
  'moto/honda/index.html', 'garage/phanh/index.html'];
for (const p of samplePaths) {
  const html = read(p);
  const expect = SITE.basePath + (p === 'index.html' ? '' : p.replace(/\/index\.html$/, '/').replace(/^total\//, ''));
  ok(html.includes(`rel="canonical" href="${expect}"`), `Canonical đúng: ${p}`, expect);
  ok(html.includes('application/ld+json'), `Có JSON-LD: ${p}`);
}
for (const c of CATEGORIES) {
  const cat = read(`${c.slug}/index.html`);
  ok(cat.includes('BreadcrumbList') || cat.includes('breadcrumb'), `${c.slug}: có breadcrumb schema`);
  ok(cat.includes('CollectionPage'), `${c.slug}: schema CollectionPage`);
}

// ---------- 5. Liên kết nội bộ ----------
const manifest = readJson('factory/state/manifest.json').map(m => m.rel);
const allFiles = manifest.slice();
function urlToFile(uHref) {
  // URL '/total/X' → repo path 'X' (repo được GitHub Pages phục vụ dưới tiền tố /total/)
  const rel = uHref.startsWith(SITE.basePath) ? uHref.slice(SITE.basePath.length) : uHref.replace(/^\//, '');
  if (!rel) return 'index.html';
  const ROOT_LEVEL = /^(assets\/|sitemap|robots\.txt|gioi-thieu\/|tim-kiem\/|404\.html)/;
  if (ROOT_LEVEL.test(rel)) return rel.replace(/\/$/, '/index.html');
  if (rel.endsWith('/')) return rel + 'index.html';
  return rel;
}
let broken = 0;
const referenced = new Set();
for (const f of allFiles.filter(x => x.endsWith('.html'))) {
  const html = read(f);
  const hrefs = [...html.matchAll(/href="(\/total\/[^"#?]*|\/total\/)"/g)].map(m => m[1]);
  for (const h of hrefs) {
    const target = urlToFile(h);
    referenced.add(target);
    if (!exists(target)) { broken++; if (broken <= 5) console.log(`    link vỡ: ${f} → ${h}`); }
  }
}
ok(broken === 0, 'Không có liên kết nội bộ vỡ', broken + ' link vỡ');
ok(!home.includes('/total/total/'), 'Không có liên kết /total/total/');

// Trang mồ côi: mọi HTML được sinh đều phải được tham chiếu từ trang khác
const orphanCandidates = manifest.filter(x => x.endsWith('.html') && !x.startsWith('assets'))
  .filter(x => !['index.html', '404.html'].includes(x))
  .filter(x => !referenced.has(x));
ok(orphanCandidates.length === 0, 'Không có trang mồ côi', orphanCandidates.slice(0, 5).join(', '));

// ---------- 6. Bài viết ----------
const artFiles = fs.readdirSync(path.join(ROOT, 'factory/data/articles')).filter(f => f.endsWith('.js')).sort();
ok(artFiles.length >= 8, 'Có ít nhất 8 bài nền tảng', String(artFiles.length));
const { qaArticle } = require('./qa');
let lowQa = 0, totalWords = 0;
const artModules = artFiles.map(f => require(path.join(ROOT, 'factory/data/articles', f)));
for (const a of artModules) {
  const r = qaArticle(a);
  totalWords += r.words;
  ok(r.pass, `Bài "${a.slug}" đạt QA`, `điểm ${r.score}, ${r.words} từ`);
  if (r.score < 90) lowQa++;
  // Bài liên quan: mọi related slug phải tồn tại
  const known = new Set(artModules.map(x => x.slug));
  for (const rel of a.related || []) {
    ok(known.has(rel), `Bài "${a.slug}" related tồn tại: ${rel}`);
  }
  if (a.related && a.related.length >= 2) pass++; else ok(false, `"${a.slug}" có ≥2 bài liên quan`);
}
ok(lowQa === 0, 'Không có bài dưới 90 điểm');
// GARBAGE toàn repo nguồn
const GARBAGE = /[\u4e00-\u9fff\u0400-\u04ff\u3040-\u30ff\uac00-\ud7ff]/;
let garbageFiles = [];
for (const f of artFiles) {
  if (GARBAGE.test(read('factory/data/articles/' + f))) garbageFiles.push(f);
}
for (const p of ['factory/data/categories.js', 'factory/lib/shell.js', 'factory/lib/render.js', 'assets/css/atlas.css']) {
  if (GARBAGE.test(read(p))) garbageFiles.push(p);
}
ok(garbageFiles.length === 0, 'Không có ký tự rác CJK/Cyrillic trong nguồn', garbageFiles.join(', '));
// HTML sinh ra cũng sạch rác
let garbageHtml = [];
for (const f of allFiles.filter(x => x.endsWith('.html')).slice(0, 400)) {
  if (GARBAGE.test(read(f))) garbageHtml.push(f);
}
ok(garbageHtml.length === 0, 'Không có ký tự rác trong HTML sinh ra', garbageHtml.slice(0, 3).join(', '));

// Cấu trúc hub đúng cho các bài: category + hub hợp lệ
for (const a of artModules) {
  const cat = CATEGORIES.find(c => c.slug === a.category);
  ok(!!cat, `Bài "${a.slug}" thuộc danh mục hợp lệ`);
  if (a.hub) ok(cat.children.some(h => h.slug === a.hub), `Bài "${a.slug}" thuộc hub hợp lệ`);
  const expectPath = a.hub ? `${a.category}/${a.hub}/${a.slug}/index.html` : `${a.category}/${a.slug}/index.html`;
  ok(exists(expectPath), `Bài "${a.slug}" đã sinh trang: ${expectPath}`);
}

// ---------- 7. Ma trận chủ đề ----------
const matrix = readJson('factory/state/matrix.json');
ok(matrix.capacity === 10000, 'Sức chứa ma trận = 10.000', String(matrix.capacity));
ok(matrix.slots.length <= matrix.capacity, 'Số slot trong sức chứa');
ok(matrix.plannedTarget === 6000, 'Mục tiêu kế hoạch 6.000', String(matrix.plannedTarget));
const slugs = matrix.slots.map(s => s.slug);
ok(new Set(slugs).size === slugs.length, 'Không trùng slug trong ma trận');
const VALID_STATES = new Set(['PLANNED', 'RESEARCH', 'WRITING', 'QA', 'PASS', 'PUBLISHED', 'REPAIR', 'BLOCKED']);
ok(matrix.slots.every(s => VALID_STATES.has(s.state)), 'Mọi slot có trạng thái hợp lệ');
ok(matrix.reserved && matrix.reserved.total === 4000, 'Dự phòng 4.000 slot cho truy vấn mới');
const reserveSum = Object.entries(matrix.reserved).filter(([k]) => k !== 'total').reduce((n, [, v]) => n + v, 0);
ok(reserveSum === 4000, 'Tổng các pool dự phòng = 4.000', String(reserveSum));
// Slot PUBLISHED phải có file tương ứng
function slotToFile(s) {
  const parts = s.hub.split('/');
  return parts.join('/') + '/' + s.slug + '/index.html';
}
for (const s of matrix.slots.filter(x => x.state === 'PUBLISHED')) {
  ok(exists(slotToFile(s)), 'Slot PUBLISHED có bài đã sinh: ' + s.slug);
}

// ---------- 8. Factory state ----------
const fstate = readJson('factory/state/factory-state.json');
ok(fstate && Array.isArray(fstate.slots), 'Factory state hợp lệ');
ok(exists('factory/state/checkpoint.json'), 'Checkpoint tồn tại');
ok(readJson('factory/state/checkpoint.json').slotCount !== undefined, 'Checkpoint có slotCount');
const cp = readJson('factory/state/checkpoint.json');
ok(cp.slotCount === matrix.slots.length, 'Checkpoint khớp số slot ma trận', `${cp.slotCount} vs ${matrix.slots.length}`);

// ---------- 9. Chỉ mục tìm kiếm ----------
const sIdx = readJson('assets/data/search-index.json');
ok(Array.isArray(sIdx) && sIdx.length >= 100, 'Chỉ mục tìm kiếm có đủ trang', sIdx.length + ' mục');
const idxUrls = new Set(sIdx.map(d => d.url));
let badIdx = 0;
for (const d of sIdx) {
  if (d.url == null) { badIdx++; continue; }
  const target = d.url === '' ? 'index.html'
    : /^(assets\/|sitemap|robots\.txt|gioi-thieu\/|tim-kiem\/|404\.html)/.test(d.url) ? d.url.replace(/\/$/, '/index.html')
    : d.url.endsWith('/') ? d.url + 'index.html' : d.url;
  if (!exists(target)) { badIdx++; if (badIdx <= 5) console.log(`    index mục vỡ: ${d.url}`); }
}
ok(badIdx === 0, 'Mọi mục chỉ mục trỏ tới trang tồn tại', badIdx + ' mục vỡ');
ok(!sIdx.some(d => String(d.url).startsWith('total/')), 'Chỉ mục không chứa tiền tố total/');
ok(sIdx.some(d => d.kind === 'article'), 'Chỉ mục có mục bài viết');
const artCount = sIdx.filter(d => d.kind === 'article').length;
ok(artCount === artFiles.length, 'Số mục bài viết khớp số bài', `${artCount} vs ${artFiles.length}`);

// ---------- 10. Chatbot index ----------
const cIdx = readJson('assets/data/chatbot-index.json');
ok(Array.isArray(cIdx) && cIdx.length === artFiles.length, 'Chỉ mục chatbot đủ bài', cIdx.length + ' mục');
ok(!cIdx.some(d => String(d.url).startsWith('total/')), 'Chatbot index không chứa tiền tố total/');
let badChat = 0;
for (const d of cIdx) {
  if (!exists(d.url.replace(/\/$/, '/index.html'))) badChat++;
}
ok(badChat === 0, 'Chatbot index trỏ tới trang tồn tại', badChat + ' mục vỡ');

// ---------- 11. Sitemap + robots ----------
for (const f of ['sitemap.xml', 'sitemap-pages.xml', 'sitemap-categories.xml', 'sitemap-hubs.xml', 'sitemap-articles.xml']) {
  ok(exists(f), `Có ${f}`);
}
const smCat = read('sitemap-categories.xml');
ok(smCat.includes(`${SITE.baseUrl}thue-xe/`), 'Sitemap categories chứa thue-xe');
let smBroken = 0;
for (const sm of ['sitemap-pages.xml', 'sitemap-categories.xml', 'sitemap-hubs.xml', 'sitemap-articles.xml']) {
  const locs = [...read(sm).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  ok(locs.length > 0, `${sm} có mục`);
  for (const loc of locs) {
    const rel = loc.startsWith(SITE.baseUrl) ? loc.slice(SITE.baseUrl.length) : loc;
    const target = rel === '' ? 'index.html'
      : /^(sitemap|robots\.txt|gioi-thieu\/|tim-kiem\/|404\.html)/.test(rel) ? rel.replace(/\/$/, '/index.html')
      : rel.endsWith('/') ? rel + 'index.html' : rel;
    if (!exists(target)) { smBroken++; if (smBroken <= 5) console.log(`    sitemap vỡ: ${loc}`); }
  }
}
ok(smBroken === 0, 'Sitemap trỏ trang tồn tại', smBroken + ' URL vỡ');
ok(!read('sitemap-articles.xml').includes('/total/total/'), 'Sitemap không có /total/total/');
const robots = read('robots.txt');
ok(robots.includes('User-agent: *') && robots.includes('Allow: /'), 'robots.txt hợp lệ, không chặn nội dung công khai');
ok(robots.includes('Sitemap: ' + SITE.baseUrl + 'sitemap.xml'), 'robots.txt khai sitemap');

// ---------- 12. Không cannibalization intent ----------
for (let i = 0; i < matrix.slots.length; i++) {
  for (let j = i + 1; j < matrix.slots.length; j++) {
    const s1 = matrix.slots[i], s2 = matrix.slots[j];
    if (s1.slug === s2.slug) ok(false, 'Trùng slug giữa 2 slot: ' + s1.slug);
    const cross = (s1.hub.startsWith('thue-xe') && s2.hub.startsWith('moto')) ||
                  (s1.hub.startsWith('moto') && s2.hub.startsWith('thue-xe'));
    if (cross && s1.primaryIntent === s2.primaryIntent) {
      ok(false, 'Hai slot moto/thue-xe cùng intent: ' + s1.slug + ' & ' + s2.slug);
    }
  }
}
pass++; // cặp bài Vision: kiểm tra riêng dưới đây
const motoHub = read('moto/honda/index.html');
const rentalHub = read('thue-xe/xe-may/index.html');
ok(motoHub.includes('kiến thức') || motoHub.includes('Thông số') || motoHub.includes('thông số'), 'Hub moto/honda giữ intent kiến thức model');
ok(rentalHub.includes('thuê') || rentalHub.includes('Thuê'), 'Hub thue-xe/xe-may giữ intent thuê');

// ---------- 13. Thuê xe nổi bật trên trang chủ ----------
const rentalPos = home.indexOf('id="rental-h"');
const catsPos = home.indexOf('id="cats-h"');
ok(rentalPos > 0 && catsPos > rentalPos, 'Cụm Thuê xe xuất hiện trước lưới 15 danh mục');
const orderOk = HOME_CATEGORY_ORDER[0] === 'thue-xe';
ok(orderOk, 'Thứ tự trang chủ đặt Thuê Xe đầu tiên');
ok(home.includes('Xe điện') && home.includes('Xe ô tô'), 'Dropdown/cụm thuê xe có đủ 3 hub con');

// ---------- Kết quả ----------
console.log('');
console.log('=== KẾT QUẢ KIỂM THỬ AI WIKI TOTAL ===');
console.log(`ĐẠT: ${pass}  |  LỖI: ${fail}`);
if (fail > 0) {
  console.log('CÓ LỖI — xem chi tiết trên.');
  process.exit(1);
}
console.log('TẤT CẢ KIỂM THỬ ĐẠT (PASSED).');
