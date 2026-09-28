// AI WIKI TOTAL — tìm kiếm client-side trên chỉ mục sinh sẵn
// Modal đăng ký qua AWT (overlay.js): khoá cuộn body, lưu/phục hồi focus,
// đóng AI/menu/dropdown/mega khi mở — chỉ một overlay tại một thời điểm.
(function () {
  'use strict';
  var BASE = document.body.getAttribute('data-base-path') || '/';
  var INDEX = null;

  // Chuẩn hoá: bỏ dấu tiếng Việt để tìm không phụ thuộc dấu
  function normalize(s) {
    return String(s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function loadIndex(cb) {
    if (INDEX) return cb(INDEX);
    fetch(BASE + 'assets/data/search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (d) { INDEX = d; cb(INDEX); })
      .catch(function () { cb([]); });
  }

  function score(entry, terms) {
    var t = normalize(entry.title), d = normalize(entry.description + ' ' + (entry.summary || ''));
    var k = normalize((entry.keywords || []).join(' ') + ' ' + (entry.entities || []).join(' '));
    var s = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      if (t.indexOf(term) >= 0) s += 10;
      if (k.indexOf(term) >= 0) s += 6;
      if (d.indexOf(term) >= 0) s += 3;
    }
    if (entry.kind === 'article') s += 2;
    return s;
  }

  function doSearch(q, cb) {
    var terms = normalize(q).split(' ').filter(Boolean);
    if (!terms.length) return cb([]);
    loadIndex(function (idx) {
      var hits = idx.map(function (e) { return { e: e, s: score(e, terms) }; })
        .filter(function (h) { return h.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, 12)
        .map(function (h) { return h.e; });
      cb(hits);
    });
  }

  var KIND_LABEL = { page: 'Trang', category: 'Danh mục', hub: 'Chủ đề', article: 'Bài viết' };
  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function renderResults(container, hits, q) {
    if (!hits.length) {
      container.innerHTML = '<p class="sr-empty">Không tìm thấy kết quả phù hợp.</p>';
      return;
    }
    container.innerHTML = hits.map(function (h) {
      return '<a class="sr-item" href="' + BASE + h.url + '">' +
        '<span class="sr-kind">' + esc(KIND_LABEL[h.kind] || h.kind) + (h.category ? ' · ' + esc(h.category) : '') + (h.hub ? ' · ' + esc(h.hub) : '') + '</span>' +
        '<span class="sr-title">' + esc(h.title) + '</span>' +
        '<span class="sr-desc">' + esc((h.description || h.summary || '').slice(0, 120)) + '</span></a>';
    }).join('');
  }

  // Modal tìm kiếm trên header — một overlay duy nhất, phối hợp qua AWT
  function bindModal() {
    var AWT = window.AWT;
    var open = document.getElementById('search-open');
    var modal = document.getElementById('search-modal');
    var input = document.getElementById('search-input');
    var results = document.getElementById('search-results');
    var close = document.getElementById('search-close');
    if (!open || !modal || !AWT) return;

    AWT.register('search', {
      lock: true, // khoá cuộn body khi modal mở
      focusEl: input,
      open: function () {
        modal.hidden = false;
        input.select();
      },
      close: function () { modal.hidden = true; },
      isOpen: function () { return !modal.hidden; }
    });

    open.addEventListener('click', function () { AWT.open('search'); });
    close.addEventListener('click', function () { AWT.close('search'); });
    // Click nền (backdrop) → đóng
    modal.addEventListener('click', function (e) { if (e.target === modal) AWT.close('search'); });

    // Ctrl/Cmd+K mở tìm kiếm; Escape đóng qua AWT (một nơi duy nhất)
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (!AWT.isOpen('search')) AWT.open('search'); else input.focus();
      }
    });

    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { doSearch(input.value, function (hits) { renderResults(results, hits); }); }, 160);
    });
  }

  // Trang tìm kiếm riêng
  function bindPage() {
    var form = document.getElementById('page-search-form');
    var input = document.getElementById('page-search-input');
    var results = document.getElementById('page-search-results');
    if (!form || !input) return;
    var initial = new URLSearchParams(window.location.search).get('q') || '';
    if (initial) input.value = initial;
    function run() { doSearch(input.value, function (hits) { renderResults(results, hits); }); }
    if (initial) run();
    form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(run, 160);
    });
  }

  bindModal();
  bindPage();
})();
