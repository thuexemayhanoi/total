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
// Capacity là cấu hình canonical trong matrix.json — KHÔNG hardcode con số
// ở đây: 10.000 là capacity đang cấu hình, mở rộng được qua expand-capacity
// mà bộ test vẫn xanh.
const matrix = readJson('factory/state/matrix.json');
ok(Number.isInteger(matrix.capacity) && matrix.capacity > 0, 'Capacity là số nguyên dương cấu hình được', String(matrix.capacity));
ok(matrix.slots.length <= matrix.capacity, 'Số slot trong sức chứa', `${matrix.slots.length} vs ${matrix.capacity}`);
ok(Number.isInteger(matrix.plannedTarget) && matrix.plannedTarget > 0, 'Mục tiêu kế hoạch là số nguyên dương', String(matrix.plannedTarget));
ok(matrix.plannedTarget <= matrix.capacity, 'Mục tiêu kế hoạch <= capacity', `${matrix.plannedTarget} vs ${matrix.capacity}`);
const slugs = matrix.slots.map(s => s.slug);
ok(new Set(slugs).size === slugs.length, 'Không trùng slug trong ma trận');
const VALID_STATES = new Set(['PLANNED', 'RESEARCH', 'WRITING', 'QA', 'PASS', 'PUBLISHED', 'REPAIR', 'BLOCKED']);
ok(matrix.slots.every(s => VALID_STATES.has(s.state)), 'Mọi slot có trạng thái hợp lệ');
ok(matrix.reserved && Number.isInteger(matrix.reserved.total) && matrix.reserved.total >= 0, 'Tổng dự phòng là số nguyên >= 0', String(matrix.reserved && matrix.reserved.total));
const reserveSum = Object.entries(matrix.reserved).filter(([k]) => k !== 'total').reduce((n, [, v]) => n + v, 0);
ok(reserveSum === matrix.reserved.total, 'Tổng các pool dự phòng khớp reserved.total', `${reserveSum} vs ${matrix.reserved.total}`);
ok(matrix.plannedTarget + matrix.reserved.total <= matrix.capacity, 'plannedTarget + reserved <= capacity (phần dư là unallocated)', `${matrix.plannedTarget} + ${matrix.reserved.total} vs ${matrix.capacity}`);
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
const renderJs = read('factory/lib/render.js');
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
  // Text-only editorial: bài KHÔNG còn ảnh minh họa do factory sinh
  ok(!html.includes('<figure class="art-lead">'), `Article ${a.slug}: không còn ảnh đầu bài art-lead`);
  ok(!/<img\s/i.test(html), `Article ${a.slug}: không có thẻ img nào (không illustration)`);
  ok(!/Ảnh minh họa/.test(html), `Article ${a.slug}: không còn caption ảnh minh họa`);
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
// d) Asset hệ thống giữ nguyên; SVG minh họa legacy không còn được tham chiếu
ok(exists('assets/img/og-cover.png'), 'OG cover (social metadata) vẫn tồn tại');
for (const svg of ['illu-thue-xe.svg', 'illu-xe-may.svg', 'illu-xe-dien.svg', 'illu-xe-oto.svg', 'illu-garage.svg', 'illu-gia-xe.svg']) {
  ok(!renderJs.includes(svg), `Renderer không còn tham chiếu SVG minh họa: ${svg}`);
}
// e) og-cover: CI sinh PNG + workflow + script
ok(exists('.github/workflows/og-image.yml'), 'Workflow sinh og-cover.png tồn tại');
ok(exists('scripts/make-og-image.mjs'), 'Script sinh og-cover.png tồn tại');

