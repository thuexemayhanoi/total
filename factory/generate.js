#!/usr/bin/env node
// AI WIKI TOTAL — trình sinh trang tĩnh (generator-first)
// Cách chạy: node factory/generate.js [--out <thư-mục>] [--check]
// Mọi trang HTML công khai đều sinh từ dữ liệu — KHÔNG patch tay HTML.
//
// HARDENING:
//   - buildAll() THUẦN trong BẢN NHỚ (không ghi đĩa) — writeOutputs() mới ghi.
//   - --check READ-ONLY BYTE-EXACT: KHÔNG ghi đĩa, KHÔNG sinh lại rồi so —
//     so từng BYTE file trên đĩa với kết quả sinh, gộp cả sitemap/robots/data
//     JSON và manifest. Bất kỳ THIẾU / LỆCH NỘI DUNG / THỪA / LỆCH MANIFEST
//     nào cũng exit 1 kèm tên file.
//   - loadArticles FAIL LOUD: module bài lỗi -> in tên file + lỗi, exit khác 0.
'use strict';
const fs = require('fs');
const path = require('path');
const { SITE, HOME_CATEGORY_ORDER } = require('./site.config');
const { CATEGORIES } = require('./data/categories');
const R = require('./lib/render');

// ---------- Nạp dữ liệu ----------
// FAIL LOUD: module bài lỗi làm toàn bộ xưởng dừng, không âm thầm bỏ qua.
function loadArticles() {
  const dir = path.join(__dirname, 'data', 'articles');
  const out = [];
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.js')).sort()) {
    let a;
    try {
      a = require(path.join(dir, f));
    } catch (e) {
      e.message = 'Không nạp được module bài factory/data/articles/' + f + ' — ' + (e && e.message ? e.message : e);
      throw e;
    }
    out.push(a);
  }
  return out;
}

