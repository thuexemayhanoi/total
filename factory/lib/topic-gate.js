// AI WIKI TOTAL — Topic Gate V2: quyết định một topic có đáng trở thành bài hay không.
//
// Đầu vào: một topic ứng viên (hoặc slot cũ, chế độ legacy) + TopicCorpus (bài đã xuất bản +
// topic đang xếp hàng). Đầu ra: verdict ACCEPT / REWRITE / MERGE-CANDIDATE / REJECT / NEEDS-RESEARCH
// kèm lý do mã hóa, láng giềng gần nhất và điểm số.
//
// NGUYÊN TẮC (đo từ dữ liệu thật của repo — xem docs/TOPIC-AUDIT-2026-10-12.md):
//   1. INTENT KEY là tín hiệu chính (chủ thể × góc topical): hoán vị bối cảnh/format/địa danh KHÔNG
//      tạo thêm câu trả lời. Độ giống văn bản giữa các bài cùng intent chỉ ~0.13 nên similarity
//      từ vựng KHÔNG thể là tín hiệu duy nhất.
//   2. Similarity chỉ để SÀNG LỌC: điểm cao -> chặn; điểm thấp KHÔNG chứng minh bài khác nhau.
//      ACCEPT luôn đòi đủ điều kiện cứng (vấn đề người đọc, information gain, outline, bằng chứng).
//   3. Không bịa nhu cầu: demand chỉ nhận số liệu GSC/site-search có thật; thiếu thì demand = unverified
//      và priority bị chặn ở P1/P2.
//   4. Dữ kiện luật/giá/thông số/tin mới/địa phương cần bằng chứng đã xác minh, nếu không -> NEEDS-RESEARCH.
// Thuần (pure): không đọc/ghi file.
'use strict';

const I = require('./topic-intel');
const L = require('../data/topic-lexicon');
const { slugifyVi } = require('./topic-factory');

const GATE_RULES_VERSION = 1;
const NEAREST_PUBLISHED_K = 5;
const INTENTS = ['informational', 'commercial', 'transactional', 'navigational', 'troubleshooting'];
const CONTENT_TYPES = ['guide', 'explainer', 'troubleshooting', 'comparison', 'checklist', 'reference', 'faq'];
const PRIORITIES = ['P0', 'P1', 'P2'];
const EVIDENCE_TYPES = ['gsc', 'site-search', 'serp-review', 'official-source', 'manufacturer-manual',
  'editorial-gap', 'local-source', 'legacy'];
const EVIDENCE_STATUS = ['verified', 'unverified', 'n/a'];
const VERDICTS = ['ACCEPT', 'REWRITE', 'MERGE-CANDIDATE', 'REJECT', 'NEEDS-RESEARCH'];
// Verdict mạnh hơn thắng khi nhiều lý do cùng xuất hiện.
const PRECEDENCE = { 'REJECT': 4, 'MERGE-CANDIDATE': 3, 'REWRITE': 2, 'NEEDS-RESEARCH': 1, 'ACCEPT': 0 };

// Ngưỡng hiệu chỉnh từ corpus thật: cặp khác intent có cosine headline p99=0.16 (max 0.52);
// 8/303k cặp >= 0.40 và gần như đều là trùng ý thật (xem báo cáo audit).
const DEFAULT_THRESHOLDS = {
  headlineHigh: 0.40,
  headlineMid: 0.25,
  outlineMid: 0.55,
  maxPerIntentCluster: 1,
  minTitleChars: 15,
  maxTitleChars: 120,
  minUserProblemChars: 30,
  minGainChars: 60,
  minDistinctGainTokens: 6,
  minOutline: 4,
  minOutlineHeadingChars: 8,
  maxOutlineSelfSimilarity: 0.8,
};

const BOILERPLATE_GAIN = /thông tin hữu ích|những điều cần biết|hướng dẫn chi tiết|kiến thức cần thiết|cung cấp đầy đủ|giúp người đọc hiểu rõ/giu;

