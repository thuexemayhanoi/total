'use strict';
// External AI writers use deterministic ID ownership; one publisher drains
// committed article modules. This code does NOT call any AI API.
const WRITERS = ['W1','W2','W3'];
const slotNumber = id => {
  if (!/^S\d{5,}$/.test(String(id || ''))) throw Error('WRITER_ID_INVALID: ' + id);
  return BigInt(String(id).slice(1));
};
const writerOf = id => WRITERS[Number(slotNumber(id) % 3n)];
function fileCandidates(filenames) {
  // New convention is <slug>.js. Historical external Writers sometimes used
  // a<ID>-<title>.js; map these by ID without requiring 20,000 source modules.
  const names = new Set(filenames || []), legacy = new Map();
  for (const name of names) {
    const m = /^a0*(\d+)-.+\.js$/.exec(name);
    if (!m) continue;
    const id = 'S' + m[1].padStart(5, '0');
    if (legacy.has(id)) legacy.set(id, null); // duplicate mappings fail closed
    else legacy.set(id, name);
  }
  return { names, legacy };
}
function candidateFile(slot, parsed) {
  const p = parsed || fileCandidates([]);
  if (p.names.has(slot.slug + '.js')) return slot.slug + '.js';
  return p.legacy.get(slot.id) || null;
}
function selectReady(slots, filenames, excluded, count, isApproved) {
  const files = fileCandidates(filenames);
  const seen = new Set(excluded || []);
  const result = [];
  for(const s of slots) {
    if(!s || !['PLANNED','RESEARCH','WRITING','QA','PASS','REPAIR'].includes(s.state)) continue;
    if (seen.has(s.id) || !candidateFile(s, files)) continue;
    if (isApproved && !isApproved(s)) continue;
    result.push(s);
  }
  result.sort((a,b)=>slotNumber(a.id) < slotNumber(b.id) ? -1 : slotNumber(a.id) > slotNumber(b.id) ? 1 : 0);
  return result.slice(0, Math.max(1, Math.min(100, Number(count) || 10)));
}
module.exports = { WRITERS, writerOf, fileCandidates, candidateFile, selectReady };
