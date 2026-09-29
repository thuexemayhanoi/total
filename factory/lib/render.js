// AI WIKI TOTAL — trình kết xuất trang (Editorial Magazine v3):
// chủ / danh mục cha / hub con / bài viết / giới thiệu / tìm kiếm / 404
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
// Thời gian đọc ước tính từ số từ — chỉ hiển thị số liệu suy từ dữ liệu thật
function readMin(words) { return Math.max(1, Math.round(words / 200)); }
const MONTHS = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6',
  'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
function formatDate(iso) {
  const [y, m, d] = String(iso).split('-').map(Number);
  return `${d} ${MONTHS[m - 1]}, ${y}`;
}
// Thứ tự bài chuẩn toàn site: ngày xuất bản, rồi slug — dùng cho prev/next và "mới nhất"
function byOrder(x, y) {
  const d = String(x.date).localeCompare(String(y.date));
  return d !== 0 ? d : String(x.slug).localeCompare(String(y.slug));
}

// Minh họa dùng chung theo danh mục — SVG do AI WIKI TOTAL tự vẽ, ghi rõ "Ảnh minh họa"
const ILLU = {
  'thue-xe': { file: 'illu-thue-xe.svg', title: 'xe máy, hợp đồng và chìa khóa khi thuê xe' },
  'thue-xe/xe-may': { file: 'illu-xe-may.svg', title: 'xe máy ga di chuyển trong phố' },
  'thue-xe/xe-dien': { file: 'illu-xe-dien.svg', title: 'xe điện, pin và trạm sạc' },
  'thue-xe/xe-oto': { file: 'illu-xe-oto.svg', title: 'ô tô tự lái trên đường' },
  'moto': { file: 'illu-xe-may.svg', title: 'xe máy ga cỡ nhỏ' },
  'garage': { file: 'illu-garage.svg', title: 'đĩa phanh, kẹp phanh và công cụ bảo dưỡng' },
  'market': { file: 'illu-gia-xe.svg', title: 'thẻ giá và biểu đồ so sánh giá xe' },
};
function illuFor(cat, hub) { return ILLU[cat + '/' + hub] || ILLU[cat] || ILLU['thue-xe']; }