// ---------------------------------------------------------------------------
// Headline document: title + outline + keywords + câu hỏi/tóm tắt (cùng thang đo cho bài và topic)
// ---------------------------------------------------------------------------
function articleHeadlineDoc(a) {
  return {
    title: a.title,
    outline: (a.sections || []).map(s => s.h2),
    keywords: (a.keywords || []).concat(a.entities || []),
    text: [a.summary, a.quickAnswer],
  };
}
function topicHeadlineDoc(c) {
  return {
    title: c.title,
    outline: c.outline || [],
    keywords: [c.primaryKeyword].concat(c.secondaryKeywords || []).filter(Boolean),
    text: [c.userProblem, c.informationGain],
  };
}
function headlineTf(doc) {
  return I.termFreq([
    { text: doc.title, weight: 3 },
    { text: (doc.outline || []).join(' . '), weight: 2 },
    { text: (doc.keywords || []).join(' . '), weight: 2 },
    { text: (doc.text || []).filter(Boolean).join(' '), weight: 1 },
  ]);
}

// ---------------------------------------------------------------------------
// TopicCorpus: tập bài/topic để so sánh. Tăng dần được (add) — không quét lại toàn repo.
// ---------------------------------------------------------------------------
class TopicCorpus {
  constructor(idf, defaultIdf) {
    this.entries = [];
    this.bySlug = new Map();
    this.byTitle = new Map();
    this.byIntent = new Map();
    this.byCore = new Map();
    this.byHead = new Map();
    this.byHeadToken = new Map();
    this.byFocusToken = new Map();
    this.byLead = new Map(); // intentKey của CHỦ THỂ CHÍNH (trước dấu :) -> entries có đuôi mô tả
    this.byLeadCore = new Map();
    this.index = new I.NearestIndex();
    this.idf = idf || new Map();
    this.defaultIdf = defaultIdf || 1;
  }

  // docs: [{ topicId?, slotId?, slug, title, hub, status:'PUBLISHED'|'QUEUED', lifecycle?, source?, headline }]
  static fromDocs(docs) {
    const tfs = docs.map(d => headlineTf(d.headline));
    const { idf, vectors } = I.buildTfidf(tfs);
    let max = 1;
    for (const v of idf.values()) if (v > max) max = v;
    const c = new TopicCorpus(idf, max);
    docs.forEach((d, i) => c._insert(d, vectors[i]));
    return c;
  }

  // Thêm một topic mới (vector dùng idf hiện có; từ chưa thấy nhận idf cao nhất).
  add(doc) {
    this._insert(doc, I.vectorize(headlineTf(doc.headline), this.idf, this.defaultIdf));
  }

  _insert(d, vec) {
    const analysis = I.analyzeTopic(d.title);
    const entry = {
      topicId: d.topicId || null, slotId: d.slotId || null, slug: d.slug, title: d.title, hub: d.hub || '',
      status: d.status, lifecycle: d.lifecycle || d.status, source: d.source || '',
      analysis, titleFold: I.fold(d.title), outline: (d.headline && d.headline.outline) || [],
    };
    this.entries.push(entry);
    this.bySlug.set(entry.slug, entry);
    this.byTitle.set(entry.titleFold, entry);
    if (analysis.head.length) {
      if (!this.byIntent.has(analysis.intentKey)) this.byIntent.set(analysis.intentKey, []);
      this.byIntent.get(analysis.intentKey).push(entry);
      const core = analysis.head.join('+') + '|' + analysis.topical.join('+');
      if (!this.byCore.has(core)) this.byCore.set(core, []);
      this.byCore.get(core).push(entry);
      const hk = analysis.head.join('+') + '@' + analysis.locations.join('+');
      if (!this.byHead.has(hk)) this.byHead.set(hk, []);
      this.byHead.get(hk).push(entry);
      entry.headSet = new Set(analysis.head);
      for (const t of analysis.head) {
        if (!this.byHeadToken.has(t)) this.byHeadToken.set(t, []);
        this.byHeadToken.get(t).push(entry);
      }
    }
    entry.lead = I.analyzeLead(d.title);
    if (entry.lead) {
      if (!this.byLead.has(entry.lead.intentKey)) this.byLead.set(entry.lead.intentKey, []);
      this.byLead.get(entry.lead.intentKey).push(entry);
      const lcore = entry.lead.head.join('+') + '|' + entry.lead.topical.join('+');
      if (!this.byLeadCore.has(lcore)) this.byLeadCore.set(lcore, []);
      this.byLeadCore.get(lcore).push(entry);
    }
    // tập từ “trọng tâm” (title + H2 + keywords) — để đo độ phủ truy vấn mà không bị nhiễu bởi văn bản dài
    const hd = d.headline || {};
    entry.focus = new Set(I.contentTokens([d.title].concat(hd.outline || [], hd.keywords || []).join(' . ')));
    for (const t of entry.focus) {
      if (!this.byFocusToken.has(t)) this.byFocusToken.set(t, []);
      this.byFocusToken.get(t).push(entry);
    }
    this.index.add(entry, vec);
    return entry;
  }

