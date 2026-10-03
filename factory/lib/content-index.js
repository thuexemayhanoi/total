'use strict';
// AI WIKI TOTAL — content-index: derived cache SQLite cho manifest bài viết.
//
// SOURCE OF TRUTH: factory/state/article-manifest.jsonl (JSONL, commit) +
// factory/data/articles/*.js (content) + factory/state/matrix.json (slot).
// SQLite content-index.sqlite là DERIVED CACHE — KHÔNG commit, KHÔNG dùng làm
// nguồn canonical. Scale 10k–100k bài: QA/query đọc SQLite thay vì quét lại
// toàn bộ article module.
//
// QUYỀN:
//   - CHỈ coordinator được ghi/rebuild SQLite + manifest (assertCoordinator).
//   - 3 writer READ-ONLY (mở readOnly, không bao giờ mutate).
//
// AN TOÀN: SQLite missing/corrupt/stale -> index-rebuild dựng lại toàn bộ từ
// manifest + content files; index-check chỉ đọc và báo trạng thái.
//
// Ghi chú node:sqlite (Node >= 22.5): KHÔNG có db.transaction() — dùng
// exec('BEGIN')/exec('COMMIT')/exec('ROLLBACK') thủ công. PRAGMA quick_check
// trả về cột tên 'quick_check' (một số bản 'value') — xử lý cả hai.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const STATE_DIR = path.join(__dirname, '..', 'state');
const MANIFEST_FILE = path.join(STATE_DIR, 'article-manifest.jsonl');
const DB_FILE = path.join(STATE_DIR, 'content-index.sqlite');

let _sqlite = null;
function sqlite() {
  if (!_sqlite) _sqlite = require('node:sqlite');
  return _sqlite;
}

// ---------- Vai trò ----------
// Writer KHÔNG bao giờ được ghi manifest/SQLite — chỉ coordinator.
function assertCoordinator(role) {
  if (role !== 'coordinator') {
    throw new Error('TỪ CHỐI: chỉ coordinator được ghi content-index/manifest — vai trò nhận được: ' + JSON.stringify(role || null));
  }
  return true;
}

// ---------- Manifest (JSONL — source of truth, committed) ----------
function hashContent(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

// Chuẩn hoá chủ đề: lowercase, gọn khoảng trắng — dùng cho tra cứu/traùng lặp.
function normalizeTopic(title) {
  return String(title || '').toLowerCase().normalize('NFC').replace(/\s+/g, ' ').trim();
}

// Trạng thái QA theo slot: PUBLISHED/PASS -> pass; REPAIR -> repair;
// BLOCKED -> blocked; còn lại -> pending.
function qaStatusFromSlot(state) {
  if (state === 'PUBLISHED' || state === 'PASS') return 'pass';
  if (state === 'REPAIR') return 'repair';
  if (state === 'BLOCKED') return 'blocked';
  return 'pending';
}

// Dựng manifest TỪ REPO THẬT: articles + matrix (thuần đọc, không mutate).
// Mỗi dòng: { id, slug, title, topic, intent, entities, cluster, content_hash,
//             qa_status, published_at } — thứ tự theo id, deterministic.
function buildManifestFromRepo(root) {
  const artDir = path.join(root, 'factory', 'data', 'articles');
  const matrix = JSON.parse(fs.readFileSync(path.join(root, 'factory', 'state', 'matrix.json'), 'utf8'));
  const bySlug = new Map(matrix.slots.map(s => [s.slug, s]));
  const rows = [];
  const files = fs.readdirSync(artDir).filter(f => f.endsWith('.js')).sort();
  for (const f of files) {
    const file = path.join(artDir, f);
    let a;
    try { a = require(file); }
    catch (e) {
      e.message = 'Không nạp được module bài factory/data/articles/' + f + ' — ' + (e && e.message ? e.message : e);
      throw e;
    }
    const slot = bySlug.get(a.slug) || null;
    if (!slot) throw new Error('Bài "' + a.slug + '" KHÔNG có slot trong ma trận — manifest yêu cầu mọi bài có slot');
    rows.push({
      id: slot.id,
      slug: a.slug,
      title: String(a.title || ''),
      topic: normalizeTopic(a.title),
      intent: String(slot.primaryIntent || ''),
      entities: Array.isArray(a.entities) ? a.entities : [],
      cluster: a.hub ? (a.category + '/' + a.hub) : String(a.category || ''),
      content_hash: hashContent(fs.readFileSync(file)),
      qa_status: qaStatusFromSlot(slot.state),
      published_at: slot.updatedAt || '',
    });
  }
  rows.sort((x, y) => (Number(String(x.id).slice(1)) - Number(String(y.id).slice(1))));
  return rows;
}

function manifestLine(row) {
  return JSON.stringify({
    id: row.id, slug: row.slug, title: row.title, topic: row.topic,
    intent: row.intent, entities: row.entities, cluster: row.cluster,
    content_hash: row.content_hash, qa_status: row.qa_status, published_at: row.published_at,
  });
}

function writeManifestAtomic(file, rows) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, rows.map(manifestLine).join('\n') + '\n');
  fs.renameSync(tmp, file);
  return rows.length;
}

