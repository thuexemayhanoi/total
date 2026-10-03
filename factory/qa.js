// AI WIKI TOTAL — MINIMAL PRODUCTION QA GATE
//
// Mục đích: CHỐNG BÀI RÁC/LỖI NGUY HIỂM — không phải full-site SEO audit.
//   Score 70–100  = PASS (bài >= 70 KHÔNG sửa chỉ để tăng điểm).
//   Score < 70    = FAIL/REPAIR (vào repair queue).
//   Không REVIEW, không EXCELLENT, không warning score band.
//
// 7 CRITICAL GATE (bất kỳ gate nào fail => FAIL bất kể điểm — critical
// override điểm cao):
//   1. not-empty  — bài rỗng/cụt nghiêm trọng (mất cấu trúc hoặc < 1600 từ).
//   2. dup-id     — duplicate article ID (trùng ID slot/manifest đã có).
//   3. dup-slug   — duplicate slug (trùng slug slot/manifest đã có).
//   4. canonical  — sai/duplicate canonical (slug bẩn, lệch hub/slug với slot).
//   5. render-ok  — HTML/frontmatter hỏng khiến trang không render + ký tự rác.
//   6. business   — sai giá/policy kinh doanh đã xác minh (bịa giá/địa chỉ,
//                   nhồi Zalo/hotline...).
//   7. links-ok   — broken link nghiêm trọng (related trỏ slug không tồn tại,
//                   làm build/deploy fail).
//
// Mọi lỗi SEO nhẹ khác (meta title/description, checklist, references...)
// chỉ ghi WARNING (mỗi warning −5 điểm), KHÔNG chặn publish một mình —
// chỉ hạ điểm; đủ warning thì điểm tụt dưới 70 và bài mới FAIL.
//
// Ngưỡng canonical: QA_PASS_MIN = 70 (factory/lib/factory-runtime.js).
// ctx (optional, do coordinator cấp khi QA scoped):
//   { slotId, slot: {id, hub, slug}, knownIds: Map(id->slug, đã lọc self),
//     knownSlugs: Set(slug, đã lọc self) }
// Không có ctx thì các gate cần dữ liệu repo (dup-id/dup-slug/links-ok/canonical
// theo slot) được exempt — QA vẫn chặn được not-empty/render-ok/business.
'use strict';
const R = require('./lib/render');
const runtime = require('./lib/factory-runtime');

const QA_PASS_MIN = runtime.QA_PASS_MIN;
const WARNING_PENALTY = 5; // mỗi warning −5 điểm

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Pattern bịa dữ kiện kinh doanh — đã xác minh là sai policy, cấm tuyệt đối.
const FORBIDDEN = [
  { name: 'Không bịa giá thuê', re: /giá\s*thuê\s*(chỉ\s*từ|chỉ\s*\d)/i },
  { name: 'Không bịa địa chỉ', re: /địa\s*chỉ\s*:\s*số\s*(nhà\s*)?\d/i },
  { name: 'Không nhồi Zalo', re: /liên\s*hệ\s*zalo/i },
  { name: 'Không nhồi hotline', re: /hotline/i },
];
// Ký tự rác: CJK / Cyrillic / Hangul — nội dung tiếng Việt không được chứa.
const GARBAGE_RE = /[\u4e00-\u9fff\u0400-\u04ff\u3040-\u30ff\uac00-\ud7ff]/;

function bodyWords(a) {
  return R.wordCount(
    [a.title, a.summary, a.quickAnswer, (a.keyPoints || []).join(' '),
     (a.sections || []).map(s => s.h2 + ' ' + s.html).join(' '),
     (a.checklist || []).join(' '), (a.steps || []).map(s => s.title + ' ' + s.detail).join(' '),
     (a.warnings || []).join(' '), (a.notes || [])].join(' '));
}