  // Các mục cùng CHỦ THỂ (tập từ head giống nhau từ minJaccard) — bắt cả khi có thêm từ mô tả.
  similarHeads(head, minJaccard) {
    const hs = new Set(head);
    if (hs.size < 2) return [];
    const cand = new Map();
    for (const t of head) for (const e of (this.byHeadToken.get(t) || [])) cand.set(e, true);
    const out = [];
    for (const e of cand.keys()) {
      if (e.headSet.size < 2) continue;
      const j = I.jaccard(hs, e.headSet);
      let inter = 0;
      for (const t of hs) if (e.headSet.has(t)) inter++;
      // một head nằm trọn trong head kia VÀ chỉ thêm tối đa 3 từ mô tả (head dài hơn nhiều là chủ đề khác)
      const subset = inter === Math.min(hs.size, e.headSet.size) && Math.abs(hs.size - e.headSet.size) <= 3;
      if (j >= minJaccard || subset) out.push({ entry: e, jaccard: subset ? Math.max(j, 0.5) : j });
    }
    return out.sort((x, y) => y.jaccard - x.jaccard);
  }

  vectorFor(headlineDoc) { return I.vectorize(headlineTf(headlineDoc), this.idf, this.defaultIdf); }

  // Độ phủ của một truy vấn NGẮN bởi từng mục: tỷ lệ (trọng số idf) các từ của truy vấn có trong title/H2/keywords của mục.
  // Từ chưa từng thấy trong corpus nhận idf cao nhất nên truy vấn có từ lạ không bao giờ được coi là đã phủ.
  // Chiều “truy vấn nằm trong tài liệu” chỉ hợp với truy vấn ngắn; KHÔNG dùng để so hai bài dài (bão hòa ~1).
  queryCoverage(text, k) {
    const toks = [...new Set(I.contentTokens(text))];
    if (!toks.length) return [];
    let total = 0;
    const acc = new Map();
    const hit = new Map();
    for (const t of toks) {
      const w = this.idf.has(t) ? this.idf.get(t) : this.defaultIdf;
      total += w;
      for (const e of (this.byFocusToken.get(t) || [])) {
        acc.set(e, (acc.get(e) || 0) + w);
        hit.set(e, (hit.get(e) || 0) + 1);
      }
    }
    const out = [];
    for (const [e, sum] of acc) out.push({ meta: e, coverage: sum / total, matched: hit.get(e), tokens: toks.length });
    out.sort((x, y) => y.coverage - x.coverage || y.matched - x.matched);
    return out.slice(0, k || 3);
  }
}

