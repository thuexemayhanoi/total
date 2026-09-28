// AI WIKI TOTAL — trình quản lý overlay (single-overlay manager)
// Quy tắc: CHỈ MỘT panel tương tác mở tại một thời điểm.
// Mở Search  → đóng AI, menu mobile, dropdown, mega menu.
// Mở AI      → đóng Search, menu mobile, dropdown, mega menu.
// Mở menu    → đóng Search/AI nếu đang mở.
// Escape     → đóng đúng UI đang active.
// Kèm: khoá cuộn body, lưu/phục hồi focus, sync viewport iPhone (dvh/keyboard).
(function () {
  'use strict';

  var panels = {};                 // name -> { open, close, isOpen, lock, focusEl }
  // Thứ tự ưu tiên khi bấm Escape
  var order = ['search', 'ai', 'menu', 'dropdown', 'mega'];

  var savedFocus = null;
  var lockCount = 0;
  var savedScrollY = 0;

  function lockScroll() {
    lockCount++;
    if (lockCount > 1) return;
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.documentElement.classList.add('awt-lock');
  }
  function unlockScroll() {
    if (lockCount > 0) lockCount--;
    if (lockCount > 0) return;
    document.documentElement.classList.remove('awt-lock');
    if (savedScrollY) window.scrollTo(0, savedScrollY);
  }
  function restoreFocus() {
    if (savedFocus && document.documentElement.contains(savedFocus) && typeof savedFocus.focus === 'function') {
      try { savedFocus.focus(); } catch (e) { /* bỏ qua */ }
    }
    savedFocus = null;
  }

  function findApi(name) {
    var p = panels[name];
    if (!p) throw new Error('Overlay chưa đăng ký: ' + name);
    return p;
  }
  function isOpen(name) {
    var p = panels[name];
    return !!(p && p.isOpen());
  }
  function closeAll(except) {
    Object.keys(panels).forEach(function (name) {
      if (name !== except && isOpen(name)) close(name);
    });
  }
  function open(name) {
    var p = findApi(name);
    if (p.isOpen()) return;                 // đã mở — không mở lại
    closeAll(name);                          // đóng mọi overlay khác
    savedFocus = document.activeElement;     // lưu focus để phục hồi
    p.open();
    if (p.lock) lockScroll();
    if (p.focusEl && p.focusEl.focus) {
      try { p.focusEl.focus(); } catch (e) { /* bỏ qua */ }
    }
  }
  function close(name) {
    var p = findApi(name);
    if (!p.isOpen()) return;
    p.close();
    if (p.lock) unlockScroll();
    if (p.restoreFocus !== false) restoreFocus();
  }
  function toggle(name) {
    if (isOpen(name)) close(name); else open(name);
  }
  function activeName() {
    for (var i = 0; i < order.length; i++) {
      if (isOpen(order[i])) return order[i];
    }
    return null;
  }

  window.AWT = {
    register: function (name, api) { panels[name] = api; },
    open: open,
    close: close,
    toggle: toggle,
    closeAll: closeAll,
    isOpen: isOpen,
    active: activeName,
    lockScroll: lockScroll,
    unlockScroll: unlockScroll
  };

  // Escape — đóng đúng UI đang active (chỉ một overlay mở tại một thời điểm)
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var a = activeName();
    if (a) {
      e.preventDefault();
      close(a);
    }
  });

  // ---- iPhone / Safari: đồng bộ visual viewport (bàn phím ảo + thanh cuộn) ----
  var vv = window.visualViewport;
  function syncViewport() {
    var h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--vvh', h + 'px');
  }
  if (vv) {
    syncViewport();
    vv.addEventListener('resize', syncViewport);
    vv.addEventListener('scroll', syncViewport);
  }
})();
