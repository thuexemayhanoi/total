// AI WIKI TOTAL — Topic Factory V2: CLI quản trị topic (được factory.js gọi cho các lệnh topic-*).
//
//   Discover -> Validate -> Deduplicate -> Approve -> Queue -> Writer -> Scoped QA -> Publish
//
// Lệnh (qua `node factory/factory.js <lệnh>`):
//   topic-audit      [--out f.json] [--md f.md]       READ-ONLY: đo trùng lặp thật, phân loại 300 slot
//   topic-backfill   --role coordinator [--refresh-published]   ghi topic-matrix cho slot cũ (idempotent, không đổi matrix.json); --refresh-published đồng bộ dòng published legacy về tiêu đề công khai (module.title)
//   topic-propose    --file c.jsonl [--update] [--dry-run] --role coordinator
//   topic-coverage   [--json]                  READ-ONLY: độ phủ/đa dạng intent theo hub (hub trống, hub đông và trùng)
//   topic-neighbours <T…> [--top N] [--json]   READ-ONLY: bài gần nhất + H2 để người duyệt đọc
//   topic-approve    <T…> --by NAME --ack code,code --reviewed slug,slug [--note …] [--dry-run] --role coordinator
//                    hoặc  --file approvals.json (theo từng topic)   (topic -> slot PLANNED; bắt buộc ack cảnh báo + đã đọc láng giềng)
//   topic-reopen     <T…> --by NAME --reason "…" --role coordinator   (mở lại topic V2 đã REJECTED nếu gate vẫn ACCEPT)
//   topic-reject     <T…> --reason "…" [--merge-into <slug> --by NAME] --role coordinator   (merge-into: gộp vào bài đã có, ghi người rà soát)
//   topic-status     [--json]
//   topic-check      [--recheck]                       invariant (exit 1 khi lỗi)
//   topic-index-rebuild --role coordinator | topic-index-check
//   topic-import     --file gsc.csv --period a..b [--out leads.jsonl]   (đọc số liệu GSC thật, không bịa)
//   topic-brief      <S…|T…>                           brief cho writer
//
// Không xóa bài, không đổi URL, không đụng matrix.json ngoài topic-approve (coordinator).
'use strict';

const fs = require('fs');
const path = require('path');
const I = require('./lib/topic-intel');
const G = require('./lib/topic-gate');
const M = require('./lib/topic-matrix');
const Gov = require('./lib/topic-governance');
const Idx = require('./lib/topic-index');
const TF = require('./lib/topic-factory');
const { CATEGORIES } = require('./data/categories');

// ---------------------------------------------------------------------------
// tiện ích
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const positional = [];
  const opts = {};
  const flags = new Set();
  const list = Array.isArray(argv) ? argv : [];
  for (let i = 0; i < list.length; i++) {
    const a = list[i];
    if (a.startsWith('--')) {
      const k = a.slice(2);
      if (i + 1 < list.length && !list[i + 1].startsWith('--')) { opts[k] = list[i + 1]; i++; }
      else flags.add(k);
    } else positional.push(a);
  }
  return { positional, opts, flags };
}

function hubSet() {
  const s = new Set();
  for (const p of CATEGORIES) for (const c of (p.children || [])) s.add(p.slug + '/' + c.slug);
  return s;
}

function assertCoordinator(role) {
  if (role !== 'coordinator') throw new Error('TỪ CHỐI: chỉ coordinator được ghi topic-matrix/matrix — vai trò nhận được: ' + JSON.stringify(role || null));
}

function pct(arr, p) {
  if (!arr.length) return null;
  const a = arr.slice().sort((x, y) => x - y);
  return a[Math.min(a.length - 1, Math.floor(p * a.length))];
}
function dist(arr) {
  if (!arr.length) return { n: 0 };
  const r = x => Number(x.toFixed(3));
  return { n: arr.length, p10: r(pct(arr, 0.1)), p50: r(pct(arr, 0.5)), p90: r(pct(arr, 0.9)), p99: r(pct(arr, 0.99)), max: r(arr.reduce((m, x) => (x > m ? x : m), 0)) };
}

function context(deps) {
  const gov = Gov.load(deps.governanceFile);
  const matrix = deps.loadMatrix();
  const { rows, errors } = M.readRows(deps.topicMatrixFile);
  return { gov, matrix, rows, rowErrors: errors };
}

// Ghi lại toàn bộ file sẽ làm MẤT dòng hỏng => từ chối ghi cho tới khi người vận hành sửa/khôi phục từ git.
function assertWritable(ctx) {
  if (ctx.rowErrors.length) {
    throw new Error('TỪ CHỐI ghi: topic-matrix.jsonl có ' + ctx.rowErrors.length + ' dòng hỏng (dòng ' +
      ctx.rowErrors.slice(0, 5).map(e => e.line).join(',') + ') — khôi phục từ git rồi chạy lại; không ghi đè để tránh mất dữ liệu');
  }
}

// ---------------------------------------------------------------------------
// nạp chữ ký bài: ưu tiên SQLite derived cache (tăng dần), fallback parse trực tiếp (read-only)
// ---------------------------------------------------------------------------
function parseAllDirect(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.js')).sort()) {
    const full = path.join(dir, f);
    let a;
    try { a = require(full); } catch (e) { continue; } finally { try { delete require.cache[require.resolve(full)]; } catch (_) { /* chưa nạp */ } }
    if (!a || !a.slug || !a.title) continue;
    out.push({ file: f, slug: a.slug, title: a.title, hub: (a.category || '') + (a.hub ? '/' + a.hub : ''), article: a, headline: G.articleHeadlineDoc(a) });
  }
  return out;
}

// Tiêu đề CÔNG KHAI của bài đã xuất bản là module.title (generator render H1/breadcrumb/thẻ bài từ module). slot.title chỉ là nhãn lúc lập
// kế hoạch và đã lệch ở một số bài do writer sửa tiêu đề trong module — mọi phép đo trên bài đã xuất bản dùng tiêu đề công khai.
function publicTitleOf(docs) {
  const by = new Map((docs || []).map(d => [d.slug, d.title]));
  return s => by.get(s.slug) || s.title;
}

function loadArticleDocs(deps, args) {
  const dir = deps.articlesDir || Idx.ARTICLES_DIR;
  const dbFile = deps.indexFile || Idx.DB_FILE;
  if (!args.flags.has('no-index')) {
    try {
      const role = args.opts.role;
      if (role === 'coordinator' && !Idx.status({ dbFile, articlesDir: dir }).ok) Idx.rebuild({ role, dbFile, articlesDir: dir });
      if (Idx.status({ dbFile, articlesDir: dir }).ok) return { docs: Idx.loadDocs(dbFile), source: 'index' };
    } catch (e) { /* cache lỗi -> fallback parse trực tiếp */ }
  }
  return { docs: parseAllDirect(dir), source: 'direct' };
}

// Corpus = bài đã có module (PUBLISHED / đang xử lý) + topic còn hiệu lực trong topic-matrix.
// opts.excludeLegacyOpen (mặc định true): bỏ topic legacy PLANNED/RESEARCH — chỉ là chỗ giữ chỗ template.
function buildCorpus(ctx, articleDocs, opts) {
  const o = opts || {};
  const slotBySlug = new Map(ctx.matrix.slots.map(s => [s.slug, s]));
  const docs = [];
  const seen = new Set();
  for (const d of articleDocs) {
    const slot = slotBySlug.get(d.slug);
    docs.push({
      slotId: slot ? slot.id : null, slug: d.slug, title: d.title, hub: slot ? slot.hub : d.hub,
      status: slot && slot.state === 'PUBLISHED' ? 'PUBLISHED' : 'QUEUED', source: 'article', headline: d.headline,
    });
    seen.add(d.slug);
  }
  for (const s of ctx.matrix.slots) {
    if (s.state !== 'PUBLISHED' || seen.has(s.slug)) continue;
    docs.push({ slotId: s.id, slug: s.slug, title: s.title, hub: s.hub, status: 'PUBLISHED', source: 'article',
      headline: { title: s.title, outline: [], keywords: [], text: [] } });
    seen.add(s.slug);
  }
  for (const r of ctx.rows) {
    if (r.lifecycle === 'REJECTED' || seen.has(r.slug)) continue;
    // Slot legacy chưa có metadata V2 chỉ là chỗ giữ chỗ theo template: KHÔNG được chặn topic V2 đầy đủ thông tin
    // (topic V2 được duyệt sẽ thay thế chúng — xem cmdApprove).
    if (o.excludeLegacyOpen !== false && /^legacy-/.test(String(r.source)) && (r.lifecycle === 'PLANNED' || r.lifecycle === 'RESEARCH')) continue;
    docs.push({ topicId: r.topicId, slotId: r.slotId || null, slug: r.slug, title: r.title, hub: r.hub, status: 'QUEUED',
      lifecycle: r.lifecycle, source: r.source, headline: G.topicHeadlineDoc(r) });
    seen.add(r.slug);
  }
  return G.TopicCorpus.fromDocs(docs);
}

const gateOpts = (ctx, extra) => Object.assign({ thresholds: ctx.gov.thresholds, hubs: hubSet() }, extra || {});