// ---------------------------------------------------------------------------
// Kiểm tra hình dạng ứng viên V2 (thiếu/yếu -> REWRITE, không phải REJECT)
// ---------------------------------------------------------------------------
function shapeProblems(c, T, hubs) {
  const p = [];
  const title = String(c.title || '').trim();
  if (title.length < T.minTitleChars || title.length > T.maxTitleChars) p.push(['title-length', 'title phải dài ' + T.minTitleChars + '–' + T.maxTitleChars + ' ký tự']);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(String(c.slug || ''))) p.push(['slug-format', 'slug thiếu hoặc sai format']);
  if (hubs && !hubs.has(c.hub)) p.push(['hub-unknown', 'hub "' + c.hub + '" không thuộc taxonomy 97 hub (không tự thêm hub mới)']);
  if (!INTENTS.includes(c.intent)) p.push(['intent-invalid', 'intent phải thuộc ' + INTENTS.join('/')]);
  if (!CONTENT_TYPES.includes(c.contentType)) p.push(['content-type-invalid', 'contentType phải thuộc ' + CONTENT_TYPES.join('/')]);
  if (!PRIORITIES.includes(c.priority)) p.push(['priority-invalid', 'priority phải là P0/P1/P2']);
  if (!String(c.primaryKeyword || '').trim()) p.push(['keyword-missing', 'thiếu primaryKeyword']);
  else {
    const kw = I.contentTokens(c.primaryKeyword);
    const hay = new Set(I.contentTokens([c.title].concat(c.outline || []).join(' ')));
    const hit = kw.filter(t => hay.has(t)).length;
    if (kw.length && hit / kw.length < 0.5) p.push(['keyword-not-in-title-or-outline', 'primaryKeyword không xuất hiện trong title/outline']);
  }
  if (String(c.userProblem || '').trim().length < T.minUserProblemChars) p.push(['user-problem-missing', 'userProblem phải mô tả vấn đề thật của người đọc (>= ' + T.minUserProblemChars + ' ký tự)']);
  const gain = String(c.informationGain || '').trim();
  if (gain.length < T.minGainChars) p.push(['info-gain-missing', 'informationGain phải nêu thông tin độc lập mà bài hiện có chưa cung cấp (>= ' + T.minGainChars + ' ký tự)']);
  else {
    // sáo rỗng = >=2 cụm khuôn mẫu, hoặc 1 cụm trong một câu ngắn (một cụm đơn lẻ trong câu cụ thể là bình thường)
    const boiler = (gain.match(BOILERPLATE_GAIN) || []).length;
    if (boiler >= 2 || (boiler === 1 && gain.length < 110)) p.push(['info-gain-boilerplate', 'informationGain là câu sáo rỗng, chưa nêu thông tin cụ thể']);
    const titleSet = new Set(I.contentTokens(title));
    const distinct = new Set(I.contentTokens(gain).filter(t => !titleSet.has(t)));
    if (distinct.size < T.minDistinctGainTokens) p.push(['info-gain-thin', 'informationGain chỉ lặp lại title, thiếu nội dung riêng']);
  }
  const outline = Array.isArray(c.outline) ? c.outline : [];
  if (outline.length < T.minOutline || outline.some(h => String(h || '').trim().length < T.minOutlineHeadingChars)) {
    p.push(['outline-invalid', 'outline cần >= ' + T.minOutline + ' H2, mỗi H2 >= ' + T.minOutlineHeadingChars + ' ký tự']);
  } else {
    const sets = outline.map(I.tokenSet);
    for (let i = 0; i < sets.length; i++) for (let j = i + 1; j < sets.length; j++) {
      if (I.jaccard(sets[i], sets[j]) > T.maxOutlineSelfSimilarity) { p.push(['outline-repetitive', 'outline có H2 lặp ý nhau']); i = sets.length; break; }
    }
  }
  const ev = c.evidence || {};
  if (!EVIDENCE_TYPES.includes(ev.type)) p.push(['evidence-type-invalid', 'evidence.type phải thuộc ' + EVIDENCE_TYPES.join('/')]);
  if (!EVIDENCE_STATUS.includes(ev.status)) p.push(['evidence-status-invalid', 'evidence.status phải là verified/unverified/n/a']);
  const dm = c.demand || { source: 'none' };
  if (dm.source === 'none' && (dm.impressions != null || dm.clicks != null)) p.push(['demand-fabricated', 'demand.source=none nhưng có số liệu — cấm bịa nhu cầu tìm kiếm']);
  if ((dm.source === 'gsc' || dm.source === 'site-search') && !(Number.isFinite(dm.impressions) && dm.impressions >= 0 && dm.period)) {
    p.push(['demand-incomplete', 'demand từ ' + dm.source + ' phải có impressions (số) và period']);
  }
  if (c.priority === 'P0' && !((dm.source === 'gsc' || dm.source === 'site-search') && Number.isFinite(dm.impressions) && dm.impressions > 0)) {
    p.push(['priority-without-demand', 'P0 chỉ dành cho topic có nhu cầu đo thật (GSC/site-search); dùng P1/P2']);
  }
  return p;
}

