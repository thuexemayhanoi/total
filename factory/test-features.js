#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { SITE, FEATURES, PUBLISHER_PROFILE } = require('./site.config');
const { chooseNeighbors } = require('./lib/related');
const { extractArticleHeadings, loadArticles } = require('./generate');
const IDX = require('./lib/indexing');
const S = require('./lib/shell');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const matrix = JSON.parse(read('factory/state/matrix.json'));
const published = new Set(matrix.slots.filter(x => x.state === 'PUBLISHED').map(x => x.slug));
const articles = loadArticles().filter(a => published.has(a.slug));
const bySlug = Object.fromEntries(articles.map(a => [a.slug, a]));
const search = JSON.parse(read('assets/data/search-index.json'));
const sitemap = read('sitemap-articles.xml');
const searchJs = read('assets/js/search.js');

assert.deepEqual(FEATURES, { smartSearch: true, previousNext: true, authorBox: true });
assert.equal(articles.length, published.size, 'PUBLISHED modules count');
assert.equal(search.filter(x => x.kind === 'article').length, articles.length);
const policy = IDX.load();
const noindexCount = articles.filter(a => IDX.isNoindex(policy, a.slug)).length;
assert.equal((sitemap.match(/<url>/g) || []).length, articles.length - noindexCount, 'sitemap-articles = bài PUBLISHED trừ bài noindex theo index-policy');
assert(!sitemap.includes('github.io/total'));
assert(searchJs.includes('loadIndex(function () {});'), 'index must be loaded when modal opens');
assert(searchJs.includes('LOAD_PROMISE'), 'multiple searches share one fetch');
assert(searchJs.includes('entry.headings'), 'H2/H3 searchable');
assert(searchJs.includes('entry.primaryKeyword'), 'primary keyword searchable');

assert.equal(PUBLISHER_PROFILE.name, SITE.publisher);
assert(S.authorBoxHtml().includes('class="author-box"'));
assert(S.authorBoxHtml().includes('href="/lien-he/"'));
assert(S.authorBoxHtml().includes('logo-mark'));

const searchMap = new Map(search.filter(d => d.kind === 'article').map(d => [d.url, d]));
for (const a of articles) {
  const url = a.category + '/' + (a.hub ? a.hub + '/' : '') + a.slug + '/';
  const html = read(url + 'index.html');
  const item = searchMap.get(url);
  assert(item, 'indexed: ' + a.slug);
  assert.deepEqual(item.headings, extractArticleHeadings(a), 'H2/H3 search fields: ' + a.slug);
  assert.equal(item.description, a.metaDescription);
  assert(item.primaryKeyword.length > 0, 'primary keyword: ' + a.slug);
  assert(html.includes('class="author-box"'), 'publisher box: ' + a.slug);
  assert(html.includes('href="/lien-he/"'), 'publisher contact: ' + a.slug);
  assert(html.includes('href="/assets/css/atlas.css"'), 'CSS: ' + a.slug);
  assert(html.includes('rel="canonical" href="' + SITE.baseUrl + url + '"'), 'canonical: ' + a.slug);
  const noindexed = IDX.isNoindex(policy, a.slug);
  assert.equal(/<meta name="robots" content="noindex,follow">/.test(html), noindexed, 'meta robots ⇔ index-policy: ' + a.slug);
  assert.equal(sitemap.includes('<loc>' + SITE.baseUrl + url + '</loc>'), !noindexed, 'sitemap ⇔ không noindex: ' + a.slug);
  assert(html.includes('type="application/ld+json"'), 'schema retained: ' + a.slug);

  const nav = html.match(/<nav class="art-pn"[^>]*>([\s\S]*?)<\/nav>/);
  const peers = chooseNeighbors(a, articles);
  assert.equal(!!nav, !!(peers.prev || peers.next), 'nav state: ' + a.slug);
  if (nav) {
    const targets = [...nav[1].matchAll(/href="(\/[^"]+)"/g)].map(m => m[1]);
    const expected = [peers.prev, peers.next].filter(Boolean)
      .map(x => '/' + x.category + '/' + (x.hub ? x.hub + '/' : '') + x.slug + '/');
    assert.deepEqual(targets, expected, 'neighbor order: ' + a.slug);
    for (const target of targets) {
      const targetSlug = target.split('/').filter(Boolean).at(-1);
      const dest = bySlug[targetSlug];
      assert(dest && dest.category === a.category, 'only PUBLISHED same-category: ' + a.slug);
      assert(fs.existsSync(path.join(root, target.slice(1), 'index.html')), 'no broken neighbor: ' + target);
    }
  }
}
// Silo boundary regression, including singleton-hub category fallback.
const demo = [
  { slug: 'a', category: 'thue-xe', hub: 'xe-may', date: '2026-01-01' },
  { slug: 'b', category: 'thue-xe', hub: 'xe-may', date: '2026-02-01' },
  { slug: 'c', category: 'thue-xe', hub: 'xe-dien', date: '2026-03-01' },
  { slug: 'd', category: 'garage', hub: 'phanh', date: '2026-04-01' }
];
assert.equal(chooseNeighbors(demo[0], demo).next.slug, 'b');
assert.equal(chooseNeighbors(demo[1], demo).next, null);
assert.equal(chooseNeighbors(demo[2], demo).prev.slug, 'b');
assert.equal(chooseNeighbors(demo[3], demo).next, null);

// Render-level regression (test.js phần 15 khớp hợp đồng này): bài đầu tiên của một danh mục mới KHÔNG có khối art-pn (không có hàng
// xóm cùng danh mục); từ bài thứ hai trở đi mọi bài trong danh mục đều có. Dữ liệu tổng hợp, không đụng site thật.
{
  const R = require('./lib/render');
  const { CATEGORIES } = require('./data/categories');
  const cat = CATEGORIES.find(c => c.slug === 'review');
  const hub = cat.children.find(h => h.slug === 'review-xe');
  const mk = (slug, date) => ({
    slug, title: 'Bài thử ' + slug, seoTitle: 'Bài thử ' + slug, metaDescription: 'Mô tả thử nghiệm cho bài ' + slug + ' dùng trong kiểm thử.',
    summary: 'Tóm tắt', quickAnswer: 'Trả lời nhanh', keyPoints: ['Ý một', 'Ý hai'], category: cat.slug, hub: hub.slug, date, updated: date,
    entities: ['a'], keywords: ['b'], sections: [{ h2: 'Mục một', html: '<p>Nội dung.</p>' }], checklist: [], steps: [], warnings: [], notes: [],
    references: [], related: [], path: cat.slug + '/' + hub.slug + '/' + slug + '/', catName: cat.name, hubName: hub.name, wordCount: 1200
  });
  const render = (list, i) => R.renderArticle(cat, hub, list[i], list, Object.fromEntries(list.map(x => [x.slug, x])));
  const lone = [mk('mot', '2026-10-01')];
  assert(!render(lone, 0).includes('art-pn'), 'danh mục 1 bài: không có khối bài trước/sau');
  const pair = [mk('mot', '2026-10-01'), mk('hai', '2026-10-02')];
  assert(render(pair, 0).includes('pn-card pn-next') && !render(pair, 0).includes('pn-card pn-prev'), 'danh mục 2 bài: bài đầu chỉ có thẻ "Bài sau"');
  assert(render(pair, 1).includes('pn-card pn-prev') && !render(pair, 1).includes('pn-card pn-next'), 'danh mục 2 bài: bài cuối chỉ có thẻ "Bài trước"');
}
console.log('FEATURE_QA_OK articles=' + articles.length +
  ' searchHeadings=' + articles.length + ' authorBoxes=' + articles.length);
