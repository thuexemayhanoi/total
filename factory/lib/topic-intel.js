// AI WIKI TOTAL — Topic Intelligence V2: chuẩn hóa, nhận diện hoán vị, intent key, similarity.
//
// THUẦN (pure), deterministic, KHÔNG AI/API, KHÔNG dependency. Không đọc/ghi file —
// topic-gate/topic.js chịu trách nhiệm I/O. Mọi điểm số chỉ là TÍN HIỆU SÀNG LỌC:
// điểm thấp KHÔNG tự chứng minh bài khác nhau (xem topic-gate.js).
'use strict';

const L = require('../data/topic-lexicon');

const fold = L.fold;

function tokens(text) {
  const f = fold(text);
  return f ? f.split(' ') : [];
}

// Token nội dung: bỏ âm tiết chức năng và số thuần.
function contentTokens(text) {
  return tokens(text).filter(t => t.length > 1 && !L.STOP.has(t) && !/^\d+$/.test(t));
}

function stripHtml(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}

function hasPhrase(haystack, phrase) {
  return (' ' + haystack + ' ').includes(' ' + phrase + ' ');
}
function removePhrase(haystack, phrase) {
  return (' ' + haystack + ' ').split(' ' + phrase + ' ').join('  ').trim().replace(/\s+/g, ' ');
}

// ---------------------------------------------------------------------------
// 1. Phân tích tiêu đề topic -> intent key
// ---------------------------------------------------------------------------
// Tách tiêu đề thành: khung (wrapper), bối cảnh (modifier — không đổi câu trả lời),
// góc nhìn FORMAT (chỉ đổi cách trình bày), góc nhìn TOPICAL (đổi câu trả lời),
// địa danh và HEAD (chủ thể thật). intentKey = head + topical (+ địa danh):
// hai topic cùng intentKey trả lời cùng một câu hỏi cốt lõi.
function analyzeTopic(title) {
  const f0 = fold(title);
  let inner = f0;
  let wrapper = null;
  for (const w of L.WRAPPERS) {
    const m = w.re.exec(inner);
    if (m) { wrapper = w.id; inner = m[1].trim(); break; }
  }
  const formats = new Set();
  const topical = new Set();
  const modifiers = [];
  const locations = [];

  for (const phrase of L.ANGLE_PHRASES) {
    if (hasPhrase(inner, phrase)) {
      const a = L.ANGLE_ASPECT.get(phrase);
      (a.kind === 'format' ? formats : topical).add(a.id);
      inner = removePhrase(inner, phrase);
    }
  }
  for (const phrase of L.MODIFIERS) {
    if (hasPhrase(inner, phrase)) { modifiers.push(phrase); inner = removePhrase(inner, phrase); }
  }
  for (const loc of L.LOCATIONS) {
    if (hasPhrase(inner, loc)) { locations.push(loc); inner = removePhrase(inner, loc); }
  }
  for (const [aspect, terms] of Object.entries(L.TOPICAL_VOCAB)) {
    for (const term of terms) {
      if (hasPhrase(inner, term)) { topical.add(aspect); inner = removePhrase(inner, term); }
    }
  }
  const head = [...new Set(inner.split(' ').filter(t => t && t.length > 1 && !L.STOP.has(t) && !L.FILLER.has(t) && !/^\d+$/.test(t)))].sort();
  const topicalSorted = [...topical].sort();
  const formatSorted = [...formats].sort();
  const locSorted = [...new Set(locations)].sort();
  const intentKey = head.join('+') + '|' + topicalSorted.join('+') + (locSorted.length ? '@' + locSorted.join('+') : '');
  return {
    title: String(title || ''),
    fold: f0, wrapper, head, topical: topicalSorted, format: formatSorted,
    modifiers: [...new Set(modifiers)].sort(), locations: locSorted,
    intentKey,
    // sigKey: cùng intent VÀ cùng hình thức — bản sao đúng nghĩa đen (chỉ khác bối cảnh).
    sigKey: intentKey + '#' + formatSorted.join('+'),
    // Hoán vị = cùng intent nhưng bối cảnh/format khác (xem isTemplatePermutation).
    templated: !!(wrapper || modifiers.length || formatSorted.length),
  };
}

// Chủ thể chính của title dạng “chủ thể: phần mô tả đuôi” (hoặc — / – / | / ' - '): phần đứng trước dấu tách.
// null nếu không có đuôi, hoặc chủ thể quá chung (< 2 từ nội dung). Dùng để bắt hoán vị của bài đã có khi bài đó
// có đuôi mô tả mà hoán vị thì không (“Thay nhớt xe máy: chu kỳ và cách thực hiện” ⊃ “Kinh nghiệm thay nhớt xe máy”).
function leadPhrase(title) {
  const m = /^(.+?)\s*(?::|—|–|\||\s-\s)\s*(.+)$/.exec(String(title || ''));
  return m && m[1].trim().length >= 6 ? m[1].trim() : null;
}
function analyzeLead(title) {
  const lead = leadPhrase(title);
  if (!lead) return null;
  const a = analyzeTopic(lead);
  return a.head.length >= 2 ? a : null;
}

// Hai topic là HOÁN VỊ nếu cùng intentKey (cùng chủ thể + góc topical + địa danh) —
// khác nhau chỉ ở khung, bối cảnh, hình thức, thứ tự từ.
function isTemplatePermutation(a, b) {
  return !!(a && b && a.head.length > 0 && a.intentKey === b.intentKey);
}

// ---------------------------------------------------------------------------
// 2. Tập từ + Jaccard / containment
// ---------------------------------------------------------------------------
function tokenSet(text) { return new Set(contentTokens(text)); }

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [small, big] = a.size <= b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