function riskTriggers(c) {
  const text = [c.title, c.userProblem, (c.outline || []).join(' '), c.informationGain, c.primaryKeyword]
    .filter(Boolean).join(' ').toLowerCase();
  const out = [];
  for (const [k, re] of Object.entries(L.RISK_TRIGGERS)) {
    if (k === 'price' && c.factualScope === 'no-figures') continue;
    if (re.test(text)) out.push(k);
  }
  if (c.requiresVerifiedData === true && !out.length) out.push('declared');
  return out;
}

function evidenceVerified(c) {
  const ev = c.evidence || {};
  return ev.status === 'verified' && Array.isArray(ev.sources) && ev.sources.length > 0 &&
    ev.sources.every(s => s && s.label && s.url && s.retrievedAt);
}

// ---------------------------------------------------------------------------
// evaluate
// ---------------------------------------------------------------------------
// cand : topic ứng viên (V2) hoặc { title, slug, hub, source } ở chế độ legacy
// opts : { legacy, thresholds, hubs:Set, selfTopicId, selfSlotId, selfSlug }
function evaluate(cand, corpus, opts) {
  const o = opts || {};
  const T = Object.assign({}, DEFAULT_THRESHOLDS, o.thresholds || {});
  const legacy = !!o.legacy;
  const reasons = [];
  const add = (code, verdict, msg, extra) => reasons.push(Object.assign({ code, verdict, msg }, extra || {}));
  const a = I.analyzeTopic(cand.title);
  const isSelf = e => (o.selfTopicId && e.topicId === o.selfTopicId) || (o.selfSlotId && e.slotId === o.selfSlotId) ||
    (o.selfSlug && e.slug === o.selfSlug);
  const others = list => (list || []).filter(e => !isSelf(e));
  const nearest = [];

  // 0) hình dạng (chỉ ứng viên V2)
  if (!legacy) for (const [code, msg] of shapeProblems(cand, T, o.hubs)) add(code, 'REWRITE', msg);

  // 1) trùng tuyệt đối
  const slugHit = corpus.bySlug.get(cand.slug);
  if (slugHit && !isSelf(slugHit)) add('dup-slug', 'REJECT', 'slug đã tồn tại: ' + slugHit.slug, { target: slugHit.slug });
  const titleHit = corpus.byTitle.get(I.fold(cand.title));
  if (titleHit && !isSelf(titleHit)) add('dup-title', 'REJECT', 'title chuẩn hóa trùng bài/topic: ' + titleHit.slug, { target: titleHit.slug });

  // 2) intent cluster (tín hiệu chính)
  if (a.head.length) {
    const members = others(corpus.byIntent.get(a.intentKey));
    const published = members.filter(e => e.status === 'PUBLISHED');
    const queued = members.filter(e => e.status !== 'PUBLISHED');
    // title ứng viên chỉ gồm CHỦ THỂ (không đuôi mô tả) trùng chủ thể chính của bài có đuôi: vẫn là hoán vị
    const lead = others(corpus.byLead.get(a.intentKey)).filter(e => !members.includes(e));
    const leadPub = lead.filter(e => e.status === 'PUBLISHED');
    const leadQueued = lead.filter(e => e.status !== 'PUBLISHED');
    if (published.length) {
      const sameSig = published.find(e => e.analysis.sigKey === a.sigKey);
      if (sameSig) add('context-only-variant', 'REJECT', 'trùng intent + hình thức với bài đã xuất bản, chỉ khác bối cảnh/khung: ' + sameSig.slug, { target: sameSig.slug });
      else add('intent-cluster-published', 'MERGE-CANDIDATE', 'intent đã được ' + published.length + ' bài phục vụ (' + published[0].slug + '); nên bổ sung vào bài sẵn có', { target: published[0].slug });
    } else if (leadPub.length) {
      add('lead-subject-published', 'MERGE-CANDIDATE', 'trùng chủ thể chính của bài đã xuất bản (' + leadPub[0].slug + ', phần trước dấu “:”) — ứng viên không có phần riêng; nên bổ sung vào bài sẵn có', { target: leadPub[0].slug });
    } else if (queued.length >= T.maxPerIntentCluster) {
      add('intent-cluster-queued', 'REJECT', 'hoán vị của topic đã xếp hàng cùng intent: ' + queued[0].slug, { target: queued[0].slug });
    } else if (leadQueued.length >= T.maxPerIntentCluster) {
      add('lead-subject-queued', 'REJECT', 'hoán vị của chủ thể chính của topic đã xếp hàng: ' + leadQueued[0].slug, { target: leadQueued[0].slug });
    }
  }

  // 3) địa danh / persona: chỉ khác địa danh thì không tạo thông tin mới
  const local = cand.evidence && cand.evidence.type === 'local-source';
  if (a.locations.length) {
    const core = a.head.join('+') + '|' + a.topical.join('+');
    const sibsFull = others(corpus.byCore.get(core)).filter(e => e.analysis.intentKey !== a.intentKey || e.analysis.locations.join() !== a.locations.join());
    const sibsLead = others(corpus.byLeadCore.get(core)).filter(e => e.lead.locations.join() !== a.locations.join() && !sibsFull.includes(e));
    const sibs = sibsFull.concat(sibsLead);
    if (!local && !legacy) add('location-only-variant', sibs.length ? 'REJECT' : 'NEEDS-RESEARCH',
      sibs.length ? 'chỉ khác địa danh so với bài cùng chủ đề: ' + sibs[0].slug : 'topic địa phương cần nguồn địa phương đã xác minh',
      sibs.length ? { target: sibs[0].slug } : {});
    else if (!local && legacy && sibs.length) add('location-only-variant', 'REJECT', 'chỉ khác địa danh so với: ' + sibs[0].slug, { target: sibs[0].slug });
  }

  // 4) similarity headline (tín hiệu sàng lọc; chỉ chặn khi cao)
  const vec = corpus.vectorFor(legacy ? { title: cand.title, outline: [], keywords: [], text: [] } : topicHeadlineDoc(cand));
  const top = corpus.index.query(vec, 5, meta => !isSelf(meta));
  for (const t of top.slice(0, 3)) nearest.push({ slug: t.meta.slug, id: t.meta.slotId || t.meta.topicId, status: t.meta.status, score: Number(t.score.toFixed(3)), signal: 'headline-cosine' });
  // 5 bài ĐÃ XUẤT BẢN gần nhất (kể cả khi top chung bị topic xếp hàng chiếm chỗ) — người duyệt bắt buộc đọc (topic-approve).
  // Đo trên pilot: bài đích thật của 20 ca trùng ý nằm trong top-3 ở 85%, top-5 ở 95%, top-8 ở 100%.
  const nearestPublished = corpus.index.query(vec, NEAREST_PUBLISHED_K, meta => !isSelf(meta) && meta.status === 'PUBLISHED')
    .map(t => ({ slug: t.meta.slug, id: t.meta.slotId || t.meta.topicId, status: 'PUBLISHED', score: Number(t.score.toFixed(3)), signal: 'headline-cosine' }));
  if (!legacy && top.length) {
    const best = top[0];
    const outSim = I.outlineSimilarity(cand.outline || [], best.meta.outline || []);
    nearest[0].outlineSimilarity = Number(outSim.toFixed(3));
    if (best.score >= T.headlineHigh || (best.score >= T.headlineMid && outSim >= T.outlineMid)) {
      add(best.meta.status === 'PUBLISHED' ? 'semantic-overlap-high' : 'semantic-overlap-queued',
        best.meta.status === 'PUBLISHED' ? 'MERGE-CANDIDATE' : 'REJECT',
        'trùng ý nghĩa với ' + best.meta.slug + ' (headline ' + best.score.toFixed(2) + ', outline ' + outSim.toFixed(2) + ')', { target: best.meta.slug });
    } else if (best.score >= T.headlineMid) {
      add('semantic-overlap-mid', 'WARN', 'gần nghĩa với ' + best.meta.slug + ' (' + best.score.toFixed(2) + ') — informationGain phải giải thích khác biệt');
    }
  }

  // 4b) cùng chủ thể (head) với bài đã xuất bản nhưng khác góc topical: cảnh báo để người duyệt đọc informationGain
  if (!legacy && a.head.length) {
    const sameHead = corpus.similarHeads(a.head, 0.5).map(x => x.entry)
      .filter(e => !isSelf(e) && e.status === 'PUBLISHED' && e.analysis.intentKey !== a.intentKey &&
        e.analysis.locations.join() === a.locations.join());
    // cùng CHỦ THỂ CHÍNH (trước dấu “:”) nhưng đuôi mô tả khác nhau: hai bài cùng chủ thể dễ tự cạnh tranh
    const myLead = I.analyzeLead(cand.title);
    if (myLead) {
      for (const e of others(corpus.byLead.get(myLead.intentKey))) {
        if (e.status === 'PUBLISHED' && !sameHead.includes(e) && e.analysis.intentKey !== a.intentKey) sameHead.push(e);
      }
    }
    if (sameHead.length && !reasons.some(r => r.code === 'semantic-overlap-mid' || r.verdict === 'MERGE-CANDIDATE' || r.verdict === 'REJECT')) {
      add('same-subject-published', 'WARN', 'cùng chủ thể với ' + sameHead.length + ' bài đã xuất bản (' + sameHead[0].slug + ') nhưng khác góc — informationGain phải chứng minh câu hỏi khác', { target: sameHead[0].slug });
    }
  }

  // 5) sở hữu intent: intent thương mại thuộc cụm /thue-xe/
  const parent = String(cand.hub || '').split('/')[0];
  // (mua/so sánh/giá thuộc /market/, /review/, /guide/mua-xe — chỉ intent THUÊ XE bị giữ riêng cho /thue-xe/)
  const rentalSubject = /(?<![\p{L}])thuê(?![\p{L}])|cho thuê/iu.test([cand.title, cand.primaryKeyword].join(' '));
  if (!legacy && rentalSubject && (cand.intent === 'commercial' || cand.intent === 'transactional') && parent !== 'thue-xe') {
    add('intent-ownership', 'REWRITE', 'intent thuê xe chỉ thuộc cụm /thue-xe/ (SEO-INTENT-OWNERSHIP)');
  }

  // 6) ghép góc topical từ template (hạt giống × góc nhìn) không phải vấn đề thật
  const templated = a.templated || /legacy-v1/.test(String(cand.source || ''));
  if (a.topical.length >= 2 && templated) {
    add('composite-aspects', 'REWRITE', 'tiêu đề ghép hai góc topical (' + a.topical.join('+') + ') từ template, không xuất phát từ vấn đề người đọc');
  }

  // 7) dữ kiện cần xác minh
  const triggers = legacy ? legacyTriggers(cand, a) : riskTriggers(cand);
  if (triggers.length && !(legacy ? false : evidenceVerified(cand))) {
    add('needs-verified-data', 'NEEDS-RESEARCH', 'chủ đề chứa dữ kiện cần nguồn đã xác minh: ' + triggers.join(','), { triggers });
  }
  if (!legacy && local && cand.evidence.status !== 'verified') add('local-evidence-unverified', 'NEEDS-RESEARCH', 'nguồn địa phương chưa xác minh');
  if (!legacy) {
    const dm = cand.demand || { source: 'none' };
    if (dm.source !== 'gsc' && dm.source !== 'site-search') add('demand-unverified', 'WARN', 'nhu cầu tìm kiếm chưa đo (không có GSC/site-search) — priority tối đa P1');
    if (!triggers.length && !evidenceVerified(cand)) add('evidence-unverified', 'WARN', 'chưa ghi nguồn đã xác minh — nội dung chỉ được nêu quy trình/nguyên tắc, không số liệu; writer phải đối chiếu tài liệu chính hãng');
  }

  let verdict = 'ACCEPT';
  for (const r of reasons) if (r.verdict !== 'WARN' && PRECEDENCE[r.verdict] > PRECEDENCE[verdict]) verdict = r.verdict;
  const strong = reasons.some(r => r.verdict === 'REJECT' || r.verdict === 'MERGE-CANDIDATE');
  const warn = reasons.some(r => r.verdict === 'WARN');
  return {
    verdict, rulesVersion: GATE_RULES_VERSION,
    reasons: reasons.map(r => ({ code: r.code, verdict: r.verdict, msg: r.msg, target: r.target })),
    nearest, nearestPublished,
    analysis: { intentKey: a.intentKey, sigKey: a.sigKey, head: a.head, topical: a.topical, format: a.format, modifiers: a.modifiers, locations: a.locations, wrapper: a.wrapper },
    overlap: { risk: strong ? 'high' : (warn || nearest.length && nearest[0].score >= T.headlineMid ? 'medium' : 'low') },
    suggestedInternalLinks: nearest.filter(n => n.status === 'PUBLISHED' && n.score >= 0.08 && n.score < T.headlineMid).map(n => n.slug),
  };
}