// ---------------------------------------------------------------------------
// topic-audit
// ---------------------------------------------------------------------------
const TITLE_FAMILIES = [
  ['A: "Kinh nghiệm X dành cho người mới"', t => /^Kinh nghiệm .* dành cho người mới$/.test(t)],
  ['B: "Tổng hợp kiến thức: X"', t => /^Tổng hợp kiến thức: /.test(t) && !I.analyzeTopic(t).modifiers.length],
  ['C: "Hướng dẫn chi tiết về X"', t => /^Hướng dẫn chi tiết về /.test(t)],
  ['D: "X — những điều cần biết"', t => / — những điều cần biết$/.test(t)],
  ['E: V1 hoán vị "Seed: góc × bối cảnh"', t => I.analyzeTopic(t).modifiers.length > 0],
];
function titleFamily(t) {
  for (const [name, test] of TITLE_FAMILIES) if (test(t)) return name;
  return 'F: tiêu đề viết tay / khác';
}

function titleDefects(title) {
  const d = [];
  if (/(^|\s)(\p{L}+(?:\s+\p{L}+){0,2})\s+\2(?=\s|$)/iu.test(title)) d.push('lặp từ/cụm từ liền kề');
  // địa danh viết thường (so khớp phân biệt hoa/thường)
  if (/(^|[\s:—,-])(hà nội|sài gòn|đà nẵng|hải phòng|cần thơ|nha trang|đà lạt)(?=[\s:—,.-]|$)/u.test(title)) d.push('địa danh viết thường');
  return d;
}

// Audit nhanh các slot PLANNED chưa có bài (chế độ legacy): chỉ cần corpus bài đã xuất bản.
function auditPlanned(ctx, direct) {
  // slot do topic-approve tạo (notes source=topic-v2) KHÔNG phải slot legacy — không đưa vào kiểm toán legacy
  const planned = ctx.matrix.slots.filter(s => s.state === 'PLANNED' && !/source=topic-v2/.test(s.notes || '') && !direct.some(d => d.slug === s.slug));
  const published = ctx.matrix.slots.filter(s => s.state === 'PUBLISHED');
  const bySlug = new Map(direct.map(d => [d.slug, d]));
  const titleOf = publicTitleOf(direct);
  const corpus = G.TopicCorpus.fromDocs(published.map(s => {
    const d = bySlug.get(s.slug);
    return { slotId: s.id, slug: s.slug, title: titleOf(s), hub: s.hub, status: 'PUBLISHED', source: 'article',
      headline: d ? d.headline : { title: s.title, outline: [], keywords: [], text: [] } };
  }));
  return { planned, published, bySlug, audited: G.auditLegacySlots(planned, corpus, { thresholds: ctx.gov.thresholds }) };
}

function auditReport(deps, args) {
  const ctx = context(deps);
  const dir = deps.articlesDir || Idx.ARTICLES_DIR;
  const direct = parseAllDirect(dir);
  const titleOf = publicTitleOf(direct);
  const { published, bySlug, audited } = auditPlanned(ctx, direct);

  const verdicts = {};
  const reasonCodes = {};
  const keys = new Set();
  const perFamily = {};
  for (const r of audited) {
    const v = r.result.verdict === 'ACCEPT' ? 'KEEP' : r.result.verdict;
    verdicts[v] = (verdicts[v] || 0) + 1;
    for (const x of r.result.reasons) reasonCodes[v + ' · ' + x.code] = (reasonCodes[v + ' · ' + x.code] || 0) + 1;
    keys.add(r.result.analysis.intentKey);
    const fam = r.slot.title.split(':')[0];
    perFamily[fam] = perFamily[fam] || { total: 0, verdicts: {} };
    perFamily[fam].total++;
    perFamily[fam].verdicts[v] = (perFamily[fam].verdicts[v] || 0) + 1;
  }

  // --- cụm intent của bài đã xuất bản ---
  const pubArts = published.map(s => ({ slot: s, d: bySlug.get(s.slug), a: I.analyzeTopic(titleOf(s)) })).filter(x => x.d);
  const body = I.buildTfidf(pubArts.map(x => I.termFreq(I.articleFields(x.d.article))));
  const headTf = pubArts.map(x => G.headlineTf(x.d.headline));
  const headIdx = I.buildTfidf(headTf);
  const byKey = new Map();
  pubArts.forEach((x, i) => { if (!byKey.has(x.a.intentKey)) byKey.set(x.a.intentKey, []); byKey.get(x.a.intentKey).push(i); });
  const same = [];
  const clusters = [];
  for (const [k, idxs] of byKey) {
    if (idxs.length < 2) continue;
    const cs = [];
    for (let i = 0; i < idxs.length; i++) for (let j = i + 1; j < idxs.length; j++) {
      const c = I.cosine(body.vectors[idxs[i]], body.vectors[idxs[j]]);
      cs.push(c); same.push(c);
    }
    const size = idxs.length;
    clusters.push({ intentKey: k, published: size, meanBodyCosine: Number((cs.reduce((a, b) => a + b, 0) / cs.length).toFixed(3)),
      risk: size >= 6 ? 'high' : size >= 3 ? 'medium' : 'low', sample: idxs.slice(0, 3).map(i => pubArts[i].slot.slug) });
  }
  clusters.sort((a, b) => b.published - a.published);
  // mẫu cặp khác intent (LCG cố định -> tái lập được)
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const cross = [];
  for (let t = 0; t < 20000; t++) {
    const i = Math.floor(rnd() * pubArts.length); const j = Math.floor(rnd() * pubArts.length);
    if (i === j || pubArts[i].a.intentKey === pubArts[j].a.intentKey) continue;
    cross.push(I.cosine(body.vectors[i], body.vectors[j]));
  }
  // shingle 5 từ giữa các bài cùng cụm: có chép cụm dài không?
  const sh = new Map();
  const shOf = i => { if (!sh.has(i)) sh.set(i, I.shingles(I.articleText(pubArts[i].d.article), 5)); return sh.get(i); };
  const cont = [];
  for (const [, idxs] of byKey) {
    if (idxs.length < 2) continue;
    for (let i = 0; i < idxs.length; i++) for (let j = 0; j < idxs.length; j++) if (i !== j) cont.push(I.containment(shOf(idxs[i]), shOf(idxs[j])));
  }
  // cặp headline giống cao nhưng KHÁC intent key (trùng ý mà key không bắt được)
  const crossHigh = [];
  for (let i = 0; i < pubArts.length; i++) for (let j = i + 1; j < pubArts.length; j++) {
    if (pubArts[i].a.intentKey === pubArts[j].a.intentKey) continue;
    const c = I.cosine(headIdx.vectors[i], headIdx.vectors[j]);
    if (c >= 0.4) crossHigh.push({ score: Number(c.toFixed(2)), a: pubArts[i].slot.id + ' ' + titleOf(pubArts[i].slot), b: pubArts[j].slot.id + ' ' + titleOf(pubArts[j].slot) });
  }
  crossHigh.sort((a, b) => b.score - a.score);
  const bodyHigh = [];
  for (let i = 0; i < pubArts.length; i++) for (let j = i + 1; j < pubArts.length; j++) {
    const c = I.cosine(body.vectors[i], body.vectors[j]);
    if (c >= 0.3) bodyHigh.push(Number(c.toFixed(2)));
  }

  const families = {};
  for (const s of ctx.matrix.slots) {
    const f = titleFamily(titleOf(s));
    families[f] = families[f] || { published: 0, planned: 0 };
    families[f][s.state === 'PUBLISHED' ? 'published' : 'planned']++;
  }
  const defects = published.map(s => ({ id: s.id, title: titleOf(s), defects: titleDefects(titleOf(s)) })).filter(x => x.defects.length);
  const multi = clusters.reduce((n, c) => n + c.published, 0);
  const allKeys = new Map();
  for (const s of ctx.matrix.slots) { const k = I.analyzeTopic(titleOf(s)).intentKey; allKeys.set(k, (allKeys.get(k) || 0) + 1); }
  const slotsInMulti = [...allKeys.values()].filter(n => n > 1).reduce((a, b) => a + b, 0);

  let seeds = 0; let hubs = 0;
  for (const p of CATEGORIES) for (const c of (p.children || [])) { hubs++; seeds += (c.chuDe || []).length; }
  return {
    generatedAt: new Date().toISOString(), rulesVersion: G.GATE_RULES_VERSION, thresholds: Object.assign({}, G.DEFAULT_THRESHOLDS, ctx.gov.thresholds),
    factory: {
      parents: CATEGORIES.length, hubs, seeds, potentialV1Topics: TF.countPotentialTopics(),
      capacity: ctx.matrix.capacity, plannedTarget: ctx.matrix.plannedTarget, slots: ctx.matrix.slots.length,
      published: published.length, planned: ctx.matrix.slots.filter(s => s.state === 'PLANNED').length,
    },
    titleFamilies: families,
    planned: {
      total: audited.length, verdicts, reasonCodes, distinctIntentKeys: keys.size,
      permutationsPerIntent: Number((audited.length / Math.max(1, keys.size)).toFixed(1)), perSeedFamily: perFamily,
    },
    published: {
      total: published.length, withModule: pubArts.length,
      intentClusters: { distinct: byKey.size + (pubArts.length - multi), multiMember: clusters.length, publishedInMultiMember: multi },
      slotsInMultiMemberIntentKeys: { slots: slotsInMulti, ofTotal: ctx.matrix.slots.length },
      topClusters: clusters.slice(0, 15),
      bodyCosine: { sameIntent: dist(same), crossIntent: dist(cross), pairsAtLeast0_30: bodyHigh.length, pairsAtLeast0_40: bodyHigh.filter(x => x >= 0.4).length },
      fiveGramContainmentSameIntent: dist(cont),
      headlineCrossIntentPairsAtLeast0_40: crossHigh.length, headlineCrossIntentTop: crossHigh.slice(0, 10),
      titleDefects: defects,
    },
    audited,
  };
}

