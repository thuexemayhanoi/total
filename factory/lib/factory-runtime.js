'use strict';
// AI WIKI TOTAL — factory-runtime: helper THUẦN cho orchestration production.
//
// DEFECT B hardening: logic backlog/chunk/progress/invariant tách khỏi YAML
// heredoc (trước đây nhân bản trong 3 workflow) về đây — deterministic, test
// được ở 4 tầng. KHÔNG require factory.js (tránh circular); factory.js re-export
// hằng số dùng chung (PUBLISH_CHUNK_LIMIT).
//
// Trạng thái slot:
//   TERMINAL:   PUBLISHED, BLOCKED (xong hẳn — không claimable nữa)
//   CLAIMABLE:  PLANNED, RESEARCH, WRITING, QA, REPAIR, PASS
//   PLANNED mà CHƯA có module bài = WAITING_FOR_WRITER — KHÔNG phải backlog
//   claimable và KHÔNG phải lỗi CI (GitHub Actions không tự viết prose).

const TERMINAL_STATES = ['PUBLISHED', 'BLOCKED'];
const CLAIMABLE_STATES = ['PLANNED', 'RESEARCH', 'WRITING', 'QA', 'REPAIR', 'PASS'];
const PUBLISH_CHUNK_LIMIT = 10; // tối đa ID mỗi publish transaction
const FIRST_CHUNK_LIMIT = 5;    // chunk đầu khi xưởng chưa có bài PUBLISHED nào

function toSlugSet(articleSlugs) {
  if (articleSlugs instanceof Set) return articleSlugs;
  return new Set(Array.isArray(articleSlugs) ? articleSlugs : []);
}

// Giới hạn chunk của iteration theo số bài đã publish (quy tắc canonical của xưởng).
function chunkLimit(publishedCount) {
  return publishedCount === 0 ? FIRST_CHUNK_LIMIT : PUBLISH_CHUNK_LIMIT;
}

// Giới hạn vòng an toàn TÍNH TỪ workload thực tế — không hardcode "thử 1000 vòng":
// ceil(initialClaimable / chunkLimit) + phụ cấp recovery nhỏ (REPAIR/BLOCKED retry).
function maxIterations(initialClaimable, limitArg) {
  const n = Number(initialClaimable);
  if (!Number.isFinite(n) || n <= 0) return 1;
  const perIter = Number.isFinite(limitArg) && limitArg > 0 ? limitArg : PUBLISH_CHUNK_LIMIT;
  return Math.ceil(n / perIter) + 2;
}

// Backlog claimable = slot chưa terminal CÓ module bài (article-backed).
// Trả về cả danh sách WAITING_FOR_WRITER để chẩn đoán (không phải lỗi CI).
function findClaimableBacklog(m, articleSlugs) {
  const slugs = toSlugSet(articleSlugs);
  const claimable = [];
  const waitingForWriter = [];
  for (const s of m.slots) {
    if (TERMINAL_STATES.includes(s.state)) continue;
    if (slugs.has(s.slug)) claimable.push(s);
    else if (s.state === 'PLANNED') waitingForWriter.push(s);
  }
  return { claimable, waitingForWriter };
}

// Chọn chunk deterministic: slot DỞ (non-PLANNED, có bài) được resume TRƯỚC,
// sau đó mới claim slot PLANNED có bài. Slot không có module bài không bao giờ
// vào chunk (WAITING_FOR_WRITER). Trả resume/claimed để báo cáo.
function selectChunk(m, articleSlugs, limitArg) {
  const slugs = toSlugSet(articleSlugs);
  const published = m.slots.filter(s => s.state === 'PUBLISHED').length;
  const limit = Number.isFinite(limitArg) && limitArg > 0 ? limitArg : chunkLimit(published);
  const { claimable } = findClaimableBacklog(m, slugs);
  const unfinished = claimable.filter(s => s.state !== 'PLANNED');
  const planned = claimable.filter(s => s.state === 'PLANNED');
  const chunk = [...unfinished, ...planned].slice(0, limit);
  return {
    chunk,
    limit,
    resume: unfinished.length,
    claimed: Math.max(0, Math.min(planned.length, limit - unfinished.length)),
  };
}

// Snapshot bất biến để đo progress trước/sau iteration.
function snapshotState(m, articleSlugs) {
  const slugs = toSlugSet(articleSlugs);
  const { claimable, waitingForWriter } = findClaimableBacklog(m, slugs);
  return {
    published: m.slots.filter(s => s.state === 'PUBLISHED').length,
    claimableBacklog: claimable.length,
    waitingForWriter: waitingForWriter.length,
    blocked: m.slots.filter(s => s.state === 'BLOCKED').length,
    terminal: m.slots.filter(s => TERMINAL_STATES.includes(s.state)).length,
    slotCount: m.slots.length,
  };
}

