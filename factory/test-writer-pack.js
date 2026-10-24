#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const matrixPath = path.join(ROOT, 'factory', 'state', 'matrix.json');
let pass=0, fail=0;
function ok(v,msg){ if(v) pass++; else { fail++; console.error('FAIL: '+msg); } }

const before=fs.readFileSync(matrixPath);
const out=execFileSync(process.execPath,[path.join(ROOT,'factory','factory.js'),'writer-pack','--count','10','--json'],{
  cwd:ROOT,encoding:'utf8',maxBuffer:8*1024*1024
});
const pack=JSON.parse(out);
const after=fs.readFileSync(matrixPath);
const matrix=JSON.parse(after);
const published=new Set(matrix.slots.filter(s=>s.state==='PUBLISHED').map(s=>s.slug));

ok(before.equals(after),'writer-pack phải read-only với matrix');
ok(pack.schemaVersion===1,'schemaVersion=1');
ok(pack.count>=0 && pack.count<=10,'count phải 0..10');
ok(Array.isArray(pack.batchIds) && pack.batchIds.length===pack.count,'batchIds khớp count');
ok(Array.isArray(pack.items) && pack.items.length===pack.count,'items khớp count');
ok(pack.items.every(x=>x.file==='factory/data/articles/'+x.slug+'.js'),'file path phải = <slug>.js');
ok(pack.items.every(x=>Array.isArray(x.relatedPublished) && x.relatedPublished.length>=2),'mỗi item phải có >=2 related gợi ý');
ok(pack.items.every(x=>x.relatedPublished.every(r=>published.has(r.slug))),'mọi related gợi ý phải là PUBLISHED');
ok(pack.items.every(x=>x.intent && x.title && x.hub && x.slug),'item phải đủ intent/title/hub/slug');
// Slot đóng bởi quyết định biên tập (topic REJECTED/mergeInto) KHÔNG được vào pack và verify-batch phải từ chối.
{
  // Brief: slot có topic V2 APPROVED phải mang TOPIC_BRIEF/GAIN/OUTLINE/SCOPE trong pack ở mọi chế độ governance (kể cả mode=off).
  {
    const trows = fs.readFileSync(path.join(ROOT, 'factory', 'state', 'topic-matrix.jsonl'), 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
    const approvedBySlot = new Map(trows.filter(r => r.slotId && r.lifecycle === 'APPROVED').map(r => [r.slotId, r]));
    const withTopic = pack.items.filter(x => approvedBySlot.has(x.id));
    ok(withTopic.every(x => x.brief && x.brief.informationGain && Array.isArray(x.brief.outline) && x.brief.outline.length >= 4 && x.brief.factualScope), 'pack: slot có topic V2 APPROVED mang brief đủ gain/outline/scope', withTopic.filter(x => !x.brief).map(x => x.id).join(','));
  }
  const rows = fs.readFileSync(path.join(ROOT, 'factory', 'state', 'topic-matrix.jsonl'), 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
  const closedIds = new Set(rows.filter(r => r.slotId && (r.lifecycle === 'REJECTED' || r.mergeInto)).map(r => r.slotId));
  const slotState = new Map(matrix.slots.map(s => [s.id, s.state]));
  ok(pack.items.every(x => !(closedIds.has(x.id) && x.state === 'PLANNED')), 'writer-pack không đưa slot PLANNED đã REJECT/gộp vào batch');
  ok(typeof pack.editorialClosed === 'number', 'pack.editorialClosed là số');
  const closedPlanned = [...closedIds].filter(id => slotState.get(id) === 'PLANNED' && !fs.existsSync(path.join(ROOT, 'factory', 'data', 'articles', (matrix.slots.find(s => s.id === id) || {}).slug + '.js')));
  if (closedPlanned.length) {
    let vOut = '';
    try { execFileSync(process.execPath, [path.join(ROOT, 'factory', 'factory.js'), 'verify-batch', closedPlanned[0]], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) { vOut = String(e.stdout || '') + String(e.stderr || ''); }
    ok(/VERIFY_BATCH_FAIL/.test(vOut) && /(GỘP|REJECT)/.test(vOut), 'verify-batch từ chối slot đã REJECT/gộp với lý do rõ', vOut.slice(0, 160));
  }
  if (pack.count === 0) ok(['need-topics', 'wait-publish', 'done-general-target', 'refill', 'awaiting-approval'].includes(pack.status), 'pack rỗng phải có status giải thích được', pack.status);
}
// Quyết định biên tập từ topic-matrix phải lộ ra trong pack (fast-writer mode=off vẫn liệt kê slot legacy đã REJECT/MERGE):
const allSlugs=new Set(matrix.slots.map(s=>s.slug));
ok(Array.isArray(pack.mergedSlots),'pack.mergedSlots phải là mảng');
ok(pack.mergedSlots.every(id=>{const it=pack.items.find(x=>x.id===id);return it && it.topicDecision && it.topicDecision.writeAdvice==='SKIP';}),'mergedSlots chỉ gồm item có topicDecision.writeAdvice=SKIP');
ok(pack.items.every(x=>!x.topicDecision || x.topicDecision.writeAdvice!=='SKIP' || pack.mergedSlots.includes(x.id)),'mọi item SKIP đều nằm trong mergedSlots');
ok(pack.items.every(x=>!x.topicDecision || !x.topicDecision.mergeInto || allSlugs.has(x.topicDecision.mergeInto)),'mergeInto phải trỏ tới slug có thật trong matrix');
ok(pack.items.every(x=>!x.topicDecision || x.topicDecision.writeAdvice!=='SKIP' || x.topicDecision.lifecycle==='REJECTED' || x.topicDecision.mergeInto),'SKIP chỉ khi topic REJECTED hoặc có mergeInto');
ok(pack.rules && pack.rules.minWords===1000 && pack.rules.maxWords===5000 && pack.rules.qaPassMin===70 && pack.rules.relatedPolicy.includes('PUBLISHED-only'),'Writer Pack phải đồng bộ 1000–5000 từ, QA 70 + PUBLISHED-only');


// Boundary regression: same canonical limits in Writer Pack and minimal QA.
const { qaArticle } = require('./qa');
const { ARTICLE_MIN_WORDS, ARTICLE_MAX_WORDS, QA_PASS_MIN } = require('./lib/factory-runtime');
ok(ARTICLE_MIN_WORDS===pack.rules.minWords && ARTICLE_MAX_WORDS===pack.rules.maxWords &&
   QA_PASS_MIN===pack.rules.qaPassMin,'Word-limit single source of truth + unchanged QA threshold');
const fixture={
  slug:'writer-word-range-fixture',
  title:'Quy trình kiểm tra xe máy và chuẩn bị giấy tờ nhận xe',
  seoTitle:'Hướng dẫn quy trình kiểm tra xe máy và nhận xe an toàn',
  metaDescription:'Tổng hợp các bước chuẩn bị giấy tờ và kiểm tra xe máy trước khi sử dụng, giúp người đọc tự đối chiếu tình trạng xe và giấy tờ liên quan.',
  summary:'Quy trình kiểm tra xe máy gồm chuẩn bị giấy tờ, quan sát ngoại hình và kiểm tra các bộ phận quan trọng trước khi bàn giao.',
  quickAnswer:'Người sử dụng nên kiểm tra giấy tờ, phanh, đèn và tình trạng thực tế của xe trước khi ký biên bản nhận xe và giữ lại bằng chứng.',
  keyPoints:['Kiểm tra hồ sơ','Quan sát tình trạng xe','Đối chiếu an toàn','Lưu biên bản'],
  category:'thue-xe',hub:'xe-may',date:'2026-10-12',updated:'2026-10-12',
  entities:['xe máy','kiểm tra xe'],keywords:['kiểm tra xe máy','nhận xe','an toàn'],
  sections:['Giấy tờ','Phanh','Đèn','Bàn giao'].map(h2=>({
    h2,html:'<p>'+('huongdan '.repeat(30))+'</p>'
  })),
  checklist:['Giấy tờ','Kiểm tra phanh','Lưu lại hình ảnh'],
  steps:[{title:'Kiểm tra',detail:'Đối chiếu từng hạng mục'}],
  warnings:['Dừng nếu mất an toàn','Không bỏ qua lỗi kỹ thuật'],
  notes:['Chỉ dùng để tham khảo'],
  references:['Hướng dẫn sử dụng xe','Tài liệu vận hành cơ bản'],
  related:['kinh-nghiem-thue-xe-may-ha-noi','thu-honda-vision-ha-noi']
};
function atWordCount(n){
  const a=JSON.parse(JSON.stringify(fixture));
  const count=qaArticle(a).words;
  if(count>n) throw Error('Word fixture baseline exceeds boundary: '+count);
  a.sections[0].html+='<p>'+('huongdan '.repeat(n-count))+'</p>';
  return qaArticle(a);
}
for(const [n,passExpected] of [
  [ARTICLE_MIN_WORDS-1,false],[ARTICLE_MIN_WORDS,true],
  [ARTICLE_MAX_WORDS,true],[ARTICLE_MAX_WORDS+1,false]
]){
  const verdict=atWordCount(n);
  const lengthGate=verdict.checks.find(x=>x.name.startsWith('G1 '));
  ok(verdict.words===n,'Exact word count at '+n);
  ok(lengthGate && lengthGate.pass===passExpected,'G1 range boundary '+n);
  ok(verdict.pass===passExpected,'Article publish verdict at '+n+' with QA 70 unchanged');
}

console.log('WRITER_PACK_TEST status='+pack.status+' count='+pack.count);
console.log('KẾT QUẢ: '+pass+' pass, '+fail+' fail.');
if(fail) process.exit(1);
