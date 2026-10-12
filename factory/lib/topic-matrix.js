// AI WIKI TOTAL — Master SEO Topic Matrix (JSONL, nguồn dữ liệu quản trị topic).
//
// factory/state/topic-matrix.jsonl: MỖI DÒNG một topic (committed, có thể rebuild cache từ đây).
// matrix.json vẫn là sổ cái SLOT sản xuất (ID S…, state QA/PUBLISH); topic-matrix là LỚP QUẢN TRỊ:
// topic nào được phép thành slot (APPROVED), vì sao, trùng với gì, bằng chứng gì.
// Lifecycle lưu trữ: PLANNED / RESEARCH / APPROVED / REJECTED (+ WRITING/QA/PUBLISHED khi có đồng bộ).
// Sau khi có slot, trạng thái THỰC suy ra từ matrix.json (effectiveLifecycle) — không cần đồng bộ thủ công.
// Thuần + I/O nguyên tử (tmp + rename). Chỉ coordinator được ghi (kiểm ở lớp CLI).
'use strict';

const fs = require('fs');
const path = require('path');
const I = require('./topic-intel');

const STATE_DIR = path.join(__dirname, '..', 'state');
const TOPIC_MATRIX_FILE = path.join(STATE_DIR, 'topic-matrix.jsonl');
const ROW_SCHEMA = 2;
const LIFECYCLE = ['PLANNED', 'RESEARCH', 'APPROVED', 'WRITING', 'QA', 'PUBLISHED', 'REJECTED'];
const APPROVED_SET = new Set(['APPROVED', 'WRITING', 'QA', 'PUBLISHED']);
const SOURCES = ['legacy-handwritten', 'legacy-pool', 'legacy-v1', 'v2-pilot', 'v2-manual', 'gsc-import'];

// ---------- I/O ----------
function readRows(file) {
  const f = file || TOPIC_MATRIX_FILE;
  const rows = [];
  const errors = [];
  if (!fs.existsSync(f)) return { rows, errors };
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (!line.trim()) return;
    try {
      const r = JSON.parse(line);
      if (!r || typeof r !== 'object' || Array.isArray(r)) throw new Error('dòng không phải object');
      rows.push(r);
    } catch (e) {
      errors.push({ line: i + 1, msg: e.message });
    }
  });
  return { rows, errors };
}

function serialize(rows) {
  return rows.map(r => JSON.stringify(r)).join('\n') + (rows.length ? '\n' : '');
}

function writeRowsAtomic(rows, file) {
  const f = file || TOPIC_MATRIX_FILE;
  fs.mkdirSync(path.dirname(f), { recursive: true });
  const tmp = f + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, serialize(rows));
  fs.renameSync(tmp, f);
}

// ---------- chỉ mục / tiện ích ----------
function nextTopicId(rows) {
  let max = 0;
  for (const r of rows) {
    const m = /^T(\d{6,})$/.exec(String(r.topicId || ''));
    if (m && Number(m[1]) > max) max = Number(m[1]);
  }
  return 'T' + String(max + 1).padStart(6, '0');
}

function bySlot(rows) {
  const m = new Map();
  for (const r of rows) if (r.slotId) m.set(r.slotId, r);
  return m;
}
function byId(rows) {
  const m = new Map();
  for (const r of rows) if (r.topicId) m.set(r.topicId, r);
  return m;
}

// Trạng thái hiệu lực: suy ra từ slot khi có slot, ngược lại dùng lifecycle lưu.
function effectiveLifecycle(row, slot) {
  if (!slot) return row.lifecycle;
  switch (slot.state) {
    case 'PUBLISHED': return 'PUBLISHED';
    case 'PLANNED': return row.lifecycle === 'REJECTED' ? 'REJECTED' : (APPROVED_SET.has(row.lifecycle) ? 'APPROVED' : row.lifecycle);
    case 'RESEARCH': case 'WRITING': return 'WRITING';
    case 'QA': case 'REPAIR': case 'PASS': case 'BLOCKED': return 'QA';
    default: return row.lifecycle;
  }
}

function isApprovedRow(row) {
  return !!(row && APPROVED_SET.has(row.lifecycle) && row.editorial && row.editorial.approvedBy);
}

