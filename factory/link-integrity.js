#!/usr/bin/env node
// AI WIKI TOTAL — SCOPED INTERNAL LINK INTEGRITY GATE (v1.2, fail-closed)
//
// Mục tiêu: chặn link nội bộ dẫn tới 404 TRƯỚC khi batch được ghi PUBLISHED.
// Hot path chỉ quét HTML của 1-10 bài trong scope; target được resolve tới
// file production thật. Full-site scan dùng --all trong deep audit.
// External URLs, mailto/tel, hash-only links không thuộc cổng này.
'use strict';

const fs = require('fs');
const path = require('path');
const { SITE } = require('./site.config');

const ROOT = path.resolve(__dirname, '..');
const MATRIX = path.join(__dirname, 'state', 'matrix.json');

function decodeAttr(s) {
  return String(s || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function extractHrefs(html) {
  const out = [];
  const re = /\bhref\s*=\s*(["'])(.*?)\1/gi;
  let m;
  while ((m = re.exec(String(html || '')))) out.push(decodeAttr(m[2]).trim());
  return out;
}

function baseInfo() {
  const u = new URL(SITE.baseUrl);
  let basePath = SITE.basePath || u.pathname || '/';
  if (!basePath.startsWith('/')) basePath = '/' + basePath;
  if (!basePath.endsWith('/')) basePath += '/';
  return { origin: u.origin, basePath };
}

function candidatePathsFromUrl(urlObj, root) {
  const { basePath } = baseInfo();
  let p = decodeURIComponent(urlObj.pathname || '/');
  if (p === basePath.slice(0, -1)) p = basePath;
  if (!p.startsWith(basePath)) return { outsideBase: true, candidates: [] };
  let rel = p.slice(basePath.length).replace(/^\/+/, '');
  if (!rel) rel = 'index.html';
  const candidates = [];
  if (rel.endsWith('/')) candidates.push(path.join(root, rel, 'index.html'));
  else {
    candidates.push(path.join(root, rel));
    if (!path.extname(rel)) candidates.push(path.join(root, rel, 'index.html'));
  }
  return { outsideBase: false, candidates };
}

function resolveHref(href, sourceRel, root) {
  const raw = String(href || '').trim();
  if (!raw || raw.startsWith('#')) return { skip: true };
  if (/^(mailto:|tel:|javascript:|data:|blob:)/i.test(raw)) return { skip: true };
  const { origin, basePath } = baseInfo();

  let urlObj;
  try {
    if (/^https?:\/\//i.test(raw) || raw.startsWith('//')) {
      urlObj = new URL(raw, SITE.baseUrl);
      if (urlObj.origin !== origin) return { skip: true };
    } else if (raw.startsWith('/')) {
      // Project Pages phải ở /total/. Root-absolute cùng host nhưng thoát
      // basePath gần như chắc chắn là link sai cho repo này -> chặn.
      if (!(raw === basePath.slice(0, -1) || raw.startsWith(basePath))) {
        return { error: 'internal absolute path thoát project base ' + basePath + ': ' + raw };
      }
      urlObj = new URL(raw, origin);
    } else {
      const sourceDir = path.posix.dirname(sourceRel.replace(/\\/g, '/'));
      const base = new URL(basePath + (sourceDir === '.' ? '' : sourceDir + '/'), origin);
      urlObj = new URL(raw, base);
    }
  } catch (e) {
    return { error: 'href không parse được: ' + raw };
  }

  if (urlObj.origin !== origin) return { skip: true };
  const mapped = candidatePathsFromUrl(urlObj, root);
  if (mapped.outsideBase) return { error: 'URL cùng host nhưng ngoài ' + basePath + ': ' + raw };
  const hit = mapped.candidates.find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
  if (!hit) {
    const rels = mapped.candidates.map((f) => path.relative(root, f).replace(/\\/g, '/'));
    return { error: raw + ' -> không tồn tại (' + rels.join(' | ') + ')' };
  }
  return { ok: true, target: hit };
}

function loadMatrix() {
  return JSON.parse(fs.readFileSync(MATRIX, 'utf8'));
}

function pageRelForSlot(slot) {
  return path.posix.join(String(slot.hub || ''), String(slot.slug || ''), 'index.html');
}

function checkPage(rel, root) {
  const file = path.join(root, rel);
  const errors = [];
  if (!fs.existsSync(file)) return { ok: false, errors: [rel + ': trang scope chưa được sinh'], checkedLinks: 0 };
  const html = fs.readFileSync(file, 'utf8');
  let checked = 0;
  for (const href of extractHrefs(html)) {
    const r = resolveHref(href, rel, root);
    if (r.skip) continue;
    checked++;
    if (r.error) errors.push(rel + ' href="' + href + '": ' + r.error);
  }
  return { ok: errors.length === 0, errors, checkedLinks: checked };
}

function checkScopeIds(ids, rootArg) {
  const root = rootArg ? path.resolve(rootArg) : ROOT;
  const m = loadMatrix();
  const errors = [];
  let checkedLinks = 0;
  for (const id of ids || []) {
    const slot = (m.slots || []).find((s) => s.id === id);
    if (!slot) { errors.push('không tìm thấy slot ' + id); continue; }
    const r = checkPage(pageRelForSlot(slot), root);
    checkedLinks += r.checkedLinks;
    errors.push(...r.errors);
  }
  return { ok: errors.length === 0, errors, checkedLinks };
}

function checkAllPublished(rootArg) {
  const root = rootArg ? path.resolve(rootArg) : ROOT;
  const m = loadMatrix();
  return checkScopeIds((m.slots || []).filter((s) => s.state === 'PUBLISHED').map((s) => s.id), root);
}

function main() {
  const args = process.argv.slice(2);
  const idx = args.indexOf('--ids');
  let r;
  if (args.includes('--all')) r = checkAllPublished(ROOT);
  else {
    const raw = idx >= 0 ? args[idx + 1] : '';
    const ids = String(raw || '').split(/[\s,]+/).filter(Boolean);
    if (!ids.length) {
      console.error('Dùng: node factory/link-integrity.js --ids S00413,S00414 | --all');
      process.exit(1);
    }
    r = checkScopeIds(ids, ROOT);
  }
  if (!r.ok) {
    for (const e of r.errors) console.error('LINK_404_FAIL: ' + e);
    process.exit(1);
  }
  console.log('LINK_INTEGRITY_OK checked_links=' + r.checkedLinks);
}

if (require.main === module) main();
module.exports = { extractHrefs, resolveHref, checkPage, checkScopeIds, checkAllPublished, pageRelForSlot };
