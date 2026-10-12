#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const { SITE, EDITORIAL, CONTENT_SLOTS } = require('./site.config');
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
assert(page.includes('href="/assets/css/atlas.css"'));
assert(page.includes('https://wiki.thuexemaynguyentu.com/lien-he/'));
assert(!page.includes('editorial-slot'));
console.log('SHARED_SITE_QA_OK');