function approvedBySlot(rows) {
  const m = new Map();
  for (const r of rows) if (r.slotId && isApprovedRow(r)) m.set(r.slotId, r);
  return m;
}

// ---------- row ----------
function validateRow(r) {
  const e = [];
  if (r.schema !== ROW_SCHEMA) e.push('schema phải là ' + ROW_SCHEMA);
  if (!/^T\d{6,}$/.test(String(r.topicId || ''))) e.push('topicId sai format');
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(String(r.slug || ''))) e.push('slug sai format');
  if (!String(r.title || '').trim()) e.push('thiếu title');
  if (!/^[a-z0-9-]+(\/[a-z0-9-]+)?$/.test(String(r.hub || ''))) e.push('hub phải dạng category hoặc category/hub');
  if (!LIFECYCLE.includes(r.lifecycle)) e.push('lifecycle không hợp lệ: ' + r.lifecycle);
  if (!SOURCES.includes(r.source)) e.push('source không hợp lệ: ' + r.source);
  if (r.slotId != null && !/^S\d{5,}$/.test(String(r.slotId))) e.push('slotId sai format');
  const needsApproval = ['APPROVED', 'WRITING', 'QA'].includes(r.lifecycle) ||
    (r.lifecycle === 'PUBLISHED' && /^v2-|^gsc-/.test(String(r.source)));
  if (needsApproval) {
    if (!r.slotId) e.push('topic ' + r.lifecycle + ' phải có slotId');
    if (!(r.editorial && r.editorial.approvedBy && r.editorial.approvedAt)) e.push('thiếu editorial.approvedBy/approvedAt');
    if (!(r.gate && r.gate.verdict === 'ACCEPT')) e.push('topic được duyệt phải có gate.verdict=ACCEPT');
  }
  if (r.gate && r.gate.verdict && !['ACCEPT', 'REWRITE', 'MERGE-CANDIDATE', 'REJECT', 'NEEDS-RESEARCH', 'LEGACY'].includes(r.gate.verdict)) e.push('gate.verdict không hợp lệ');
  return e;
}

function legacySource(slot) {
  const a = I.analyzeTopic(slot.title);
  if (/topic-factory-v1/.test(String(slot.notes || ''))) return 'legacy-v1';
  if (a.wrapper) return 'legacy-pool';
  if (a.modifiers.length && a.templated) return 'legacy-v1';
  return 'legacy-handwritten';
}

function urlOf(hub, slug) { return '/' + hub + '/' + slug + '/'; }

// Lifecycle + disposition cho slot cũ theo verdict audit.
function legacyDisposition(verdict) {
  switch (verdict) {
    case 'REJECT': return { lifecycle: 'REJECTED', disposition: 'REJECT' };
    case 'MERGE-CANDIDATE': return { lifecycle: 'REJECTED', disposition: 'MERGE-CANDIDATE' };
    case 'NEEDS-RESEARCH': return { lifecycle: 'RESEARCH', disposition: 'NEEDS-RESEARCH' };
    case 'REWRITE': return { lifecycle: 'PLANNED', disposition: 'REWRITE' };
    default: return { lifecycle: 'PLANNED', disposition: 'KEEP' };
  }
}