function readManifest(file) {
  const text = fs.readFileSync(file, 'utf8');
  const rows = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    let obj;
    try { obj = JSON.parse(line); }
    catch (e) { throw new Error('article-manifest.jsonl dòng ' + (i + 1) + ' hỏng JSON: ' + e.message); }
    if (!obj.id || !obj.slug || !obj.content_hash) {
      throw new Error('article-manifest.jsonl dòng ' + (i + 1) + ' thiếu id/slug/content_hash');
    }
    rows.push(obj);
  }
  return rows;
}

// ---------- SQLite (derived cache — KHÔNG commit) ----------
const SCHEMA = `
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  topic TEXT NOT NULL,
  intent TEXT NOT NULL,
  entities TEXT NOT NULL,
  cluster TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  qa_status TEXT NOT NULL,
  published_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_intent ON articles(intent);
CREATE INDEX IF NOT EXISTS idx_articles_cluster ON articles(cluster);
CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
`;

// Rebuild an toàn: xoá DB cũ, tạo schema, INSERT toàn bộ trong MỘT transaction
// (BEGIN/COMMIT thủ công — node:sqlite không có db.transaction()).
function rebuild(dbFile, rows, manifestFile) {
  const mf = manifestFile || MANIFEST_FILE;
  fs.mkdirSync(path.dirname(dbFile), { recursive: true });
  try { fs.unlinkSync(dbFile); } catch (_) { /* chưa có */ }
  for (const ext of ['-journal', '-wal', '-shm']) {
    try { fs.unlinkSync(dbFile + ext); } catch (_) { /* chưa có */ }
  }
  const { DatabaseSync } = sqlite();
  const db = new DatabaseSync(dbFile);
  let committed = false;
  try {
    db.exec(SCHEMA);
    db.exec('BEGIN');
    const ins = db.prepare(
      'INSERT INTO articles (id, slug, title, topic, intent, entities, cluster, content_hash, qa_status, published_at) ' +
      'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    for (const r of rows) {
      ins.run(r.id, r.slug, r.title, r.topic, r.intent, JSON.stringify(r.entities || []), r.cluster, r.content_hash, r.qa_status, r.published_at || '');
    }
    const manifestSha = hashContent(fs.readFileSync(mf));
    db.exec('COMMIT');
    committed = true;
    db.exec('BEGIN');
    db.prepare('INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)').run('manifest_sha256', manifestSha);
    db.prepare('INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)').run('rows', String(rows.length));
    db.exec('COMMIT');
  } catch (e) {
    if (!committed) { try { db.exec('ROLLBACK'); } catch (_) { /* đã đóng */ } }
    throw e;
  } finally {
    db.close();
  }
  return rows.length;
}

// Mở read-only (writer). DatabaseSync readOnly: true — DB phải tồn tại.
function openReadOnly(dbFile) {
  const { DatabaseSync } = sqlite();
  return new DatabaseSync(dbFile, { readOnly: true });
}