// ---------- 15c. UI/UX audit cuối: gộp khối "Bài mới nhất", search primary, contrast, tap-target ----------
console.log('Kiểm thử UI/UX audit cuối (homepage gộp, contrast, tap-target)…');
{
  // a) Homepage: MỘT khối "Bài mới nhất" duy nhất — hết trùng chức năng với "Bài mới"
  const heroPos = home.indexOf('class="hero"');
  const searchPos = home.indexOf('class="hero-search"');
  const latestPos = home.indexOf('id="latest-h"');
  const featPos = home.indexOf('class="feat-card"');
  const gridPos = home.indexOf('class="latest-grid"');
  const rentalPos2 = home.indexOf('id="rental-h"');
  const catsPos2 = home.indexOf('id="cats-h"');
  ok(heroPos >= 0 && searchPos > heroPos, 'Homepage: Search là CTA chính trong hero, đầu trang');
  ok(home.includes('Bài mới nhất'), 'Homepage: khối gộp có tiêu đề "Bài mới nhất"');
  ok(!/>Bài mới<\/h2>/.test(home), 'Homepage: hết tiêu đề "Bài mới" tách riêng (trùng chức năng đã gộp)');
  ok(latestPos > heroPos && featPos > latestPos && gridPos > featPos,
    'Homepage: featured + lưới bài nằm trong CÙNG khối latest (một mục mới nhất duy nhất)');
  ok(rentalPos2 > latestPos && catsPos2 > rentalPos2,
    'Homepage: thứ tự Search → Bài mới nhất → Thuê xe → 15 danh mục (đọc trước khám phá)');
  ok(home.includes('hero-hint') && home.includes('Ctrl'), 'Homepage: gợi ý phím tắt tìm kiếm (Ctrl/⌘+K)');

  // b) Search: điều hướng bàn phím + trạng thái không-kết quả nhắc lại từ khoá
  ok(searchJs.includes('ArrowDown'), 'Search: mũi tên xuống đưa focus vào kết quả đầu (keyboard)');
  ok(searchJs.includes("results.querySelector('.sr-item')"), 'Search: focus first-result dùng chung modal + trang');
  ok(/Không tìm thấy kết quả phù hợp' \+ \(q \?/.test(searchJs), 'Search: no-result nhắc lại từ khoá người dùng nhập');
  ok(searchJs.includes('Gợi ý:'), 'Search: no-result kèm gợi ý tiếp theo');

  // c) Contrast WCAG AA: token chữ ≥ 4.5:1 — đo trực tiếp từ atlas.css (chống hồi quy token)
  function hexLum(hex) {
    const c = hex.replace('#', '');
    const f = (i) => { let v = parseInt(c.substr(i, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(0) + 0.7152 * f(2) + 0.0722 * f(4);
  }
  function contrast(fg, bg) {
    const l1 = hexLum(fg), l2 = hexLum(bg);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  function cssVar(name) {
    const m = atlasCss.match(new RegExp('--' + name + ':\\s*(#[0-9A-Fa-f]{6})'));
    return m ? m[1] : null;
  }
  const bgc = cssVar('bg'), inkSoft = cssVar('ink-soft'), muted = cssVar('muted'), cobalt = cssVar('cobalt');
  ok(contrast(inkSoft, bgc) >= 4.5, 'Contrast: --ink-soft trên nền ≥ 4.5:1', contrast(inkSoft, bgc).toFixed(2));
  ok(contrast(muted, bgc) >= 4.5, 'Contrast: --muted trên nền trắng ngà ≥ 4.5:1', contrast(muted, bgc).toFixed(2));
  ok(contrast(muted, '#FFFFFF') >= 4.5, 'Contrast: --muted trên trắng card ≥ 4.5:1', contrast(muted, '#FFFFFF').toFixed(2));
  ok(contrast(cobalt, bgc) >= 4.5, 'Contrast: --cobalt (link/CTA) ≥ 4.5:1', contrast(cobalt, bgc).toFixed(2));
  const accTokens = [...atlasCss.matchAll(/\[data-acc="([a-z]+)"\][^{]*\{\s*--acc:\s*(#[0-9A-Fa-f]{6})/g)];
  ok(accTokens.length >= 13, 'Contrast: đủ 13 token nhấn danh mục để đo', String(accTokens.length));
  for (const [, name, hex] of accTokens) {
    ok(contrast(hex, '#FFFFFF') >= 4.5, `Contrast: nhấn "${name}" dùng làm chữ trên card ≥ 4.5:1`, contrast(hex, '#FFFFFF').toFixed(2));
  }
  ok(contrast('#C9D2E3', '#101B31') >= 4.5, 'Contrast: link footer trên navy ≥ 4.5:1', contrast('#C9D2E3', '#101B31').toFixed(2));
  ok(contrast('#8B99B8', '#101B31') >= 4.5, 'Contrast: chữ phụ footer trên navy ≥ 4.5:1', contrast('#8B99B8', '#101B31').toFixed(2));

  // d) Tap-target + CSS hardening cho homepage/footer sau gộp
  ok(atlasCss.includes('.latest .featured'), 'CSS: featured gộp vào khối latest không còn viền/padding đôi');
  ok(atlasCss.includes('.hero-search:focus-within'), 'CSS: hero search có vòng focus-within rõ ràng');
  ok(/\.toc a\s*{[^}]*min-height:\s*44px/.test(atlasCss), 'Tap-target: link mục lục ≥ 44px');
  ok(/@media \(max-width: 767px\)[\s\S]*\.footer-cats a, \.footer-meta a \{[^}]*min-height:\s*44px/.test(atlasCss),
    'Tap-target: link footer ≥ 44px trên mobile');
  const mq479 = (atlasCss.match(/@media \(max-width: 479px\) \{[\s\S]*?\n\}/) || [''])[0];
  ok(!/\.footer-inner\s*\{[^}]*grid-template-columns:\s*1fr;/.test(mq479),
    'Footer: điện thoại nhỏ giữ 2 cột gọn thay vì dốc 1 cột');
}

// ---------- 15e. TEXT-ONLY editorial: regression chống ảnh minh họa quay lại ----------
console.log('Kiểm thử text-only editorial (không illustration trong body/card)…');
{
  // a) Không trang sinh nào còn selector/container media cũ
  let mediaRefs = [];
  for (const f of allFiles.filter(x => x.endsWith('.html'))) {
    const html = read(f);
    if (html.includes('feat-media') || html.includes('post-thumb') || html.includes('row-thumb') || html.includes('art-lead')) mediaRefs.push(f);
  }
  ok(mediaRefs.length === 0, 'Trang sinh không còn selector media cũ (feat-media/post-thumb/row-thumb/art-lead)', mediaRefs.slice(0, 5).join(', '));

  // b) Không img minh họa do factory sinh trong bất kỳ trang nào
  let illuImgs = [];
  for (const f of allFiles.filter(x => x.endsWith('.html'))) {
    if (read(f).includes('assets/img/illu-')) illuImgs.push(f);
  }
  ok(illuImgs.length === 0, 'Trang sinh không tham chiếu img minh họa (illu-*.svg)', illuImgs.slice(0, 5).join(', '));

  // c) Không figure rỗng
  let emptyFigures = [];
  for (const f of allFiles.filter(x => x.endsWith('.html'))) {
    if (/<figure[^>]*>\s*<\/figure>/.test(read(f))) emptyFigures.push(f);
  }
  ok(emptyFigures.length === 0, 'Trang sinh không có figure rỗng', emptyFigures.slice(0, 5).join(', '));

  // d) CSS dọn sạch: hết selector + property media-card cũ, không để dead CSS
  ok(!atlasCss.includes('.feat-media') && !atlasCss.includes('.post-thumb') &&
     !atlasCss.includes('.row-thumb') && !atlasCss.includes('.art-lead'),
    'CSS: không còn selector media cũ (feat-media/post-thumb/row-thumb/art-lead)');
  ok(!atlasCss.includes('object-fit') && !atlasCss.includes('aspect-ratio'),
    'CSS: hết object-fit/aspect-ratio của ảnh card (không còn ảnh card)');
  ok(!/img[^{}]*\{[^}]*height:\s*100%/.test(atlasCss), 'CSS: không còn img height:100% (media card cũ)');

  // e) Renderer không còn helper illustration
  ok(!renderJs.includes('illuImg') && !renderJs.includes('illuFor') && !renderJs.includes('const ILLU'),
    'Renderer: xóa sạch helper illustration (ILLU/illuFor/illuImg)');

  // f) Card text-only có cấu trúc mới: featured 2 vùng chữ, post-card có CTA, post-row có nhãn + mũi tên
  ok(home.includes('feat-side') && home.includes('feat-label') && home.includes('feat-cat'),
    'Featured text-only: có vùng nhãn/chuyên mục riêng (feat-side/feat-label/feat-cat)');
  ok(home.includes('post-cta'), 'Post card text-only: có CTA "Đọc tiếp" (post-cta)');
  const rowHtml = allFiles.filter(x => x.endsWith('.html')).map(f => read(f)).find(h => h.includes('class="post-row"')) || '';
  ok(rowHtml.includes('row-cat') && rowHtml.includes('row-go'), 'Post row text-only: nhãn chuyên mục (row-cat) + mũi tên (row-go)');

  // g) Logo + icon hệ thống vẫn tồn tại (không bị đụng khi bỏ illustration)
  ok(home.includes('class="logo"') && home.includes('logo-mark'), 'Logo AI WIKI TOTAL vẫn tồn tại trong header');
  ok(home.includes('id="search-open"') && home.includes('id="nav-toggle"') && home.includes('id="chatbot-launcher"'),
    'Icon hệ thống (search/menu/chatbot) vẫn tồn tại');

  // h) Search/chatbot text-only (không thumbnail trong kết quả)
  ok(!searchJs.includes('<img') && !chatbotJs.includes('<img'), 'Search/Chatbot: kết quả text-only, không thumbnail');

  // i) OG image metadata vẫn hợp lệ (social share ngoài body)
  ok(home.includes(`property="og:image" content="${SITE.baseUrl}assets/img/og-cover.png"`), 'OG image metadata vẫn trỏ og-cover.png');
}

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

// ---------- 17. Capacity cấu hình + ID generator (mở rộng được, không hard limit) ----------
const factoryMod = require('./factory');
const factorySrc = read('factory/factory.js');
// Chống regression hard-limit: business logic không được chứa literal 10.000
// hay gán capacity từ hằng số — capacity phải đi qua config (matrix.json).
ok(!/\b10[.,_]?000\b/.test(factorySrc), 'Chống hardcode: factory.js không chứa literal 10.000 trần (capacity qua config — S10000 là ID hợp lệ, không bị cờ)');
ok(!/\.capacity\s*=\s*[0-9]/.test(factorySrc), 'Chống hardcode: capacity chỉ gán từ biến/config, không từ hằng số');
// Invariant capacity (mục 15): mọi ràng buộc đọc từ canonical, không cố định.
ok(Number.isInteger(matrix.capacity) && matrix.capacity >= matrix.slots.length, 'Invariant: capacity >= số slot đã dùng', `${matrix.slots.length} vs ${matrix.capacity}`);
ok(matrix.plannedTarget <= matrix.capacity, 'Invariant: plannedTarget <= capacity');
ok(matrix.plannedTarget + matrix.reserved.total <= matrix.capacity, 'Invariant: plannedTarget + reserved <= capacity');
const reservedPools = Object.entries(matrix.reserved).filter(([k]) => k !== 'total');
ok(reservedPools.length >= 7, 'Các pool dự phòng hiện tại còn nguyên (>= 7 pool)', String(reservedPools.length));
// ID: duy nhất, đúng dạng, monotonic, không tái sử dụng.
const slotIds = matrix.slots.map(s => s.id);
ok(new Set(slotIds).size === slotIds.length, 'ID slot duy nhất');
ok(slotIds.every(id => /^S\d{5,}$/.test(id)), 'ID slot đúng dạng S + tối thiểu 5 chữ số');
let idMono = true;
let prevNum = 0;
for (const id of slotIds) {
  const num = factoryMod.parseSlotId(id);
  if (num === null || num <= prevNum) idMono = false;
  if (num !== null) prevNum = num;
}
ok(idMono, 'ID slot monotonic tăng dần (không recycle ID)');
const maxNum2 = Math.max(...matrix.slots.map(s => factoryMod.parseSlotId(s.id)));
ok(factoryMod.parseSlotId(factoryMod.nextSlotId(matrix)) === maxNum2 + 1, 'ID kế tiếp > ID lớn nhất đang có', `${factoryMod.nextSlotId(matrix)} > S${maxNum2}`);
// ID generator hoạt động qua các mốc 9999 -> 10000 -> 10001 và 99999 -> 100000.
ok(factoryMod.formatSlotId(9999) === 'S09999', 'ID generator: 9999 -> S09999', factoryMod.formatSlotId(9999));
ok(factoryMod.formatSlotId(10000) === 'S10000', 'ID generator: 10000 -> S10000 (vượt 10K, không đổi ID cũ)', factoryMod.formatSlotId(10000));
ok(factoryMod.formatSlotId(10001) === 'S10001', 'ID generator: 10001 -> S10001', factoryMod.formatSlotId(10001));
ok(factoryMod.formatSlotId(99999) === 'S99999', 'ID generator: 99999 -> S99999', factoryMod.formatSlotId(99999));
ok(factoryMod.formatSlotId(100000) === 'S100000', 'ID generator: 100000 -> S100000 (6 chữ số, không truncate)', factoryMod.formatSlotId(100000));
ok(factoryMod.formatSlotId(100001) === 'S100001', 'ID generator: 100001 -> S100001', factoryMod.formatSlotId(100001));
// Fixture mở rộng capacity +10.000 trên bản sao trong bộ nhớ (KHÔNG đụng file production).
// Mọi giá trị tính TƯƠNG ĐỐI theo ma trận hiện tại — test hợp lệ ở MỌI capacity,
// kể cả sau khi expand thật (test không tự-veto migration của chính nó).
const fxMatrix = JSON.parse(JSON.stringify(matrix));
const fxCapBefore = fxMatrix.capacity;
const fxTarget = fxCapBefore + 10000; // mở rộng thêm 10.000
const fxUnchanged = JSON.stringify({ slots: fxMatrix.slots, plannedTarget: fxMatrix.plannedTarget, reserved: fxMatrix.reserved });
ok(factoryMod.expansionError(fxMatrix, fxTarget) === null, 'Fixture: expand capacity -> capacity+10.000 hợp lệ');
factoryMod.applyExpansion(fxMatrix, fxTarget);
ok(fxMatrix.capacity === fxTarget, 'Fixture: capacity = mức mới sau migration', String(fxMatrix.capacity));
ok(JSON.stringify({ slots: fxMatrix.slots, plannedTarget: fxMatrix.plannedTarget, reserved: fxMatrix.reserved }) === fxUnchanged,
  'Fixture: slots/ID/PUBLISHED/plannedTarget/reserved giữ nguyên sau mở rộng (chỉ capacity đổi)');
ok(fxMatrix.slots.filter(s => s.state === 'PUBLISHED').length === matrix.slots.filter(s => s.state === 'PUBLISHED').length,
  'Fixture: số slot PUBLISHED không đổi sau mở rộng');
// Các trường hợp từ chối (mục 5) — giá trị tương đối, không phụ thuộc capacity đang cấu hình.
ok(factoryMod.expansionError(matrix, matrix.capacity) !== null, 'Fixture: expand cùng capacity bị TỪ CHỐI');
ok(factoryMod.expansionError(matrix, matrix.capacity - 1) !== null, 'Fixture: shrink capacity bị TỪ CHỐI');
ok(factoryMod.expansionError(matrix, 0) !== null, 'Fixture: 0 bị TỪ CHỐI');
ok(factoryMod.expansionError(matrix, -5) !== null, 'Fixture: số âm bị TỪ CHỐI');
ok(factoryMod.expansionError(matrix, 'abc') !== null, 'Fixture: không phải số nguyên bị TỪ CHỐI');
ok(factoryMod.expansionError(matrix, matrix.capacity + 0.5) !== null, 'Fixture: số thập phân bị TỪ CHỐI');
ok(factoryMod.expansionError(matrix, matrix.plannedTarget + matrix.reserved.total - 1) !== null, 'Fixture: NEW_CAPACITY < plannedTarget + reserved bị TỪ CHỐI');
ok(factoryMod.plannedTargetError(matrix, matrix.capacity + 10000) !== null, 'Fixture: plannedTarget vượt capacity bị TỪ CHỐI');
ok(factoryMod.plannedTargetError(matrix, matrix.slots.length - 1) !== null, 'Fixture: plannedTarget dưới số slot đã có bị TỪ CHỐI');
ok(factoryMod.plannedTargetError(matrix, matrix.capacity - matrix.reserved.total + 1) !== null, 'Fixture: plannedTarget + reserved vượt capacity bị TỪ CHỐI (không tự phá pool dự phòng)');
ok(factoryMod.plannedTargetError(matrix, matrix.plannedTarget) === null, 'Fixture: giữ nguyên plannedTarget hiện tại là hợp lệ');
const fxExpanded = JSON.parse(JSON.stringify(matrix));
factoryMod.applyExpansion(fxExpanded, matrix.capacity + 10000);
ok(factoryMod.plannedTargetError(fxExpanded, matrix.plannedTarget + 2000) === null, 'Fixture: set-planned-target (plannedTarget+2.000) hợp lệ SAU khi đã expand (phần dư unallocated đảm bảo chỗ cho target)');

// ---------- 18. UI/UX responsive: nav hierarchy, footer, breadcrumb ----------
console.log('Kiểm thử UI nav/footer/breadcrumb…');
const PRIMARY_NAV = require('./site.config').PRIMARY_NAV;
// 18.1 Thứ tự điều hướng chính: Trang chủ đứng trước Giới thiệu
ok(PRIMARY_NAV[0].label === 'Trang chủ', 'Nav: mục đầu tiên là Trang chủ', PRIMARY_NAV[0].label);
const navGioiThieu = PRIMARY_NAV.findIndex(n => n.label === 'Giới thiệu');
ok(navGioiThieu > 0, 'Nav: Giới thiệu có trong menu chính', String(navGioiThieu));
ok(PRIMARY_NAV.findIndex(n => n.label === 'Trang chủ') < navGioiThieu, 'Nav: Trang chủ đứng trước Giới thiệu');
const hdrSlice = home.slice(home.indexOf('main-nav'), home.indexOf('search-open'));
const hdrHomePos = hdrSlice.indexOf('>Trang chủ<');
const hdrAboutPos = hdrSlice.indexOf('>Giới thiệu<');
ok(hdrHomePos >= 0 && hdrAboutPos > hdrHomePos, 'Header sinh ra: Trang chủ trước Giới thiệu');
// 18.2 Thứ tự utility: Liên hệ → Chính sách bảo mật → Điều khoản sử dụng
const mnavSlice = home.slice(home.indexOf('id="mobile-nav"'), home.indexOf('</header>'));
const mContact = mnavSlice.indexOf('lien-he/');
const mPrivacy = mnavSlice.indexOf('chinh-sach-bao-mat/');
const mTerms = mnavSlice.indexOf('dieu-khoan-su-dung/');
ok(mContact >= 0 && mPrivacy > mContact && mTerms > mPrivacy, 'Menu mobile: thứ tự Liên hệ → Bảo mật → Điều khoản');
const footerSlice = home.slice(home.indexOf('site-footer'));
const fContact = footerSlice.indexOf('lien-he/');
const fPrivacy = footerSlice.indexOf('chinh-sach-bao-mat/');
const fTerms = footerSlice.indexOf('dieu-khoan-su-dung/');
ok(fContact >= 0 && fPrivacy > fContact && fTerms > fPrivacy, 'Footer: thứ tự Liên hệ → Bảo mật → Điều khoản');
// 18.3 Menu mobile không trùng href vô nghĩa
const mnavHrefs = [...mnavSlice.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
const mnavDupCount = mnavHrefs.length - new Set(mnavHrefs).size;
ok(mnavDupCount === 0, 'Menu mobile: không có href trùng lặp', mnavDupCount + ' trùng');
// 18.4 Parent/child derive từ categories.js (source of truth)
let mnavTaxOk = true;
let mnavTaxMissing = '';
for (const c of CATEGORIES) {
  if (!mnavSlice.includes('>' + c.name + '</span>')) { mnavTaxOk = false; mnavTaxMissing += ' ' + c.slug; }
  for (const h of c.children) {
    if (!mnavSlice.includes(c.slug + '/' + h.slug + '/')) { mnavTaxOk = false; mnavTaxMissing += ' ' + c.slug + '/' + h.slug; }
  }
}
ok(mnavTaxOk, 'Menu mobile: đủ 15 cha + 97 hub con theo categories.js', mnavTaxMissing.slice(0, 60));
const knownHubPaths = new Set();
for (const c of CATEGORIES) for (const h of c.children) knownHubPaths.add(c.slug + '/' + h.slug + '/');
const mnavHubHrefs = [...mnavSlice.matchAll(/href="\/total\/([a-z0-9-]+\/[a-z0-9-]+\/)"/g)].map(m => m[1]);
ok(mnavHubHrefs.every(h => knownHubPaths.has(h)), 'Menu mobile: không có hub nào ngoài source of truth');
// 18.5 Footer có đủ nhóm Thông tin
for (const pair of [['Giới thiệu', 'gioi-thieu/'], ['Liên hệ', 'lien-he/'], ['Chính sách bảo mật', 'chinh-sach-bao-mat/'], ['Điều khoản sử dụng', 'dieu-khoan-su-dung/'], ['Tìm kiếm', 'tim-kiem/']]) {
  ok(footerSlice.includes(pair[1]), `Footer có link: ${pair[0]}`);
}
// 18.6 Breadcrumb article đủ tầng: Trang chủ → cha → con → bài
const hubArt = artModules.find(a => a.hub);
if (hubArt) {
  const hubArtRel = `${hubArt.category}/${hubArt.hub}/${hubArt.slug}/index.html`;
  const hubArtHtml = read(hubArtRel);
  const artBc = hubArtHtml.slice(hubArtHtml.indexOf('class="breadcrumb"'), hubArtHtml.indexOf('</nav>', hubArtHtml.indexOf('class="breadcrumb"')));
  const hubArtCat = CATEGORIES.find(c => c.slug === hubArt.category);
  const hubArtHub = hubArtCat.children.find(h => h.slug === hubArt.hub);
  const pHome = artBc.indexOf('Trang chủ');
  const pCat = artBc.indexOf(hubArtCat.name);
  const pHub = artBc.indexOf(hubArtHub.name);
  const pTitle = artBc.indexOf(hubArt.title);
  ok(pHome >= 0 && pCat > pHome && pHub > pCat && pTitle > pHub, `Breadcrumb article ${hubArt.slug}: Trang chủ → cha → con → bài`);
  ok(artBc.includes('aria-current="page"'), 'Breadcrumb article: trang hiện tại có aria-current');
}
// 18.7 Breadcrumb danh mục cha: aria-current cho trang hiện tại
const catBcHtml = read('moto/index.html');
const catBc = catBcHtml.slice(catBcHtml.indexOf('class="breadcrumb"'), catBcHtml.indexOf('</nav>', catBcHtml.indexOf('class="breadcrumb"')));
ok(catBc.includes('Trang chủ') && catBc.includes('Xe máy') && catBc.includes('aria-current="page"'),
  'Breadcrumb danh mục cha: Trang chủ › Xe máy (aria-current)');
// 18.8 JSON-LD BreadcrumbList khớp breadcrumb hiển thị (visual ≠ structured data là lỗi)
const hubPgHtml = read('thue-xe/xe-may/index.html');
const hubPgBc = hubPgHtml.slice(hubPgHtml.indexOf('class="breadcrumb"'), hubPgHtml.indexOf('</nav>', hubPgHtml.indexOf('class="breadcrumb"')));
let bcLd = null;
for (const m of hubPgHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  try {
    const obj = JSON.parse(m[1]);
    if (obj['@type'] === 'BreadcrumbList') bcLd = obj;
  } catch (e) { ok(false, 'JSON-LD hub parse được', String(e).slice(0, 60)); }
}
ok(!!bcLd, 'Hub có JSON-LD BreadcrumbList');
if (bcLd) {
  const ldNames = bcLd.itemListElement.map(x => x.name).join('>');
  ok(ldNames === 'Trang chủ>Thuê xe>Xe máy', 'JSON-LD breadcrumb names khớp hierarchy hiển thị', ldNames);
  const ldUrls = bcLd.itemListElement.map(x => x.item);
  ok(ldUrls[0] === SITE.baseUrl && ldUrls[1] === SITE.baseUrl + 'thue-xe/' && ldUrls[2] === SITE.baseUrl + 'thue-xe/xe-may/',
    'JSON-LD breadcrumb URLs khớp URL hierarchy', ldUrls.join(' '));
  ok(hubPgBc.includes('href="' + SITE.basePath + 'thue-xe/"') && hubPgBc.includes('<span class="crumb" aria-current="page">Xe máy</span>'),
    'Breadcrumb visual khớp URL của JSON-LD (link cha trùng item 2, trang hiện tại aria-current trùng item 3)');
}
// 18.9 Mọi trang sinh ra có viewport meta (responsive)
let noViewportList = [];
for (const f of allFiles.filter(x => x.endsWith('.html'))) {
  if (!read(f).includes('name="viewport"')) noViewportList.push(f);
}
ok(noViewportList.length === 0, 'Mọi trang sinh ra có viewport meta', noViewportList.slice(0, 3).join(', '));
// 18.10 Trang tiện ích tồn tại, vào sitemap, được trang chủ liên kết
for (const p of ['lien-he/index.html', 'chinh-sach-bao-mat/index.html', 'dieu-khoan-su-dung/index.html']) {
  ok(exists(p), `Trang tiện ích tồn tại: ${p}`);
  ok(read('sitemap-pages.xml').includes(SITE.baseUrl + p.replace('/index.html', '/')), `sitemap-pages có ${p}`);
}
ok(home.includes('lien-he/') && home.includes('chinh-sach-bao-mat/') && home.includes('dieu-khoan-su-dung/'),
  'Trang chủ liên kết 3 trang tiện ích');
// 18.11 Header/footer/breadcrumb trên utility pages (cùng shell)
for (const p of ['lien-he/index.html', 'chinh-sach-bao-mat/index.html', 'dieu-khoan-su-dung/index.html', 'gioi-thieu/index.html']) {
  const h = read(p);
  ok(h.includes('site-header') && h.includes('site-footer'), `${p}: đủ header/footer`);
  ok(h.includes('class="breadcrumb"') && h.includes('aria-current="page"'), `${p}: breadcrumb + aria-current`);
}
// 18.12 CSS không tạo chiều rộng cố định phá mobile (> 320px phải nằm trong min()/max())
const badWidths = [...atlasCss.matchAll(/(?:^|[^\w-])(?:min-width|width):\s*(\d{3,})px/g)]
  .map(m => parseInt(m[1])).filter(n => n > 320);
ok(badWidths.length === 0, 'CSS: không còn width/min-width cố định > 320px (chống tràn mobile)', badWidths.join(', '));

// ---------- Kết quả ----------
console.log('');
console.log('=== KẾT QUẢ KIỂM THỬ AI WIKI TOTAL ===');
console.log(`ĐẠT: ${pass}  |  LỖI: ${fail}`);
if (fail > 0) {
  console.log('CÓ LỖI — xem chi tiết trên.');
  process.exit(1);
}
console.log('TẤT CẢ KIỂM THỬ ĐẠT (PASSED).');
