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
ok(pack.rules && pack.rules.minWords===1600 && pack.rules.relatedPolicy.includes('PUBLISHED-only'),'rules phải giữ minWords + PUBLISHED-only');

console.log('WRITER_PACK_TEST status='+pack.status+' count='+pack.count);
console.log('KẾT QUẢ: '+pass+' pass, '+fail+' fail.');
if(fail) process.exit(1);