function printAudit(rep, log) {
  const f = rep.factory;
  log('=== TOPIC FACTORY AUDIT ===');
  log(`Taxonomy: ${f.parents} danh mục cha, ${f.hubs} hub, ${f.seeds} seed → Topic Factory V1 có thể sinh ${f.potentialV1Topics} topic (seed × 12 góc × 6 bối cảnh)`);
  log(`Slot: ${f.slots} (PUBLISHED ${f.published}, PLANNED ${f.planned}); plannedTarget=${f.plannedTarget}, capacity=${f.capacity}`);
  log('Họ tiêu đề (published/planned):');
  for (const [k, v] of Object.entries(rep.titleFamilies)) log(`  ${k}: ${v.published}/${v.planned}`);
  const p = rep.planned;
  log(`300 slot PLANNED → ${p.distinctIntentKeys} intent thật (${p.permutationsPerIntent} hoán vị/intent). Verdict: ${JSON.stringify(p.verdicts)}`);
  const pub = rep.published;
  log(`Bài đã xuất bản: ${pub.total}; cụm intent nhiều bài: ${pub.intentClusters.multiMember} (chứa ${pub.intentClusters.publishedInMultiMember} bài)`);
  log(`Cosine nội dung cùng intent: ${JSON.stringify(pub.bodyCosine.sameIntent)} | khác intent: ${JSON.stringify(pub.bodyCosine.crossIntent)}`);
  log(`Shingle 5 từ cùng intent: ${JSON.stringify(pub.fiveGramContainmentSameIntent)}`);
  log(`Cặp headline >=0.40 khác intent-key: ${pub.headlineCrossIntentPairsAtLeast0_40}; lỗi tiêu đề: ${pub.titleDefects.length}`);
}

function cmdAudit(args, deps) {
  const rep = auditReport(deps, args);
  const log = deps.log || console.log;
  printAudit(rep, log);
  const slim = Object.assign({}, rep, { audited: rep.audited.map(r => ({
    id: r.slot.id, title: r.slot.title, verdict: r.result.verdict === 'ACCEPT' ? 'KEEP' : r.result.verdict,
    intentKey: r.result.analysis.intentKey, reasons: r.result.reasons.map(x => x.code), target: (r.result.reasons.find(x => x.target) || {}).target || null,
  })) });
  if (args.opts.out) fs.writeFileSync(args.opts.out, JSON.stringify(slim, null, 1));
  if (args.opts.md) fs.writeFileSync(args.opts.md, renderMarkdown(slim));
  return 0;
}

function renderMarkdown(rep) {
  const f = rep.factory; const p = rep.planned; const pub = rep.published;
  const L = [];
  L.push('# Topic Factory — báo cáo audit (' + rep.generatedAt.slice(0, 10) + ')');
  L.push('');
  L.push('Sinh tự động bởi `node factory/factory.js topic-audit --md …` (read-only, deterministic). Số liệu đo từ `matrix.json` và `factory/data/articles/`; không dùng dữ liệu keyword giả định.');
  L.push('');
  L.push('## 1. Nguyên nhân gốc');
  L.push('');
  L.push(`- \`topic-factory.js\` (V1) sinh topic bằng hoán vị **seed × 12 góc nhìn × 6 bối cảnh**: ${f.seeds} seed trong ${f.hubs} hub → **${f.potentialV1Topics.toLocaleString('en-US')} topic tiềm năng**. Mốc \`plannedTarget\` ${f.plannedTarget.toLocaleString('en-US')} là phần cắt từ kho hoán vị này, không phải từ nhu cầu tìm kiếm.`);
  L.push('- Pool tĩnh `topic-pool.js` dùng 4 khung tiêu đề cố định (“Kinh nghiệm X dành cho người mới”, “Tổng hợp kiến thức: X”, “Hướng dẫn chi tiết về X”, “X — những điều cần biết”).');
  L.push('');
  const fam = rep.titleFamilies;
  const tpl = Object.entries(fam).filter(([k]) => !k.startsWith('F')).reduce((n, [, v]) => n + v.published, 0);
  L.push(`**${tpl}/${pub.total} bài đã xuất bản (${Math.round(100 * tpl / pub.total)}%) mang tiêu đề do template sinh**; 100% trong 300 slot đang chờ.`);
  L.push('');
  L.push('Họ tiêu đề trong ma trận hiện tại:');
  L.push('');
  L.push('| Họ | Đã xuất bản | Đang chờ |');
  L.push('|---|---:|---:|');
  for (const [k, v] of Object.entries(rep.titleFamilies)) L.push(`| ${k} | ${v.published} | ${v.planned} |`);
  L.push('');
  L.push('## 2. 300 slot PLANNED');
  L.push('');
  L.push(`${p.total} slot chỉ chứa **${p.distinctIntentKeys} intent độc lập** (trung bình ${p.permutationsPerIntent} biến thể/intent).`);
  L.push('');
  L.push('| Phân loại | Số slot |');
  L.push('|---|---:|');
  for (const v of ['KEEP', 'REWRITE', 'MERGE-CANDIDATE', 'REJECT', 'NEEDS-RESEARCH']) L.push(`| ${v} | ${p.verdicts[v] || 0} |`);
  L.push('');
  L.push('Mã lý do (một slot có thể có nhiều lý do):');
  L.push('');
  L.push('| Verdict · lý do | Số slot |');
  L.push('|---|---:|');
  for (const [k, n] of Object.entries(p.reasonCodes).sort((a, b) => b[1] - a[1])) L.push(`| ${k} | ${n} |`);
  L.push('');
  L.push('Theo họ hạt giống:');
  L.push('');
  L.push('| Hạt giống | Slot | Verdict |');
  L.push('|---|---:|---|');
  for (const [k, v] of Object.entries(p.perSeedFamily)) L.push(`| ${k} | ${v.total} | ${Object.entries(v.verdicts).map(([a, b]) => a + ' ' + b).join(', ')} |`);
  L.push('');
  L.push('## 3. Bài đã xuất bản (giữ nguyên, chỉ đo)');
  L.push('');
  L.push(`- ${pub.total} bài; **${pub.intentClusters.multiMember} cụm intent có ≥2 bài**, chứa ${pub.intentClusters.publishedInMultiMember} bài.`);
  L.push(`- Độ giống nội dung (TF-IDF unigram+bigram) giữa hai bài **cùng intent**: ${JSON.stringify(pub.bodyCosine.sameIntent)}; giữa hai bài **khác intent**: ${JSON.stringify(pub.bodyCosine.crossIntent)}.`);
  L.push(`- Trùng cụm 5 từ giữa các bài cùng intent: ${JSON.stringify(pub.fiveGramContainmentSameIntent)} ⇒ **không có dấu hiệu sao chép văn bản**; vấn đề là *trùng ý định tìm kiếm*, không phải trùng chữ.`);
  L.push(`- ${pub.headlineCrossIntentPairsAtLeast0_40} cặp bài khác intent-key nhưng headline giống ≥0.40 (ví dụ bên dưới) — intent-key không bắt được, cần lớp similarity.`);
  L.push('');
  L.push('| Cụm intent | Bài | Cosine nội dung TB | Rủi ro cannibalization (theo kích thước cụm, chưa có GSC) |');
  L.push('|---|---:|---:|---|');
  for (const c of pub.topClusters) L.push(`| \`${c.intentKey.replace(/\|/g, '¦')}\` | ${c.published} | ${c.meanBodyCosine} | ${c.risk} |`);
  L.push('');
  if (pub.headlineCrossIntentTop.length) {
    L.push('Cặp khác intent-key nhưng headline giống cao:');
    L.push('');
    for (const x of pub.headlineCrossIntentTop) L.push(`- ${x.score} — ${x.a} ⇄ ${x.b}`);
    L.push('');
  }
  L.push(pub.titleDefects.length
    ? `Lỗi tiêu đề phát hiện được trên tiêu đề CÔNG KHAI (${pub.titleDefects.length}; liệt kê tối đa 25):`
    : 'Lỗi tiêu đề (địa danh viết thường, lặp từ) trên tiêu đề công khai: **0**.');
  L.push('');
  for (const d of pub.titleDefects.slice(0, 25)) L.push(`- ${d.id} “${d.title}” — ${d.defects.join(', ')}`);
  L.push('');
  L.push('## 4. Ngưỡng đang dùng');
  L.push('');
  L.push('```json');
  L.push(JSON.stringify(rep.thresholds, null, 1));
  L.push('```');
  return L.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// topic-backfill: tạo dòng topic-matrix cho slot cũ (idempotent)
// ---------------------------------------------------------------------------
function cmdBackfill(args, deps) {
  assertCoordinator(args.opts.role);
  const ctx = context(deps);
  if (!args.flags.has('dry-run')) assertWritable(ctx);
  const log = deps.log || console.log;
  const direct = parseAllDirect(deps.articlesDir || Idx.ARTICLES_DIR);
  const titleOf = publicTitleOf(direct);
  const verdictBySlot = new Map(auditPlanned(ctx, direct).audited.map(r => [r.slot.id, r.result]));
  const existing = new Set(ctx.rows.map(r => r.slotId).filter(Boolean));
  const rows = ctx.rows.slice();
  const now = new Date().toISOString();
  const slots = ctx.matrix.slots.slice().sort((a, b) => (a.id < b.id ? -1 : 1));
  // cụm published để gắn overlap
  const byKey = new Map();
  for (const s of slots) if (s.state === 'PUBLISHED') {
    const k = I.analyzeTopic(titleOf(s)).intentKey;
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k).push(s.slug);
  }
  const publishedOverlap = (s, a) => {
    const mates = (byKey.get(a.intentKey) || []).filter(x => x !== s.slug);
    return { risk: mates.length >= 5 ? 'high' : mates.length >= 2 ? 'medium' : 'low', clusterSize: mates.length + 1, basis: 'intent-cluster-size', urls: mates.slice(0, 3) };
  };
  let added = 0;
  for (const s of slots) {
    if (existing.has(s.id)) continue;
    if (s.state !== 'PUBLISHED' && s.state !== 'PLANNED') continue; // slot đang xử lý: để nguyên, topic-check sẽ báo
    const t = s.state === 'PUBLISHED' ? titleOf(s) : s.title; // bài đã xuất bản: tiêu đề công khai (module); slot chưa có bài: nhãn slot
    const a = I.analyzeTopic(t);
    const row = {
      schema: M.ROW_SCHEMA, topicId: M.nextTopicId(rows), slotId: s.id, slug: s.slug, url: M.urlOf(s.hub, s.slug),
      title: t, hub: s.hub, cluster: a.intentKey, source: M.legacySource(s), createdAt: s.createdAt || now, updatedAt: now,
    };
    if (s.state === 'PUBLISHED') {
      row.lifecycle = 'PUBLISHED';
      row.gate = { verdict: 'LEGACY', rulesVersion: G.GATE_RULES_VERSION };
      row.overlap = publishedOverlap(s, a);
    } else {
      const res = verdictBySlot.get(s.id);
      const d = M.legacyDisposition(res ? res.verdict : 'REWRITE');
      row.lifecycle = d.lifecycle; row.disposition = d.disposition;
      row.gate = { verdict: res ? res.verdict : 'REWRITE', rulesVersion: G.GATE_RULES_VERSION,
        reasons: (res ? res.reasons : []).map(x => x.target ? { code: x.code, target: x.target } : { code: x.code }),
        nearest: res && res.nearest[0] ? [res.nearest[0]] : [] };
      const target = res && (res.reasons.find(x => x.target) || {}).target;
      if (target && (d.disposition === 'MERGE-CANDIDATE' || d.disposition === 'REJECT')) row.mergeInto = target;
      row.overlap = { risk: res ? res.overlap.risk : 'medium', basis: 'gate-audit' };
    }
    rows.push(row);
    added++;
  }
  // --refresh-published: đồng bộ dòng published CŨ (nguồn legacy-*) về tiêu đề công khai + cụm intent + overlap. Chỉ sửa khi có khác biệt (idempotent).
  let refreshed = 0;
  if (args.flags.has('refresh-published')) {
    const slotById = new Map(slots.map(s => [s.id, s]));
    for (const r of rows) {
      if (r.lifecycle !== 'PUBLISHED' || !r.slotId || !/^legacy-/.test(String(r.source))) continue;
      const s = slotById.get(r.slotId);
      if (!s || s.state !== 'PUBLISHED') continue;
      const t = titleOf(s);
      const a = I.analyzeTopic(t);
      const overlap = publishedOverlap(s, a);
      if (r.title !== t || r.cluster !== a.intentKey || JSON.stringify(r.overlap) !== JSON.stringify(overlap)) {
        r.title = t; r.cluster = a.intentKey; r.overlap = overlap; r.updatedAt = now; refreshed++;
      }
    }
  }
  if (args.flags.has('dry-run')) { log('TOPIC_BACKFILL dry-run would_add=' + added + ' total=' + rows.length + ' would_refresh=' + refreshed); return 0; }
  if (added || refreshed) M.writeRowsAtomic(rows, deps.topicMatrixFile);
  log('TOPIC_BACKFILL added=' + added + ' total=' + rows.length + ' file=factory/state/topic-matrix.jsonl refreshed=' + refreshed);
  return 0;
}

