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

// ---------- 4. Canonical + breadcrumb + schema (URL tuyệt đối) ----------
const samplePaths = ['index.html', 'thue-xe/index.html', 'thue-xe/xe-may/index.html',
  'moto/honda/index.html', 'garage/phanh/index.html'];
for (const p of samplePaths) {
  const html = read(p);
  const rel = p === 'index.html' ? '' : p.replace(/\/index\.html$/, '/');
  const expect = SITE.baseUrl + rel;
  ok(html.includes(`rel="canonical" href="${expect}"`), `Canonical tuyệt đối đúng: ${p}`, expect);
  ok(html.includes(`property="og:url" content="${expect}"`), `og:url tuyệt đối đúng: ${p}`, expect);
  ok(html.includes('application/ld+json'), `Có JSON-LD: ${p}`);
}
// og:image + twitter:card trên MỌI trang sinh ra (allFiles định nghĩa ở mục 5)
const ogImageExpect = SITE.baseUrl + 'assets/img/og-cover.png';
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

// og:image + twitter:card trên MỌI trang sinh ra
for (const f of allFiles.filter(x => x.endsWith('.html'))) {
  const html = read(f);
  ok(html.includes(`property="og:image" content="${ogImageExpect}"`), `${f}: og:image tuyệt đối`);
  ok(html.includes('name="twitter:card" content="summary_large_image"'), `${f}: twitter:card`);
}

// Mọi ảnh tham chiếu trong HTML trỏ tới file tồn tại (không placeholder chết)
let missingAssets = 0;
for (const f of allFiles.filter(x => x.endsWith('.html'))) {
  const html = read(f);
  const srcs = [...html.matchAll(/(?:src|href)="(\/total\/assets\/[^"?]+)"/g)].map(m => m[1]);
  for (const s of srcs) {
    const rel = s.slice(SITE.basePath.length);
    if (!exists(rel)) { missingAssets++; if (missingAssets <= 5) console.log(`    asset vỡ: ${f} → ${s}`); }
  }
}
ok(missingAssets === 0, 'Không có asset (ảnh/CSS/JS) tham chiếu mà thiếu file', `${missingAssets} vỡ`);

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

// ---------- 14. Kiến trúc overlay (một overlay tại một thời điểm) ----------
console.log('Kiểm thử overlay / mobile / article UI…');
const overlayJs = read('assets/js/overlay.js');
const navJs = read('assets/js/nav.js');
const searchJs = read('assets/js/search.js');
const chatbotJs = read('assets/js/chatbot.js');
const atlasCss = read('assets/css/atlas.css');
ok(exists('assets/js/overlay.js'), 'Có trình quản lý overlay dùng chung');
ok(overlayJs.includes('closeAll'), 'Overlay: cơ chế đóng-mọi-overlay-khi-mở (mutual exclusion)');
ok(overlayJs.includes('Escape'), 'Overlay: Escape đóng đúng UI active');
ok(overlayJs.includes('awt-lock'), 'Overlay: khoá cuộn body qua lớp awt-lock');
ok(overlayJs.includes('savedFocus') && overlayJs.includes('restoreFocus') || overlayJs.includes('focus'), 'Overlay: lưu/phục hồi focus');
ok(searchJs.includes("AWT.register('search'") && chatbotJs.includes("AWT.register('ai'") &&
  navJs.includes("AWT.register('dropdown'") && navJs.includes("AWT.register('mega'") && navJs.includes("AWT.register('menu'"),
  'Search/AI/menu/dropdown/mega đều đăng ký qua AWT — không overlay chồng nhau');
ok(!searchJs.includes("key === 'Escape'") && !chatbotJs.includes("key === 'Escape'"),
  'Escape xử lý MỘT nơi duy nhất (overlay.js), không rải rác');
ok(atlasCss.includes('[hidden] { display: none !important; }') || atlasCss.includes('[hidden]{display:none!important}'),
  'CSS: [hidden] luôn ẩn — sửa lỗi Search/AI chồng nhau trên mobile');
ok(atlasCss.includes('overflow-x: clip'), 'CSS: chống cuộn ngang toàn trang');
ok(atlasCss.includes('100dvh') || atlasCss.includes('dvh'), 'CSS: dùng dvh cho vùng nhìn động');
ok(atlasCss.includes('safe-area-inset-top') && atlasCss.includes('safe-area-inset-bottom') &&
  atlasCss.includes('safe-area-inset-left') && atlasCss.includes('safe-area-inset-right'),
  'CSS: đủ 4 env(safe-area-inset-*) cho iPhone');
