// Safe build-time content hooks. Enabled/disabled in site.config.js.
'use strict';
const { SITE, CONTENT_SLOTS } = require('../site.config');
function esc(v) {
  return String(v == null ? '' : v).replace(/&/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function internalHref(href) {
  const p = String(href || '');
  if (!/^(?:[a-z0-9-]+\/)*$/.test(p)) throw Error('CONTENT_SLOT_HREF_INVALID: ' + p);
  return SITE.basePath + p;
}
function renderSlot(name, context, testSettings) {
  if (!Object.prototype.hasOwnProperty.call(CONTENT_SLOTS, name)) throw Error('UNKNOWN_CONTENT_SLOT: ' + name);
  const slot = testSettings || CONTENT_SLOTS[name];
  if (!slot || slot.enabled !== true) return '';
  if (slot.type !== 'editorial-link') throw Error('UNKNOWN_CONTENT_SLOT_TYPE: ' + slot.type);
  void context;
  return `<aside class="aside-block editorial-slot" aria-label="${esc(slot.title)}">
<h2>${esc(slot.title)}</h2>
<p>${esc(slot.text)}</p>
<p><a href="${esc(internalHref(slot.href))}">${esc(slot.label)}</a></p>
</aside>`;
}
module.exports = { renderSlot, internalHref };