// ---------------------------------------------------------------------------
// topic-propose
// ---------------------------------------------------------------------------
function normalizeCandidate(c) {
  const out = Object.assign({}, c);
  out.title = String(out.title || '').trim();
  if (!out.slug) out.slug = TF.slugifyVi(out.title);
  out.secondaryKeywords = Array.isArray(out.secondaryKeywords) ? out.secondaryKeywords : [];
  out.outline = Array.isArray(out.outline) ? out.outline : [];
  out.evidence = out.evidence || { type: 'editorial-gap', status: 'unverified', sources: [] };
  out.demand = out.demand || { source: 'none' };
  out.priority = out.priority || 'P2';
  return out;
}

function rowFromCandidate(c, res, ctxRows, source) {
  const d = res.verdict === 'ACCEPT' ? { lifecycle: 'PLANNED', disposition: null }
    : res.verdict === 'REWRITE' ? { lifecycle: 'PLANNED', disposition: 'REWRITE' }
    : res.verdict === 'NEEDS-RESEARCH' ? { lifecycle: 'RESEARCH', disposition: 'NEEDS-RESEARCH' }
    : { lifecycle: 'REJECTED', disposition: res.verdict };
  const now = new Date().toISOString();
  const target = (res.reasons.find(x => x.code === 'editorial-overlap') || res.reasons.find(x => x.target) || {}).target;
  const row = {
    schema: M.ROW_SCHEMA, topicId: M.nextTopicId(ctxRows), slotId: null, slug: c.slug, url: M.urlOf(c.hub, c.slug), title: c.title, hub: c.hub,
    subtopic: c.subtopic || '', cluster: res.analysis.intentKey, primaryKeyword: c.primaryKeyword || '', secondaryKeywords: c.secondaryKeywords,
    intent: c.intent, userProblem: c.userProblem || '', informationGain: c.informationGain || '', outline: c.outline,
    contentType: c.contentType, schemaOrg: c.schemaOrg || 'Article', evidence: c.evidence, demand: c.demand, requiresVerifiedData: !!c.requiresVerifiedData,
    factualScope: c.factualScope || undefined, priority: c.priority, internalLinks: res.suggestedInternalLinks,
    gate: { verdict: res.verdict, rulesVersion: res.rulesVersion, reasons: res.reasons, nearest: res.nearest, nearestPublished: res.nearestPublished },
    overlap: { risk: res.overlap.risk, urls: [...new Set([target, ...res.nearest.filter(n => n.score >= 0.25).map(n => n.slug)].filter(Boolean))] },
    editorial: { approvedBy: null, approvedAt: null, note: '' },
    lifecycle: d.lifecycle, disposition: d.disposition, source, createdAt: now, updatedAt: now,
  };
  if (target && (d.disposition === 'MERGE-CANDIDATE' || d.disposition === 'REJECT')) row.mergeInto = target;
  if (c.localScope) row.localScope = c.localScope;
  return row;
}

