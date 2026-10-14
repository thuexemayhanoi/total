'use strict';
// 3 EXTERNAL WRITERS / ONE PUBLISHER — production data remains byte-identical.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const runtime = require('./lib/factory-runtime');
const queue = require('./lib/multi-writer');
const dir = path.join(__dirname, 'state', 'writer-heartbeats');
const file = w => path.join(dir, w + '.json');
const backups = queue.WRITERS.map(w=>({w,bytes:fs.existsSync(file(w))?fs.readFileSync(file(w)):null}));
const stateFiles=['matrix.json','checkpoint.json','article-manifest.jsonl','factory-state.json','writer-heartbeat.json']
  .map(f=>({file:path.join(__dirname,'state',f),bytes:fs.existsSync(path.join(__dirname,'state',f))?fs.readFileSync(path.join(__dirname,'state',f)):null}));
function run(args) {
  return cp.spawnSync(process.execPath,[path.join(__dirname,'factory.js'),...args],
    {cwd:path.join(__dirname,'..'),encoding:'utf8',maxBuffer:32*1024*1024});
}
function ids(start,end,state='PLANNED'){
  return Array.from({length:end-start+1},(_,j)=>{
    const n=start+j;return{id:'S'+String(n).padStart(5,'0'),slug:'topic-'+n,title:'Topic '+n,hub:'guide/an-toan',state};
  });
}
try {
  assert.equal(runtime.WRITER_COUNT,3);
  for(const writer of queue.WRITERS) {
    const shard=runtime.writerShard(writer);
    assert.equal(shard.n,3);
    assert.equal(shard.k,Number(writer[1]));
  }
  assert.throws(()=>runtime.writerShard('W4'),/WRITER_INVALID/);
  assert.throws(()=>runtime.writerShard('w2'),/WRITER_INVALID/);
  const m={slots:ids(1,33)};
  m.slots.find(x=>x.id==='S00012').state='REPAIR';
  const modules=new Set(['topic-12']);
  const plans=queue.WRITERS.map(writer=>
    runtime.selectWriterPair(m,modules,10,{shard:runtime.writerShard(writer),
      isWritable:()=>true}));
  const own=plans.map(x=>x.ids);
  const all=own.flat();
  assert.equal(all.length,new Set(all).size,'no overlapping writer IDs');
  own.forEach((list,i)=>assert(list.every(x=>queue.writerOf(x)===queue.WRITERS[i])));
  assert(plans[0].resume.includes('S00012'),'REPAIR must resume only to W1');
  assert(!plans[1].resume.includes('S00012'));
  assert(!plans[2].resume.includes('S00012'));
  assert(runtime.shardOwns('S100000',runtime.writerShard(queue.writerOf('S100000'))));
  const srcIds=m.slots.filter(x=>x.state==='PLANNED' && !modules.has(x.slug)).map(x=>x.id);
  const packs=queue.WRITERS.map(w=>run(['writer-pack','--writer',w,'--count','10','--json']));
  const outputs=packs.map(p=>{assert.equal(p.status,0,p.stderr);return JSON.parse(p.stdout)});
  const assigned=outputs.flatMap(o=>o.batchIds);
  assert.equal(assigned.length,new Set(assigned).size,'no duplicate IDs between CLI writers');
  outputs.forEach((p,i)=>{
    assert.equal(p.writer,queue.WRITERS[i]);
    assert(p.batchIds.every(x=>queue.writerOf(x)===p.writer));
    assert(p.count<=10);
    assert(p.items.every(x=>x.file==='factory/data/articles/'+x.slug+'.js'));
  });
  assert(run(['writer-pack','--writer','W2','--shard','1/3','--json']).status!==0,
    'refuse wrong shard override');
  assert(run(['writer-pack','--writer','W4','--json']).status!==0,
    'refuse invalid writer role');
  assert(run(['writer-verify','S00002','--writer','W1']).status!==0,
    'refuse another writer ID BEFORE source QA');
  const filename=new Set(['topic-1.js','topic-2.js','topic-3.js','topic-12.js']);
  const claimed=queue.selectReady(m.slots,filename,[],10,()=>true);
  assert.deepEqual(claimed.map(x=>x.id),['S00001','S00002','S00003','S00012']);
  assert.deepEqual(queue.selectReady(m.slots,filename,['S00002','S00003'],10,()=>true).map(x=>x.id),['S00001','S00012']);
  assert(queue.selectReady(m.slots,filename,[],10,slot=>slot.id!=='S00012').every(x=>x.id!=='S00012'));
  // One final GitHub Action must recover all three Writer pushes, even if
  // intermediate push-triggered Action runs were coalesced by GitHub.
  const all30=ids(1,30);
  const all30Files=all30.map(x=>x.slug+'.js');
  const accepted=new Set();
  for(let pass=1;pass<=3;pass++) {
    const batch=queue.selectReady(all30,all30Files,accepted,10,()=>true);
    assert.equal(batch.length,10,'exactly ten ready per publisher batch');
    for(const item of batch) {
      assert(!accepted.has(item.id),'never publish the same ID twice');
      accepted.add(item.id);
    }
  }
  assert.equal(accepted.size,30,'three coalesced writer pushes still drain all 30 IDs');
  assert.equal(queue.selectReady(all30,all30Files,accepted,10,()=>true).length,0);

  const legacyFiles = queue.fileCandidates(['a12-legacy-article.js']);
  assert.equal(queue.candidateFile(m.slots.find(x=>x.id==='S00012'),legacyFiles),'a12-legacy-article.js');
  assert.deepEqual(queue.selectReady(m.slots,['a12-legacy-article.js'],[],10,()=>true).map(x=>x.id),['S00012']);
  assert.equal(queue.candidateFile(m.slots.find(x=>x.id==='S00012'),
    queue.fileCandidates(['a12-a.js','a12-b.js'])),null,'duplicate source aliases fail closed');
  console.log('LAYER_1_2_PASS: three disjoint packs, ownership, legacy backlog, resume, approval');

  // Three independently written heartbeat files; legacy/shared heartbeat must
  // remain unchanged. Restore all state files afterward, even after failure.
  for(const w of queue.WRITERS) {
    const x=run(['writer-heartbeat','--writer',w,'--phase','writing']);
    assert.equal(x.status,0,(x.stdout||'')+(x.stderr||''));
  }
  const w1=fs.readFileSync(file('W1'));
  assert.equal(run(['writer-heartbeat','--writer','W2','--phase','waiting-publish','--pair','S00001']).status,0);
  assert.deepEqual(fs.readFileSync(file('W1')),w1,'W2 cannot overwrite W1 heartbeat');
  const badBefore=fs.readFileSync(file('W1'));
  assert(run(['writer-heartbeat','--writer','W1','--phase','waiting-publish','--pair','S00002']).status!==0);
  assert.deepEqual(fs.readFileSync(file('W1')),badBefore,'bad scope must not mutate heartbeat');
  const st=run(['production-status']);
  assert.equal(st.status,0,st.stderr);
  assert(queue.WRITERS.every(w=>st.stdout.includes('WRITER_STATUS writer='+w)));
  console.log('LAYER_3_PASS: independent heartbeat + scope rejection + status integration');

  // Large queue is indexed by metadata; no AI process / no external service.
  const many=ids(1,20000);
  const fileSet=new Set(many.filter(x=>Number(x.id.slice(1))%5===0).map(x=>x.slug+'.js'));
  const selected=queue.selectReady(many,fileSet,[],100,()=>true);
  assert.equal(selected.length,100);
  assert.equal(new Set(selected.map(x=>x.id)).size,100);
  console.log('LAYER_4_PASS: deterministic 20k slot readiness without any AI API');
} finally {
  for(const b of backups){
    if (b.bytes!==null) fs.writeFileSync(file(b.w),b.bytes);
    else if(fs.existsSync(file(b.w))) fs.unlinkSync(file(b.w));
  }
  for(const b of stateFiles) {
    if (b.bytes===null) assert(!fs.existsSync(b.file),'unexpected state file created');
    else assert.deepEqual(fs.readFileSync(b.file),b.bytes,'state bytes changed: '+b.file);
  }
}
console.log('THREE_EXTERNAL_WRITERS_QA_OK');
