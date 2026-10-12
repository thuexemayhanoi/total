// AI WIKI TOTAL — Topic Index: cache SQLite DERIVED cho chữ ký headline của bài đã xuất bản.
//
// SOURCE OF TRUTH vẫn là factory/data/articles/*.js + matrix.json + topic-matrix.jsonl (committed).
// topic-index.sqlite chỉ lưu kết quả PARSE đắt tiền (require từng module bài) theo stamp file, để
// kiểm tra trùng khi viết bài KHÔNG phải quét lại toàn bộ repo (scale 10k–40k bài). KHÔNG commit,
// xoá/hỏng/stale -> index-rebuild dựng lại an toàn (cập nhật tăng dần: chỉ parse file mới/đổi).
// Ghi: chỉ coordinator. Đọc: mở readOnly.
'use strict';

const fs = require('fs');
const path = require('path');
const G = require('./topic-gate');

const STATE_DIR = path.join(__dirname, '..', 'state');
const DB_FILE = path.join(STATE_DIR, 'topic-index.sqlite');
const ARTICLES_DIR = path.join(__dirname, '..', 'data', 'articles');
const SCHEMA_VERSION = '1';

let _sqlite = null;
function sqlite() {
  if (!_sqlite) {
    // node:sqlite còn ở mức experimental — tắt cảnh báo ồn trong log CLI.
    const orig = process.emitWarning;
    process.emitWarning = function (w) {
      if (/SQLite is an experimental/.test(String(w && w.message ? w.message : w))) return;
      return orig.apply(process, arguments);
    };
    _sqlite = require('node:sqlite');
  }
  return _sqlite;
}

function assertCoordinator(role) {
  if (role !== 'coordinator') throw new Error('TỪ CHỐI: chỉ coordinator được ghi topic-index — vai trò nhận được: ' + JSON.stringify(role || null));
  return true;
}

function open(file, readOnly) {
  const { DatabaseSync } = sqlite();
  return new DatabaseSync(file || DB_FILE, readOnly ? { readOnly: true } : {});
}

function init(db) {
  db.exec('CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT NOT NULL)');
  db.exec('CREATE TABLE IF NOT EXISTS docs (file TEXT PRIMARY KEY, stamp TEXT NOT NULL, slug TEXT NOT NULL, title TEXT NOT NULL, hub TEXT NOT NULL, headline TEXT NOT NULL)');
  db.exec('CREATE INDEX IF NOT EXISTS docs_slug ON docs(slug)');
}

function stampOf(f) {
  const st = fs.statSync(f);
  return Math.round(st.mtimeMs) + ':' + st.size;
}

function parseArticle(f) {
  delete require.cache[require.resolve(f)];
  let a;
  try { a = require(f); } finally { delete require.cache[require.resolve(f)]; }
  if (!a || !a.slug || !a.title) throw new Error('module bài thiếu slug/title');
  return { slug: a.slug, title: a.title, hub: (a.category || '') + (a.hub ? '/' + a.hub : ''), headline: G.articleHeadlineDoc(a) };
}

// Cập nhật tăng dần: parse file mới/đổi, xoá dòng của file đã mất. Trả thống kê.
function rebuild(opts) {
  const o = opts || {};
  assertCoordinator(o.role);
  const dbFile = o.dbFile || DB_FILE;
  const dir = o.articlesDir || ARTICLES_DIR;
  fs.mkdirSync(path.dirname(dbFile), { recursive: true });
  let db;
  try { db = open(dbFile, false); init(db); } catch (e) {
    // file cache hỏng -> xoá và dựng lại từ đầu (an toàn vì chỉ là cache)
    try { fs.unlinkSync(dbFile); } catch (_) { /* không tồn tại */ }
    db = open(dbFile, false); init(db);
  }
  const stats = { total: 0, parsed: 0, reused: 0, removed: 0, broken: 0 };
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort() : [];
  const have = new Map(db.prepare('SELECT file, stamp FROM docs').all().map(r => [r.file, r.stamp]));
  const ins = db.prepare('INSERT OR REPLACE INTO docs (file, stamp, slug, title, hub, headline) VALUES (?, ?, ?, ?, ?, ?)');
  db.exec('BEGIN');
  try {
    for (const f of files) {
      stats.total++;
      const full = path.join(dir, f);
      const stamp = stampOf(full);
      if (have.get(f) === stamp) { stats.reused++; have.delete(f); continue; }
      have.delete(f);
      try {
        const d = parseArticle(full);
        ins.run(f, stamp, d.slug, d.title, d.hub, JSON.stringify(d.headline));
        stats.parsed++;
      } catch (e) {
        stats.broken++;
        db.prepare('DELETE FROM docs WHERE file = ?').run(f);
      }
    }
    for (const gone of have.keys()) { db.prepare('DELETE FROM docs WHERE file = ?').run(gone); stats.removed++; }
    db.prepare('INSERT OR REPLACE INTO meta (k, v) VALUES (?, ?)').run('schema', SCHEMA_VERSION);
    db.prepare('INSERT OR REPLACE INTO meta (k, v) VALUES (?, ?)').run('builtAt', new Date().toISOString());
    db.exec('COMMIT');
  } catch (e) {
    try { db.exec('ROLLBACK'); } catch (_) { /* đã rollback */ }
    db.close();
    throw e;
  }
  db.close();
  return stats;
}

// Đọc toàn bộ chữ ký (read-only). Ném lỗi nếu cache thiếu/hỏng — caller tự rebuild hoặc fallback.
function loadDocs(dbFile) {
  const f = dbFile || DB_FILE;
  if (!fs.existsSync(f)) throw new Error('topic-index chưa có — chạy topic-index-rebuild');
  const db = open(f, true);
  try {
    const q = db.prepare('PRAGMA quick_check').get();
    const v = q && (q.quick_check || q.value || Object.values(q)[0]);
    if (v !== 'ok') throw new Error('topic-index hỏng: ' + v);
    return db.prepare('SELECT file, slug, title, hub, headline FROM docs ORDER BY file').all()
      .map(r => ({ file: r.file, slug: r.slug, title: r.title, hub: r.hub, headline: JSON.parse(r.headline) }));
  } finally {
    db.close();
  }
}

// So stamp từng file: ok / stale (thiếu hoặc lệch). Không ghi gì.
function status(opts) {
  const o = opts || {};
  const dbFile = o.dbFile || DB_FILE;
  const dir = o.articlesDir || ARTICLES_DIR;
  if (!fs.existsSync(dbFile)) return { ok: false, why: 'missing' };
  let db;
  try {
    db = open(dbFile, true);
    const q = db.prepare('PRAGMA quick_check').get();
    const v = q && (q.quick_check || q.value || Object.values(q)[0]);
    if (v !== 'ok') return { ok: false, why: 'corrupt: ' + v };
    const have = new Map(db.prepare('SELECT file, stamp FROM docs').all().map(r => [r.file, r.stamp]));
    const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.js')) : [];
    let stale = 0;
    for (const f of files) if (have.get(f) !== stampOf(path.join(dir, f))) stale++;
    const extra = [...have.keys()].filter(f => !files.includes(f)).length;
    if (stale || extra) return { ok: false, why: 'stale', stale, extra, docs: have.size };
    return { ok: true, docs: have.size };
  } catch (e) {
    return { ok: false, why: 'corrupt: ' + e.message };
  } finally {
    if (db) db.close();
  }
}

module.exports = { DB_FILE, ARTICLES_DIR, assertCoordinator, rebuild, loadDocs, status };