// --review <file.json>: rà soát biên tập {reviewedBy, reviewedAt, overrides:{slug:{mergeInto, why}}}.
// Fail-closed với file sai: slug không có trong batch hoặc mergeInto không phải bài/topic có thật => lỗi, không ghi gì.
function loadReview(file, cands, corpus) {
  let rv;
  try { rv = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { throw new Error('--review không đọc được ' + file + ': ' + e.message); }
  if (!rv || typeof rv.overrides !== 'object' || Array.isArray(rv.overrides)) throw new Error('--review: thiếu object "overrides"');
  if (!rv.reviewedBy) throw new Error('--review: thiếu "reviewedBy" (người chịu trách nhiệm rà soát)');
  const inBatch = new Set(cands.map(c => c.slug));
  for (const [slug, ov] of Object.entries(rv.overrides)) {
    if (!inBatch.has(slug)) throw new Error('--review: slug không nằm trong batch ứng viên: ' + slug);
    if (!ov || !ov.mergeInto || !ov.why) throw new Error('--review: ' + slug + ' phải có mergeInto và why');
    if (ov.mergeInto === slug) throw new Error('--review: ' + slug + ' không thể gộp vào chính nó');
    if (!corpus.bySlug.has(ov.mergeInto) && !inBatch.has(ov.mergeInto)) throw new Error('--review: ' + slug + ' → mergeInto không tồn tại: ' + ov.mergeInto);
  }
  return rv;
}

function cmdPropose(args, deps) {
  const log = deps.log || console.log;
  const dry = args.flags.has('dry-run');
  if (!dry) assertCoordinator(args.opts.role);
  if (!args.opts.file) throw new Error('thiếu --file <candidates.jsonl>');
  const ctx = context(deps);
  if (!dry) assertWritable(ctx);
  const cands = fs.readFileSync(args.opts.file, 'utf8').split('\n').filter(l => l.trim()).map((l, i) => {
    try { return normalizeCandidate(JSON.parse(l)); } catch (e) { throw new Error('dòng ' + (i + 1) + ' không phải JSON: ' + e.message); }
  });
  const { docs } = loadArticleDocs(deps, args);
  const corpus = buildCorpus(ctx, docs);
  const review = args.opts.review ? loadReview(args.opts.review, cands, corpus) : null;
  const source = args.opts.source || 'v2-manual';
  const rows = ctx.rows.slice();
  const out = { total: cands.length, verdicts: {}, skipped: 0, rows: [] };
  // idempotent: một slug chỉ có MỘT dòng sống; topic đã REJECTED cũng không bị đề xuất lại (đổi slug nếu là chủ đề khác)
  const bySlugRow = new Map();
  for (const r of rows) {
    const cur = bySlugRow.get(r.slug);
    if (!cur || (cur.lifecycle === 'REJECTED' && r.lifecycle !== 'REJECTED')) bySlugRow.set(r.slug, r);
  }
  const slotBySlug = new Map(ctx.matrix.slots.map(s => [s.slug, s]));
  for (const c of cands) {
    const existing = bySlugRow.get(c.slug);
    const reopen = existing && args.flags.has('update') && (existing.disposition === 'REWRITE' || existing.disposition === 'NEEDS-RESEARCH');
    if (existing && !reopen) {
      out.skipped++;
      log('SKIP ' + c.slug + ' (đã có topic ' + existing.topicId + ', ' + existing.lifecycle + (/^legacy-/.test(String(existing.source)) && existing.lifecycle !== 'REJECTED' ? '; slug đang giữ bởi slot legacy — đổi slug nếu là chủ đề khác' : '') + ')');
      continue;
    }
    let res = G.evaluate(c, corpus, gateOpts(ctx, existing ? { selfTopicId: existing.topicId, selfSlug: c.slug } : {}));
    // slug đã thuộc một slot trong matrix.json (vd. chỗ giữ chỗ legacy) => approve sẽ không tạo được slot: bắt sớm
    const taken = slotBySlug.get(c.slug);
    if (taken && !(existing && existing.slotId === taken.id)) {
      res = G.addReason(res, { code: 'slug-taken-by-slot', verdict: 'REWRITE', msg: 'slug đã thuộc slot ' + taken.id + ' (' + taken.state + ') trong matrix.json — đổi slug', target: undefined });
    }
    const ov = review && review.overrides[c.slug];
    if (ov) res = G.applyEditorialReview(res, ov);
    const row = rowFromCandidate(c, res, rows, source);
    if (ov) row.editorial = Object.assign({}, row.editorial, { note: ov.why, reviewedBy: review.reviewedBy, reviewedAt: review.reviewedAt || row.createdAt });
    if (existing) { row.topicId = existing.topicId; row.createdAt = existing.createdAt; rows[rows.indexOf(existing)] = row; }
    else rows.push(row);
    bySlugRow.set(c.slug, row);
    out.verdicts[res.verdict] = (out.verdicts[res.verdict] || 0) + 1;
    out.rows.push({ topicId: row.topicId, slug: c.slug, verdict: res.verdict, reasons: res.reasons.map(x => x.code) });
    // topic không bị chặn tiếp tục chiếm chỗ trong corpus để bắt trùng NGAY TRONG batch
    if (row.lifecycle !== 'REJECTED' && !existing) {
      corpus.add({ topicId: row.topicId, slug: row.slug, title: row.title, hub: row.hub, status: 'QUEUED', lifecycle: row.lifecycle, source, headline: G.topicHeadlineDoc(row) });
    }
    log(`${res.verdict.padEnd(15)} ${row.topicId} ${c.slug}  ${res.reasons.map(x => x.code).join(',')}`);
  }
  if (!dry && out.rows.length) M.writeRowsAtomic(rows, deps.topicMatrixFile);
  log(`TOPIC_PROPOSE ${dry ? 'dry-run ' : ''}total=${out.total} skipped=${out.skipped} verdicts=${JSON.stringify(out.verdicts)}`);
  if (args.opts.report) fs.writeFileSync(args.opts.report, JSON.stringify(out, null, 1));
  return 0;
}

// ---------------------------------------------------------------------------
// topic-approve / topic-reject
// ---------------------------------------------------------------------------
const csvList = x => (Array.isArray(x) ? x.map(String) : String(x == null ? '' : x).split(',')).map(v => v.trim()).filter(Boolean);

// Danh sách yêu cầu duyệt: từ --file (theo từng topic) hoặc từ topicId vị trí + --ack/--reviewed chung.
function approvalItems(args) {
  if (args.opts.file) {
    if (args.positional.length) throw new Error('dùng --file HOẶC danh sách topicId, không dùng cả hai');
    let obj;
    try { obj = JSON.parse(fs.readFileSync(args.opts.file, 'utf8')); } catch (e) { throw new Error('--file không đọc được: ' + e.message); }
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('--file phải là object {"T000123": {"reviewed":[slug…], "ack":[code…], "note":""}}');
    return Object.entries(obj).map(([id, v]) => ({ id, ack: csvList(v && v.ack), reviewed: csvList(v && v.reviewed), note: (v && v.note) || '' }));
  }
  const ack = csvList(args.opts.ack);
  const reviewed = csvList(args.opts.reviewed);
  return args.positional.map(id => ({ id, ack, reviewed, note: args.opts.note || '' }));
}

// Láng giềng ĐÃ XUẤT BẢN gần nhất mà người duyệt phải đọc trước khi duyệt (gate từ vựng không bắt được
// câu hỏi giống nhau khác từ ngữ — đo trên pilot: 0/19 — nên đọc láng giềng là bước kiểm soát bắt buộc).
function requiredNeighbourReview(res) {
  return (res.nearestPublished || []).map(n => n.slug);
}

function cmdApprove(args, deps) {
  const log = deps.log || console.log;
  const dry = args.flags.has('dry-run');
  if (!dry) assertCoordinator(args.opts.role);
  const items = approvalItems(args);
  if (!items.length) throw new Error('thiếu topicId (ví dụ T000123) hoặc --file approvals.json');
  if (!args.opts.by) throw new Error('thiếu --by <người duyệt> (ghi vào editorial.approvedBy)');
  const ctx = context(deps);
  if (!dry) assertWritable(ctx);
  const { docs } = loadArticleDocs(deps, args);
  const corpus = buildCorpus(ctx, docs);
  const rows = ctx.rows.slice();
  const m = ctx.matrix;
  let approvedCount = 0;
  const openApproved = () => rows.filter(r => r.lifecycle === 'APPROVED' && r.slotId && (m.slots.find(s => s.id === r.slotId) || {}).state !== 'PUBLISHED').length;
  const pending = [];
  const seenIds = new Set();
  for (const item of items) {
    const id = item.id;
    if (seenIds.has(id)) throw new Error('topicId bị lặp trong yêu cầu duyệt: ' + id);
    seenIds.add(id);
    const row = rows.find(r => r.topicId === id);
    if (!row) throw new Error('không tìm thấy topic ' + id);
    if (row.lifecycle !== 'PLANNED' || !row.gate || row.gate.verdict !== 'ACCEPT') {
      throw new Error(`${id} chưa đủ điều kiện duyệt: lifecycle=${row.lifecycle}, gate=${row.gate && row.gate.verdict} (chỉ topic PLANNED với gate ACCEPT)`);
    }
    // slug phải còn trống trong matrix.json — kiểm TRƯỚC mọi thay đổi để không dừng giữa chừng.
    // Ngoại lệ: slot mồ côi do chính lần duyệt này tạo rồi bị dừng trước khi ghi dòng topic (recover: nhận lại slot đó).
    const taken = m.slots.find(s => s.slug === row.slug);
    const orphan = taken && taken.state === 'PLANNED' && new RegExp('(^|\\s)topicId=' + row.topicId + '(\\s|$)').test(taken.notes || '');
    if (taken && !orphan) throw new Error(`${id}: slug "${row.slug}" đã thuộc slot ${taken.id} (${taken.state}) — không thể tạo slot mới`);
    // đánh giá LẠI tại thời điểm duyệt: corpus đã đổi từ lúc propose
    const res = G.evaluate(row, corpus, gateOpts(ctx, { selfTopicId: row.topicId, selfSlug: row.slug }));
    if (res.verdict !== 'ACCEPT') throw new Error(`${id} không còn ACCEPT khi đánh giá lại: ${res.verdict} (${res.reasons.map(x => x.code).join(',')})`);
    // Người duyệt phải xác nhận ĐÍCH DANH từng cảnh báo (--ack code1,code2) — không có “ack hết”.
    const warn = res.reasons.filter(x => x.verdict === 'WARN');
    const acked = new Set(item.ack);
    const missing = warn.filter(x => !acked.has(x.code));
    if (missing.length) {
      throw new Error(`${id} còn cảnh báo chưa được xác nhận: ${missing.map(x => x.code).join(', ')} — xem gate/informationGain rồi duyệt lại với --ack ${warn.map(x => x.code).join(',')}`);
    }
    // ...và xác nhận ĐÃ ĐỌC các bài đã xuất bản gần nhất (topic-neighbours <topicId>).
    const needReview = requiredNeighbourReview(res);
    const reviewed = new Set(item.reviewed);
    const unread = needReview.filter(slug => !reviewed.has(slug));
    if (unread.length) {
      throw new Error(`${id} chưa xác nhận đã đọc bài gần nhất: ${unread.join(', ')} — chạy topic-neighbours ${id} rồi duyệt lại với --reviewed ${needReview.join(',')}`);
    }
    res.acknowledged = warn.map(x => x.code);
    res.neighboursReviewed = [...new Set(needReview.concat(item.reviewed))];
    if (openApproved() + pending.length >= ctx.gov.maxApprovedQueue) throw new Error('hàng đợi APPROVED đã đạt maxApprovedQueue=' + ctx.gov.maxApprovedQueue);
    pending.push({ row, res, orphan: orphan ? taken : null, note: item.note });
  }
  if (dry) { for (const p of pending) log('DRY_RUN would approve ' + p.row.topicId + ' ' + p.row.slug); return 0; }
  for (const { row, res, orphan, note } of pending) {
    // 1) slot trước (fail-closed: nếu dừng giữa chừng thì slot chưa APPROVED => writer không nhận được)
    let slot = orphan;
    if (!slot) {
      deps.planSlot(m, { hub: row.hub, slug: row.slug, title: row.title, intent: row.intent + '/' + row.slug, notes: 'source=topic-v2 topicId=' + row.topicId });
      deps.saveMatrix(m);
      slot = m.slots[m.slots.length - 1];
    }
    // 2) rồi mới ghi quyết định duyệt
    const now = new Date().toISOString();
    row.slotId = slot.id; row.lifecycle = 'APPROVED';
    row.gate = { verdict: 'ACCEPT', rulesVersion: res.rulesVersion, reasons: res.reasons, nearest: res.nearest, nearestPublished: res.nearestPublished };
    row.editorial = { approvedBy: args.opts.by, approvedAt: now, note: note || '', acknowledged: res.acknowledged || [], neighboursReviewed: res.neighboursReviewed || [] };
    row.updatedAt = now;
    // topic V2 thay thế các chỗ giữ chỗ legacy cùng intent (không xoá slot — chỉ ghi nhận đã bị thay thế)
    for (const r of rows) {
      if (r !== row && /^legacy-/.test(String(r.source)) && (r.lifecycle === 'PLANNED' || r.lifecycle === 'RESEARCH') && r.cluster === row.cluster) {
        r.lifecycle = 'REJECTED'; r.disposition = 'SUPERSEDED'; r.mergeInto = row.slug; r.updatedAt = now;
      }
    }
    M.writeRowsAtomic(rows, deps.topicMatrixFile);
    approvedCount++;
    log('APPROVED ' + row.topicId + ' → ' + slot.id + ' ' + row.slug);
  }
  deps.saveState(deps.loadState(), 'topic-approve:+' + approvedCount);
  log('TOPIC_APPROVE approved=' + approvedCount + ' queue=' + openApproved());
  return 0;
}

// topic-neighbours <T…|S…|slug>: các bài/topic gần nhất kèm H2 — để người duyệt ĐỌC trước khi duyệt (read-only).
function cmdNeighbours(args, deps) {
  const log = deps.log || console.log;
  const ctx = context(deps);
  const { docs } = loadArticleDocs(deps, args);
  const corpus = buildCorpus(ctx, docs);
  const outlineBySlug = new Map(docs.map(d => [d.slug, (d.headline && d.headline.outline) || []]));
  const k = Math.max(1, Math.min(20, Number(args.opts.top) || 8));
  const out = [];
  if (!args.positional.length) throw new Error('thiếu topicId/slotId/slug');
  for (const id of args.positional) {
    const row = ctx.rows.find(r => r.topicId === id || r.slotId === id || r.slug === id);
    if (!row) throw new Error('không tìm thấy topic ' + id);
    const self = e => e.topicId === row.topicId || e.slug === row.slug;
    const top = corpus.index.query(corpus.vectorFor(G.topicHeadlineDoc(row)), k + 2, meta => !self(meta)).slice(0, k);
    const res = G.evaluate(row, corpus, gateOpts(ctx, { selfTopicId: row.topicId, selfSlug: row.slug }));
    out.push({
      topicId: row.topicId, slug: row.slug, title: row.title, lifecycle: row.lifecycle, informationGain: row.informationGain || '', outline: row.outline || [],
      requiredReview: requiredNeighbourReview(res),
      neighbours: top.map(t => ({ slug: t.meta.slug, status: t.meta.status, score: Number(t.score.toFixed(3)), title: t.meta.title, outline: outlineBySlug.get(t.meta.slug) || t.meta.outline || [] })),
    });
  }
  if (args.flags.has('json')) { log(JSON.stringify(out, null, 1)); return 0; }
  for (const o of out) {
    log(`${o.topicId} ${o.slug} [${o.lifecycle}]\n  title : ${o.title}\n  gain  : ${o.informationGain}\n  outline: ${o.outline.join(' | ')}`);
    log('  PHẢI ĐỌC trước khi duyệt (--reviewed): ' + (o.requiredReview.join(',') || '(không có bài đã xuất bản gần)'));
    o.neighbours.forEach((n, i) => log(`  ${i + 1}. [${n.status} ${n.score}] ${n.slug} — ${n.title}\n       H2: ${n.outline.slice(0, 10).join(' | ')}`));
  }
  return 0;
}

function cmdReject(args, deps) {
  assertCoordinator(args.opts.role);
  const log = deps.log || console.log;
  if (!args.opts.reason) throw new Error('thiếu --reason');
  const target = args.opts['merge-into'];
  if (target && !args.opts.by) throw new Error('--merge-into cần --by <người rà soát> (ghi vào editorial.reviewedBy)');
  const ctx = context(deps);
  assertWritable(ctx);
  const rows = ctx.rows.slice();
  // gộp vào bài/topic có thật: bài đã có slot hoặc topic còn hiệu lực khác
  if (target && !ctx.matrix.slots.some(s => s.slug === target) && !rows.some(r => r.slug === target && r.lifecycle !== 'REJECTED')) {
    throw new Error('--merge-into: slug không tồn tại trong matrix.json/topic-matrix: ' + target);
  }
  if (!args.positional.length) throw new Error('thiếu topicId');
  const now = new Date().toISOString();
  for (const id of args.positional) {
    const row = rows.find(r => r.topicId === id);
    if (!row) throw new Error('không tìm thấy topic ' + id);
    if (row.slug === target) throw new Error(id + ': không thể gộp vào chính nó');
    if (row.slotId && ctx.matrix.slots.some(s => s.id === row.slotId && s.state !== 'PLANNED')) throw new Error(id + ' đã có slot đang xử lý/đã xuất bản — không reject');
    row.lifecycle = 'REJECTED'; row.disposition = target ? 'MERGE-CANDIDATE' : 'REJECT'; row.updatedAt = now;
    row.editorial = Object.assign({}, row.editorial, { note: args.opts.reason });
    if (target) {
      // quyết định biên tập sau gate (vd. phát hiện khi đọc láng giềng): ghi như một lý do của gate để truy vết
      row.mergeInto = target;
      row.editorial.reviewedBy = args.opts.by; row.editorial.reviewedAt = now;
      row.gate = Object.assign({}, row.gate, { verdict: 'MERGE-CANDIDATE', reasons: (row.gate && row.gate.reasons || []).concat([{ code: 'editorial-overlap', verdict: 'MERGE-CANDIDATE', msg: args.opts.reason, target }]) });
      row.overlap = Object.assign({}, row.overlap, { risk: 'high', urls: [...new Set([target].concat((row.overlap && row.overlap.urls) || []))] });
    }
    log((target ? 'MERGE-CANDIDATE ' : 'REJECTED ') + id + ' ' + row.slug + (target ? ' → ' + target : ''));
  }
  M.writeRowsAtomic(rows, deps.topicMatrixFile);
  return 0;
}

// topic-reopen: chủ repo/biên tập không đồng ý một quyết định gộp/từ chối => mở lại thành PLANNED (cần gate đánh giá lại = ACCEPT).
// Không phải đường vòng qua gate: nếu CHÍNH gate vẫn chặn (trùng slug/title, hoán vị, ...) thì từ chối — phải viết lại topic.
function cmdReopen(args, deps) {
  assertCoordinator(args.opts.role);
  const log = deps.log || console.log;
  if (!args.opts.by) throw new Error('thiếu --by <người quyết định mở lại>');
  if (!args.opts.reason) throw new Error('thiếu --reason');
  if (!args.positional.length) throw new Error('thiếu topicId');
  const ctx = context(deps);
  assertWritable(ctx);
  const { docs } = loadArticleDocs(deps, args);
  const corpus = buildCorpus(ctx, docs);
  const rows = ctx.rows.slice();
  const now = new Date().toISOString();
  const pending = [];
  for (const id of args.positional) {
    const row = rows.find(r => r.topicId === id);
    if (!row) throw new Error('không tìm thấy topic ' + id);
    if (row.lifecycle !== 'REJECTED' || /^legacy-/.test(String(row.source))) throw new Error(id + ': chỉ mở lại được topic V2 đang REJECTED (lifecycle=' + row.lifecycle + ', source=' + row.source + ')');
    const res = G.evaluate(row, corpus, gateOpts(ctx, { selfTopicId: row.topicId, selfSlug: row.slug }));
    if (res.verdict !== 'ACCEPT') throw new Error(`${id}: không mở lại được — gate vẫn ${res.verdict} (${res.reasons.filter(x => x.verdict !== 'WARN').map(x => x.code).join(',')}); viết lại topic hoặc đổi slug`);
    pending.push({ row, res });
  }
  for (const { row, res } of pending) {
    const prev = { lifecycle: row.lifecycle, disposition: row.disposition || null, mergeInto: row.mergeInto || null, note: (row.editorial && row.editorial.note) || '' };
    row.lifecycle = 'PLANNED'; row.disposition = null; delete row.mergeInto; row.updatedAt = now;
    row.gate = { verdict: 'ACCEPT', rulesVersion: res.rulesVersion, reasons: res.reasons, nearest: res.nearest, nearestPublished: res.nearestPublished };
    row.overlap = { risk: res.overlap.risk, urls: [] };
    row.editorial = Object.assign({}, row.editorial, { approvedBy: null, approvedAt: null, history: ((row.editorial && row.editorial.history) || []).concat([{ at: now, by: args.opts.by, action: 'reopen', note: args.opts.reason, previous: prev }]) });
    log('REOPENED ' + row.topicId + ' ' + row.slug + ' → PLANNED (gate ACCEPT)');
  }
  M.writeRowsAtomic(rows, deps.topicMatrixFile);
  return 0;
}

// ---------------------------------------------------------------------------
// topic-coverage: bản đồ độ phủ theo hub — nơi nào ĐÃ đa dạng, nơi nào trùng intent, nơi nào còn trống (read-only)
// ---------------------------------------------------------------------------
function coverageReport(ctx, titleOf) {
  const tt = titleOf || (s => s.title);
  const hubs = hubSet();
  const rows = ctx.rows;
  const per = new Map();
  const slot = h => { if (!per.has(h)) per.set(h, { hub: h, published: 0, clusters: new Set(), templated: 0, queued: 0, approved: 0, research: 0 }); return per.get(h); };
  for (const h of hubs) slot(h);
  for (const s of ctx.matrix.slots) {
    if (s.state !== 'PUBLISHED') continue;
    const e = slot(s.hub);
    const a = I.analyzeTopic(tt(s));
    e.published++; e.clusters.add(a.intentKey); if (a.templated) e.templated++;
  }
  const slotsById = new Map(ctx.matrix.slots.map(s => [s.id, s]));
  for (const r of rows) {
    if (!/^v2-|^gsc-/.test(String(r.source))) continue;
    const e = slot(r.hub);
    // trạng thái HIỆU LỰC (suy ra từ slot): topic đã xuất bản không còn tính là "đã duyệt, chờ writer"
    const eff = M.effectiveLifecycle(r, r.slotId ? slotsById.get(r.slotId) : null);
    if (eff === 'PLANNED') e.queued++;
    else if (eff === 'RESEARCH') e.research++;
    else if (M.APPROVED_SET.has(eff) && eff !== 'PUBLISHED') e.approved++;
  }
  const list = [...per.values()].map(e => ({
    hub: e.hub, inTaxonomy: hubs.has(e.hub), published: e.published, distinctIntents: e.clusters.size,
    duplicationRatio: e.clusters.size ? Number((e.published / e.clusters.size).toFixed(2)) : null,
    templatedShare: e.published ? Number((e.templated / e.published).toFixed(2)) : null,
    queued: e.queued, research: e.research, approved: e.approved,
  })).sort((a, b) => b.published - a.published || (a.hub < b.hub ? -1 : 1));
  const tot = list.reduce((t, e) => ({ published: t.published + e.published, intents: t.intents + e.distinctIntents }), { published: 0, intents: 0 });
  return {
    hubs: list, totals: { published: tot.published, distinctIntentsPerHub: tot.intents },
    empty: list.filter(e => e.inTaxonomy && e.published === 0).map(e => e.hub),
    crowded: list.filter(e => e.published >= 5 && e.duplicationRatio >= 1.5).map(e => e.hub),
  };
}

function cmdCoverage(args, deps) {
  const log = deps.log || console.log;
  const rep = coverageReport(context(deps), publicTitleOf(loadArticleDocs(deps, args).docs));
  if (args.flags.has('json')) { log(JSON.stringify(rep, null, 1)); return 0; }
  log('=== TOPIC COVERAGE (theo hub) ===');
  log('hub'.padEnd(34) + 'bài  intent  trùng  mẫu%  chờ  nghiên-cứu  duyệt');
  for (const e of rep.hubs.filter(x => x.published || x.queued || x.research || x.approved)) {
    log(e.hub.padEnd(34) + String(e.published).padStart(3) + String(e.distinctIntents).padStart(8) + String(e.duplicationRatio == null ? '-' : e.duplicationRatio).padStart(7) +
      String(e.templatedShare == null ? '-' : Math.round(e.templatedShare * 100)).padStart(6) + String(e.queued).padStart(5) + String(e.research).padStart(11) + String(e.approved).padStart(7));
  }
  log(`Hub chưa có bài nào (${rep.empty.length}/97): ${rep.empty.join(', ') || '-'}`);
  log(`Hub đông và trùng intent (>=5 bài, tỷ lệ trùng >=1.5): ${rep.crowded.join(', ') || '-'}`);
  log(`Tổng: ${rep.totals.published} bài / ${rep.totals.distinctIntentsPerHub} intent riêng biệt trong từng hub`);
  return 0;
}

// ---------------------------------------------------------------------------
// topic-status / topic-check
// ---------------------------------------------------------------------------
function cmdStatus(args, deps) {
  const log = deps.log || console.log;
  const ctx = context(deps);
  const sum = M.summarize(ctx.rows, ctx.matrix);
  const inv = M.checkInvariants({ rows: ctx.rows, matrix: ctx.matrix, gov: ctx.gov });
  const out = { governance: { present: ctx.gov.present, mode: ctx.gov.mode, v1Generation: ctx.gov.v1Generation, requireApproved: ctx.gov.requireApproved, maxApprovedQueue: ctx.gov.maxApprovedQueue },
    topics: sum, invariants: inv.stats, warnings: inv.warnings, errors: inv.errors.length };
  if (args.flags.has('json')) { log(JSON.stringify(out, null, 1)); return 0; }
  log('=== TOPIC FACTORY V2 ===');
  log(`Governance: mode=${out.governance.mode} v1Generation=${out.governance.v1Generation} requireApproved=${out.governance.requireApproved}`);
  log(`Topic rows: ${sum.total} | lifecycle ${JSON.stringify(sum.lifecycle)}`);
  log(`Disposition: ${JSON.stringify(sum.disposition)}`);
  log(`Writer có thể nhận (APPROVED chưa xuất bản): ${inv.stats.openApproved} | slot PLANNED chờ duyệt: ${inv.stats.awaitingApproval}`);
  for (const w of inv.warnings) log('WARN ' + w);
  return 0;
}

function cmdCheck(args, deps) {
  const log = deps.log || console.log;
  const ctx = context(deps);
  const inv = M.checkInvariants({ rows: ctx.rows, matrix: ctx.matrix, gov: ctx.gov });
  const errors = inv.errors.slice();
  for (const e of ctx.rowErrors) errors.push('topic-matrix.jsonl dòng ' + e.line + ' hỏng: ' + e.msg);
  if (args.flags.has('recheck')) {
    const { docs } = loadArticleDocs(deps, args);
    const corpus = buildCorpus(ctx, docs);
    const hubs = hubSet();
    for (const r of ctx.rows) {
      if (!/^v2-|^gsc-/.test(String(r.source)) || !M.APPROVED_SET.has(r.lifecycle) || r.lifecycle === 'PUBLISHED') continue;
      const res = G.evaluate(r, corpus, { thresholds: ctx.gov.thresholds, hubs, selfTopicId: r.topicId, selfSlug: r.slug });
      if (res.verdict !== 'ACCEPT') errors.push(`${r.topicId}: duyệt rồi nhưng đánh giá lại = ${res.verdict} (${res.reasons.map(x => x.code).join(',')})`);
    }
  }
  for (const w of inv.warnings) log('WARN ' + w);
  if (errors.length) { for (const e of errors) log('TOPIC_CHECK_FAIL: ' + e); return 1; }
  log(`TOPIC_CHECK_OK rows=${inv.stats.rows} awaitingApproval=${inv.stats.awaitingApproval} openApproved=${inv.stats.openApproved}`);
  return 0;
}

// ---------------------------------------------------------------------------
// index / import / brief
// ---------------------------------------------------------------------------
function cmdIndexRebuild(args, deps) {
  const log = deps.log || console.log;
  const st = Idx.rebuild({ role: args.opts.role, dbFile: deps.indexFile, articlesDir: deps.articlesDir });
  log('TOPIC_INDEX_REBUILD total=' + st.total + ' parsed=' + st.parsed + ' reused=' + st.reused + ' removed=' + st.removed + ' broken=' + st.broken);
  return 0;
}
function cmdIndexCheck(args, deps) {
  const log = deps.log || console.log;
  const st = Idx.status({ dbFile: deps.indexFile, articlesDir: deps.articlesDir });
  if (!st.ok) { log('TOPIC_INDEX_CHECK_FAIL: ' + st.why + (st.stale != null ? ' stale=' + st.stale + ' extra=' + st.extra : '') + ' — chạy topic-index-rebuild'); return 1; }
  log('TOPIC_INDEX_CHECK_OK docs=' + st.docs);
  return 0;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cur); cur = ''; }
    else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cur); cur = ''; if (row.some(x => x !== '')) rows.push(row); row = []; }
    else cur += ch;
  }
  if (cur !== '' || row.length) { row.push(cur); if (row.some(x => x !== '')) rows.push(row); }
  return rows;
}

