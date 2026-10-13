#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const { SITE, EDITORIAL, CONTENT_SLOTS, HOME_CATEGORY_ORDER, PRIMARY_NAV } = require('./site.config');
const { CATEGORIES } = require('./data/categories');
const { renderSlot, internalHref } = require('./lib/slots');
const { chooseRelated } = require('./lib/related');
const S = require('./lib/shell');
assert.equal(SITE.baseUrl, 'https://wiki.thuexemaynguyentu.com/');
assert.equal(SITE.basePath, '/');
assert.equal(internalHref('tim-kiem/'), '/tim-kiem/');
assert.throws(() => internalHref('https://external.example/'), /INVALID/);
assert.throws(() => internalHref('../'), /INVALID/);
assert.throws(() => internalHref('javascript:alert(1)'), /INVALID/);
for (const name of Object.keys(CONTENT_SLOTS)) assert.equal(renderSlot(name), '', 'slot disabled by default');
const demo = renderSlot('article.after-prose', {}, {
  enabled: true, type: 'editorial-link', title: '<Test>', text: 'Mời tìm bài', label: 'Tìm', href: 'tim-kiem/',
});
assert(demo.includes('&lt;Test&gt;'));
assert(demo.includes('href="/tim-kiem/"'));
assert(!demo.includes('<Test>'));
const all = [
  { slug: 'a', category: 'thue-xe', hub: 'xe-may', related: ['b', 'c', 'b'], date: '2026-01-01' },
  { slug: 'b', category: 'thue-xe', hub: 'xe-may', date: '2026-02-01' },
  { slug: 'c', category: 'thue-xe', hub: 'xe-may', date: '2026-01-31' },
  { slug: 'd', category: 'thue-xe', hub: 'xe-may', date: '2026-02-02' },
  { slug: 'e', category: 'garage', hub: 'phanh', date: '2026-02-03' },
];
const lookup = Object.fromEntries(all.map(a => [a.slug, a]));
const r = chooseRelated(all[0], all, lookup, EDITORIAL.related);
assert.deepEqual(r.map(a => a.slug), ['b', 'c', 'd']);
assert.deepEqual(chooseRelated(all[0], all, lookup, { autoFill: false }).map(a => a.slug), ['b', 'c']);
assert(!r.some(a => a.slug === 'a' || a.slug === 'e'));
const page = S.page({ path: 'lien-he/', title: 'Liên hệ', description: 'Kiểm thử', content: '<p>QA</p>' });
const stylesheetHash = require('node:crypto').createHash('sha256')
  .update(require('node:fs').readFileSync(require('node:path').join(__dirname, '../assets/css/atlas.css')))
  .digest('hex').slice(0, 12);
assert(page.includes('href="/assets/css/atlas.css?v=' + stylesheetHash + '"'));
const navScriptHash = require('node:crypto').createHash('sha256')
  .update(require('node:fs').readFileSync(require('node:path').join(__dirname, '../assets/js/nav.js')))
  .digest('hex').slice(0, 12);
assert(page.includes('src="/assets/js/nav.js?v=' + navScriptHash + '"'));
assert(page.includes('class="menu-close dd-close"') && page.includes('aria-label="Đóng menu Thuê xe"'));
assert(page.includes('class="menu-close mega-close"') && page.includes('aria-label="Đóng menu Danh mục"'));
assert(page.includes('https://wiki.thuexemaynguyentu.com/lien-he/'));
const footer = S.footerHtml();
const mega = S.megaMenu();
const mobile = S.headerHtml();
assert(footer.includes('<a href="/">Trang chủ</a>'), 'Footer has a labeled homepage link');
assert(footer.includes('class="footer-intro"') && footer.includes('class="footer-intro-title"'),
  'Premium footer introduction uses shared template');
assert(footer.includes('class="footer-action-primary" href="/tim-kiem/"') &&
       footer.includes('class="footer-action-secondary" href="/thue-xe/"'),
  'Footer discovery actions point to existing search/rental URLs');
assert(footer.includes('class="footer-bottom"') && footer.includes('class="footer-top-link" href="#"'),
  'Footer has a back-to-top link and a closing information strip');
assert(footer.includes('class="footer-directory-meta">') &&
       footer.includes(HOME_CATEGORY_ORDER.length + ' danh mục'),
  'Footer directory shows live category counts');
assert(footer.includes('<summary class="footer-directory-toggle">Danh mục'), 'Footer has category menu label');
assert(footer.includes('aria-label="Tất cả danh mục và chủ đề"'), 'Footer has accessible directory nav');
let expectedHubLinks = 0;
for (const slug of HOME_CATEGORY_ORDER) {
  const cat = CATEGORIES.find(c => c.slug === slug);
  assert(cat, 'Configured category exists: ' + slug);
  const catHref = '/' + slug + '/';
  assert(footer.includes('class="footer-directory-cat" href="' + catHref + '">' + S.esc(cat.name) + '</a>'),
    'Footer category label/link matches menu: ' + slug);
  for (const hub of cat.children) {
    const href = '/' + slug + '/' + hub.slug + '/';
    const label = S.esc(hub.name);
    assert(mega.includes('class="mega-sub" href="' + href + '">' + label + '</a>'),
      'Mega menu contains child hub: ' + href);
    assert(mobile.includes('class="mnav-child" href="' + href + '">' + label + '</a>'),
      'Mobile menu contains child hub: ' + href);
    assert(footer.includes('class="footer-hub" href="' + href + '">' + label + '</a>'),
      'Footer mirrors child hub label/link: ' + href);
    expectedHubLinks++;
  }
}
assert.equal((footer.match(/class="footer-hub" href=/g) || []).length, expectedHubLinks,
  'Footer has exactly all menu child hub links');
for (const item of PRIMARY_NAV.filter(n => !n.mega && !n.dropdown)) {
  const href = '/' + (item.href || '');
  assert(footer.includes('href="' + href + '">' + S.esc(item.label) + '</a>'),
    'Footer includes top-level menu label: ' + item.label);
}
assert(page.includes('class="footer-directory"'), 'Directory is rendered on every generated page');
const footerCss = require('node:fs').readFileSync(require('node:path').join(__dirname, '../assets/css/atlas.css'), 'utf8');
assert(footerCss.includes('.footer-intro') && footerCss.includes('.footer-directory-grid') &&
       footerCss.includes('@media (max-width: 479px)'),
  'Footer styles and mobile presentation are retained');
assert(footerCss.includes('justify-content: flex-start; gap: 10px 24px;') &&
       footerCss.includes('scroll-margin-top: calc(var(--header-h) + var(--sat) + 16px);'),
  'Footer back-to-top link avoids fixed chat launcher and sticky header');
assert(footerCss.includes('.footer-action-primary, .footer-action-secondary { flex: 0 0 auto; width: 100%; min-height: 46px; }'),
  'Phone CTA buttons cannot stretch to 190px height in column layout');
assert(!page.includes('editorial-slot'));
console.log('SHARED_SITE_QA_OK');