// Shingle k-từ (đã bỏ stopword) — dùng phát hiện sao chép cụm dài giữa hai bài.
function shingles(text, k) {
  const toks = contentTokens(text);
  const n = k || 4;
  const out = new Set();
  for (let i = 0; i + n <= toks.length; i++) out.add(toks.slice(i, i + n).join(' '));
  return out;
}
// Tỷ lệ shingle của A xuất hiện trong B (bất đối xứng): A bị B “nuốt” bao nhiêu.
function containment(a, b) {
  if (!a.size) return 0;
  let c = 0;
  for (const x of a) if (b.has(x)) c++;
  return c / a.size;
}

// ---------------------------------------------------------------------------
// 3. TF-IDF (unigram + bigram) trên vector thưa
// ---------------------------------------------------------------------------
// fields: [{ text, weight }] — ví dụ title ×3, H2 ×2, summary ×2, body ×1.
function termFreq(fields) {
  const tf = new Map();
  for (const f of fields) {
    const toks = contentTokens(f.text);
    const w = f.weight || 1;
    for (let i = 0; i < toks.length; i++) {
      tf.set(toks[i], (tf.get(toks[i]) || 0) + w);
      if (i + 1 < toks.length) {
        const bg = toks[i] + '_' + toks[i + 1];
        tf.set(bg, (tf.get(bg) || 0) + w);
      }
    }
  }
  return tf;
}

// Dựng chỉ mục TF-IDF cho một tập tf-map; trả { idf, vectors } (vector đã L2-normalize).
function buildTfidf(tfMaps) {
  const df = new Map();
  for (const tf of tfMaps) for (const t of tf.keys()) df.set(t, (df.get(t) || 0) + 1);
  const N = tfMaps.length;
  const idf = new Map();
  for (const [t, d] of df) idf.set(t, Math.log((N + 1) / (d + 1)) + 1);
  const vectors = tfMaps.map(tf => vectorize(tf, idf));
  return { idf, vectors, N };
}

function vectorize(tf, idf, defaultIdf) {
  const v = new Map();
  let norm = 0;
  for (const [t, c] of tf) {
    const w = (1 + Math.log(c)) * (idf.has(t) ? idf.get(t) : (defaultIdf || 1));
    v.set(t, w);
    norm += w * w;
  }
  norm = Math.sqrt(norm) || 1;
  for (const [t, w] of v) v.set(t, w / norm);
  return v;
}

function cosine(a, b) {
  const [small, big] = a.size <= b.size ? [a, b] : [b, a];
  let dot = 0;
  for (const [t, w] of small) { const x = big.get(t); if (x) dot += w * x; }
  return dot;
}

// Chỉ mục ngược để truy vấn láng giềng gần nhất mà KHÔNG so khớp toàn bộ O(N).
class NearestIndex {
  constructor() { this.docs = []; this.postings = new Map(); }
  add(meta, vec) {
    const idx = this.docs.length;
    this.docs.push({ meta, vec });
    for (const [t, w] of vec) {
      let p = this.postings.get(t);
      if (!p) this.postings.set(t, p = []);
      p.push([idx, w]);
    }
    return idx;
  }
  // Trả top-k [{ meta, score }] theo cosine (vec truy vấn đã L2-normalize).
  query(vec, k, filter) {
    const acc = new Map();
    for (const [t, w] of vec) {
      const p = this.postings.get(t);
      if (!p) continue;
      for (const [idx, dw] of p) acc.set(idx, (acc.get(idx) || 0) + w * dw);
    }
    const out = [];
    for (const [idx, score] of acc) {
      const d = this.docs[idx];
      if (filter && !filter(d.meta)) continue;
      out.push({ meta: d.meta, score });
    }
    out.sort((x, y) => y.score - x.score);
    return out.slice(0, k || 5);
  }
}

// Độ giống của HAI danh sách H2 (outline): trung bình hai chiều của “tiêu đề khớp nhất”.
function outlineSimilarity(a, b) {
  const A = (a || []).map(tokenSet).filter(s => s.size);
  const B = (b || []).map(tokenSet).filter(s => s.size);
  if (!A.length || !B.length) return 0;
  const best = (X, Y) => X.reduce((s, x) => s + Math.max(...Y.map(y => jaccard(x, y))), 0) / X.length;
  return (best(A, B) + best(B, A)) / 2;
}

// ---------------------------------------------------------------------------
// 4. Chữ ký bài viết (article module) và union-find để gom cụm
// ---------------------------------------------------------------------------
function articleText(a) {
  const parts = [a.summary, a.quickAnswer, (a.keyPoints || []).join(' '),
    (a.sections || []).map(s => stripHtml(s.html)).join(' '),
    (a.checklist || []).join(' '), (a.steps || []).map(s => s.title + ' ' + s.detail).join(' '),
    (a.warnings || []).join(' ')];
  return parts.join(' ');
}
function articleFields(a) {
  return [
    { text: a.title, weight: 3 },
    { text: (a.sections || []).map(s => s.h2).join(' . '), weight: 2 },
    { text: [a.summary, a.quickAnswer].join(' '), weight: 2 },
    { text: articleText(a), weight: 1 },
  ];
}

function unionFind(n) {
  const p = Array.from({ length: n }, (_, i) => i);
  const find = x => { while (p[x] !== x) { p[x] = p[p[x]]; x = p[x]; } return x; };
  const union = (a, b) => { a = find(a); b = find(b); if (a !== b) p[b] = a; };
  return { find, union };
}

module.exports = {
  fold, tokens, contentTokens, stripHtml, analyzeTopic, leadPhrase, analyzeLead, isTemplatePermutation,
  tokenSet, jaccard, shingles, containment, termFreq, buildTfidf, vectorize, cosine,
  NearestIndex, outlineSimilarity, articleText, articleFields, unionFind,
};