// Độ phủ của một cụm truy vấn trong corpus (bài đã xuất bản + topic đang xếp hàng):
//   COVERED = cùng intent key hoặc cùng chủ thể (head) với bài/topic đã có
//   NEARBY  = chưa cùng intent nhưng headline gần nghĩa (cosine) — phải đọc bài trước khi tạo topic
//   GAP     = chưa có gì gần
function coverageFor(corpus, qs) {
  const a = I.analyzeTopic(qs[0].query);
  const pack = (e, basis, score) => ({ slug: e.slug, status: e.status, basis, score: score == null ? undefined : Number(score.toFixed(3)) });
  const exact = (corpus.byIntent.get(a.intentKey) || []).map(e => pack(e, 'intent-key'));
  const seen = new Set(exact.map(x => x.slug));
  // Tín hiệu sàng lọc: các từ khóa của truy vấn (theo trọng số idf) có mặt trong title/H2/keywords của bài.
  // Không chứng minh bài trả lời đúng câu hỏi — phải xem query→URL trong Search Console / đọc bài.
  const cov = corpus.queryCoverage(qs[0].query, 5).filter(c => !seen.has(c.meta.slug) && c.matched >= Math.min(2, c.tokens));
  const strong = cov.filter(c => c.tokens >= 2 && c.coverage >= COVER_HIGH).map(c => pack(c.meta, 'query-terms', c.coverage));
  if (exact.length || strong.length) return { state: 'COVERED', existing: exact.concat(strong.slice(0, 3)) };
  const near = cov.filter(c => c.coverage >= COVER_MID).slice(0, 3).map(c => pack(c.meta, 'query-terms', c.coverage));
  return near.length ? { state: 'NEARBY', existing: near } : { state: 'GAP', existing: [] };
}
const COVER_HIGH = 0.85;
const COVER_MID = 0.6;

