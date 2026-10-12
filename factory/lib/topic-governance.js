// AI WIKI TOTAL — Topic Governance: công tắc điều khiển (versioned) cho Topic Factory V2.
//
// File điều khiển: factory/topic-governance.json (cùng kiểu factory/writer-control.json).
//   mode              : "enforce" | "off"      — off tắt kiểm soát writer (requireApproved luôn false)
//   v1Generation      : "frozen" | "allowed"   — frozen: queue-refill không sinh topic từ pool cũ/Topic Factory V1.
//                                                Khi file TỒN TẠI mà thiếu khóa này => "frozen" (fail-closed).
//   requireApproved   : writer-pack/verify/publish chỉ nhận slot có topic APPROVED (khi mode=enforce)
//   thresholds        : ghi đè ngưỡng gate (mặc định trong topic-gate.js)
//   maxApprovedQueue  : số topic APPROVED chưa xuất bản tối đa — chống đổ queue
// Không có file => off/allowed (hành vi legacy 100%, tương thích mọi checkout cũ).
// CÔNG TẮC ROLLBACK về legacy hoàn toàn: {"mode":"off","v1Generation":"allowed"} (hoặc xóa file).
// File hỏng/không parse được => enforce + frozen (fail-closed). Thuần: không tự ghi file.
'use strict';

const fs = require('fs');
const path = require('path');

const DEFAULT_FILE = path.join(__dirname, '..', 'topic-governance.json');

const OFF = Object.freeze({
  present: false, mode: 'off', v1Generation: 'allowed', requireApproved: false,
  thresholds: {}, maxApprovedQueue: Infinity, reason: 'no governance file — legacy behaviour',
});

function normalize(raw) {
  const mode = raw && raw.mode === 'enforce' ? 'enforce' : 'off';
  return {
    present: true,
    mode,
    v1Generation: raw && raw.v1Generation === 'allowed' ? 'allowed' : 'frozen',
    requireApproved: mode === 'enforce' && !(raw && raw.requireApproved === false),
    thresholds: (raw && typeof raw.thresholds === 'object' && raw.thresholds) || {},
    maxApprovedQueue: Number.isFinite(raw && raw.maxApprovedQueue) ? raw.maxApprovedQueue : 50,
    reason: (raw && raw.reason) || '',
  };
}

// Đọc cấu hình; file hỏng/không parse được => FAIL-CLOSED (enforce) để không vô tình mở cổng.
function load(file) {
  const f = file || DEFAULT_FILE;
  if (!fs.existsSync(f)) return OFF;
  try {
    return normalize(JSON.parse(fs.readFileSync(f, 'utf8')));
  } catch (e) {
    return Object.assign(normalize({ mode: 'enforce' }), { reason: 'governance file lỗi (' + e.message + ') — fail-closed' });
  }
}

const APPROVED_LIFECYCLES = new Set(['APPROVED', 'WRITING', 'QA', 'PUBLISHED']);

// Hàm lọc “slot này writer được phép nhận?” cho runtime thuần.
// rowsBySlot: Map slotId -> topic row. Khi governance off => luôn true.
function writableFilter(gov, rowsBySlot) {
  if (!gov || !gov.requireApproved) return () => true;
  return (slot) => {
    const row = rowsBySlot && rowsBySlot.get(slot.id);
    return !!(row && APPROVED_LIFECYCLES.has(row.lifecycle) && row.editorial && row.editorial.approvedBy);
  };
}

module.exports = { DEFAULT_FILE, OFF, load, normalize, writableFilter, APPROVED_LIFECYCLES };