// path so với gốc repo: 'thue-xe/xe-may/…/' — site GitHub Pages phục vụ repo gốc dưới /total/
function articlePath(a) {
  if (a.hub) return `${a.category}/${a.hub}/${a.slug}/`;
  return `${a.category}/${a.slug}/`;
}
function stripTotal(p) { return String(p).replace(/^total\//, ''); }

// rel do generator mô tả ('…/' cho trang thư mục) -> đường dẫn file trên đĩa
// ('…/index.html'). THUẦN — dùng cho mọi lối ghi/so sánh.
function normalizeRel(rel) {
  return rel.endsWith('/') ? rel + 'index.html' : rel;
}

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

// ---------- BÀI NÀO ĐƯỢC LÊN SITE (live filter) ----------
// Chỉ render bài thuộc slot PUBLISHED, cộng thêm slug mà publish flow yêu cầu
// tường minh qua env FACTORY_GEN_INCLUDE (bài đang được publish trong txn này —
// slot trên đĩa chưa kịp lật). Bài REPAIR/WAITING_FOR_WRITER/PLANNED là DRAFT
// chưa qua gate: KHÔNG render trang, KHÔNG vào sitemap/search/chatbot — không
// rò bài FAIL ra production site. Module không có slot trong ma trận giữ nguyên
// hành vi cũ (push-scope/backlog phụ trách phát hiện module lạ).
function filterLiveArticles(articlesAll) {
  let m = null;
  try { m = JSON.parse(fs.readFileSync(path.join(__dirname, 'state', 'matrix.json'), 'utf8')); }
  catch (e) { m = null; } // không đọc được ma trận -> KHÔNG lọc (fail-open cho standalone)
  if (!m || !Array.isArray(m.slots)) return articlesAll;
  const stateOf = new Map();
  for (const s of m.slots) if (s && s.slug) stateOf.set(s.slug, s.state);
  const extra = new Set(String(process.env.FACTORY_GEN_INCLUDE || '').split(/[\s,]+/).filter(Boolean));
  const kept = [];
  const skipped = [];
  for (const a of articlesAll) {
    const st = stateOf.get(a.slug);
    if (st === undefined || st === 'PUBLISHED' || extra.has(a.slug)) kept.push(a);
    else skipped.push(a.slug + ':' + st);
  }
  if (skipped.length) {
    console.error('GEN_SKIP_DRAFT: ' + skipped.join(', ') + ' — draft chưa PUBLISHED, KHÔNG render/KHÔNG vào sitemap.');
  }
  return kept;
}

// ---------- Sinh THUẦN trong BẢN NHỚ ----------
// Trả về { manifest, files, manifestContent, stats } — KHÔNG ghi đĩa.
function buildAll() {
  const articlesAll = loadArticles().map(a => {
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
  // Live filter: draft (REPAIR/WAITING/PLANNED) không lên site; publish flow
  // yêu cầu thêm slug đang publish qua FACTORY_GEN_INCLUDE.
  const articlesRaw = filterLiveArticles(articlesAll);
  const bySlug = {};
  for (const a of articlesRaw) bySlug[a.slug] = a;

  const manifest = []; // [{rel, kind}]
  const files = {};    // rel (đã normalize) -> content
  const pagesForIndex = [];
  const urlOf = (rel) => {
    if (rel === 'index.html') return '';
    // '/index.html' → đường dẫn thư mục; URL công khai = tiền tố /total/ của GitHub Pages + rel
    return stripTotal(rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel);
  };
  const put = (rel, content, meta) => {
    const written = normalizeRel(rel);
    files[written] = content;
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
  put('lien-he/index.html', R.renderContact(), { kind: 'page', title: 'Liên hệ — AI WIKI TOTAL', description: 'Trang liên hệ của AI WIKI TOTAL — cổng kiến thức, không bán xe và không đặt xe hộ.', category: '' });
  put('chinh-sach-bao-mat/index.html', R.renderPrivacy(), { kind: 'page', title: 'Chính sách bảo mật — AI WIKI TOTAL', description: 'Chính sách bảo mật của AI WIKI TOTAL: trang kiến thức tĩnh, không tài khoản, không form thu thập dữ liệu cá nhân.', category: '' });
  put('dieu-khoan-su-dung/index.html', R.renderTerms(), { kind: 'page', title: 'Điều khoản sử dụng — AI WIKI TOTAL', description: 'Điều khoản sử dụng nội dung AI WIKI TOTAL: kiến thức tham khảo, không phải chào hàng thương mại.', category: '' });
  put('tim-kiem/index.html', R.renderSearchPage(), { kind: 'page', title: 'Tìm kiếm', description: 'Tìm kiếm nội dung AI WIKI TOTAL', category: '', indexable: false });
  put('404.html', R.render404(), { kind: 'page', title: 'Không tìm thấy trang', description: '', category: '', indexable: false });

  // Danh mục cha + hub con (kể cả danh mục 'docs' — docs/*.html đều là trang sinh)
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
  put('sitemap-pages.xml', sitemapFile('pages', ['', 'gioi-thieu/', 'lien-he/', 'chinh-sach-bao-mat/', 'dieu-khoan-su-dung/']), { kind: 'sitemap', title: 'sitemap pages', indexable: false });
  put('sitemap-categories.xml', sitemapFile('categories', catUrls), { kind: 'sitemap', title: 'sitemap categories', indexable: false });
  put('sitemap-hubs.xml', sitemapFile('hubs', hubUrls), { kind: 'sitemap', title: 'sitemap hubs', indexable: false });
  put('sitemap-articles.xml', sitemapFile('articles', artUrls), { kind: 'sitemap', title: 'sitemap articles', indexable: false });
  put('sitemap.xml', sitemapIndex(), { kind: 'sitemap', title: 'sitemap index', indexable: false });
  put('robots.txt', robots(), { kind: 'robots', title: 'robots', indexable: false });

  const manifestContent = JSON.stringify(manifest.map(m => ({ rel: m.rel, kind: m.kind })), null, 1);
  return {
    manifest,
    files,
    manifestContent,
    stats: {
      parents: CATEGORIES.length,
      hubs: stats.hubs,
      articles: articlesRaw.length,
      files: manifest.length,
    },
  };
}

// ---------- Ghi kết quả ra đĩa (chỉ khi KHÔNG --check) ----------
function writeOutputs(outDir, built) {
  built = built || buildAll();
  let count = 0;
  for (const rel of Object.keys(built.files)) {
    const file = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, built.files[rel]);
    count++;
  }
  fs.mkdirSync(path.join(outDir, 'factory/state'), { recursive: true });
  fs.writeFileSync(path.join(outDir, 'factory/state/manifest.json'), built.manifestContent);
  return count;
}

// ---------- Namespace mà generator sở hữu ----------
// Mọi file sinh ra nằm trong: *.html (bất kỳ đâu trừ thư mục làm việc),
// sitemap*.xml, robots.txt, assets/data/*.json.
// Bỏ qua: .git, .github, factory, scripts, node_modules và mọi thư mục/file ẩn (dấu chấm).
function walkGeneratedNamespace(root, dir, acc) {
  dir = dir || root;
  acc = acc || [];
  const SKIP_DIRS = new Set(['.git', '.github', 'factory', 'scripts', 'node_modules']);
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walkGeneratedNamespace(root, p, acc);
    } else {
      const rel = path.relative(root, p).split(path.sep).join('/');
      if (rel.endsWith('.html') || /^sitemap.*\.xml$/.test(rel) || rel === 'robots.txt'
          || (rel.startsWith('assets/data/') && rel.endsWith('.json'))) {
        acc.push(rel);
      }
    }
  }
  return acc.sort();
}

// ---------- --check: READ-ONLY BYTE-EXACT ----------
// KHÔNG ghi đĩa ở bất kỳ đường nào. So từng byte của:
//   1) mọi file generator chịu trách nhiệm (THIẾU / LỆCH NỘI DUNG),
//   2) mọi file trong namespace mà generator KHÔNG sinh ra (THỪA),
//   3) factory/state/manifest.json (LỆCH MANIFEST).
function runCheck(rootDir) {
  const root = path.resolve(rootDir || path.resolve(__dirname, '..'));
  const built = buildAll();
  const expected = new Set(Object.keys(built.files));
  const missing = [], mismatched = [], extra = [];
  for (const rel of expected) {
    let disk;
    try {
      disk = fs.readFileSync(path.join(root, rel));
    } catch (e) {
      missing.push(rel);
      continue;
    }
    if (!disk.equals(Buffer.from(built.files[rel], 'utf8'))) mismatched.push(rel);
  }
  for (const rel of walkGeneratedNamespace(root)) {
    if (!expected.has(rel)) extra.push(rel);
  }
  let manifestOk = false;
  let manifestDetail = 'không đọc được factory/state/manifest.json';
  try {
    const diskManifest = fs.readFileSync(path.join(root, 'factory/state/manifest.json'), 'utf8');
    manifestOk = diskManifest === built.manifestContent;
    manifestDetail = manifestOk ? 'khớp' : `đĩa ${diskManifest.length} byte vs sinh ${built.manifestContent.length} byte`;
  } catch (e) { /* giữ manifestOk = false */ }
  const ok = !missing.length && !mismatched.length && !extra.length && manifestOk;
  return { ok, root, missing, mismatched, extra, manifestOk, manifestDetail, stats: built.stats };
}

// ---------- CLI ----------
function main() {
  const args = process.argv.slice(2);
  const checkMode = args.includes('--check');
  const outIdx = args.indexOf('--out');
  const outDir = outIdx >= 0 ? path.resolve(args[outIdx + 1]) : path.resolve(__dirname, '..');

  if (checkMode) {
    const r = runCheck(outDir);
    if (r.ok) {
      console.log(`Kiểm tra --check: ${r.stats.files} file trên đĩa khớp kết quả sinh (byte-exact, gồm cả sitemap/robots/data/manifest).`);
      return;
    }
    console.error('KIỂM TRA THẤT BẠI: output trên đĩa lệch với kết quả sinh (chống patch tay HTML).');
    if (r.missing.length) console.error('  THIẾU (' + r.missing.length + '): ' + r.missing.slice(0, 10).join(', ') + (r.missing.length > 10 ? ', …' : ''));
    if (r.mismatched.length) console.error('  LỆCH NỘI DUNG (' + r.mismatched.length + '): ' + r.mismatched.slice(0, 10).join(', ') + (r.mismatched.length > 10 ? ', …' : ''));
    if (r.extra.length) console.error('  THỪA (' + r.extra.length + '): ' + r.extra.slice(0, 10).join(', ') + (r.extra.length > 10 ? ', …' : ''));
    if (!r.manifestOk) console.error('  LỆCH MANIFEST: ' + r.manifestDetail);
    process.exit(1);
  }

  const built = buildAll();
  const count = writeOutputs(outDir, built);
  console.log(`Đã sinh ${count} file vào ${outDir}`);
  console.log(`  - ${built.stats.parents} danh mục cha, ${built.stats.hubs} hub con, ${built.stats.articles} bài viết`);
}

if (require.main === module) main();
module.exports = { articlePath, stripTotal, buildSearchIndex, buildChatbotIndex, normalizeRel, loadArticles, buildAll, writeOutputs, walkGeneratedNamespace, runCheck };