// Đọc export Search Console (Queries): gom truy vấn theo intent key, KHÔNG sinh topic, KHÔNG bịa số.
function cmdImport(args, deps) {
  const log = deps.log || console.log;
  if (!args.opts.file) throw new Error('thiếu --file <gsc.csv>');
  if (!args.opts.period) throw new Error('thiếu --period YYYY-MM-DD..YYYY-MM-DD (kỳ báo cáo của export)');
  const raw = parseCsv(fs.readFileSync(args.opts.file, 'utf8'));
  if (raw.length < 2) throw new Error('CSV rỗng');
  const head = raw[0].map(h => I.fold(h));
  const col = (...names) => head.findIndex(h => names.some(n => h === n || h.includes(n)));
  const iq = col('query', 'top queries', 'truy van');
  const ic = col('clicks', 'so lan nhap');
  const ii = col('impressions', 'luot hien thi');
  const ip = col('position', 'vi tri');
  if (iq < 0 || ii < 0) throw new Error('CSV cần cột Query và Impressions (export “Queries” của Search Console)');
  const ctx = context(deps);
  const { docs } = loadArticleDocs(deps, args);
  const corpus = buildCorpus(ctx, docs);
  const groups = new Map();
  for (const r of raw.slice(1)) {
    const query = String(r[iq] || '').trim();
    const imp = Number(String(r[ii] || '').replace(/[.,\s]/g, ''));
    if (!query || !Number.isFinite(imp)) continue;
    const clicks = ic >= 0 ? Number(String(r[ic] || '0').replace(/[.,\s]/g, '')) || 0 : null;
    const pos = ip >= 0 ? Number(String(r[ip] || '').replace(',', '.')) : null;
    const key = I.analyzeTopic(query).intentKey;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ query, imp, clicks, pos });
  }
  const leads = [];
  for (const [key, qs] of groups) {
    qs.sort((a, b) => b.imp - a.imp);
    const imp = qs.reduce((s, x) => s + x.imp, 0);
    const clicks = qs.every(x => x.clicks != null) ? qs.reduce((s, x) => s + x.clicks, 0) : null;
    const posQs = qs.filter(x => Number.isFinite(x.pos));
    const pos = posQs.length ? Number((posQs.reduce((s, x) => s + x.pos * x.imp, 0) / posQs.reduce((s, x) => s + x.imp, 0)).toFixed(1)) : null;
    const coverage = coverageFor(corpus, qs);
    leads.push({
      primaryKeyword: qs[0].query, secondaryKeywords: qs.slice(1, 6).map(x => x.query), cluster: key,
      demand: { source: 'gsc', impressions: imp, clicks, position: pos, period: args.opts.period, queries: qs.length },
      evidence: { type: 'gsc', status: 'verified', sources: [{ label: 'Search Console export ' + path.basename(args.opts.file), url: 'gsc://' + path.basename(args.opts.file), retrievedAt: new Date().toISOString().slice(0, 10) }] },
      coverage,
      next: coverage.state === 'COVERED' ? 'Cải thiện/mở rộng bài đã có (không tạo URL mới) — kiểm tra vị trí và query map trước'
        : coverage.state === 'NEARBY' ? 'Đã có bài gần nghĩa: đọc bài (topic-neighbours sau khi propose) — mặc định cải thiện bài sẵn có, chỉ tạo topic nếu chứng minh được câu hỏi khác'
          : 'Ứng viên topic mới: hoàn thiện title/userProblem/informationGain/outline rồi topic-propose',
    });
  }
  leads.sort((a, b) => b.demand.impressions - a.demand.impressions);
  const outFile = args.opts.out;
  if (outFile) fs.writeFileSync(outFile, leads.map(l => JSON.stringify(l)).join('\n') + '\n');
  const nState = st => leads.filter(l => l.coverage.state === st).length;
  log(`TOPIC_IMPORT queries=${raw.length - 1} clusters=${leads.length} gap=${nState('GAP')} nearby=${nState('NEARBY')} covered=${nState('COVERED')}${outFile ? ' out=' + outFile : ''}`);
  return 0;
}