// Thêm một lý do vào kết quả gate và tính lại verdict theo PRECEDENCE. Chỉ có thể làm verdict NGHIÊM NGẶT HƠN:
// một lý do WARN không đổi verdict, một lý do nhẹ hơn verdict hiện có không nới được REJECT/MERGE-CANDIDATE.
function addReason(res, reason) {
  const reasons = res.reasons.concat([reason]);
  let verdict = res.verdict;
  if (reason.verdict !== 'WARN' && PRECEDENCE[reason.verdict] > PRECEDENCE[verdict]) verdict = reason.verdict;
  const strong = reasons.some(r => r.verdict === 'REJECT' || r.verdict === 'MERGE-CANDIDATE');
  return Object.assign({}, res, { verdict, reasons, overlap: { risk: strong ? 'high' : res.overlap.risk } });
}

// Rà soát biên tập: người duyệt đọc hàng xóm gần nhất và ghi nhận trùng ý mà gate từ vựng không bắt được
// (cùng câu hỏi, khác cách diễn đạt) => MERGE-CANDIDATE, bổ sung vào bài đích thay vì tạo URL mới.
function applyEditorialReview(res, ov) {
  if (!ov || !ov.mergeInto) return res;
  return addReason(res, {
    code: 'editorial-overlap', verdict: 'MERGE-CANDIDATE', msg: String(ov.why || 'trùng ý với bài đã có (rà soát biên tập)'), target: ov.mergeInto,
  });
}

