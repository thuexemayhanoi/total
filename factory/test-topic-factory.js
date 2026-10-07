#!/usr/bin/env node
'use strict';

const tf = require('./lib/topic-factory');
const { CATEGORIES } = require('./data/categories');

let pass = 0, fail = 0;
function ok(cond, msg) {
  if (cond) pass++;
  else { fail++; console.error('FAIL: ' + msg); }
}

const all = tf.buildTopicCandidates({ limit: 50000 });
const hubs = new Set();
for (const p of CATEGORIES) for (const h of (p.children || [])) hubs.add(p.slug + '/' + h.slug);

ok(hubs.size === 97, 'taxonomy phải giữ 97 hub');
ok(all.length >= 20000, 'Topic Factory phải có >=20k candidate; hiện ' + all.length);
ok(new Set(all.map(x => x.slug)).size === all.length, 'slug candidate phải unique');
ok(new Set(all.map(x => x.intent)).size === all.length, 'intent candidate phải unique');
ok(all.every(x => hubs.has(x.hub)), 'mọi candidate phải trỏ hub thật');
ok(all.every(x => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(x.slug)), 'mọi slug phải sạch');
ok(all.every(x => x.intent === 'informational/' + x.slug), 'intent phải khớp slug');
ok(tf.slugifyVi('Thuê xe máy Hà Nội') === 'thue-xe-may-ha-noi', 'slugify tiếng Việt deterministic');

const first = all.slice(0, 50);
const next = tf.buildTopicCandidates({ existingSlugs: new Set(first.map(x => x.slug)), limit: 50 });
ok(next.every(x => !first.some(y => y.slug === x.slug)), 'existingSlugs phải được loại');
ok(tf.countPotentialTopics() === all.length, 'countPotentialTopics phải khớp generator');

console.log('TOPIC_FACTORY candidates=' + all.length + ' profiles=' + Object.keys(tf.PROFILES).length + ' hubs=' + hubs.size);
console.log('KẾT QUẢ: ' + pass + ' pass, ' + fail + ' fail.');
if (fail) process.exit(1);