function qaArticle(a, ctx) {
  ctx = ctx || {};
  const words = bodyWords(a);
  const checks = [];
  const add = (name, pass, note, critical) => checks.push({
    name, pass: !!pass, note: note || '', critical: !!critical,
  });

  // ---------- 7 CRITICAL GATES ----------
  // G1 not-empty: mất cấu trúc hoặc cụt nghiêm trọng (< 1600 từ).
  const structureOk = !!(a && a.title && a.summary && a.quickAnswer &&
    Array.isArray(a.sections) && a.sections.length >= 4 &&
    a.sections.every(s => (s.h2 || '').trim() && ((s.html || '').trim().length >= 200)));
  add('G1 Bài không rỗng/cụt (đủ cấu trúc + >= 1600 từ)', structureOk && words >= 1600,
    `${words} từ, ${Array.isArray(a.sections) ? a.sections.length : 0} mục`, true);

  // G2 dup-id: ID slot đã được slug KHÁC đăng ký (knownIds đã lọc entry self).
  const knownIds = ctx.knownIds instanceof Map ? ctx.knownIds : null;
  const dupId = !!(knownIds && ctx.slotId && knownIds.has(ctx.slotId));
  add('G2 Không duplicate article ID', !(ctx.slotId && knownIds) || !dupId,
    dupId ? ('ID ' + ctx.slotId + ' đã thuộc slug ' + knownIds.get(ctx.slotId)) : '', true);

  // G3 dup-slug: slug đã được bài/slot khác dùng (knownSlugs đã lọc self).
  const knownSlugs = ctx.knownSlugs instanceof Set ? ctx.knownSlugs : null;
  const dupSlug = !!(knownSlugs && a && a.slug && knownSlugs.has(a.slug));
  add('G3 Không duplicate slug', !dupSlug, dupSlug ? ('slug "' + a.slug + '" đã tồn tại') : '', true);

  // G4 canonical: slug sạch + khớp slot (hub/slug) — sai chỗ sinh sai canonical.
  let canonicalOk = !!(a && SLUG_RE.test(a.slug || ''));
  let canonicalNote = '';
  if (canonicalOk && ctx.slot) {
    const expectHub = a.hub ? (a.category + '/' + a.hub) : String(a.category || '');
    if (ctx.slot.slug !== a.slug) { canonicalOk = false; canonicalNote = 'slot.slug != article.slug'; }
    else if (ctx.slot.hub !== expectHub) { canonicalOk = false; canonicalNote = 'slot.hub (' + ctx.slot.hub + ') != article path (' + expectHub + ')'; }
  }
  add('G4 Canonical đúng (slug sạch + khớp slot)', canonicalOk, canonicalNote, true);

  // G5 render-ok: render thử trang + không ký tự rác (CJK/Cyrillic/Hangul).
  let renderOk = !GARBAGE_RE.test(JSON.stringify(a));
  let renderNote = '';
  if (renderOk) {
    try {
      const { CATEGORIES } = require('./data/categories');
      const cat = CATEGORIES.find(c => c.slug === a.category);
      const hub = cat && a.hub ? cat.children.find(h => h.slug === a.hub) : null;
      if (!cat || (a.hub && !hub)) {
        renderOk = false; renderNote = 'không tìm được category/hub "' + a.category + '/' + (a.hub || '') + '" — trang không render được';
      } else {
        const bySlug = {}; bySlug[a.slug] = a;
        R.renderArticle(cat, hub, a, [a], bySlug);
      }
    } catch (e) {
      renderOk = false; renderNote = 'render lỗi: ' + (e && e.message ? e.message : e);
    }
  } else {
    renderNote = 'chứa ký tự rác (CJK/Cyrillic/Hangul)';
  }
  add('G5 Render được trang sạch (không rác, không lỗi render)', renderOk, renderNote, true);

  // G6 business: sai giá/policy kinh doanh đã xác minh.
  let businessOk = true;
  const businessNotes = [];
  const json = JSON.stringify(a);
  for (const f of FORBIDDEN) {
    if (f.re.test(json)) { businessOk = false; businessNotes.push(f.name); }
  }
  add('G6 Không sai giá/policy kinh doanh', businessOk, businessNotes.join('; '), true);

  // G7 links-ok: related >= 2 và mọi related tồn tại (broken link nghiêm trọng).
  const related = (a && Array.isArray(a.related)) ? a.related : [];
  let linksOk = related.length >= 2;
  const linksNotes = [];
  if (linksOk && knownSlugs) {
    const missing = related.filter(r => !knownSlugs.has(r));
    if (missing.length) { linksOk = false; linksNotes.push('related không tồn tại: ' + missing.join(', ')); }
  }
  add('G7 Liên kết nội bộ nguyên vẹn (related >= 2, tồn tại)', linksOk,
    (related.length < 2 ? 'ít hơn 2 related' : '') + linksNotes.join('; '), true);

  // ---------- WARNINGS (SEO nhẹ — chỉ −5 điểm, KHÔNG chặn publish) ----------
  add('W1 Tiêu đề SEO 25–70 ký tự', (a.seoTitle || '').length >= 25 && (a.seoTitle || '').length <= 70,
    `dài ${(a.seoTitle || '').length}`, false);
  add('W2 Meta description 100–165 ký tự', (a.metaDescription || '').length >= 100 && (a.metaDescription || '').length <= 165,
    `dài ${(a.metaDescription || '').length}`, false);
  add('W3 Có đủ điểm chính (>= 4)', (a.keyPoints || []).length >= 4, `${(a.keyPoints || []).length} điểm`, false);
  add('W4 Có danh sách kiểm tra (>= 3)', (a.checklist || []).length >= 3, '', false);
  add('W5 Có cảnh báo (>= 2)', (a.warnings || []).length >= 2, '', false);
  add('W6 Có nguồn tham khảo (>= 2)', (a.references || []).length >= 2, '', false);
  add('W7 Lưu ý miễn trừ trách nhiệm (>= 1)', (a.notes || []).length >= 1, '', false);
  add('W8 Ngày hợp lệ (date/updated YYYY-MM-DD)', DATE_RE.test(a.date || '') && DATE_RE.test(a.updated || a.date || ''), '', false);
  add('W9 Schema cơ bản (entities >= 2, keywords >= 3)',
    (a.entities || []).length >= 2 && (a.keywords || []).length >= 3, '', false);

  // ---------- Điểm + verdict ----------
  const criticalFail = checks.filter(c => c.critical && !c.pass);
  const warningFail = checks.filter(c => !c.critical && !c.pass);
  const score = Math.max(0, Math.min(100, 100 - warningFail.length * WARNING_PENALTY));
  return {
    score,
    pass: criticalFail.length === 0 && score >= QA_PASS_MIN,
    words,
    checks,
    criticals: criticalFail.map(c => c.name),
    warnings: warningFail.map(c => c.name),
    gate: 'minimal',
  };
}

module.exports = { qaArticle, QA_PASS_MIN, WARNING_PENALTY, GARBAGE_RE, FORBIDDEN };
