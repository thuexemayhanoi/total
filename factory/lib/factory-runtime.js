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
const PAIR_SIZE = 2;             // SIMPLE PRODUCTION MODE: đúng 2 bài mỗi pair transaction
const SEO_PASS_MIN = 70;        // ngưỡng SEO advisory (factory/seo.js chấm — KHÔNG chặn publish)
const QA_PASS_MIN = 70;         // MINIMAL PRODUCTION QA GATE: 70-100 PASS, <70 FAIL/REPAIR
// PRODUCTION CYCLE: mỗi cycle 12-18 bài chia cho 3 writer; scoped QA chỉ bài
// mới của cycle (KHÔNG bao giờ quét lại toàn site trong production loop).
const CYCLE_MIN = 12;           // cycle thiếu < 12 bài PLANNED -> cần refill queue
const CYCLE_MAX = 18;           // tối đa bài mỗi cycle (parseCycleIds từ chối quá 18)
const WRITER_COUNT = 3;         // 3 writer — writer CHỈ viết, không đụng state/txn/publish
const QUEUE_REFILL_FLOOR = 100; // planned < 100 -> allocator tự refill queue
const QUEUE_REFILL_TARGET = 300; // refill lên ~300 topic hợp lệ (từ topic-pool)

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

// ---------- SIMPLE PRODUCTION MODE (pair hot path) ----------
// Map slug -> ID slot theo ma trận (thuần).
function slotIdsBySlugs(m, slugs) {
  const out = [];
  for (const s of m.slots) {
    if ((slugs || []).includes(s.slug)) out.push(s.id);
  }
  return out;
}

