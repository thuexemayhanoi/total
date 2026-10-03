// AI WIKI TOTAL — kiểm định SEO theo bài (scoped, deterministic, KHÔNG AI/API).
// SEO giờ là ADVISORY (KHÔNG chặn publish): điểm SEO chỉ cảnh báo/huấn luyện
// writer; QA minimal gate (factory/qa.js) mới là gate chặn publish >= 70.
// Chấm SEO một article source + (nếu có) trang sinh tương ứng. Ngưỡng tham chiếu:
// SEO_PASS_MIN = 70 (factory/lib/factory-runtime.js).
'use strict';
const R = require('./lib/render');
const S = require('./lib/shell');

// Ký tự rác CJK/Cyrillic/Hangul — trang tiếng Việt không được chứa.
const GARBAGE_RE = /[\u4e00-\u9fff\u0400-\u04ff\u3040-\u30ff\uac00-\ud7ff]/;
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Từ dừng ngắn tiếng Việt khi đo độ phủ chủ đề tiêu đề -> tóm tắt.
const STOP = new Set(['cua', 'va', 'hoac', 'cach', 'nhung', 'nhu', 'cho', 'khi', 'voi', 'tai', 'tren', 'duoc', 'mot', 'cac', 'la', 'bi', 've', 'gi', 'the', 'nao', 'may', 'xe', 'o']);

function words(s) {
  return String(s || '').toLowerCase().split(/[^a-z0-9à-ỹ]+/i).filter(Boolean);
}

// Độ phủ chủ đề: từ đáng kể của tiêu đề phải xuất hiện trong summary/quickAnswer.
function titleCoverage(a) {
  const t = words(a.title).filter(w => w.length >= 4 && !STOP.has(w));
  if (!t.length) return 0;
  const hay = words((a.summary || '') + ' ' + (a.quickAnswer || '')).join(' ');
  const hit = t.filter(w => hay.includes(w)).length;
  return hit / t.length;
}

// Tần suất từ khóa cao nhất trong toàn văn (keyword stuffing).
function maxKeywordFreq(a) {
  const total = words([
    a.title, a.summary, a.quickAnswer,
    (a.keyPoints || []).join(' '),
    (a.sections || []).map(s => s.h2 + ' ' + s.html).join(' '),
  ].join(' '));
  if (!total.length) return 1;
  let max = 0;
  for (const kw of a.keywords || []) {
    const k = words(kw)[0];
    if (!k) continue;
    let n = 0;
    for (const w of total) if (w === k) n++;
    if (n / total.length > max) max = n / total.length;
  }
  return max;
}

// seoArticle(a, ctx): ctx = { knownSlugs?: Set|mảng slug tồn tại, pageHtml?: html sinh }
// Trả { score, pass, checks } cùng shape như qa.js: score 0-100 theo trọng số,
// pass = score >= SEO_PASS_MIN && không critical fail.
function seoArticle(a, ctx) {
  const checks = [];
  const add = (name, pass, note, weight, critical) => checks.push({
    name, pass: !!pass, note: note || '', weight: weight == null ? 10 : weight, critical: !!critical,
  });
  const known = ctx && ctx.knownSlugs
    ? (ctx.knownSlugs instanceof Set ? ctx.knownSlugs : new Set(ctx.knownSlugs))
    : null;
  const body = [a.title, a.summary, a.quickAnswer, a.keyPoints.join(' '),
    a.sections.map(s => s.h2 + ' ' + s.html).join(' ')].join(' ');

  // CRITICAL — indexability và liên kết nội bộ.
  add('Không ký tự rác (SEO/indexability)', !GARBAGE_RE.test(JSON.stringify(a)), '', 10, true);
  const related = a.related || [];
  const relatedOk = known
    ? (related.length >= 2 && related.every(r => known.has(r)))
    : related.length >= 2;
  add('Liên kết nội bộ hợp lệ (related tồn tại, ≥2)', relatedOk,
    related.length < 2 ? 'ít hơn 2 related' : 'related không tồn tại', 10, true);

  // Cấu trúc SEO cơ bản.
  add('Tiêu đề 10–120 ký tự', (a.title || '').length >= 10 && (a.title || '').length <= 120, `dài ${(a.title || '').length}`, 10);
  add('Tiêu đề SEO 25–70 ký tự', (a.seoTitle || '').length >= 25 && (a.seoTitle || '').length <= 70, `dài ${(a.seoTitle || '').length}`, 10);
  add('Meta description 100–165 ký tự', (a.metaDescription || '').length >= 100 && (a.metaDescription || '').length <= 165, `dài ${(a.metaDescription || '').length}`, 10);
  add('Chủ đề khớp tiêu đề (summary/quickAnswer nói đúng chủ đề)', titleCoverage(a) >= 0.5, `độ phủ ${Math.round(titleCoverage(a) * 100)}%`, 10);
  add('Cấu trúc mục H2 ≥ 4, đủ nội dung', (a.sections || []).length >= 4 && a.sections.every(s => (s.h2 || '').trim() && (s.html || '').length >= 200), `${(a.sections || []).length} mục`, 10);
  add('Schema cơ bản (ngày + entities + keywords)',
    DATE_RE.test(a.date || '') && DATE_RE.test(a.updated || a.date || '') && (a.entities || []).length >= 2 && (a.keywords || []).length >= 3, '', 10);
  add('Slug sạch, index được', SLUG_RE.test(a.slug || ''), a.slug, 10);
  add('Không nhồi từ khóa (tần suất < 3%)', maxKeywordFreq(a) < 0.03, `tần suất cao nhất ${(maxKeywordFreq(a) * 100).toFixed(1)}%`, 10);
  add('Tóm tắt ≥ 100 ký tự', (a.summary || '').length >= 100, `dài ${(a.summary || '').length}`, 5);
  add('Câu trả lời nhanh ≥ 80 ký tự', (a.quickAnswer || '').length >= 80, `dài ${(a.quickAnswer || '').length}`, 5);
  add('Trang sinh có đúng 1 thẻ H1', ctx && ctx.pageHtml
    ? ((ctx.pageHtml.match(/<h1[\s>]/g) || []).length === 1 && ctx.pageHtml.includes(S.esc(a.title)))
    : true, ctx && ctx.pageHtml ? '' : '(chưa có trang sinh — bỏ qua)', 5);

  const totalWeight = checks.reduce((n, c) => n + c.weight, 0);
  const got = checks.filter(c => c.pass).reduce((n, c) => n + c.weight, 0);
  const score = Math.min(100, Math.round((got / totalWeight) * 100));
  const anyCriticalFail = checks.some(c => c.critical && !c.pass);
  return { score, pass: !anyCriticalFail && score >= 70, checks };
}

module.exports = { seoArticle, GARBAGE_RE, titleCoverage, maxKeywordFreq };
