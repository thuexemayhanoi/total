// AI WIKI TOTAL — vỏ trang dùng chung: header, footer, nav, mega menu, breadcrumb, page()
'use strict';
const { SITE, PRIMARY_NAV, HOME_CATEGORY_ORDER } = require('../site.config');
const { CATEGORIES } = require('../data/categories');

// Màu nhấn theo danh mục (spec mục 32)
const ACCENTS = {
  'thue-xe': 'emerald', guide: 'cobalt', hub: 'navy', wiki: 'violet', learn: 'cyan',
  moto: 'blue', ride: 'teal', tips: 'amber', docs: 'slate', news: 'red',
  local: 'emerald', map: 'cyan', garage: 'orange', market: 'gold', review: 'purple',
};

// URL nội bộ: basePath + path — LUÔN đi qua hàm này, không ghép tay
function u(p) {
  if (p === undefined || p === null || p === '') return SITE.basePath;
  return SITE.basePath + String(p);
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// HTML hiển thị: cho phép <strong>/<em> trong nội dung bài
function safe(s) { return String(s == null ? '' : s); }

function logoMark() {
  return `<a class="logo" href="${u('')}" aria-label="AI WIKI TOTAL — Trang chủ">
<span class="logo-mark" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="1" y="1" width="24" height="24" rx="7" fill="#3157D5"/><path d="M7 17V9l6 8V7" stroke="#F7F5EF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12h5M16 15h5" stroke="#F59E0B" stroke-width="2.2" stroke-linecap="round"/></svg></span>
<span class="logo-text">AI WIKI <strong>TOTAL</strong></span></a>`;
}

// Dropdown "Thuê xe" (spec mục 31)
function thueXeDropdown() {
  const cat = CATEGORIES.find(c => c.slug === 'thue-xe');
  const items = cat.children.map(h => `
      <a class="dd-item" href="${u('thue-xe/' + h.slug + '/')}">
        <span class="dd-name">${esc(h.name)}</span>
        <span class="dd-desc">${esc(h.desc)}</span>
      </a>`).join('');
  return `<div class="dropdown" id="dd-thue-xe">
    <button type="button" class="nav-dd-trigger" aria-expanded="false" aria-controls="dd-thue-xe-panel">Thuê xe <span class="caret" aria-hidden="true">▾</span></button>
    <div class="dd-panel" id="dd-thue-xe-panel">${items}
      <a class="dd-all" href="${u('thue-xe/')}">Xem tất cả chủ đề thuê xe →</a>
    </div>
  </div>`;
}

// Mega menu "Tất cả" — 15 danh mục theo thứ tự trang chủ
function megaMenu() {
  const cells = HOME_CATEGORY_ORDER.map(slug => {
    const c = CATEGORIES.find(x => x.slug === slug);
    if (!c) return '';
    return `<div class="mega-cell">
      <a class="mega-cat" data-acc="${ACCENTS[c.slug]}" href="${u(c.slug + '/')}">${esc(c.name)}</a>
      ${c.children.slice(0, 4).map(h => `<a class="mega-sub" href="${u(c.slug + '/' + h.slug + '/')}">${esc(h.name)}</a>`).join('')}
      <span class="mega-count">${c.children.length} chủ đề</span>
    </div>`;
  }).join('');
  return `<div class="mega" id="mega-all" hidden>
    <div class="mega-grid">${cells}</div>
  </div>`;
}

function navItems(activeCat) {
  return PRIMARY_NAV.map(n => {
    if (n.mega) return `<button type="button" class="nav-link mega-trigger" data-mega="mega-all" aria-expanded="false" aria-controls="mega-all">${esc(n.label)} <span class="caret" aria-hidden="true">▾</span></button>`;
    if (n.dropdown) return thueXeDropdown();
    const cls = 'nav-link' + (n.cat && n.cat === activeCat ? ' active' : '') + (n.cat ? ` acc-${ACCENTS[n.cat]}` : '');
    return `<a class="${cls}" href="${u(n.href)}">${esc(n.label)}</a>`;
  }).join('');
}

function headerHtml(activeCat) {
  return `<a class="skip-link" href="#noidung">Đi tới nội dung chính</a>
<header class="site-header">
  <div class="header-inner">
    ${logoMark()}
    <nav class="main-nav" aria-label="Điều hướng chính">
      ${navItems(activeCat)}
    </nav>
    <button type="button" class="search-open" id="search-open" aria-label="Mở tìm kiếm">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.2" stroke="currentColor" stroke-width="1.8"/><path d="m11 11 3.4 3.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      <span>Tìm kiếm</span>
    </button>
    <button type="button" class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Mở menu"><span class="bar"></span><span class="bar"></span><span class="bar"></span></button>
  </div>
  ${megaMenu()}
  <div class="mobile-nav" id="mobile-nav" aria-label="Menu di động" hidden>
    <p class="mobile-nav-label">Danh mục</p>
    <nav class="mobile-nav-grid" aria-label="Danh mục chính">
      ${CATEGORIES.map(c => `<a href="${u(c.slug + '/')}">${esc(c.name)}</a>`).join('')}
    </nav>
    <p class="mobile-nav-label">Tiện ích</p>
    <nav class="mobile-nav-grid" aria-label="Liên kết tiện ích">
      <a href="${u('gioi-thieu/')}">Giới thiệu</a>
      <a href="${u('tim-kiem/')}">Tìm kiếm</a>
      <a href="${u('hub/')}">Trung tâm chủ đề</a>
    </nav>
  </nav>
</header>`;
}

function searchModal() {
  return `<div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-labelledby="search-title" hidden>
  <div class="search-box" role="document">
    <div class="search-head">
      <span class="search-title" id="search-title">${esc(SITE.searchTitle)}</span>
      <button type="button" class="search-close" id="search-close" aria-label="Đóng tìm kiếm">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span>Đóng</span>
      </button>
    </div>
    <div class="search-input-row">
      <svg class="search-ico" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.2" stroke="currentColor" stroke-width="1.8"/><path d="m11 11 3.4 3.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      <input type="search" id="search-input" autocomplete="off" placeholder="${esc(SITE.searchPlaceholder)}" aria-label="Nhập từ khoá tìm kiếm">
    </div>
    <div class="search-results" id="search-results" aria-live="polite"></div>
  </div>
</div>`;
}

function chatbotMarkup() {
  return `<div class="chatbot" id="chatbot">
  <button type="button" class="chatbot-launcher" id="chatbot-launcher" aria-expanded="false" aria-controls="chatbot-panel">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5c-4.1 0-7.5 2.9-7.5 6.5 0 2 1.1 3.8 2.8 5v3l3-1.6c.6.1 1.1.1 1.7.1 4.1 0 7.5-2.9 7.5-6.5S13.1 1.5 9 1.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5.4 8.9h7.2M5.4 6.2h7.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    <span>${esc(SITE.chatbotLauncher)}</span>
  </button>
  <div class="chatbot-panel" id="chatbot-panel" role="dialog" aria-label="${esc(SITE.chatbotName)}" hidden>
    <div class="chatbot-head">
      <span class="chatbot-head-ico" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5c-4.1 0-7.5 2.9-7.5 6.5 0 2 1.1 3.8 2.8 5v3l3-1.6c.6.1 1.1.1 1.7.1 4.1 0 7.5-2.9 7.5-6.5S13.1 1.5 9 1.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
      </span>
      <span class="chatbot-head-name">${esc(SITE.chatbotName)}</span>
      <button type="button" class="chatbot-close" id="chatbot-close" aria-label="Đóng trợ lý">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="chatbot-log" id="chatbot-log" aria-live="polite"></div>
    <div class="chatbot-input-row">
      <textarea id="chatbot-input" rows="1" placeholder="Nhập câu hỏi về xe, thuê xe…" aria-label="Câu hỏi cho trợ lý"></textarea>
      <button type="button" id="chatbot-send" aria-label="Gửi câu hỏi">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M2 9h12M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Gửi</span>
      </button>
    </div>
  </div>
</div>`;
}

function footerHtml() {
  const mainCats = HOME_CATEGORY_ORDER.slice(0, 8).map(slug => {
    const c = CATEGORIES.find(x => x.slug === slug);
    return `<a href="${u(c.slug + '/')}">${esc(c.name)}</a>`;
  }).join('');
  const otherCats = HOME_CATEGORY_ORDER.slice(8).map(slug => {
    const c = CATEGORIES.find(x => x.slug === slug);
    return `<a href="${u(c.slug + '/')}">${esc(c.name)}</a>`;
  }).join('');
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      ${logoMark()}
      <p class="footer-tag">${esc(SITE.tagline)}</p>
      <p class="footer-note">Nội dung mang tính kiến thức tham khảo, viết bằng tiếng Việt cho người Việt. AI WIKI TOTAL không bán xe và không tự publish dữ kiện kinh doanh chưa xác minh.</p>
    </div>
    <nav class="footer-col footer-cats" aria-label="Danh mục">
      <p class="footer-col-title">Danh mục chính</p>
      ${mainCats}
      <a class="footer-more" href="${u('hub/')}">Tất cả danh mục →</a>
    </nav>
    <nav class="footer-col footer-cats" aria-label="Danh mục khác">
      <p class="footer-col-title">Chủ đề khác</p>
      ${otherCats}
    </nav>
    <nav class="footer-col footer-meta" aria-label="Tiện ích">
      <p class="footer-col-title">Tiện ích</p>
      <a href="${u('gioi-thieu/')}">Giới thiệu</a>
      <a href="${u('tim-kiem/')}">Tìm kiếm</a>
      <a href="${u('hub/')}">Trung tâm chủ đề</a>
      <a href="${u('map/')}">Bản đồ</a>
      <a href="${u('news/')}">Tin tức</a>
      <a href="${u('docs/')}">Tài liệu</a>
    </nav>
  </div>
</footer>`;
}

function breadcrumbHtml(trail) {
  const items = trail.map((t, i) => {
    const last = i === trail.length - 1;
    return last
      ? `<span class="crumb" aria-current="page">${esc(t.name)}</span>`
      : `<a class="crumb" href="${u(t.href)}">${esc(t.name)}</a>`;
  }).join('<span class="crumb-sep" aria-hidden="true">/</span>');
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><span class="crumb-sep" aria-hidden="true">Bạn ở đây:</span>${items}</nav>`;
}

// metaTags: thẻ SEO dùng chung
function metaTags(o) {
  const canonical = u(o.path || '');
  return `<title>${esc(o.title)}</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="${esc(o.description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:type" content="${o.ogType || 'website'}">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="vi_VN">
<meta name="theme-color" content="#3157D5">`;
}

// Khung trang đầy đủ
function page(o) {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
${metaTags(o)}
<link rel="stylesheet" href="${u('assets/css/atlas.css')}">
${o.headExtra || ''}
</head>
<body data-base-path="${SITE.basePath}">
${headerHtml(o.activeCat)}
<main id="noidung" class="site-main">
${o.content}
</main>
${footerHtml()}
${searchModal()}
${chatbotMarkup()}
<script src="${u('assets/js/overlay.js')}"></script>
<script src="${u('assets/js/nav.js')}"></script>
<script src="${u('assets/js/search.js')}"></script>
<script src="${u('assets/js/chatbot.js')}"></script>
</body>
</html>`;
}

module.exports = { ACCENTS, u, esc, safe, logoMark, thueXeDropdown, megaMenu, navItems, searchModal, chatbotMarkup, footerHtml, headerHtml, breadcrumbHtml, metaTags, page };
