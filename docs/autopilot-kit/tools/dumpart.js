// node dumpart.js <slug> : in toàn bộ văn bản thuần của bài (title, meta, quickAnswer, keyPoints, sections, checklist, steps, warnings, notes)
const m = require('/home/user/total/factory/data/articles/' + process.argv[2] + '.js');
const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
console.log('TITLE:', m.title); console.log('SEO:', m.seoTitle); console.log('META:', m.metaDescription); console.log('SUMMARY:', strip(m.summary));
console.log('QA:', strip(m.quickAnswer)); m.keyPoints.forEach((x, i) => console.log('KP' + i + ':', strip(x)));
m.sections.forEach(s => { console.log('\n## ' + s.h2); console.log(strip(s.html)); });
console.log('\nCHECKLIST'); m.checklist.forEach(x => console.log('-', strip(x)));
console.log('STEPS'); m.steps.forEach(x => console.log('-', strip(x.title) + ': ' + strip(x.detail)));
console.log('WARN'); m.warnings.forEach(x => console.log('-', strip(x)));
console.log('NOTES'); (m.notes || []).forEach(x => console.log('-', strip(x)));
console.log('REFS'); (m.references || []).forEach(x => console.log('-', JSON.stringify(x)));
console.log('RELATED', (m.related || []).join(','));
