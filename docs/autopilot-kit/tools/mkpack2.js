// Dựng pack kiểu writer-pack cho các slot V2 đã duyệt: node mkpack.js OUT S01971,S01972,...
const fs=require('fs');const root='/home/user/total';
const [out,idsArg]=process.argv.slice(2);const ids=idsArg.split(',');
const m=JSON.parse(fs.readFileSync(root+'/factory/state/matrix.json','utf8'));
const slots=Array.isArray(m.slots)?m.slots:Object.values(m.slots);
const rows=fs.readFileSync(root+'/factory/state/topic-matrix.jsonl','utf8').trim().split('\n').map(JSON.parse);
const bySlot=new Map(rows.filter(r=>r.slotId).map(r=>[r.slotId,r]));
const pub=new Set(slots.filter(s=>s.state==='PUBLISHED').map(s=>s.slug));
let o='WRITER_PACK status=ready count='+ids.length+'\nBATCH_IDS='+ids.join(',')+'\n';
for(const id of ids){const s=slots.find(x=>x.id===id);const t=bySlot.get(id);
 if(!s||!t){console.error('thiếu',id);process.exit(1);}
 const cand=[...(t.internalLinks||[]),...((t.gate&&t.gate.nearestPublished)||[]).map(x=>x.slug)];
 const rel=[...new Set(cand)].filter(x=>pub.has(x)).slice(0,8);
 o+=`ITEM ${id} hub=${s.hub} slug=${s.slug}\n  TITLE ${t.title}\n  FILE factory/data/articles/${s.slug}.js\n  RELATED_PUBLISHED ${rel.join(',')}\n  TOPIC_BRIEF keyword=${t.primaryKeyword} | problem=${t.userProblem}\n  TOPIC_GAIN ${t.informationGain}\n  TOPIC_OUTLINE ${t.outline.join(' | ')}\n  TOPIC_SCOPE ${t.factualScope}\n`;
 const ev=t.evidence||{};
 for(const so of (ev.sources||[])) o+=`  SOURCES ${so.label} | ${so.url} | truy xuất ${so.retrievedAt}\n`;
 for(const f of (ev.verifiedFacts||[])) o+=`  VERIFIED_FACTS ${f.fact} [${f.cite}]\n`;
 if(rel.length<5)console.error('CẢNH BÁO',id,'chỉ',rel.length,'related');}
fs.writeFileSync(out,o);console.log('ok',out,o.split('\n').filter(l=>l.startsWith('ITEM')).length);
