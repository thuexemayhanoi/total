// node count-published.js : đếm VERIFIED_PUBLISHED_ARTICLES (READ-ONLY)
// Một bài tính là đã xuất bản thật khi: có dòng trong article-manifest.jsonl (qa_status=pass), slot PUBLISHED trong matrix,
// có file HTML <hub>/<slug>/index.html ở thư mục gốc, thẻ canonical trỏ đúng URL, và có trong sitemap-articles.xml.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..', '..');
const matrix = JSON.parse(fs.readFileSync(path.join(root, 'factory/state/matrix.json'), 'utf8'));
const manifest = fs.readFileSync(path.join(root, 'factory/state/article-manifest.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
const sitemap = fs.readFileSync(path.join(root, 'sitemap-articles.xml'), 'utf8');
const locs = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
const bySlug = new Map(matrix.slots.map(s => [s.slug, s]));
const BASE = 'https://wiki.thuexemaynguyentu.com';
let ok = 0; const bad = [];
const ids = new Set();
for (const r of manifest) {
  if (ids.has(r.id)) { bad.push([r.id, 'trùng id trong manifest']); continue; }
  ids.add(r.id);
  const s = bySlug.get(r.slug);
  if (!s || s.state !== 'PUBLISHED') { bad.push([r.id, 'matrix không PUBLISHED']); continue; }
  if (r.qa_status !== 'pass') { bad.push([r.id, 'qa_status=' + r.qa_status]); continue; }
  const file = path.join(root, s.hub, s.slug, 'index.html');
  if (!fs.existsSync(file)) { bad.push([r.id, 'thiếu HTML']); continue; }
  const url = BASE + '/' + s.hub + '/' + s.slug + '/';
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('rel="canonical" href="' + url + '"')) { bad.push([r.id, 'canonical lệch']); continue; }
  if (!locs.has(url)) { bad.push([r.id, 'không có trong sitemap-articles.xml']); continue; }
  ok++;
}
const publishedSlots = matrix.slots.filter(s => s.state === 'PUBLISHED').length;
console.log(JSON.stringify({ VERIFIED_PUBLISHED_ARTICLES: ok, manifestLines: manifest.length, matrixPublished: publishedSlots, sitemapUrls: locs.size, problems: bad.length, firstProblems: bad.slice(0, 10) }));