function briefFor(row) {
  return {
    topicId: row.topicId, slotId: row.slotId, title: row.title, primaryKeyword: row.primaryKeyword, secondaryKeywords: row.secondaryKeywords || [],
    intent: row.intent, userProblem: row.userProblem, informationGain: row.informationGain, outline: row.outline || [], contentType: row.contentType,
    evidence: row.evidence, internalLinkCandidates: row.internalLinks || [], factualScope: row.factualScope || null,
  };
}
function cmdBrief(args, deps) {
  const log = deps.log || console.log;
  const ctx = context(deps);
  const id = args.positional[0];
  const row = ctx.rows.find(r => r.topicId === id || r.slotId === id);
  if (!row || !row.userProblem) { log('TOPIC_BRIEF none for ' + id); return 1; }
  log(JSON.stringify(briefFor(row), null, 1));
  return 0;
}

// ---------------------------------------------------------------------------
const COMMANDS = {
  'topic-audit': cmdAudit, 'topic-backfill': cmdBackfill, 'topic-propose': cmdPropose, 'topic-approve': cmdApprove,
  'topic-reject': cmdReject, 'topic-reopen': cmdReopen, 'topic-status': cmdStatus, 'topic-check': cmdCheck, 'topic-index-rebuild': cmdIndexRebuild,
  'topic-index-check': cmdIndexCheck, 'topic-import': cmdImport, 'topic-brief': cmdBrief, 'topic-neighbours': cmdNeighbours, 'topic-coverage': cmdCoverage,
};

function run(cmd, argv, deps) {
  const fn = COMMANDS[cmd];
  if (!fn) throw new Error('lệnh topic không tồn tại: ' + cmd);
  return fn(parseArgs(argv), deps);
}

module.exports = {
  COMMANDS, run, parseArgs, hubSet, parseCsv, context, loadArticleDocs, buildCorpus, auditReport, renderMarkdown,
  rowFromCandidate, normalizeCandidate, briefFor, titleFamily, titleDefects, auditPlanned, coverageFor, coverageReport, publicTitleOf,
};