// Phân loại push theo path đổi: mọi file đổi thuộc bài viết/state = CONTENT_ONLY;
// bất kỳ file ngoài (engine, workflow, template...) = ENGINE_CHANGE.
const CONTENT_PATH_RES = [/^factory\/data\/articles\//, /^factory\/state\//];
function classifyChangeMode(changedPaths) {
  const all = (Array.isArray(changedPaths) ? changedPaths : []).map(String).filter(Boolean);
  if (!all.length) return 'EMPTY';
  const isContent = (p) => CONTENT_PATH_RES.some((re) => re.test(p));
  return all.every(isContent) ? 'CONTENT_ONLY' : 'ENGINE_CHANGE';
}

// EXACT PUSH SCOPE: entry = { status: 'A'|'M', slug } (từ git diff module bài).
// Trả { newIds, repairIds, deletedSlugs } — chỉ đúng bài của commit này, không sweep.
function scopeFromSlugEntries(m, entries) {
  const bySlug = new Map(m.slots.map((s) => [s.slug, s]));
  const newIds = [];
  const repairIds = [];
  const deletedSlugs = [];
  for (const e of entries || []) {
    const s = bySlug.get(e.slug);
    if (!s) continue; // module không có slot tương ứng — bỏ qua (backlog command sẽ báo)
    if (e.status === 'D') deletedSlugs.push(e.slug);
    else if (e.status === 'A') newIds.push(s.id);
    else repairIds.push(s.id);
  }
  return { newIds, repairIds, deletedSlugs };
}

// Kế hoạch publish theo pair: RESUME backlog article-backed CŨ TRƯỚC (crash
// recovery, không trộn), rồi mới đến scope của push này; mỗi txn đúng PAIR_SIZE.
// Slot WAITING_FOR_WRITER (chưa có bài) KHÔNG BAO GIỜ vào plan — không sweep.
function buildPublishPlan(m, articleSlugs, scopeIds, opts) {
  const size = (opts && Number.isFinite(opts.pairSize) && opts.pairSize > 0) ? opts.pairSize : PAIR_SIZE;
  const slugs = toSlugSet(articleSlugs);
  const scope = new Set((scopeIds || []).map(String));
  const { claimable } = findClaimableBacklog(m, slugs);
  const backlog = claimable
    .filter((s) => !scope.has(s.id))
    .sort((a, b) => (Number(String(a.id).slice(1)) - Number(String(b.id).slice(1))))
    .map((s) => s.id);
  const txns = [];
  for (let i = 0; i < backlog.length; i += size) {
    txns.push({ ids: backlog.slice(i, i + size), mode: 'resume' });
  }
  const scopeArr = (scopeIds || []).map(String).filter(Boolean);
  for (let i = 0; i < scopeArr.length; i += size) {
    txns.push({ ids: scopeArr.slice(i, i + size), mode: scopeArr.length === 1 ? 'repair' : 'pair' });
  }
  return { txns, backlogCount: backlog.length };
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
//   minQaScore?: number (mặc định 75),
// }
function checkProductionInvariant(m, ctx) {
  const errors = [];
  const minQa = Number.isFinite(ctx && ctx.minQaScore) ? ctx.minQaScore : QA_PASS_MIN;
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
    const minSeo = Number.isFinite(ctx && ctx.minSeoScore) ? ctx.minSeoScore : SEO_PASS_MIN;
    if (s.seoScore != null && !(Number(s.seoScore) >= minSeo)) errors.push('slot ' + s.id + ' PUBLISHED nhưng seoScore=' + s.seoScore + ' < ' + minSeo);
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

// PRODUCTION CYCLE PLAN: 12-18 slot cho cycle tiếp theo (deterministic).
// Trả { ids, size, writers, complete, needsRefill, allocations }:
//   - RESUME TRƯỚC: slot PASS đã có module bài (QA xong nhưng chưa kịp
//     publish — crash giữa tick) được xếp đầu để tick sau publish nốt,
//     không để backlog mồ côi. Cần articleSlugs để biết slot PASS nào có bài.
//   - PLANNED SAU: slot chờ writer nộp bài (cycle-qa tự pending slot chưa có
//     module — KHÔNG giả bài).
//   complete    = đủ CYCLE_MIN bài để chạy cycle trọn vẹn;
//   needsRefill = tổng slot PLANNED < QUEUE_REFILL_FLOOR -> cần queue-refill.
function buildCyclePlan(m, articleSlugs) {
  const num = (id) => Number(String(id || '').replace(/^S0*/, '')) || 0;
  const byId = (a, b) => num(a.id) - num(b.id);
  const slugs = articleSlugs ? toSlugSet(articleSlugs) : null;
  const passReady = (m && Array.isArray(m.slots) ? m.slots : [])
    .filter(s => s.state === 'PASS' && slugs && slugs.has(s.slug))
    .sort(byId);
  const planned = (m && Array.isArray(m.slots) ? m.slots : [])
    .filter(s => s.state === 'PLANNED')
    .sort(byId);
  const chosen = passReady.concat(planned).slice(0, CYCLE_MAX);
  const ids = chosen.map(s => s.id);
  return {
    ids,
    size: ids.length,
    writers: WRITER_COUNT,
    complete: ids.length >= CYCLE_MIN,
    needsRefill: planned.length < QUEUE_REFILL_FLOOR,
    allocations: splitWorkload(ids, WRITER_COUNT),
  };
}

// ALLOCATE: chia N ID cho `count` writer round-robin (deterministic — cùng
// ma trận luôn ra cùng phân bổ). Mỗi ID thuộc đúng 1 writer.
function splitWorkload(ids, countArg) {
  const n = Number.isInteger(countArg) && countArg > 0 ? countArg : WRITER_COUNT;
  const out = Array.from({ length: n }, () => []);
  for (let i = 0; i < (Array.isArray(ids) ? ids.length : 0); i++) out[i % n].push(ids[i]);
  return out;
}

// QUEUE REFILL: chọn topic từ pool (factory/data/topic-pool) không trùng slug
// đã có (bài hiện có lẫn slot đã plan), đủ đưa planned lên ~target.
function selectRefillTopics(pool, existingSlugs, plannedCount, targetArg) {
  const target = Number.isFinite(targetArg) && targetArg > 0 ? targetArg : QUEUE_REFILL_TARGET;
  const planned = Number.isFinite(plannedCount) && plannedCount >= 0 ? plannedCount : 0;
  const need = Math.max(0, target - planned);
  const seen = toSlugSet(existingSlugs);
  const out = [];
  if (need === 0) return out;
  for (const t of (Array.isArray(pool) ? pool : [])) {
    if (out.length >= need) break;
    if (!t || !t.slug || !t.hub || !t.title) continue;
    if (seen.has(t.slug)) continue;
    seen.add(t.slug);
    out.push({ hub: t.hub, slug: t.slug, title: t.title });
  }
  return out;
}

module.exports = {
  TERMINAL_STATES, CLAIMABLE_STATES, PUBLISH_CHUNK_LIMIT, FIRST_CHUNK_LIMIT,
  PAIR_SIZE, SEO_PASS_MIN, QA_PASS_MIN, CYCLE_MIN, CYCLE_MAX, WRITER_COUNT,
  QUEUE_REFILL_FLOOR, QUEUE_REFILL_TARGET,
  classifyChangeMode, scopeFromSlugEntries, buildPublishPlan,
  chunkLimit, maxIterations, findClaimableBacklog, selectChunk,
  snapshotState, computeProgress, assertProgress, checkProductionInvariant,
  buildCyclePlan, selectRefillTopics, splitWorkload,
};
