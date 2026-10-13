'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const I = require('./lib/content-index');
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-p002-'));
const art = path.join(root, 'factory/data/articles');
const state = path.join(root, 'factory/state');
const mx = path.join(state, 'matrix.json');
const mf = path.join(state, 'article-manifest.jsonl');
const db = path.join(state, 'content-index.sqlite');
fs.mkdirSync(art, { recursive: true });
fs.mkdirSync(state, { recursive: true });
const slot = (id, slug, stateName) => ({
  id, slug, hub: 'thue-xe/xe-may', title: slug,
  primaryIntent: 'informational/' + slug,
  state: stateName || 'PUBLISHED', updatedAt: '2026-10-13T00:00:00Z'
});
const one = slot('S00001', 'one'), two = slot('S00002', 'two');
let slots = [one, two];
const saveMatrix = () => fs.writeFileSync(mx, JSON.stringify({ slots }));
const article = (filename, slug) => fs.writeFileSync(path.join(art, filename),
  'module.exports = ' + JSON.stringify({
    slug, title: 'Original ' + slug, category: 'thue-xe', hub: 'xe-may',
    entities: ['xe máy', slug]
  }) + ';\n');
try {
  saveMatrix();
  article('legacy-first-name.js', 'one');
  article('two.js', 'two');
  const full = I.buildManifestFromRepo(root);
  assert.equal(full.length, 2);
  I.writeManifestAtomic(mf, [full[0]]);
  I.rebuild(db, [full[0]], mf);
  const prior = I.status(db, mf, mx);
  assert.equal(prior.ok, false);
  assert.equal(prior.missingPublished, 1);
  assert.match(prior.why, /MANIFEST_INCOMPLETE/);
  console.log('UNIT PASS: hash-consistent partial index rejected');
  let out = I.syncPublishedBatch(root, ['S00002'], mf, db);
  assert.equal(out.mode, 'incremental');
  assert.equal(I.status(db, mf, mx).ok, true);
  const stable = fs.readFileSync(mf);
  I.syncPublishedBatch(root, ['S00002'], mf, db);
  assert.deepEqual(fs.readFileSync(mf), stable);
  const three = slot('S00003', 'three');
  slots.push(three); saveMatrix(); article('three.js', 'three');
  out = I.syncPublishedBatch(root, ['S00003'], mf, db);
  assert.equal(out.mode, 'incremental');
  assert.equal(I.count(db), 3);
  I.writeManifestAtomic(mf, [full[0]]);
  out = I.syncPublishedBatch(root, ['S00003'], mf, db);
  assert.equal(out.mode, 'bootstrap');
  assert.equal(I.status(db, mf, mx).ok, true);
  console.log('INTEGRATION PASS: idempotent, incremental & bootstrap');
  const four = slot('S00004', 'four', 'PLANNED');
  slots.push(four); saveMatrix(); article('draft-four.js', 'four');
  const withDraft = I.buildManifestFromRepo(root);
  assert.equal(withDraft.length, 4);
  I.writeManifestAtomic(mf, withDraft);
  I.rebuild(db, withDraft, mf);
  assert.equal(I.status(db, mf, mx).ok, true);
  assert.deepEqual(I.publishedCoverage([withDraft[0], withDraft[0], ...withDraft.slice(1)], { slots }).duplicates, ['S00001']);
  assert.deepEqual(I.publishedCoverage(withDraft.map((r, j) => j ? r : { ...r, slug: 'bad' }), { slots }).mismatched, ['S00001']);
  const five = slot('S00005', 'unavailable-module');
  slots.push(five); saveMatrix();
  const before = fs.readFileSync(mf);
  assert.throws(() => I.syncPublishedBatch(root, ['S00005'], mf, db), /MANIFEST_INCOMPLETE/);
  assert.deepEqual(fs.readFileSync(mf), before);
  assert.equal(I.count(db), 4);
  assert.throws(() => I.assertCoordinator('writer'), /TỪ CHỐI/);
  console.log('INVARIANTS PASS: missing source, duplicate, mismatch & writer rejected');
  assert.throws(() => I.rebuild(db, [withDraft[0], withDraft[0]], mf));
  assert.equal(I.count(db), 4);
  console.log('FAILURE RECOVERY PASS: prior SQLite survives failed rebuild');
  console.log('P0_02_CONTENT_INDEX_QA_OK');
} finally { fs.rmSync(root, { recursive: true, force: true }); }
