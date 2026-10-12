// Chính sách LẬP CHỈ MỤC theo bài — factory/data/index-policy.json (chỉ chủ repo/coordinator được thêm mục).
// Mục tiêu: hợp nhất ý định (bài hoán vị địa danh/mẫu xe) MÀ KHÔNG xóa bài và KHÔNG đổi URL:
//   * bài trong policy giữ nguyên trang + URL + liên kết nội bộ, chỉ thêm <meta name="robots" content="noindex,follow">
//     và KHÔNG nằm trong sitemap-articles.xml (sitemap = các URL muốn được lập chỉ mục);
//   * "consolidatedInto" là bài giữ lại (phải PUBLISHED và không nằm trong policy) để người rà soát biết bài nào đại diện;
//   * rollback = xóa mục (hoặc cả file) rồi chạy generate — một thay đổi, không đụng bài.
// File thiếu ⇒ không bài nào bị noindex (tương thích micro-repo/checkout cũ). File hỏng ⇒ lỗi rõ ràng (không âm thầm bỏ qua).
'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'data', 'index-policy.json');
const ROBOTS = 'noindex,follow';
// Trần an toàn: chống noindex hàng loạt do nhầm lẫn. Muốn vượt phải đổi hằng số này (quyết định của chủ repo).
const MAX_SHARE = 0.3;

function load(file) {
  const f = file || FILE;
  if (!fs.existsSync(f)) return { schemaVersion: 1, entries: {} };
  let obj;
  try { obj = JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { throw new Error('index-policy.json không đọc được: ' + e.message); }
  if (!obj || typeof obj !== 'object' || !obj.entries || typeof obj.entries !== 'object' || Array.isArray(obj.entries)) {
    throw new Error('index-policy.json sai định dạng (cần {"schemaVersion":1,"entries":{"<slug>":{…}}})');
  }
  return obj;
}

const has = (policy, slug) => !!(policy && policy.entries && Object.prototype.hasOwnProperty.call(policy.entries, slug));
const isNoindex = (policy, slug) => has(policy, slug);
const robotsFor = (policy, slug) => (has(policy, slug) ? ROBOTS : null);

// publishedSlugs: Set slug của slot PUBLISHED. Trả mảng lỗi (rỗng = hợp lệ).
function validate(policy, publishedSlugs) {
  const errors = [];
  if (!policy || policy.schemaVersion !== 1) errors.push('index-policy.json: schemaVersion phải là 1');
  const entries = (policy && policy.entries) || {};
  const slugs = Object.keys(entries);
  for (const slug of slugs) {
    const e = entries[slug] || {};
    if (!publishedSlugs.has(slug)) errors.push('index-policy: "' + slug + '" không phải bài PUBLISHED');
    if (e.robots !== ROBOTS) errors.push('index-policy: "' + slug + '" robots phải là "' + ROBOTS + '"');
    if (!String(e.reason || '').trim()) errors.push('index-policy: "' + slug + '" thiếu reason');
    if (!String(e.decidedBy || '').trim() || !/^\d{4}-\d{2}-\d{2}$/.test(String(e.decidedAt || ''))) errors.push('index-policy: "' + slug + '" thiếu decidedBy/decidedAt (YYYY-MM-DD)');
    if (e.consolidatedInto != null) {
      if (e.consolidatedInto === slug) errors.push('index-policy: "' + slug + '" không thể hợp nhất vào chính nó');
      else if (!publishedSlugs.has(e.consolidatedInto)) errors.push('index-policy: "' + slug + '" hợp nhất vào "' + e.consolidatedInto + '" nhưng bài đó không PUBLISHED');
      else if (has(policy, e.consolidatedInto)) errors.push('index-policy: "' + slug + '" hợp nhất vào "' + e.consolidatedInto + '" nhưng bài đó cũng bị noindex (chuỗi/vòng)');
    }
  }
  if (publishedSlugs.size && slugs.length / publishedSlugs.size > MAX_SHARE) {
    errors.push('index-policy: ' + slugs.length + '/' + publishedSlugs.size + ' bài bị noindex vượt trần ' + Math.round(MAX_SHARE * 100) + '% — cần quyết định của chủ repo');
  }
  return errors;
}

module.exports = { FILE, ROBOTS, MAX_SHARE, load, isNoindex, robotsFor, validate };
