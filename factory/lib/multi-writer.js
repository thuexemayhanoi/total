'use strict';
// External AI writers use deterministic ID ownership; one publisher drains
// committed article modules. This code does NOT call any AI API.
const WRITERS = ['W1','W2','W3'];
const slotNumber = id => {
  if (!/^S\d{5,}$/.test(String(id || ''))) throw Error('WRITER_ID_INVALID: ' + id);
  return BigInt(String(id).slice(1));
};
const writerOf = id => WRITERS[Number(slotNumber(id) % 3n)];
function selectReady(slots, filenames, excluded, count, isApproved) {
  const files = new Set(filenames || []);
  const seen = new Set(excluded || []);
  const result = [];
  for(const s of slots) {
    if(!s || !['PLANNED','RESEARCH','WRITING','QA','PASS','REPAIR'].includes(s.state)) continue;
    if (seen.has(s.id) || !files.has(s.slug + '.js')) continue;
    if (isApproved && !isApproved(s)) continue;
    result.push(s);
  }
  result.sort((a,b)=>slotNumber(a.id) < slotNumber(b.id) ? -1 : slotNumber(a.id) > slotNumber(b.id) ? 1 : 0);
  return result.slice(0, Math.max(1, Math.min(100, Number(count) || 10)));
}
module.exports = { WRITERS, writerOf, selectReady };
