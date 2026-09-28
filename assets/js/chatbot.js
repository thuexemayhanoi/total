// AI WIKI TOTAL — Trợ lý AI WIKI TOTAL (retrieval-first, không sales)
(function () {
  'use strict';
  var BASE = document.body.getAttribute('data-base-path') || '/';
  var INDEX = null;

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
    fetch(BASE + 'assets/data/chatbot-index.json')
      .then(function (r) { return r.json(); })
      .then(function (d) { INDEX = d; cb(INDEX); })
      .catch(function () { cb([]); });
  }

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function rank(q, idx) {
    var terms = normalize(q).split(' ').filter(Boolean);
    if (!terms.length) return [];
    return idx.map(function (e) {
      var hay = normalize(e.title + ' ' + e.summary + ' ' + e.quickAnswer + ' ' +
        e.keyPoints.join(' ') + ' ' + e.keywords.join(' ') + ' ' + e.entities.join(' '));
      var s = 0;
      for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) >= 0) s++;
      return { e: e, s: s };
    }).filter(function (h) { return h.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, 2);
  }

  var GREETING = 'Xin chào! Tôi là Trợ lý AI WIKI TOTAL. Hỏi tôi về thuê xe, xe máy, xe điện, sửa chữa, giá xe hoặc bất kỳ chủ đề nào có trên site — tôi trả lời từ nội dung đã publish.';


  function reply(q, cb) {
    loadIndex(function (idx) {
      var hits = rank(q, idx);
      if (!hits.length) {
        cb('Tôi chưa có bài viết phù hợp cho câu hỏi này. Bạn thử tìm với từ khoá khác, hoặc xem danh mục Thuê xe / Xe máy trên menu.', null);
        return;
      }
      var best = hits[0].e;
      var text = best.quickAnswer || best.summary;
      var src = BASE + best.url;
      cb(text, src, best.title, best.keyPoints.slice(0, 3));
    });
  }

  function init() {
    var launcher = document.getElementById('chatbot-launcher');
    var panel = document.getElementById('chatbot-panel');
    var close = document.getElementById('chatbot-close');
    var log = document.getElementById('chatbot-log');
    var input = document.getElementById('chatbot-input');
    var send = document.getElementById('chatbot-send');
    if (!launcher || !panel) return;
    var greeted = false;

    function addMsg(text, cls, extra) {
      var div = document.createElement('div');
      div.className = 'msg msg-' + cls;
      div.innerHTML = esc(text) + (extra || '');
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }

    function openPanel() {
      panel.hidden = false;
      launcher.setAttribute('aria-expanded', 'true');
      if (!greeted) {
        greeted = true;
        addMsg(GREETING, 'bot');
      }
      input.focus();
    }

    launcher.addEventListener('click', function () {
      panel.hidden ? openPanel() : (panel.hidden = true, launcher.setAttribute('aria-expanded', 'false'));
    });
    close.addEventListener('click', function () {
      panel.hidden = true;
      launcher.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) {
        panel.hidden = true;
        launcher.setAttribute('aria-expanded', 'false');
      }
    });

    function ask() {
      var q = input.value.trim();
      if (!q) return;
      addMsg(q, 'user');
      input.value = '';
      addMsg('Đang tra nội dung…', 'bot');
      var pending = log.lastChild;
      reply(q, function (text, src, title, points) {
        pending.remove();
        var extra = '';
        if (src) {
          extra = '<span class="msg-source">Nguồn: <a href="' + esc(src) + '">' + esc(title || src) + '</a></span>';
          if (points && points.length) {
            extra += '<span class="msg-source">Xem thêm trong bài: ' + esc(points.join(' · ')) + '</span>';
          }
        }
        addMsg(text, 'bot', extra);
      });
    }

    send.addEventListener('click', ask);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') ask(); });
  }

  init();
})();
