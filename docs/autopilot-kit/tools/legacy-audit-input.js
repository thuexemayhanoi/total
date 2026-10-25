// node legacy-audit-input.js OUT.json : dựng dữ liệu đầu vào kiểm toán 300 slot legacy (READ-ONLY)
// Slot legacy = slot PLANNED mà topic-matrix có dòng lifecycle REJECTED hoặc mergeInto (EDITORIAL_CLOSED).
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..', '..');
const tm = require(path.join(root, 'factory/lib/topic-matrix.js'));
const matrix = JSON.parse(fs.readFileSync(path.join(root, 'factory/state/matrix.json'), 'utf8'));
const manifest = new Map(fs.readFileSync(path.join(root, 'factory/state/article-manifest.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l)).map(r => [r.slug || r.id, r]));
const byId = new Map(matrix.slots.map(s => [s.id, s]));
const bySlug = new Map(matrix.slots.map(s => [s.slug, s]));
const rows = tm.readRows().rows;
const closed = rows.filter(r => r && r.slotId && (r.lifecycle === 'REJECTED' || r.mergeInto) && byId.get(r.slotId) && byId.get(r.slotId).state === 'PLANNED');
const rowBySlot = new Map(closed.map(r => [r.slotId, r]));
const url = s => '/' + s.hub + '/' + s.slug + '/';
function finalCover(slot) {
  const seen = new Set(); let cur = slot; const chain = [];
  while (cur && !seen.has(cur.id)) {
    seen.add(cur.id);
    const r = rowBySlot.get(cur.id); if (!r || !r.mergeInto) break;
    const t = bySlug.get(r.mergeInto); if (!t) break;
    chain.push(t.id);
    if (t.state === 'PUBLISHED') return { cover: t, chain };
    cur = t;
  }
  return { cover: null, chain };
}
const out = closed.map(r => {
  const s = byId.get(r.slotId); const direct = bySlug.get(r.mergeInto); const fc = finalCover(s);
  return {
    id: s.id, slug: s.slug, title: s.title, hub: s.hub, cluster: r.cluster,
    gate: (r.gate && r.gate.reasons || []).map(x => x.code), nearest: (r.gate && r.gate.nearest || []).slice(0, 3),
    directTarget: direct ? { id: direct.id, slug: direct.slug, state: direct.state, title: direct.title } : null,
    cover: fc.cover ? { id: fc.cover.id, slug: fc.cover.slug, title: fc.cover.title, url: url(fc.cover), file: 'factory/data/articles/' + fc.cover.slug + '.js', inManifest: manifest.has(fc.cover.slug) } : null,
    chain: fc.chain,
  };
});
const clusters = {};
for (const x of out) { const k = x.cover ? x.cover.id : 'NO_COVER'; (clusters[k] = clusters[k] || []).push(x); }
fs.writeFileSync(process.argv[2], JSON.stringify({ generatedAt: new Date().toISOString(), total: out.length, clusters: Object.entries(clusters).map(([cover, slots]) => ({ cover, count: slots.length, slots })) }, null, 1));
console.log('slots', out.length, 'clusters', Object.keys(clusters).length, 'noCover', (clusters.NO_COVER || []).length);
