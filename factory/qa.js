// AI WIKI TOTAL — kiểm định chất lượng bài viết (QA)
'use strict';
const R = require('./lib/render');

// Pattern bịa dữ kiện kinh doanh — bị cấm tuyệt đối
const FORBIDDEN = [
  { name: 'Không bịa giá thuê', re: /giá\s*thuê\s*(chỉ\s*từ|chỉ\s*\d)/i },
  { name: 'Không bịa địa chỉ', re: /địa\s*chỉ\s*:\s*số\s*(nhà\s*)?\d/i },
  { name: 'Không nhồi Zalo', re: /liên\s*hệ\s*zalo/i },
  { name: 'Không nhồi hotline', re: /hotline/i },
];
// Ký tự rác: CJK / Cyrillic / Hangul — nội dung tiếng Việt không được chứa
const GARBAGE_RE = /[\u4e00-\u9fff\u0400-\u04ff\u3040-\u30ff\uac00-\ud7ff]/;

function qaArticle(a) {
  const words = R.wordCount(
    [a.title, a.summary, a.quickAnswer, a.keyPoints.join(' '),
     a.sections.map(s => s.h2 + ' ' + s.html).join(' '),
     (a.checklist || []).join(' '), (a.steps || []).map(s => s.title + ' ' + s.detail).join(' '),
     (a.warnings || []).join(' '), (a.notes || []).join(' ')].join(' '));
  const checks = [];
  const add = (name, pass, note, weight, critical) => checks.push({
    name, pass: !!pass, note: note || '', weight: weight == null ? 10 : weight, critical: !!critical,
  });

  add('Độ dài ≥ 1600 từ', words >= 1600, `${words} từ`, 10, true);
  add('Không có ký tự rác (CJK/Cyrillic/Hangul)', !GARBAGE_RE.test(JSON.stringify(a)), '', 10, true);
  for (const f of FORBIDDEN) {
    add(f.name, !f.re.test(JSON.stringify(a)), 'phát hiện pattern bị cấm', 10, true);
  }
  add('Tiêu đề SEO 25–70 ký tự', (a.seoTitle || '').length >= 25 && (a.seoTitle || '').length <= 70, `dài ${(a.seoTitle || '').length}`, 10, true);
  add('Meta description 100–165 ký tự', (a.metaDescription || '').length >= 100 && (a.metaDescription || '').length <= 165, `dài ${(a.metaDescription || '').length}`, 5, false);
  add('Tiêu đề SEO không template cứng', !/\|\s*AI WIKI TOTAL\s*$/.test(a.seoTitle || ''), '', 5);
  add('Có tóm tắt', !!(a.summary && a.summary.length >= 100), '', 10);
  add('Có câu trả lời nhanh', !!(a.quickAnswer && a.quickAnswer.length >= 80), '', 10);
  add('Có đủ điểm chính (≥4)', (a.keyPoints || []).length >= 4, `${(a.keyPoints || []).length} điểm`, 10);
  add('Có đủ mục H2 (≥4)', (a.sections || []).length >= 4, `${(a.sections || []).length} mục`, 10);
  add('Có danh sách kiểm tra', (a.checklist || []).length >= 3, '', 5);
  add('Có cảnh báo', (a.warnings || []).length >= 2, '', 5);
  add('Có nguồn tham khảo', (a.references || []).length >= 2, '', 5);
  add('Có bài liên quan (≥2)', (a.related || []).length >= 2, `${(a.related || []).length} bài`, 10);
  add('Lưu ý miễn trừ trách nhiệm', (a.notes || []).length >= 1, '', 5);
  add('Ngày hợp lệ', /^\d{4}-\d{2}-\d{2}$/.test(a.date || '') && /^\d{4}-\d{2}-\d{2}$/.test(a.updated || a.date || ''), '', 5);

  const totalWeight = checks.reduce((n, c) => n + c.weight, 0);
  const got = checks.filter(c => c.pass).reduce((n, c) => n + c.weight, 0);
  let score = Math.min(100, Math.round((got / totalWeight) * 100));
  const anyCriticalFail = checks.some(c => c.critical && !c.pass);
  return { score, pass: !anyCriticalFail && score >= 75, words, checks };
}

module.exports = { qaArticle };
