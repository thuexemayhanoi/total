// AI WIKI TOTAL — trình kết xuất trang: chủ / danh mục cha / hub con / bài viết / giới thiệu / tìm kiếm / 404
'use strict';
const { SITE, HOME_CATEGORY_ORDER } = require('../site.config');
const { CATEGORIES } = require('../data/categories');
const S = require('./shell');
const K = require('./schema');

// a.path là đường dẫn file so với gốc repo; URL công khai = basePath (/total/) + path (bỏ 'total/' nếu có)
function up(p) { return String(p).replace(/^total\//, ''); }

function visibleText(html) {
  return String(html).replace(/<[^>]*>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
}
function wordCount(s) {
  return visibleText(s).split(/\s+/).filter(w => /[a-zA-ZÀ-Ỹà-ỹ0-9]/.test(w)).length;
}
const MONTHS = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6',
  'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
function formatDate(iso) {
  const [y, m, d] = String(iso).split('-').map(Number);
  return `${d} ${MONTHS[m - 1]}, ${y}`;
}

function catCard(c) {
  return `<a class="cat-card" data-acc="${S.ACCENTS[c.slug]}" href="${S.u(c.slug + '/')}">
  <span class="cat-name">${S.esc(c.name)}</span>
  <span class="cat-tag">${S.esc(c.tagline)}</span>
  <span class="cat-count">${c.children.length} chủ đề</span>
</a>`;
}

// ---------- Trang chủ ----------
function renderHomepage(articles) {
  const rental = CATEGORIES.find(c => c.slug === 'thue-xe');
  const rentalCells = rental.children.map(h => `<a class="rental-cell" href="${S.u('thue-xe/' + h.slug + '/')}">
    <span class="rental-name">${S.esc(h.name)}</span>
    <span class="rental-desc">${S.esc(h.desc)}</span>
  </a>`).join('');
  const cats = HOME_CATEGORY_ORDER.map(slug => CATEGORIES.find(c => c.slug === slug)).map(catCard).join('');
  const latest = articles.slice().sort((x, y) => (y.date || '').localeCompare(x.date || '')).slice(0, 8)
    .map(a => `<a class="latest-card" href="${S.u(up(a.path))}">
      <span class="latest-title">${S.esc(a.title)}</span>
      <span class="card-summary">${S.esc(a.summary.slice(0, 150))}…</span>
      <span class="card-meta">${formatDate(a.date)} · ${a.wordCount} từ · ${S.esc(a.catName)}${a.hubName ? ' · ' + S.esc(a.hubName) : ''}</span>
    </a>`).join('');
  const content = `
<section class="hero">
  <p class="hero-kicker">Cẩm nang tiếng Việt · Kiến thức xe &amp; thuê xe</p>
  <h1 class="hero-title">${S.esc(SITE.name)}</h1>
  <p class="hero-sub">Cẩm nang xe, thuê xe và giao thông Việt Nam. Khám phá kiến thức về thuê xe máy, xe điện, xe ô tô, sửa chữa, giá xe, địa phương và hàng nghìn chủ đề liên quan.</p>
  <form class="hero-search" role="search" action="${S.u('tim-kiem/')}" method="get">
    <label class="visually-hidden" for="hero-search-input">Tìm kiếm trong AI WIKI TOTAL</label>
    <input id="hero-search-input" type="search" name="q" placeholder="${S.esc(SITE.searchPlaceholder)}">
    <button type="submit">Tìm kiếm</button>
  </form>
  <p class="hero-tag">${S.esc(SITE.tagline)}</p>
</section>
<section class="rental-cluster" aria-labelledby="rental-h">
  <h2 id="rental-h">Thuê xe — cụm chủ đề ưu tiên</h2>
  <div class="rental-grid">${rentalCells}</div>
  <p><a class="read-more" href="${S.u('thue-xe/')}">Khám phá toàn bộ Thuê xe →</a></p>
</section>
<section class="cats" aria-labelledby="cats-h">
  <h2 id="cats-h">15 danh mục chủ đề</h2>
  <div class="cat-grid">${cats}</div>
</section>
<section class="latest" aria-labelledby="latest-h">
  <h2 id="latest-h">Bài mới</h2>
  <div class="latest-grid">${latest}</div>
</section>`;
  return S.page({
    path: '', title: SITE.homeTitle, description: SITE.homeDescription,
    ogType: 'website', content,
    headExtra: K.jsonld(K.websiteSchema()) + '\n' + K.jsonld(K.publisherSchema()),
  });
}

// ---------- Danh mục cha ----------
function renderCategory(cat, articles) {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: cat.name, href: cat.slug + '/' }];
  const hubs = cat.children.map(h => {
    const count = articles.filter(a => a.category === cat.slug && a.hub === h.slug).length;
    return `<a class="hub-card" data-acc="${S.ACCENTS[cat.slug]}" href="${S.u(cat.slug + '/' + h.slug + '/')}">
      <span class="hub-name">${S.esc(h.name)}</span>
      <span class="hub-desc">${S.esc(h.desc)}</span>
      <span class="hub-topics">${h.chuDe.slice(0, 3).map(t => S.esc(t)).join(' · ')}</span>
      <span class="hub-count">${count > 0 ? count + ' bài' : 'Chuẩn bị nội dung'}</span>
    </a>`;
  }).join('');
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head">
  <p class="eyebrow">Danh mục</p>
  <h1>${S.esc(cat.name)}</h1>
  <p class="page-lead">${S.esc(cat.tagline)}</p>
</header>
<section class="hub-cards" aria-label="Chủ đề trong ${S.esc(cat.name)}">
  <div class="hub-grid">${hubs}</div>
</section>`;
  const items = cat.children.map(h => ({ name: h.name, path: cat.slug + '/' + h.slug + '/' }));
  return S.page({
    path: cat.slug + '/', activeCat: cat.slug, title: `${cat.name} — AI WIKI TOTAL`,
    description: cat.metaDescription, ogType: 'website', content,
    headExtra: K.jsonld(K.collectionSchema({ name: cat.name, description: cat.tagline, path: cat.slug + '/', items })) +
      '\n' + K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Hub con ----------
function renderHub(cat, hub, articles) {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: cat.name, href: cat.slug + '/' }, { name: hub.name, href: cat.slug + '/' + hub.slug + '/' }];
  const inHub = articles.filter(a => a.category === cat.slug && a.hub === hub.slug);
  const list = inHub.length ? inHub.map(a => `<a class="latest-card" href="${S.u(up(a.path))}">
      <span class="latest-title">${S.esc(a.title)}</span>
      <span class="card-summary">${S.esc(a.summary.slice(0, 150))}…</span>
      <span class="card-meta">${formatDate(a.date)} · ${a.wordCount} từ</span>
    </a>`).join('') : '<p class="empty-note">Chủ đề này đang trong kế hoạch biên soạn. Bạn có thể xem các chủ đề liên quan trong cùng danh mục.</p>';
  const siblings = cat.children.filter(h => h.slug !== hub.slug).slice(0, 6)
    .map(h => `<a class="chip" href="${S.u(cat.slug + '/' + h.slug + '/')}">${S.esc(h.name)}</a>`).join('');
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head">
  <p class="eyebrow">${S.esc(cat.name)}</p>
  <h1>${S.esc(hub.name)}</h1>
  <p class="page-lead">${S.esc(hub.moTa)}</p>
</header>
<section class="latest" aria-labelledby="hub-art-h">
  <h2 id="hub-art-h">Bài trong chủ đề này</h2>
  <div class="latest-grid">${list}</div>
</section>
<section class="chips" aria-label="Chủ đề liên quan">
  <h2 class="h-small">Chủ đề khác trong ${S.esc(cat.name)}</h2>
  ${siblings}
</section>`;
  const items = inHub.map(a => ({ name: a.title, path: up(a.path) }));
  return S.page({
    path: cat.slug + '/' + hub.slug + '/', activeCat: cat.slug, title: `${hub.name} — ${cat.name} — AI WIKI TOTAL`,
    description: hub.desc, ogType: 'website', content,
    headExtra: K.jsonld(K.collectionSchema({ name: `${cat.name} · ${hub.name}`, description: hub.desc, path: cat.slug + '/' + hub.slug + '/', items })) +
      '\n' + K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Bài viết ----------
// Renderer dùng chung: mọi bài hiện tại & tương lai tự hưởng UI mới.
// Cột đọc 760–820px desktop · TOC sticky (accordion trên mobile) · callout · prev/next.
function renderArticle(cat, hub, a, articles, bySlug) {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: cat.name, href: cat.slug + '/' }];
  if (hub) trail.push({ name: hub.name, href: cat.slug + '/' + hub.slug + '/' });
  trail.push({ name: a.title, href: up(a.path) });
  const readMin = Math.max(1, Math.round(a.wordCount / 200));
  const toc = a.sections.map((s, i) => `<li><a href="#muc-${i + 1}">${S.esc(s.h2)}</a></li>`).join('');
  const keyPoints = (a.keyPoints || []).map(k => `<li>${S.safe(k)}</li>`).join('');
  const secs = a.sections.map((s, i) => `<section class="prose-sec" id="muc-${i + 1}">
    <h2>${S.esc(s.h2)}</h2>
    ${s.html}
  </section>`).join('');
  const blocks = [];
  if (a.checklist && a.checklist.length) blocks.push(`<section class="aside-block aside-checklist" aria-labelledby="cl-h"><h2 id="cl-h">Danh sách kiểm tra</h2><ul>${a.checklist.map(c => `<li>${S.safe(c)}</li>`).join('')}</ul></section>`);
  if (a.steps && a.steps.length) blocks.push(`<section class="aside-block aside-steps" aria-labelledby="st-h"><h2 id="st-h">Các bước thực hiện</h2><ol>${a.steps.map(s => `<li><strong>${S.esc(s.title)}.</strong> ${S.safe(s.detail)}</li>`).join('')}</ol></section>`);
  if (a.warnings && a.warnings.length) blocks.push(`<section class="aside-block aside-warn" aria-labelledby="wr-h"><h2 id="wr-h">Cảnh báo</h2><ul>${a.warnings.map(w => `<li>${S.safe(w)}</li>`).join('')}</ul></section>`);
  if (a.notes && a.notes.length) blocks.push(`<section class="aside-block aside-note" aria-labelledby="nt-h"><h2 id="nt-h">Lưu ý</h2><ul>${a.notes.map(n => `<li>${S.safe(n)}</li>`).join('')}</ul></section>`);
  const refs = (a.references || []).map(r => `<li>${S.esc(r)}</li>`).join('');
  const rel = (a.related || []).filter(s => bySlug[s]).map(s => {
    const r = bySlug[s];
    return `<a class="latest-card" href="${S.u(up(r.path))}">
      <span class="latest-title">${S.esc(r.title)}</span>
      <span class="card-summary">${S.esc(r.summary.slice(0, 130))}…</span>
      <span class="card-meta">${S.esc(r.catName)}${r.hubName ? ' · ' + S.esc(r.hubName) : ''}</span>
    </a>`;
  }).join('');
  // Điều hướng bài trước/bài sau: theo thứ tự ngày xuất bản toàn site
  const ordered = articles.slice().sort((x, y) => (x.date === y.date ? String(x.slug).localeCompare(String(y.slug)) : String(x.date).localeCompare(String(y.date))));
  const pos = ordered.findIndex(x => x.slug === a.slug);
  const prevA = pos > 0 ? ordered[pos - 1] : null;
  const nextA = pos >= 0 && pos < ordered.length - 1 ? ordered[pos + 1] : null;
  const pnCard = (x, cls, label) => x
    ? `<a class="pn-card ${cls}" href="${S.u(up(x.path))}"><span class="pn-label">${label}</span><span class="pn-title">${S.esc(x.title)}</span><span class="pn-meta">${S.esc(x.catName)} · ${formatDate(x.date)}</span></a>`
    : '';
  const content = `
${S.breadcrumbHtml(trail)}
<article class="article" itemscope itemtype="https://schema.org/Article">
  <header class="article-head">
    <p class="eyebrow">${S.esc(cat.name)}${hub ? ' · ' + S.esc(hub.name) : ''}</p>
    <h1>${S.esc(a.title)}</h1>
    <p class="article-dek">${S.esc(a.summary)}</p>
    <div class="article-byline">
      <span class="byline-ava" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="4" fill="#3157D5"/><path d="M4.5 11V5l4 6V5" stroke="#F7F5EF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      <span class="byline-pub">Ban biên tập <strong>AI WIKI TOTAL</strong></span>
      <span class="byline-sep" aria-hidden="true">·</span>
      <span class="byline-meta"><time datetime="${a.date}">${formatDate(a.date)}</time>${a.updated && a.updated !== a.date ? ' · Cập nhật <time datetime="' + a.updated + '">' + formatDate(a.updated) + '</time>' : ''}</span>
      <span class="byline-sep" aria-hidden="true">·</span>
      <span class="byline-read">${readMin} phút đọc</span>
    </div>
  </header>
  <div class="article-body">
    <aside class="article-toc">
      <nav class="toc" aria-label="Mục lục">
        <details id="article-toc-details" open>
          <summary><span class="toc-heading">Mục lục</span><span class="toc-chev" aria-hidden="true">▾</span></summary>
          <ol>${toc}</ol>
        </details>
      </nav>
    </aside>
    <div class="article-content">
      <section class="quick-answer" aria-labelledby="qa-h">
        <h2 id="qa-h" class="h-small">Câu trả lời nhanh</h2>
        <p>${S.esc(a.quickAnswer)}</p>
      </section>
      <section class="key-points" aria-labelledby="kp-h">
        <h2 id="kp-h" class="h-small">Điểm chính</h2>
        <ul>${keyPoints}</ul>
      </section>
      <div class="prose">
        ${secs}
        ${blocks.join('\n')}
        ${refs ? `<section class="aside-block aside-refs" aria-labelledby="rf-h"><h2 id="rf-h">Nguồn tham khảo</h2><ul>${refs}</ul></section>` : ''}
      </div>
    </div>
  </div>
  ${rel ? `<section class="latest article-related" aria-labelledby="rel-h"><h2 id="rel-h">Bài liên quan</h2><div class="latest-grid">${rel}</div></section>` : ''}
  ${(prevA || nextA) ? `<nav class="art-pn" aria-label="Bài trước và bài sau">
    ${pnCard(prevA, 'pn-prev', 'Bài trước')}
    ${pnCard(nextA, 'pn-next', 'Bài sau')}
  </nav>` : ''}
</article>`;
  return S.page({
    path: up(a.path), activeCat: cat.slug, title: a.seoTitle || a.title,
    description: a.metaDescription, ogType: 'article', content,
    headExtra: K.jsonld(K.articleSchema(a, up(a.path))) + '\n' + K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Giới thiệu ----------
function renderAbout(stats) {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: 'Giới thiệu', href: 'gioi-thieu/' }];
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head"><h1>Giới thiệu AI WIKI TOTAL</h1>
<p class="page-lead">${S.esc(SITE.tagline)}</p></header>
<div class="prose">
<section class="prose-sec"><h2>AI WIKI TOTAL là gì?</h2>
<p>AI WIKI TOTAL là cổng kiến thức tổng hợp bằng tiếng Việt về xe máy, xe điện, ô tô, thuê xe, sửa chữa, giá xe, thị trường, pháp lý, hành trình và địa phương. Mục tiêu dài hạn là một bách khoa toàn thư mở rộng dần lên hàng nghìn chủ đề, trong đó <strong>thuê xe</strong> là cụm chủ đề ưu tiên hàng đầu.</p></section>
<section class="prose-sec"><h2>Nguyên tắc biên soạn</h2>
<p>Mọi bài viết tuân theo ba nguyên tắc: kiến thức trước (knowledge-first), tiếng Việt chuẩn cho người Việt, và không đưa dữ kiện chưa xác minh. Thông tin kinh doanh chỉ xuất hiện khi đã được xác minh; phần còn lại là nội dung kiến thức tham khảo.</p></section>
<section class="prose-sec"><h2>Cấu trúc hiện tại</h2>
<p>Hiện site gồm <strong>${stats.parents} danh mục cha</strong>, <strong>${stats.hubs} hub con</strong> và các bài viết nền tảng, tất cả sinh từ dữ liệu qua trình sinh trang tĩnh (generator-first) — không chỉnh sửa HTML thủ công.</p></section>
<section class="prose-sec"><h2>Trợ lý AI</h2>
<p>Trợ lý AI WIKI TOTAL là trợ lý tri thức dựa trên nội dung site (retrieval-first): nó trả lời từ dữ liệu đã publish và không quảng cáo dịch vụ.</p></section>
</div>`;
  return S.page({
    path: 'gioi-thieu/', title: 'Giới thiệu AI WIKI TOTAL', description: 'Giới thiệu về AI WIKI TOTAL — cẩm nang xe, thuê xe và kiến thức giao thông Việt Nam.',
    content, headExtra: K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Tìm kiếm ----------
function renderSearchPage() {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: 'Tìm kiếm', href: 'tim-kiem/' }];
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head"><h1>Tìm kiếm</h1>
<p class="page-lead">Nhập từ khoá để tìm trong toàn bộ AI WIKI TOTAL.</p></header>
<section class="search-page-box">
  <form role="search" id="page-search-form">
    <label class="visually-hidden" for="page-search-input">Từ khoá tìm kiếm</label>
    <input type="search" id="page-search-input" autocomplete="off" placeholder="${S.esc(SITE.searchPlaceholder)}">
    <button type="submit">Tìm kiếm</button>
  </form>
  <div class="search-results" id="page-search-results" aria-live="polite"></div>
</section>`;
  return S.page({ path: 'tim-kiem/', title: 'Tìm kiếm — AI WIKI TOTAL', description: 'Tìm kiếm nội dung trong AI WIKI TOTAL.', content });
}

// ---------- 404 ----------
function render404() {
  const content = `
<header class="page-head">
  <h1>Không tìm thấy trang</h1>
  <p class="page-lead">Trang bạn tìm không tồn tại hoặc đã di chuyển. Thử tìm từ khoá hoặc quay về trang chủ.</p>
</header>
<p><a class="read-more" href="${S.u('')}">Về trang chủ</a> · <a class="read-more" href="${S.u('tim-kiem/')}">Tìm kiếm</a></p>`;
  return S.page({ path: '404.html', title: 'Không tìm thấy trang — AI WIKI TOTAL', description: 'Trang không tồn tại.', content });
}

module.exports = { up, visibleText, wordCount, formatDate, renderHomepage, renderCategory, renderHub, renderArticle, renderAbout, renderSearchPage, render404 };
