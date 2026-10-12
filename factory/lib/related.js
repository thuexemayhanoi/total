// Curated-first, deterministic related links among PUBLISHED articles only.
// Does not modify article data, page body or URL paths.
'use strict';
function terms(items) {
  return new Set((Array.isArray(items) ? items : [])
    .filter(x => typeof x === 'string')
    .map(x => x.trim().toLocaleLowerCase('vi')).filter(Boolean));
}
function common(a, b) {
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n;
}
function chooseRelated(article, published, bySlug, options) {
  const opts = options || {}, current = article || {};
  const all = Array.isArray(published) ? published : [];
  const lookup = bySlug || Object.fromEntries(all.filter(x => x && x.slug).map(x => [x.slug, x]));
  const curated = [], seen = new Set([current.slug]);
  for (const slug of Array.isArray(current.related) ? current.related : []) {
    const a = lookup[slug];
    if (a && !seen.has(slug)) { curated.push(a); seen.add(slug); }
  }
  const minimum = Number.isInteger(opts.minItems) ? Math.max(0, Math.min(8, opts.minItems)) : 3;
  const maximum = Number.isInteger(opts.maxItems) ? Math.max(minimum, Math.min(8, opts.maxItems)) : 5;
  if (opts.autoFill === false || curated.length >= minimum) return curated;
  const entities = terms(current.entities), keywords = terms(current.keywords);
  const scored = all.filter(a => a && a.slug && !seen.has(a.slug)).map(a => {
    const sameHub = !!(current.hub && a.hub && current.hub === a.hub && current.category === a.category);
    const sameCategory = !!(a.category && a.category === current.category);
    const score = (sameHub ? 20 : 0) + (sameCategory ? 8 : 0)
      + Math.min(6, common(entities, terms(a.entities)) * 2)
      + Math.min(3, common(keywords, terms(a.keywords)));
    return { a, score };
  }).filter(x => x.score > 0);
  scored.sort((x,y) => y.score - x.score
    || String(y.a.date || '').localeCompare(String(x.a.date || ''))
    || String(x.a.slug).localeCompare(String(y.a.slug)));
  const amount = Math.min(Math.max(0, minimum - curated.length), Math.max(0, maximum - curated.length));
  return curated.concat(scored.slice(0, amount).map(x => x.a));
}
module.exports = { chooseRelated };
