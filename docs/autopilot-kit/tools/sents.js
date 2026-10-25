// node sents.js <slug> : in các câu có số tiền / điểm / tháng / ngày / km / mét / tuổi trong thân bài + quickAnswer + keyPoints + warnings
const m = require('/home/user/total/factory/data/articles/' + process.argv[2] + '.js');
const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const parts = [['QA', m.quickAnswer], ...m.keyPoints.map(x => ['KP', x]), ...m.sections.map(s => ['H2 ' + (s.h2 || s.title || '').slice(0, 40), s.html]), ...m.warnings.map(x => ['WARN', x])];
const re = /(đồng|điểm giấy phép|\d+ điểm|\bđiểm\b.*\b\d{2} điểm|tháng|ngày làm việc|km\/h|mét|tuổi|giờ|năm 20\d\d|\d{1,2}\/\d{1,2}\/20\d\d)/;
for (const [tag, text] of parts) {
  const sents = strip(text).split(/(?<=[.;:])\s+/);
  for (const s of sents) if (/\d/.test(s) && re.test(s) && /(đồng|điểm|tháng|km\/h|mét|tuổi|giờ làm việc|ngày làm việc|tước)/.test(s)) console.log('[' + tag + '] ' + s.slice(0, 420));
}
