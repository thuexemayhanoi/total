// AI WIKI TOTAL — Topic V2: tìm cụm từ trong THÂN BÀI toàn kho (topic-grep). KHÔNG chấm điểm trùng ý.
//
// Vì sao không có verdict "trùng/không trùng": đã thử chấm độ phủ cụm từ khóa + H2 ứng viên trên từng đoạn thân bài. Hiệu chuẩn trên dữ liệu thật
// (2026-10-24; 116 topic bị gộp có lý do vs 236 topic độc lập đã xuất bản) cho AUC = 0,53 (từ khóa), 0,52 (H2), 0,53 (kết hợp) — ngang may rủi.
// Không có AI/embedding thì so khớp từ vựng không phân biệt được "cùng câu hỏi khác từ ngữ" (khớp kết quả pilot 0/46 của cổng từ vựng).
// Nên module này chỉ làm việc đã làm tay ở các vòng trước nhưng nhanh và chuẩn: liệt kê bài/đoạn có chứa cụm từ để NGƯỜI duyệt đọc và quyết định.
//
// THUẦN (pure), deterministic, KHÔNG AI/API, KHÔNG I/O: nhận danh sách bài đã nạp.
'use strict';

const I = require('./topic-intel');
const L = require('../data/topic-lexicon');

// Âm tiết lowercase, bỏ dấu câu, GIỮ dấu thanh (khớp chính xác); dạng fold bỏ dấu để tìm gần đúng (đổi "tăng" ≈ "tang").
function syl(text) {
  return String(text || '').toLowerCase().replace(/[^\p{L}\p{N}\s]+/gu, ' ').split(/\s+/).filter(Boolean);
}
const foldSyl = (text) => syl(L.fold(text));

// Dựng chỉ mục các đoạn: articles = [{ slug, title, hub, article }] (article = module bài).
function buildBodyIndex(articles) {
  const units = [];   // { a, kind, h2, text, norm, fnorm }
  const arts = [];
  const add = (ai, kind, h2, raw) => {
    const text = String(raw || '').replace(/\s+/g, ' ').trim();
    if (text.length < 20) return;
    units.push({ a: ai, kind, h2: h2 || '', text, norm: ' ' + syl(text).join(' ') + ' ', fnorm: ' ' + foldSyl(text).join(' ') + ' ' });
  };
  for (const d of articles) {
    const a = d.article; if (!a) continue;
    const ai = arts.length; arts.push({ slug: d.slug, title: d.title, hub: d.hub });
    add(ai, 'title', '', a.title);
    add(ai, 'quickAnswer', '', a.quickAnswer);
    add(ai, 'summary', '', a.summary);
    for (const k of a.keyPoints || []) add(ai, 'keyPoint', '', k);
    for (const s of a.sections || []) {
      add(ai, 'h2', s.h2, s.h2);
      for (const p of String(s.html || '').split(/<\/p>|<\/li>/i)) add(ai, 'p', s.h2, I.stripHtml(p));
    }
    for (const w of a.warnings || []) add(ai, 'warning', '', w);
  }
  return { units, arts };
}

function snippet(u, phrase) {
  const t = u.text;
  const low = t.toLowerCase();
  const at = low.indexOf(String(phrase || '').toLowerCase());
  const from = at > 80 ? at - 80 : 0;
  const body = (from ? '…' : '') + t.slice(from, from + 240) + (t.length > from + 240 ? '…' : '');
  return (u.kind === 'p' && u.h2 ? '[' + u.h2.slice(0, 50) + '] ' : '[' + u.kind + '] ') + body;
}

// Tìm các cụm trong thân bài. opts: { exact (mặc định false = bỏ dấu), top (mặc định 10), exclude (slug bài bỏ qua) }.
// Trả: [{ slug, title, hub, phrasesMatched, matchedPhrases:[...], paragraphs, hits:[{phrase, snippet}] }] — bài khớp NHIỀU cụm khác nhau xếp trước.
function grepBodies(idx, phrases, opts) {
  const o = Object.assign({ exact: false, top: 10, exclude: [] }, opts || {});
  const ps = (phrases || []).map(p => ({ raw: String(p), toks: o.exact ? syl(p) : foldSyl(p) })).filter(p => p.toks.length);
  const ex = new Set(o.exclude || []);
  const per = new Map();
  for (const u of idx.units) {
    const art = idx.arts[u.a]; if (ex.has(art.slug)) continue;
    const hay = o.exact ? u.norm : u.fnorm;
    for (const p of ps) {
      if (!hay.includes(' ' + p.toks.join(' ') + ' ')) continue;
      let r = per.get(u.a);
      if (!r) { r = { slug: art.slug, title: art.title, hub: art.hub, matched: new Set(), paragraphs: new Set(), hits: [] }; per.set(u.a, r); }
      r.matched.add(p.raw); r.paragraphs.add(u);
      if (r.hits.filter(h => h.phrase === p.raw).length < 2) r.hits.push({ phrase: p.raw, snippet: snippet(u, p.raw) });
    }
  }
  return [...per.values()]
    .map(r => ({ slug: r.slug, title: r.title, hub: r.hub, phrasesMatched: r.matched.size, matchedPhrases: [...r.matched], paragraphs: r.paragraphs.size, hits: r.hits }))
    .sort((a, b) => (b.phrasesMatched - a.phrasesMatched) || (b.paragraphs - a.paragraphs) || (a.slug < b.slug ? -1 : 1))
    .slice(0, o.top);
}

module.exports = { buildBodyIndex, grepBodies, syl, foldSyl };