// Progress hợp lệ khi backlog > 0: published tăng, HOẶC backlog giảm, HOẶC có
// slot chuyển terminal BLOCKED vì QA thật (blocked tăng).
function computeProgress(before, after) {
  const progressed =
    (after.published > before.published) ||
    (after.claimableBacklog < before.claimableBacklog) ||
    (after.blocked > before.blocked);
  return { progressed };
}

// NO-PROGRESS SENTINEL: backlog > 0 mà iteration không tiến triển hợp lệ nào
// -> FAIL LOUD (throw), không được SUCCESS.
function assertProgress(before, after) {
  if (after.claimableBacklog > 0 && !computeProgress(before, after).progressed) {
    throw new Error(
      'NO_PROGRESS: còn ' + after.claimableBacklog + ' slot claimable mà iteration này không tiến triển ' +
      '(published ' + before.published + '->' + after.published + ', ' +
      'backlog ' + before.claimableBacklog + '->' + after.claimableBacklog + ', ' +
      'blocked ' + before.blocked + '->' + after.blocked + ') — FAIL LOUD, không SUCCESS.'
    );
  }
  return true;
}

// Bất biến production sau SUCCESS — nhận predicate tiêm vào (test được ở unit
// với fixture thuần; CLI verify-invariant cấp predicate từ đĩa thật).
// ctx: {
//   hasLock: boolean,
//   checkpointSlotCount: number|null,
//   validateMatrix?: fn(m),
//   articleExists?: fn(slug) -> bool,
//   pageExists?: fn(slot) -> bool,
//   sitemapHas?: fn(url) -> bool,
//   url: fn(slot) -> string,
//   sitemapUrls?: [string],
//   minQaScore?: number (mặc định 90),
// }
function checkProductionInvariant(m, ctx) {
  const errors = [];
  const minQa = Number.isFinite(ctx && ctx.minQaScore) ? ctx.minQaScore : 90;
  if (!m || !Array.isArray(m.slots)) { return { ok: false, errors: ['ma trận không hợp lệ (thiếu slots)'] }; }
  if (ctx && ctx.hasLock) errors.push('writer lock vẫn còn sau run — không được SUCCESS khi lock chưa giải phóng');
  if (!ctx || !Number.isInteger(ctx.checkpointSlotCount) || ctx.checkpointSlotCount !== m.slots.length) {
    errors.push('checkpoint.slotCount (' + (ctx ? ctx.checkpointSlotCount : 'không có') + ') != matrix.slots.length (' + m.slots.length + ')');
  }
  const ids = new Set();
  const slugs = new Set();
  for (const s of m.slots) {
    if (ids.has(s.id)) errors.push('trùng ID slot: ' + s.id);
    ids.add(s.id);
    if (slugs.has(s.slug)) errors.push('trùng slug slot: ' + s.slug);
    slugs.add(s.slug);
  }
  if (ctx && ctx.validateMatrix) {
    try { ctx.validateMatrix(m); }
    catch (e) { errors.push('ma trận không hợp lệ: ' + (e && e.message ? e.message : e)); }
  }
  for (const s of m.slots.filter(x => x.state === 'PUBLISHED')) {
    if (!(Number(s.qaScore) >= minQa)) errors.push('slot ' + s.id + ' PUBLISHED nhưng qaScore=' + s.qaScore + ' < ' + minQa);
    if (ctx && ctx.articleExists && !ctx.articleExists(s.slug)) {
      errors.push('slot ' + s.id + ' PUBLISHED nhưng KHÔNG có article source (' + s.slug + ')');
    }
    if (ctx && ctx.pageExists && !ctx.pageExists(s)) {
      errors.push('slot ' + s.id + ' PUBLISHED nhưng KHÔNG có trang sinh (' + s.slug + ')');
    }
    if (ctx && ctx.sitemapHas && ctx.url && !ctx.sitemapHas(ctx.url(s))) {
      errors.push('slot ' + s.id + ' PUBLISHED nhưng KHÔNG nằm trong sitemap-articles');
    }
  }
  if (ctx && ctx.sitemapUrls && ctx.url) {
    const pubUrls = new Set(m.slots.filter(x => x.state === 'PUBLISHED').map(ctx.url));
    for (const u of ctx.sitemapUrls) {
      if (!pubUrls.has(u)) errors.push('sitemap-articles có URL không thuộc slot PUBLISHED: ' + u);
    }
  }
  return { ok: errors.length === 0, errors };
}

module.exports = {
  TERMINAL_STATES, CLAIMABLE_STATES, PUBLISH_CHUNK_LIMIT, FIRST_CHUNK_LIMIT,
  chunkLimit, maxIterations, findClaimableBacklog, selectChunk,
  snapshotState, computeProgress, assertProgress, checkProductionInvariant,
};