function illuImg(cat, hub, opts) {
  const il = illuFor(cat, hub);
  const eager = opts && opts.eager;
  return `<img src="${S.u('assets/img/' + il.file)}" width="960" height="640" alt="Ảnh minh họa: ${S.esc(il.title)}" ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

// Thẻ bài dùng chung: ảnh + chuyên mục + tiêu đề + mô tả + meta từ dữ liệu thật
function postCard(a) {
  return `<a class="post-card" href="${S.u(up(a.path))}">
  <span class="post-thumb">${illuImg(a.category, a.hub)}</span>
  <span class="post-cat">${S.esc(a.catName)}${a.hubName ? ' · ' + S.esc(a.hubName) : ''}</span>
  <span class="post-title">${S.esc(a.title)}</span>
  <span class="post-dek">${S.esc(a.summary.slice(0, 160))}…</span>
  <span class="post-meta">${formatDate(a.date)} · ${readMin(a.wordCount)} phút đọc</span>
</a>`;
}

// Bài nổi bật = bài mới nhất — nhãn nói đúng bản chất dữ liệu, không bịa "phổ biến nhất"
function featuredCard(a, opts) {
  const label = (opts && opts.label) || 'Bài mới nhất';
  return `<section class="featured" aria-label="${S.esc(label)}">
<a class="feat-card" href="${S.u(up(a.path))}">
  <figure class="feat-media">${illuImg(a.category, a.hub, { eager: true })}</figure>
  <div class="feat-body">
    <p class="feat-cat"><span class="feat-label">${S.esc(label)}</span>${S.esc(a.catName)}${a.hubName ? ' · ' + S.esc(a.hubName) : ''}</p>
    <h2 class="feat-title">${S.esc(a.title)}</h2>
    <p class="feat-dek">${S.esc(a.summary.slice(0, 260))}…</p>
    <p class="feat-meta">${formatDate(a.date)}${a.updated && a.updated !== a.date ? ' · cập nhật ' + formatDate(a.updated) : ''} · ${readMin(a.wordCount)} phút đọc</p>
    <span class="feat-cta">Đọc tiếp <span aria-hidden="true">→</span></span>
  </div>
</a>
</section>`;
}

// Hàng bài gọn trong danh mục/hub
function postRow(a) {
  return `<a class="post-row" href="${S.u(up(a.path))}">
  <span class="row-thumb">${illuImg(a.category, a.hub)}</span>
  <span class="row-body">
    <span class="row-title">${S.esc(a.title)}</span>
    <span class="row-meta">${formatDate(a.date)} · ${readMin(a.wordCount)} phút đọc</span>
  </span>
</a>`;
}

// ---------- Trang chủ ----------
function renderHomepage(articles) {
  const ordered = articles.slice().sort(byOrder).reverse();
  const newest = ordered[0];
  const rest = ordered.slice(1);
  const rental = CATEGORIES.find(c => c.slug === 'thue-xe');
  const rentalCells = rental.children.map(h => `<a class="rental-cell" href="${S.u('thue-xe/' + h.slug + '/')}">
    <span class="rental-name">${S.esc(h.name)}</span>
    <span class="rental-desc">${S.esc(h.desc)}</span>
  </a>`).join('');
  const latest = rest.slice(0, 6).map(postCard).join('');
  // Khám phá danh mục: 5 ô lớn + mục lục gọn cho 10 mục còn lại — giảm ô chữ giống nhau
  const tiles = HOME_CATEGORY_ORDER.slice(0, 5).map(slug => {
    const c = CATEGORIES.find(x => x.slug === slug);
    return `<a class="cat-tile" data-acc="${S.ACCENTS[c.slug]}" href="${S.u(c.slug + '/')}">
      <span class="tile-name">${S.esc(c.name)}</span>
      <span class="tile-tag">${S.esc(c.tagline)}</span>
      <span class="tile-count">${c.children.length} chủ đề</span>
    </a>`;
  }).join('');
  const indexList = HOME_CATEGORY_ORDER.slice(5).map(slug => {
    const c = CATEGORIES.find(x => x.slug === slug);
    return `<li><a class="cat-idx" data-acc="${S.ACCENTS[c.slug]}" href="${S.u(c.slug + '/')}">${S.esc(c.name)}<span class="idx-count">${c.children.length}</span></a></li>`;
  }).join('');
  const content = `
<section class="hero">
  <p class="hero-kicker">Cẩm nang tiếng Việt · Kiến thức xe &amp; thuê xe</p>
  <h1 class="hero-title">${S.esc(SITE.name)}</h1>
  <p class="hero-sub">Kiến thức về thuê xe máy, xe điện, xe ô tô, sửa chữa, giá xe, địa phương và hành trình — viết cho người Việt, dễ tra cứu trên điện thoại.</p>
  <form class="hero-search" role="search" action="${S.u('tim-kiem/')}" method="get">
    <label class="visually-hidden" for="hero-search-input">Tìm kiếm trong AI WIKI TOTAL</label>
    <input id="hero-search-input" type="search" name="q" placeholder="${S.esc(SITE.searchPlaceholder)}">
    <button type="submit">Tìm kiếm</button>
  </form>
  <p class="hero-tag">${S.esc(SITE.tagline)}</p>
</section>
${newest ? featuredCard(newest) : ''}
<section class="rental-cluster" aria-labelledby="rental-h">
  <h2 id="rental-h" class="section-h">Thuê xe — cụm chủ đề ưu tiên</h2>
  <div class="rental-grid">${rentalCells}</div>
  <p><a class="read-more" href="${S.u('thue-xe/')}">Khám phá toàn bộ Thuê xe →</a></p>
</section>
<section class="latest" aria-labelledby="latest-h">
  <h2 id="latest-h" class="section-h">Bài mới</h2>
  <div class="latest-grid">${latest}</div>
</section>
<section class="cats" aria-labelledby="cats-h">
  <h2 id="cats-h" class="section-h">Khám phá 15 danh mục</h2>
  <div class="cat-tiles">${tiles}</div>
  <ul class="cat-index">${indexList}</ul>
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
  const inCat = articles.filter(a => a.category === cat.slug).sort(byOrder).reverse();
  const featured = inCat[0];
  const more = inCat.slice(1);
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
${featured ? featuredCard(featured, { label: 'Bài mới nhất trong danh mục' }) : `<p class="empty-note">Danh mục này đang trong kế hoạch biên soạn. Bạn có thể khám phá các chủ đề bên dưới.</p>`}
${more.length ? `<section class="post-list" aria-label="Bài khác trong ${S.esc(cat.name)}">
  ${more.map(postRow).join('\n  ')}
</section>` : ''}
<section class="hub-cards" aria-label="Chủ đề trong ${S.esc(cat.name)}">
  <h2 class="section-h">Chủ đề trong ${S.esc(cat.name)}</h2>
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
  const inHub = articles.filter(a => a.category === cat.slug && a.hub === hub.slug).sort(byOrder).reverse();
  const featured = inHub[0];
  const more = inHub.slice(1);
  const siblings = cat.children.filter(h => h.slug !== hub.slug).slice(0, 8)
    .map(h => `<a class="chip" href="${S.u(cat.slug + '/' + h.slug + '/')}">${S.esc(h.name)}</a>`).join('');
  // Gợi ý thực sự liên quan khi chủ đề chưa có bài: bài mới nhất trong cùng danh mục, rồi toàn site
  const suggest = (articles.filter(a => a.category === cat.slug).sort(byOrder).reverse().slice(0, 3).length
    ? articles.filter(a => a.category === cat.slug).sort(byOrder).reverse().slice(0, 3)
    : articles.slice().sort(byOrder).reverse().slice(0, 3)).map(postRow).join('\n  ');
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head">
  <p class="eyebrow">${S.esc(cat.name)}</p>
  <h1>${S.esc(hub.name)}</h1>
  <p class="page-lead">${S.esc(hub.moTa)}</p>
</header>
${featured ? featuredCard(featured, { label: 'Bài mới nhất trong chủ đề' }) + (more.length ? `<section class="post-list" aria-label="Bài khác trong ${S.esc(hub.name)}">
  ${more.map(postRow).join('\n  ')}
</section>` : '') : `
<section class="empty-state" aria-label="Trạng thái chủ đề">
  <h2 class="section-h">Chủ đề đang trong kế hoạch biên soạn</h2>
  <p>Chủ đề <strong>${S.esc(hub.name)}</strong> thuộc danh mục ${S.esc(cat.name)} chưa có bài hoàn chỉnh. Danh sách dưới đây là những bài đã xuất bản liên quan gần nhất — không phải nội dung trang trí.</p>
</section>
<section class="post-list" aria-label="Bài liên quan gợi ý">
  ${suggest}
</section>`}
<section class="chips" aria-label="Chủ đề liên quan">
  <h2 class="section-h">Chủ đề khác trong ${S.esc(cat.name)}</h2>
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
// Template dùng chung cho mọi bài hiện tại và tương lai:
// breadcrumb → eyebrow → H1 → dek → byline (ban biên tập, ngày, phút đọc) → ảnh minh họa
// → quick answer → key points → TOC (sticky/accordion) → thân bài 65–75 ký tự/dòng → nguồn → chia sẻ → liên quan → trước/sau
function renderArticle(cat, hub, a, articles, bySlug) {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: cat.name, href: cat.slug + '/' }];
  if (hub) trail.push({ name: hub.name, href: cat.slug + '/' + hub.slug + '/' });
  trail.push({ name: a.title, href: up(a.path) });
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
    return postCard(r);
  }).join('');
  // Điều hướng bài trước/bài sau: theo thứ tự ngày xuất bản toàn site
  const ordered = articles.slice().sort(byOrder);
  const pos = ordered.findIndex(x => x.slug === a.slug);
  const prevA = pos > 0 ? ordered[pos - 1] : null;
  const nextA = pos >= 0 && pos < ordered.length - 1 ? ordered[pos + 1] : null;
  const pnCard = (x, cls, label) => x
    ? `<a class="pn-card ${cls}" href="${S.u(up(x.path))}"><span class="pn-label">${label}</span><span class="pn-title">${S.esc(x.title)}</span><span class="pn-meta">${S.esc(x.catName)} · ${formatDate(x.date)}</span></a>`
    : '';
  const il = illuFor(cat.slug, hub ? hub.slug : null);
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
      <span class="byline-read">${readMin(a.wordCount)} phút đọc</span>
    </div>
    <div class="art-actions">
      <button type="button" class="act-btn" id="art-share" data-title="${S.esc(a.title)}">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><circle cx="11.5" cy="3.5" r="2.2" stroke="currentColor" stroke-width="1.6"/><circle cx="3.5" cy="7.5" r="2.2" stroke="currentColor" stroke-width="1.6"/><circle cx="11.5" cy="11.5" r="2.2" stroke="currentColor" stroke-width="1.6"/><path d="M5.4 6.4l4.3-2.1M5.4 8.6l4.3 2.1" stroke="currentColor" stroke-width="1.6"/></svg>
        <span>Chia sẻ</span>
      </button>
      <button type="button" class="act-btn" id="art-copy">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><rect x="4.5" y="4.5" width="8" height="8" rx="1.8" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 4.5v-1a1.8 1.8 0 0 0-1.8-1.8h-5A1.8 1.8 0 0 0 1.9 3.5v5A1.8 1.8 0 0 0 3.7 10.3h.8" stroke="currentColor" stroke-width="1.6"/></svg>
        <span>Sao chép liên kết</span>
      </button>
      <span class="act-hint" id="art-copy-hint" role="status" aria-live="polite"></span>
    </div>
  </header>
  <figure class="art-lead">
    ${illuImg(cat.slug, hub ? hub.slug : null, { eager: true })}
    <figcaption>Ảnh minh họa: ${S.esc(il.title)} — minh họa mang tính biểu tượng, không phải ảnh sản phẩm cụ thể.</figcaption>
  </figure>
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
  ${rel ? `<section class="latest article-related" aria-labelledby="rel-h"><h2 id="rel-h" class="section-h">Bài liên quan</h2><div class="latest-grid">${rel}</div></section>` : ''}
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
<figure class="art-lead">
  <img src="${S.u('assets/img/illu-thue-xe.svg')}" width="960" height="640" alt="Ảnh minh họa: xe máy và chìa khóa trao tay khi thuê xe" loading="eager" fetchpriority="high" decoding="async">
  <figcaption>Ảnh minh họa: xe máy, hợp đồng và chìa khóa khi thuê xe — minh họa mang tính biểu tượng.</figcaption>