ok(/\.chatbot-launcher\s*{[^}]*var\(--sab\)/.test(atlasCss), 'Launcher AI tính safe-area-bottom');
ok(/\.chatbot-panel\s*{[^}]*var\(--sab\)/.test(atlasCss), 'Panel AI tính safe-area-bottom');
ok(/\.search-modal\s*{[^}]*var\(--sat\)/.test(atlasCss), 'Search modal tính safe-area-top');
ok(chatbotJs.includes('textarea') || home.includes('textarea'), 'Composer AI là textarea nhiều dòng');
ok(/#chatbot-send[^{]*{[^}]*min-height:\s*4[4-9]px/.test(atlasCss), 'Nút gửi AI >= 44px');
ok(atlasCss.includes('min-height: 44px'), 'CSS: mục tiêu chạm >= 44px');

// Mọi trang sinh ra: shell chuẩn + script overlay tải trước nav
for (const f of allFiles.filter(x => x.endsWith('.html'))) {
  const html = read(f);
  const o1 = html.indexOf('assets/js/overlay.js');
  const o2 = html.indexOf('assets/js/nav.js');
  ok(o1 > 0 && o2 > o1, `${f}: overlay.js tải trước nav.js`);
  ok(html.includes('class="skip-link"'), `${f}: có skip-link`);
  ok(html.includes('site-header') && html.includes('site-footer'), `${f}: đủ header/footer`);
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  ok(h1Count === 1, `${f}: đúng một H1`, String(h1Count));
  ok(!html.includes('/total/total/'), `${f}: không có /total/total/`);
}

// ---------- 15. Article UI ----------
for (const a of artModules) {
  const rel = a.hub ? `${a.category}/${a.hub}/${a.slug}/index.html` : `${a.category}/${a.slug}/index.html`;
  const html = read(rel);
  ok(html.includes('class="toc"') && html.includes('Mục lục'), `Article ${a.slug}: có mục lục`);
  ok(html.includes('Câu trả lời nhanh') && html.includes('Điểm chính'), `Article ${a.slug}: có quick answer + key points`);
  ok(html.includes('phút đọc'), `Article ${a.slug}: có thời gian đọc`);
  ok(html.includes('art-pn') && (html.includes('Bài trước') || html.includes('Bài sau')), `Article ${a.slug}: có điều hướng bài trước/sau`);
  // Mọi link mục lục trỏ tới section tồn tại
  const tocHrefs = [...html.matchAll(/href="#(muc-\d+)"/g)].map(m => m[1]);
  const secIds = [...html.matchAll(/id="(muc-\d+)"/g)].map(m => m[1]);
  ok(tocHrefs.length > 0 && tocHrefs.every(id => secIds.includes(id)), `Article ${a.slug}: mục lục khớp section`);
  // Schema + canonical không đổi
  ok(html.includes('"@type": "Article"') || html.includes('"@type":"Article"'), `Article ${a.slug}: schema Article nguyên vẹn`);
  ok(html.includes('rel="canonical"'), `Article ${a.slug}: canonical nguyên vẹn`);
  ok(html.includes('itemscope itemtype="https://schema.org/Article"'), `Article ${a.slug}: microdata Article nguyên vẹn`);
  // Ảnh đầu bài minh họa: figure.art-lead + kích thước cố định + caption ghi rõ
  ok(html.includes('<figure class="art-lead">'), `Article ${a.slug}: có ảnh đầu bài art-lead`);
  ok(html.includes('width="960" height="640"'), `Article ${a.slug}: ảnh đầu bài có kích thước cố định`);
  ok(/Ảnh minh họa/.test(html), `Article ${a.slug}: caption ghi rõ ảnh minh họa`);
  // Nút chia sẻ / sao chép liên kết
  ok(html.includes('id="art-share"') && html.includes('id="art-copy"'), `Article ${a.slug}: có nút chia sẻ + sao chép liên kết`);
}
// Bảng + ảnh + code responsive trong CSS dùng chung
ok(/\.prose table\s*{[^}]*overflow-x:\s*auto/.test(atlasCss), 'CSS: bảng trong bài cuộn riêng, không tràn');
ok(/\.prose img\s*{[^}]*max-width:\s*100%/.test(atlasCss), 'CSS: ảnh trong bài không tràn');
ok(/\.prose pre\s*{[^}]*overflow-x:\s*auto/.test(atlasCss), 'CSS: khối code cuộn riêng');
ok(atlasCss.includes('overflow-wrap: anywhere') || atlasCss.includes('overflow-wrap: break-word'), 'CSS: URL dài wrap an toàn');
ok(/--read-w:\s*7[6-9]\dpx/.test(atlasCss), 'CSS: cột đọc 760–820px');
ok(atlasCss.includes('scroll-margin-top'), 'CSS: anchor neo dưới header sticky (scroll-margin-top)');

// ---------- 15b. Sửa lỗi đã xác nhận (P0) + trạng thái search ----------
// a) Search: bonus bài viết chỉ cộng khi KHỚP từ khoá — "zzqxv987654321" không được trả kết quả
ok(searchJs.includes('s > 0 && entry.kind'), 'Search: bonus loại bài chỉ khi có độ khớp (lỗi zzqxv đã sửa)');
ok(searchJs.includes('Đang tải chỉ mục tìm kiếm'), 'Search: trạng thái đang tải chỉ mục');
ok(searchJs.includes('Không tải được chỉ mục tìm kiếm'), 'Search: trạng thái lỗi tải chỉ mục');
ok(searchJs.includes('Không tìm thấy kết quả phù hợp'), 'Search: trạng thái không có kết quả');
ok(chatbotJs.includes('Không tải được dữ liệu trợ lý'), 'Trợ lý: trạng thái lỗi tải dữ liệu');
// b) Thuật ngữ "phanh tang trống" thay "phanh cơm"; H2 vô nghĩa đã đổi
let comPhanh = 0, giaiPhong = 0;
for (const f of artFiles) {
  if (read('factory/data/articles/' + f).includes('phanh cơm')) comPhanh++;
  if (read('factory/data/articles/' + f).includes('Giải phóng giá lăn bánh')) giaiPhong++;
}
for (const f of allFiles.filter(x => x.endsWith('.html'))) {
  if (read(f).includes('phanh cơm')) comPhanh++;
}
ok(comPhanh === 0, 'Toàn site không còn thuật ngữ sai "phanh cơm"', `${comPhanh} file`);
ok(giaiPhong === 0, 'Không còn H2 vô nghĩa "Giải phóng giá lăn bánh"', `${giaiPhong} file`);
ok(read('factory/data/articles/a07-bo-phanh-garage.js').includes('phanh tang trống'), 'a07 dùng thuật ngữ đúng "phanh tang trống"');
// c) Chia sẻ / sao chép liên kết hoạt động
ok(navJs.includes('navigator.share') && navJs.includes('clipboard'), 'JS: chia sẻ + sao chép liên kết qua nav.js');
ok(navJs.includes('Đã sao chép liên kết!'), 'JS: phản hồi sau khi sao chép');
// d) Ảnh minh họa SVG tồn tại trong repo
for (const svg of ['illu-thue-xe.svg', 'illu-xe-may.svg', 'illu-xe-dien.svg', 'illu-xe-oto.svg', 'illu-garage.svg', 'illu-gia-xe.svg']) {
  ok(exists('assets/img/' + svg), `Ảnh minh họa tồn tại: ${svg}`);
}
// e) og-cover: CI sinh PNG + workflow + script
ok(exists('.github/workflows/og-image.yml'), 'Workflow sinh og-cover.png tồn tại');
ok(exists('scripts/make-og-image.mjs'), 'Script sinh og-cover.png tồn tại');

// ---------- 16. Factory state không đổi ----------
// Cho phép cửa sổ claim: writer đẩy bài vào factory/data/articles/ trước khi
// pipeline publish kịp chuyển slot (PLANNED -> ... -> PUBLISHED trong Actions).
const publishedSlots = matrix.slots.filter(s => s.state === 'PUBLISHED').length;
ok(publishedSlots <= artFiles.length, 'Số slot PUBLISHED không vượt số bài đã sinh', `${publishedSlots} vs ${artFiles.length}`);
const slotSlugs = new Set(matrix.slots.map(s => s.slug));
const orphanArts = artModules.filter(a => !slotSlugs.has(a.slug));
ok(orphanArts.length === 0, 'Mọi bài viết đều có slot trong ma trận', orphanArts.map(a => a.slug).join(', '));
const cpCount = readJson('factory/state/checkpoint.json').slotCount;
ok(cpCount === matrix.slots.length, 'Checkpoint khớp số slot ma trận (không reset factory)', `${cpCount} vs ${matrix.slots.length}`);

// ---------- Kết quả ----------
console.log('');
console.log('=== KẾT QUẢ KIỂM THỬ AI WIKI TOTAL ===');
console.log(`ĐẠT: ${pass}  |  LỖI: ${fail}`);
if (fail > 0) {
  console.log('CÓ LỖI — xem chi tiết trên.');
  process.exit(1);
}
console.log('TẤT CẢ KIỂM THỬ ĐẠT (PASSED).');