// PRAGMA quick_check — cột trả về 'quick_check' hoặc 'value' tuỳ bản.
function quickCheck(dbFile) {
  const db = openReadOnly(dbFile);
  try {
    const rows = db.prepare('PRAGMA quick_check').all();
    const val = rows.length
      ? String(rows[0].quick_check !== undefined ? rows[0].quick_check : rows[0].value !== undefined ? rows[0].value : '')
      : '';
    return val === 'ok';
  } finally { db.close(); }
}

// Map id -> slug cho QA/query nhanh (thay vì quét lại toàn bộ module bài).
function knownSet(dbFile) {
  const db = openReadOnly(dbFile);
  try {
    const rows = db.prepare('SELECT id, slug FROM articles').all();
    return new Map(rows.map(r => [r.id, r.slug]));
  } finally { db.close(); }
}

function count(dbFile) {
  const db = openReadOnly(dbFile);
  try {
    return Number(db.prepare('SELECT COUNT(*) AS n FROM articles').get().n);
  } finally { db.close(); }
}

function bySlug(dbFile, slug) {
  const db = openReadOnly(dbFile);
  try {
    const r = db.prepare('SELECT * FROM articles WHERE slug = ?').get(slug);
    if (r && typeof r.entities === 'string') { try { r.entities = JSON.parse(r.entities); } catch (_) { /* giữ nguyên */ } }
    return r || null;
  } finally { db.close(); }
}

function byIntent(dbFile, intent) {
  const db = openReadOnly(dbFile);
  try {
    return db.prepare('SELECT * FROM articles WHERE intent = ?').all();
  } finally { db.close(); }
}

// Trạng thái index so với manifest — read-only, không tự sửa.
// { ok, exists, quickCheckOk, dbRows, manifestRows, stale, why }
function status(dbFile, manifestFile) {
  const mf = manifestFile || MANIFEST_FILE;
  const out = { ok: false, exists: false, quickCheckOk: false, dbRows: 0, manifestRows: 0, stale: true, why: '' };
  if (!fs.existsSync(mf)) { out.why = 'manifest chưa có — chạy manifest-sync trước'; return out; }
  const rows = readManifest(mf);
  out.manifestRows = rows.length;
  if (!fs.existsSync(dbFile)) { out.why = 'content-index.sqlite thiếu — chạy index-rebuild (an toàn, derived)'; return out; }
  out.exists = true;
  let qc = false;
  try { qc = quickCheck(dbFile); }
  catch (e) { out.why = 'SQLite hỏng (không mở/quick_check được): ' + e.message; return out; }
  out.quickCheckOk = qc;
  if (!qc) { out.why = 'PRAGMA quick_check != ok — file corrupt, chạy index-rebuild'; return out; }
  try { out.dbRows = count(dbFile); }
  catch (e) { out.why = 'SQLite hỏng (không đếm được): ' + e.message; return out; }
  if (out.dbRows !== out.manifestRows) {
    out.why = 'stale: SQLite ' + out.dbRows + ' dòng != manifest ' + out.manifestRows + ' dòng — chạy index-rebuild';
    return out;
  }
  // So hash manifest (meta) — phát hiện stale sau khi manifest đổi.
  try {
    const db = openReadOnly(dbFile);
    let sha = null;
    try { sha = db.prepare("SELECT value FROM meta WHERE key = 'manifest_sha256'").get(); } finally { db.close(); }
    const cur = hashContent(fs.readFileSync(mf));
    if (!sha || sha.value !== cur) {
      out.why = 'stale: manifest đổi sau lần rebuild cuối — chạy index-rebuild';
      return out;
    }
  } catch (e) { out.why = 'không đọc được meta: ' + e.message; return out; }
  out.stale = false;
  out.ok = true;
  return out;
}

module.exports = {
  MANIFEST_FILE, DB_FILE,
  assertCoordinator, normalizeTopic, qaStatusFromSlot,
  buildManifestFromRepo, writeManifestAtomic, readManifest, manifestLine,
  rebuild, openReadOnly, quickCheck, knownSet, count, bySlug, byIntent, status,
};