// ---------- invariants ----------
// ctx: { rows, matrix, gov, thresholds }
function checkInvariants(ctx) {
  const errors = [];
  const warnings = [];
  const { rows, matrix, gov } = ctx;
  const T = Object.assign({ maxPerIntentCluster: 1 }, (gov && gov.thresholds) || {}, ctx.thresholds || {});
  const slots = new Map(((matrix && matrix.slots) || []).map(s => [s.id, s]));
  const seenId = new Map();
  const seenSlot = new Map();
  const liveSlugs = new Map();
  const cluster = new Map();

  for (const r of rows) {
    for (const m of validateRow(r)) errors.push((r.topicId || '?') + ': ' + m);
    if (r.topicId) {
      if (seenId.has(r.topicId)) errors.push('topicId trùng: ' + r.topicId);
      seenId.set(r.topicId, true);
    }
    if (r.slotId) {
      if (seenSlot.has(r.slotId)) errors.push('slotId trùng giữa hai topic: ' + r.slotId);
      seenSlot.set(r.slotId, r.topicId);
      const s = slots.get(r.slotId);
      if (!s) { if (r.lifecycle !== 'REJECTED') errors.push(r.topicId + ': slotId ' + r.slotId + ' không có trong matrix.json'); }
      else if (s.slug !== r.slug) errors.push(r.topicId + ': slug lệch slot ' + r.slotId + ' (' + r.slug + ' vs ' + s.slug + ')');
      else if (r.lifecycle === 'PUBLISHED' && s.state !== 'PUBLISHED') warnings.push(r.topicId + ': row PUBLISHED nhưng slot ' + s.state);
    } else if (APPROVED_SET.has(r.lifecycle) && r.lifecycle !== 'PUBLISHED') {
      errors.push(r.topicId + ': ' + r.lifecycle + ' mà chưa có slot');
    }
    if (r.lifecycle !== 'REJECTED') {
      if (liveSlugs.has(r.slug)) errors.push('slug trùng giữa topic còn hiệu lực: ' + r.slug);
      liveSlugs.set(r.slug, r.topicId);
    }
    if (/^v2-|^gsc-/.test(String(r.source)) && r.lifecycle !== 'REJECTED' && r.lifecycle !== 'RESEARCH' && r.cluster) {
      cluster.set(r.cluster, (cluster.get(r.cluster) || 0) + 1);
    }
  }
  for (const [k, n] of cluster) if (n > T.maxPerIntentCluster) errors.push('intent cluster "' + k + '" có ' + n + ' topic V2 (> ' + T.maxPerIntentCluster + ')');

  // slot ↔ topic
  const approved = approvedBySlot(rows);
  let awaiting = 0;
  const inFlightUnapproved = [];
  let publishedNoRow = 0;
  const rowBySlot = bySlot(rows);
  for (const s of slots.values()) {
    if (s.state === 'PUBLISHED') { if (!rowBySlot.has(s.id)) publishedNoRow++; continue; }
    if (s.state === 'BLOCKED') continue;
    if (!approved.has(s.id)) {
      if (s.state === 'PLANNED') awaiting++;
      else inFlightUnapproved.push(s.id);
    }
  }
  if (gov && gov.requireApproved) {
    for (const id of inFlightUnapproved) errors.push('slot ' + id + ' đang xử lý nhưng topic chưa APPROVED (governance enforce)');
  }
  if (awaiting) warnings.push(awaiting + ' slot PLANNED chưa có topic APPROVED — writer KHÔNG được nhận (chờ duyệt)');
  if (publishedNoRow) warnings.push(publishedNoRow + ' slot PUBLISHED chưa có dòng trong topic-matrix (chạy topic-backfill)');
  const openApproved = rows.filter(r => r.lifecycle === 'APPROVED' && r.slotId && slots.get(r.slotId) && slots.get(r.slotId).state !== 'PUBLISHED').length;
  if (gov && Number.isFinite(gov.maxApprovedQueue) && openApproved > gov.maxApprovedQueue) {
    warnings.push('hàng đợi APPROVED chưa xuất bản (' + openApproved + ') vượt maxApprovedQueue ' + gov.maxApprovedQueue);
  }
  return {
    errors, warnings,
    stats: { rows: rows.length, awaitingApproval: awaiting, inFlightUnapproved: inFlightUnapproved.length, publishedWithoutRow: publishedNoRow, openApproved },
  };
}

function summarize(rows, matrix) {
  const slots = new Map(((matrix && matrix.slots) || []).map(s => [s.id, s]));
  const life = {};
  const verdict = {};
  const source = {};
  for (const r of rows) {
    const eff = effectiveLifecycle(r, r.slotId ? slots.get(r.slotId) : null);
    life[eff] = (life[eff] || 0) + 1;
    const v = r.disposition || (r.gate && r.gate.verdict) || '-';
    verdict[v] = (verdict[v] || 0) + 1;
    source[r.source] = (source[r.source] || 0) + 1;
  }
  return { total: rows.length, lifecycle: life, disposition: verdict, source };
}

module.exports = {
  TOPIC_MATRIX_FILE, ROW_SCHEMA, LIFECYCLE, APPROVED_SET, SOURCES,
  readRows, serialize, writeRowsAtomic, nextTopicId, bySlot, byId, effectiveLifecycle, isApprovedRow, approvedBySlot,
  validateRow, legacySource, urlOf, legacyDisposition, checkInvariants, summarize,
};
