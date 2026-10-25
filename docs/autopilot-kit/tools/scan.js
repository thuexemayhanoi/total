const fs=require('fs');
const slugs=process.argv.slice(2);
const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const bad=[/chắc chắn/i,/\bbạn sẽ\b/i,/\bluôn luôn\b/i,/không bao giờ/i,/đảm bảo (được )?(không|bạn)/i,/\bnên (làm|nói|xin|yêu cầu|quay|ghi âm)\b/i,/\bmiễn phí\b/i,/\bhotline\b/i,/https?:\/\//i,/<a /i,/[぀-ヿ㐀-鿿가-힯Ѐ-ӿ]/,/\bđể (né|tránh) (bị )?(phạt|xử)/i,/cách (né|tránh|lách)/i,/\bchắc thắng\b/i,/\bthường (thì |là )?(được|bị)/i];
for(const s of slugs){
  const m=require('/home/user/total/factory/data/articles/'+s+'.js');
  const body=m.sections.map(x=>strip(x.html)).join(' ');
  const w=body.split(/\s+/).length;
  const all=[m.title,m.metaDescription,strip(m.summary),strip(m.quickAnswer),...m.keyPoints.map(strip),body,...m.checklist.map(strip),...m.steps.map(x=>strip(x.title+' '+x.detail)),...m.warnings.map(strip),...(m.notes||[]).map(strip)].join('\n');
  const hits=[];
  for(const r of bad){const mm=all.match(r); if(mm){const i=all.indexOf(mm[0]);hits.push(mm[0]+' …'+all.slice(Math.max(0,i-60),i+80).replace(/\n/g,' '));}}
  const h2=m.sections.length, ds=/24 tháng 10 năm 2026|24\/10\/2026/.test(all);
  console.log(s.slice(0,50),'| body',w,'| h2',h2,'| date',ds,'| meta',m.metaDescription.length,'| seo',m.seoTitle.length,'| rel',(m.related||[]).length);
  hits.forEach(h=>console.log('   HIT',h));
}