// Chế độ legacy: chỉ có title -> suy trigger từ tiêu đề + chủ thể (pin/điện/sạc).
function legacyTriggers(c, a) {
  const out = [];
  const text = String(c.title || '').toLowerCase();
  for (const [k, re] of Object.entries(L.RISK_TRIGGERS)) if (re.test(text)) out.push(k);
  if (a.head.includes('pin') || a.head.includes('dien')) { if (!out.includes('spec')) out.push('spec'); }
  if (a.topical.includes('cost') && !out.includes('price')) out.push('price');
  return out;
}

// Audit hàng loạt các slot cũ (chỉ có title): xử lý theo ID tăng dần; topic không bị chặn được thêm
// vào corpus để các hoán vị sau bị REJECT (topic đầu tiên của cụm là “primary”).
function auditLegacySlots(slots, corpus, opts) {
  const rows = [];
  const sorted = slots.slice().sort((x, y) => (x.id < y.id ? -1 : 1));
  for (const s of sorted) {
    const res = evaluate({ title: s.title, slug: s.slug, hub: s.hub, source: 'legacy-v1' }, corpus,
      Object.assign({}, opts, { legacy: true, selfSlotId: s.id, selfSlug: s.slug }));
    rows.push({ slot: s, result: res });
    if (res.verdict === 'ACCEPT' || res.verdict === 'REWRITE' || res.verdict === 'NEEDS-RESEARCH') {
      corpus.add({ slotId: s.id, slug: s.slug, title: s.title, hub: s.hub, status: 'QUEUED', lifecycle: 'PLANNED', source: 'legacy-v1',
        headline: { title: s.title, outline: [], keywords: [], text: [] } });
    }
  }
  return rows;
}

function ensureSlug(title) { return slugifyVi(title); }

module.exports = {
  GATE_RULES_VERSION, NEAREST_PUBLISHED_K, INTENTS, CONTENT_TYPES, PRIORITIES, EVIDENCE_TYPES, EVIDENCE_STATUS, VERDICTS, PRECEDENCE,
  DEFAULT_THRESHOLDS, TopicCorpus, articleHeadlineDoc, topicHeadlineDoc, headlineTf,
  evaluate, addReason, applyEditorialReview, auditLegacySlots, shapeProblems, riskTriggers, evidenceVerified, ensureSlug,
};