</figure>
<div class="prose about-prose">
<section class="prose-sec"><h2>AI WIKI TOTAL là gì?</h2>
<p>AI WIKI TOTAL là cổng kiến thức tổng hợp bằng tiếng Việt về xe máy, xe điện, ô tô, thuê xe, sửa chữa, giá xe, thị trường, pháp lý, hành trình và địa phương. Mục tiêu dài hạn là một bách khoa toàn thư mở rộng dần lên hàng nghìn chủ đề, trong đó <strong>thuê xe</strong> là cụm chủ đề ưu tiên hàng đầu.</p></section>
<section class="prose-sec"><h2>Nguyên tắc biên soạn</h2>
<p>Mọi bài viết tuân theo ba nguyên tắc: kiến thức trước (knowledge-first), tiếng Việt chuẩn cho người Việt, và không đưa dữ kiện chưa xác minh. Thông tin kinh doanh chỉ xuất hiện khi đã được xác minh; phần còn lại là nội dung kiến thức tham khảo. Ảnh minh họa trên site do ban biên tập tự vẽ, ghi rõ tính chất minh họa — không sử dụng ảnh chụp sản phẩm thật để tránh gây hiểu nhầm về dòng xe.</p></section>
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

// ---------- Liên hệ ----------
function renderContact() {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: 'Liên hệ', href: 'lien-he/' }];
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head"><h1>Liên hệ</h1>
<p class="page-lead">Kênh liên hệ của AI WIKI TOTAL với bạn đọc.</p></header>
<div class="prose about-prose">
<section class="prose-sec"><h2>Cách liên hệ</h2>
<p>AI WIKI TOTAL là cổng kiến thức, không bán xe và không nhận đặt xe hộ. Nếu bạn có câu hỏi về nội dung, phát hiện dữ kiện cần kiểm chứng, hoặc muốn góp ý cho ban biên tập, hãy sử dụng một trong các cách dưới đây.</p>
<ul>
<li><strong>Góp ý nội dung:</strong> dùng trang <a href="${S.u('tim-kiem/')}">Tìm kiếm</a> để kiểm tra xem chủ đề đã có bài chưa; nếu chưa, đề xuất chủ đề mới qua trợ lý AI trên trang chủ.</li>
<li><strong>Báo lỗi dữ kiện:</strong> nêu rõ bài viết, đoạn trích và lý do cần kiểm chứng — ban biên tập sẽ rà soát theo nguyên tắc knowledge-first.</li>
<li><strong>Vấn đề kỹ thuật:</strong> mô tả trang, trình duyệt và hành vi gặp lỗi để được hỗ trợ nhanh hơn.</li>
</ul></section>
<section class="prose-sec"><h2>Nguyên tắc phản hồi</h2>
<p>Trang này không thu thập dữ liệu cá nhân: không có form, không tài khoản, không theo dõi hành vi. Câu hỏi thường gặp về nội dung đã được trợ lý AI trả lời trực tiếp dựa trên các bài viết đã publish. Mọi dữ kiện kinh doanh chỉ được đưa lên site khi đã được xác minh qua nguồn độc lập.</p></section>
</div>`;
  return S.page({
    path: 'lien-he/', title: 'Liên hệ — AI WIKI TOTAL', description: 'Trang liên hệ của AI WIKI TOTAL — cổng kiến thức, không bán xe và không đặt xe hộ.',
    content, headExtra: K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Chính sách bảo mật ----------
function renderPrivacy() {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: 'Chính sách bảo mật', href: 'chinh-sach-bao-mat/' }];
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head"><h1>Chính sách bảo mật</h1>
<p class="page-lead">AI WIKI TOTAL là trang kiến thức tĩnh — không tài khoản, không form thu thập dữ liệu cá nhân.</p></header>
<div class="prose about-prose">
<section class="prose-sec"><h2>Dữ liệu chúng tôi KHÔNG thu thập</h2>
<p>Site không yêu cầu đăng ký, không có biểu mẫu nhập liệu và không đặt cookie quảng cáo. Trang Tìm kiếm hoạt động hoàn toàn phía trình duyệt: chỉ mục tìm kiếm được tải xuống máy của bạn và việc tìm kiếm diễn ra cục bộ, không gửi từ khoá về máy chủ của chúng tôi.</p></section>
<section class="prose-sec"><h2>Trợ lý AI trên trang</h2>
<p>Trợ lý AI WIKI TOTAL trả lời dựa trên chỉ mục nội dung đã publish, chạy trong trình duyệt của bạn. Câu hỏi bạn nhập không dùng để hồ sơ hoá người dùng và không liên kết với danh tính.</p></section>
<section class="prose-sec"><h2>Dịch vụ bên thứ ba</h2>
<p>Trang được lưu trữ trên hạ tầng GitHub Pages; các yêu cầu truy cập thông thường được ghi nhận ở tầng hạ tầng như mọi website tĩnh khác. Chúng tôi không nhúng theo dõi phân tích của bên thứ ba và không chia sẻ dữ liệu với đơn vị quảng cáo.</p></section>
<section class="prose-sec"><h2>Thay đổi chính sách</h2>
<p>Khi chính sách thay đổi, phiên bản mới sẽ được publish trực tiếp trên trang này kèm nội dung đầy đủ. Vì site không có tài khoản nên không cần cơ chế thông báo riêng cho từng người dùng.</p></section>
</div>`;
  return S.page({
    path: 'chinh-sach-bao-mat/', title: 'Chính sách bảo mật — AI WIKI TOTAL', description: 'Chính sách bảo mật của AI WIKI TOTAL: trang kiến thức tĩnh, không tài khoản, không form thu thập dữ liệu cá nhân.',
    content, headExtra: K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Điều khoản sử dụng ----------
function renderTerms() {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: 'Điều khoản sử dụng', href: 'dieu-khoan-su-dung/' }];
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head"><h1>Điều khoản sử dụng</h1>
<p class="page-lead">Nội dung AI WIKI TOTAL dùng cho mục đích tham khảo — không phải chào hàng thương mại.</p></header>
<div class="prose about-prose">
<section class="prose-sec"><h2>Tính chất nội dung</h2>
<p>Toàn bộ bài viết là kiến thức tham khảo tổng hợp bằng tiếng Việt, tuân theo nguyên tắc knowledge-first: ưu tiên dữ kiện đã xác minh, ghi rõ tính chất minh họa cho hình ảnh và không đưa số liệu kinh doanh trần trụi. Nội dung không thay thế tư vấn chuyên môn của nhà cung cấp dịch vụ hoặc kỹ thuật viên.</p></section>
<section class="prose-sec"><h2>Giới hạn trách nhiệm</h2>
<p>Giá cả, quy định thuê xe và tình trạng pháp lý có thể thay đổi theo thời gian và theo địa phương. Trước khi quyết định, hãy đối chiếu với nhà cung cấp dịch vụ hoặc cơ quan có thẩm quyền. AI WIKI TOTAL không chịu trách nhiệm về tổn thất phát sinh do dựa hoàn toàn vào nội dung tham khảo trên site.</p></section>
<section class="prose-sec"><h2>Bản quyền và trích dẫn</h2>
<p>Bạn có thể trích dẫn đoạn ngắn kèm đường dẫn về bài gốc. Việc sao chép hàng loạt bài viết, phát hành lại thành bộ sưu tập hoặc dùng nội dung cho mục đích thương mại cần sự đồng ý của ban biên tập.</p></section>
</div>`;
  return S.page({
    path: 'dieu-khoan-su-dung/', title: 'Điều khoản sử dụng — AI WIKI TOTAL', description: 'Điều khoản sử dụng nội dung AI WIKI TOTAL: kiến thức tham khảo, không phải chào hàng thương mại.',
    content, headExtra: K.jsonld(K.breadcrumbSchema(trail)),
  });
}

// ---------- Tìm kiếm ----------
function renderSearchPage() {
  const trail = [{ name: 'Trang chủ', href: '' }, { name: 'Tìm kiếm', href: 'tim-kiem/' }];
  const content = `
${S.breadcrumbHtml(trail)}
<header class="page-head"><h1>Tìm kiếm</h1>
<p class="page-lead">Nhập từ khoá để tìm trong toàn bộ AI WIKI TOTAL — hỗ trợ tiếng Việt có dấu và không dấu.</p></header>
<section class="search-page-box">
  <form role="search" id="page-search-form">
    <label class="visually-hidden" for="page-search-input">Từ khoá tìm kiếm</label>
    <input type="search" id="page-search-input" autocomplete="off" placeholder="${S.esc(SITE.searchPlaceholder)}">
    <button type="submit">Tìm kiếm</button>
  </form>
  <div class="search-results" id="page-search-results" aria-live="polite"></div>
</section>`;
  return S.page({ path: 'tim-kiem/', title: 'Tìm kiếm — AI WIKI TOTAL', description: 'Tìm kiếm nội dung trong AI WIKI TOTAL.', content, headExtra: K.jsonld(K.breadcrumbSchema(trail)) });
}

// ---------- 404 ----------
function render404() {
  const popular = ['thue-xe', 'moto', 'garage', 'market', 'guide'].map(slug => {
    const c = CATEGORIES.find(x => x.slug === slug);
    return `<a class="chip" href="${S.u(c.slug + '/')}">${S.esc(c.name)}</a>`;
  }).join('');
  const content = `
<header class="page-head">
  <p class="eyebrow">Lỗi 404</p>
  <h1>Không tìm thấy trang</h1>
  <p class="page-lead">Trang bạn tìm không tồn tại hoặc đã di chuyển. Thử tìm từ khoá, chọn một danh mục bên dưới hoặc quay về trang chủ.</p>
</header>
<section class="search-page-box">
  <form role="search" action="${S.u('tim-kiem/')}" method="get">
    <label class="visually-hidden" for="nf-search-input">Từ khoá tìm kiếm</label>
    <input id="nf-search-input" type="search" name="q" placeholder="${S.esc(SITE.searchPlaceholder)}">
    <button type="submit">Tìm kiếm</button>
  </form>
</section>
<section class="chips" aria-label="Danh mục gợi ý">
  <h2 class="section-h">Danh mục để bắt đầu</h2>
  ${popular}
</section>
<p><a class="read-more" href="${S.u('')}">Về trang chủ →</a></p>`;
  return S.page({ path: '404.html', title: 'Không tìm thấy trang — AI WIKI TOTAL', description: 'Trang không tồn tại.', content });
}

module.exports = { up, visibleText, wordCount, readMin, formatDate, renderHomepage, renderCategory, renderHub, renderArticle, renderAbout, renderContact, renderPrivacy, renderTerms, renderSearchPage, render404 };
