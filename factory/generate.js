#!/usr/bin/env node
// AI WIKI TOTAL — trình sinh trang tĩnh (generator-first)
// Cách chạy: node factory/generate.js [--out <thư-mục>] [--check]
// Mọi trang HTML công khai đều sinh từ dữ liệu — KHÔNG patch tay HTML.
'use strict';
const fs = require('fs');
const path = require('path');
const { SITE, HOME_CATEGORY_ORDER } = require('./site.config');
const { CATEGORIES } = require('./data/categories');
const { u } = require('./lib/shell');
const R = require('./lib/render');

function loadArticles() {
  const dir = path.join(__dirname, 'data', 'articles');
  const out = [];
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.js')).sort()) {
    out.push(require(path.join(dir, f)));
  }
  return out;
}

// path so với gốc repo: 'thue-xe/xe-may/…/' — site GitHub Pages phục vụ repo gốc dưới /total/
function articlePath(a) {
  if (a.hub) return `${a.category}/${a.hub}/${a.slug}/`;
  return `${a.category}/${a.slug}/`;
}
function stripTotal(p) { return String(p).replace(/^total\//, ''); }

function buildSearchIndex(pages) {
  // Nguồn duy nhất: mọi trang + bài viết đã ghi vào pagesForIndex — không tạo mục trùng
  return pages.map(p => ({
    kind: p.kind, url: p.urlPath, title: p.title, description: p.description || '',
    category: p.category || '', hub: p.hub || '', entities: p.entities || [],
    keywords: p.keywords || [], summary: (p.summary || '').slice(0, 260),
  }));
}

function buildChatbotIndex(articles) {
  return articles.map(a => ({
    url: stripTotal(a.path), title: a.title, category: a.catName, hub: a.hubName || '',
    summary: a.summary, quickAnswer: a.quickAnswer, keyPoints: a.keyPoints.slice(0, 4),
    entities: a.entities, keywords: a.keywords,
  }));
}

function xmlEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function sitemapFile(name, urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(p => `  <url><loc>${xmlEsc(SITE.baseUrl + p.replace(/^total\//, ''))}</loc></url>`).join('\n')}\n</urlset>\n`;
}
function sitemapIndex() {
  const files = ['sitemap-pages.xml', 'sitemap-categories.xml', 'sitemap-hubs.xml', 'sitemap-articles.xml'];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${files.map(f => `  <sitemap><loc>${xmlEsc(SITE.baseUrl + f)}</loc></sitemap>`).join('\n')}\n</sitemapindex>\n`;
}
function robots() {
  return `# robots.txt — AI WIKI TOTAL\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE.baseUrl}sitemap.xml\n`;
}

function write(outDir, rel, content) {
  // rel kết thúc bằng '/' => trang thư mục => thêm index.html
  const fileRel = rel.endsWith('/') ? rel + 'index.html' : rel;
  const file = path.join(outDir, fileRel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  return fileRel;
}

function main() {
  const args = process.argv.slice(2);
  const checkMode = args.includes('--check');
  const outIdx = args.indexOf('--out');
  const outDir = outIdx >= 0 ? path.resolve(args[outIdx + 1]) : path.resolve(__dirname, '..');

  const articlesRaw = loadArticles().map(a => {
    const cat = CATEGORIES.find(c => c.slug === a.category);
    if (!cat) throw new Error('Bài "' + a.slug + '" tham chiếu danh mục không tồn tại: ' + a.category);
    const hub = a.hub ? cat.children.find(h => h.slug === a.hub) : null;
    if (a.hub && !hub) throw new Error('Bài "' + a.slug + '" tham chiếu hub không tồn tại: ' + a.hub);
    const wordCount = R.wordCount(
      [a.title, a.summary, a.quickAnswer, a.keyPoints.join(' '),
       a.sections.map(s => s.h2 + ' ' + s.html).join(' '),
       (a.checklist || []).join(' '), (a.steps || []).map(s => s.title + ' ' + s.detail).join(' '),
       (a.warnings || []).join(' '), (a.notes || []).join(' ')].join(' '));
    return { ...a, catName: cat.name, hubName: hub ? hub.name : null, path: articlePath(a), wordCount };
  });
  const bySlug = {};
  for (const a of articlesRaw) bySlug[a.slug] = a;

  const manifest = []; // [{rel, kind}]
  const pagesForIndex = [];
  const urlOf = (rel) => {
    if (rel === 'index.html') return '';
    // '/index.html' → đường dẫn thư mục; URL công khai = tiền tố /total/ của GitHub Pages + rel
    return stripTotal(rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel);
  };
  const put = (rel, content, meta) => {
    const written = write(outDir, rel, content);
    manifest.push({ rel: written, kind: meta.kind });
    if (meta.indexable !== false) {
      pagesForIndex.push({ kind: meta.kind, urlPath: urlOf(written), title: meta.title, ...meta });
    }
  };

  // Trang chủ
  put('index.html', R.renderHomepage(articlesRaw), { kind: 'page', title: SITE.homeTitle, description: SITE.homeDescription, category: '', summary: SITE.tagline });

  // Giới thiệu + Tìm kiếm + 404
  const stats = { parents: CATEGORIES.length, hubs: CATEGORIES.reduce((n, c) => n + c.children.length, 0) };
  put('gioi-thieu/index.html', R.renderAbout(stats), { kind: 'page', title: 'Giới thiệu AI WIKI TOTAL', description: 'Giới thiệu về AI WIKI TOTAL', category: '' });
  put('tim-kiem/index.html', R.renderSearchPage(), { kind: 'page', title: 'Tìm kiếm', description: 'Tìm kiếm nội dung AI WIKI TOTAL', category: '', indexable: false });
  put('404.html', R.render404(), { kind: 'page', title: 'Không tìm thấy trang', description: '', category: '', indexable: false });

  // Danh mục cha + hub con
  const catUrls = [], hubUrls = [], artUrls = [];
  for (const cat of CATEGORIES) {
    put(`${cat.slug}/index.html`, R.renderCategory(cat, articlesRaw),
      { kind: 'category', title: cat.name, description: cat.tagline, category: cat.name, summary: cat.metaDescription });
    catUrls.push(`${cat.slug}/`);
    for (const hub of cat.children) {
      put(`${cat.slug}/${hub.slug}/index.html`, R.renderHub(cat, hub, articlesRaw),
        { kind: 'hub', title: hub.name, description: hub.desc, category: cat.name, hub: hub.name, summary: hub.moTa, keywords: hub.chuDe });
      hubUrls.push(`${cat.slug}/${hub.slug}/`);
    }
  }

  // Bài viết
  for (const a of articlesRaw) {
    const cat = CATEGORIES.find(c => c.slug === a.category);
    const hub = a.hub ? cat.children.find(h => h.slug === a.hub) : null;
    put(a.path, R.renderArticle(cat, hub, a, articlesRaw, bySlug),
      { kind: 'article', title: a.title, description: a.metaDescription, category: cat.name, hub: hub ? hub.name : '', summary: a.summary, entities: a.entities, keywords: a.keywords });
    artUrls.push(a.path);
  }

  // Chỉ mục tìm kiếm + chatbot
  const searchIdx = buildSearchIndex(pagesForIndex);
  put('assets/data/search-index.json', JSON.stringify(searchIdx, null, 1), { kind: 'data', title: 'Chỉ mục tìm kiếm', indexable: false });
  put('assets/data/chatbot-index.json', JSON.stringify(buildChatbotIndex(articlesRaw), null, 1), { kind: 'data', title: 'Chỉ mục chatbot', indexable: false });

  // Sitemap + robots
  put('sitemap-pages.xml', sitemapFile('pages', ['', 'gioi-thieu/']), { kind: 'sitemap', title: 'sitemap pages', indexable: false });
  put('sitemap-categories.xml', sitemapFile('categories', catUrls), { kind: 'sitemap', title: 'sitemap categories', indexable: false });
  put('sitemap-hubs.xml', sitemapFile('hubs', hubUrls), { kind: 'sitemap', title: 'sitemap hubs', indexable: false });
  put('sitemap-articles.xml', sitemapFile('articles', artUrls), { kind: 'sitemap', title: 'sitemap articles', indexable: false });
  put('sitemap.xml', sitemapIndex(), { kind: 'sitemap', title: 'sitemap index', indexable: false });
  put('robots.txt', robots(), { kind: 'robots', title: 'robots', indexable: false });

  // Manifest dùng cho test
  fs.mkdirSync(path.join(outDir, 'factory/state'), { recursive: true });
  fs.writeFileSync(path.join(outDir, 'factory/state/manifest.json'), JSON.stringify(
    manifest.map(m => ({ rel: m.rel, kind: m.kind })), null, 1));

  console.log(`Đã sinh ${manifest.length} file vào ${outDir}`);
  console.log(`  - ${CATEGORIES.length} danh mục cha, ${stats.hubs} hub con, ${articlesRaw.length} bài viết`);

  if (checkMode) {
    // Kiểm tra không patch tay: sinh lại phải phủ đúng mọi file HTML đang có
    const htmlOnDisk = fs.readdirSync ? walk(outDir, outDir).filter(f => f.endsWith('.html')) : [];
    const generated = manifest.map(m => m.rel).filter(f => f.endsWith('.html'));
    const missing = generated.filter(g => !htmlOnDisk.includes(g));
    const extra = htmlOnDisk.filter(f => !['factory', 'docs'].some(d => f.startsWith(d)) && !generated.includes(f));
    if (missing.length || extra.length) {
      console.error('KIỂM TRA THẤT BẠI: HTML trên đĩa lệch với kết quả sinh.');
      if (missing.length) console.error('  Thiếu: ' + missing.slice(0, 5).join(', '));
      if (extra.length) console.error('  Thừa: ' + extra.slice(0, 5).join(', '));
      process.exit(1);
    }
    console.log('Kiểm tra --check: HTML trên đĩa khớp kết quả sinh.');
  }
}

function walk(root, dir, acc) {
  acc = acc || [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(root, p, acc);
    else acc.push(path.relative(root, p).split(path.sep).join('/'));
  }
  return acc;
}

if (require.main === module) main();
module.exports = { articlePath, stripTotal, buildSearchIndex, buildChatbotIndex };
