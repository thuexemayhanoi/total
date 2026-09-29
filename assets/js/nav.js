// AI WIKI TOTAL — điều hướng: dropdown Thuê xe, mega menu, menu mobile, mục lục bài viết
// Mọi panel đăng ký qua AWT (overlay.js) — chỉ một overlay mở tại một thời điểm.
(function () {
  'use strict';
  var AWT = window.AWT;
  if (!AWT) return;
  function $(id) { return document.getElementById(id); }

  // ---------- Dropdown "Thuê xe" ----------
  var dd = document.querySelector('.dropdown');
  var ddTrigger = dd && dd.querySelector('.nav-dd-trigger');
  if (dd && ddTrigger) {
    AWT.register('dropdown', {
      open: function () { dd.classList.add('open'); ddTrigger.setAttribute('aria-expanded', 'true'); },
      close: function () { dd.classList.remove('open'); ddTrigger.setAttribute('aria-expanded', 'false'); },
      isOpen: function () { return dd.classList.contains('open'); }
    });
    ddTrigger.addEventListener('click', function () { AWT.toggle('dropdown'); });
    // Click ngoài → đóng (mega/dropdown không khoá trang nên vẫn cần)
    document.addEventListener('click', function (e) {
      if (AWT.isOpen('dropdown') && !dd.contains(e.target)) AWT.close('dropdown');
    });
  }

  // ---------- Mega menu "Tất cả" ----------
  var megaTrigger = document.querySelector('.mega-trigger');
  var mega = $('mega-all');
  if (megaTrigger && mega) {
    AWT.register('mega', {
      open: function () { mega.hidden = false; megaTrigger.setAttribute('aria-expanded', 'true'); },
      close: function () { mega.hidden = true; megaTrigger.setAttribute('aria-expanded', 'false'); },
      isOpen: function () { return !mega.hidden; }
    });
    megaTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      AWT.toggle('mega');
    });
    document.addEventListener('click', function (e) {
      if (AWT.isOpen('mega') && !mega.contains(e.target) && e.target !== megaTrigger) AWT.close('mega');
    });
  }

  // ---------- Menu mobile ----------
  var navToggle = $('nav-toggle');
  var mobileNav = $('mobile-nav');
  if (navToggle && mobileNav) {
    var mqDesktop = window.matchMedia ? window.matchMedia('(min-width: 1024px)') : null;
    AWT.register('menu', {
      lock: true, // khoá cuộn body khi drawer mở
      focusEl: mobileNav.querySelector('a'),
      open: function () {
        var openGroups = mobileNav.querySelectorAll('.mnav-group[open]');
        for (var i = 0; i < openGroups.length; i++) openGroups[i].open = false;
        mobileNav.hidden = false;
        mobileNav.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Đóng menu');
      },
      close: function () {
        mobileNav.classList.remove('open');
        mobileNav.hidden = true;
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Mở menu');
      },
      isOpen: function () { return mobileNav.classList.contains('open'); }
    });
    navToggle.addEventListener('click', function () { AWT.toggle('menu'); });
    // Phóng to qua breakpoint → đóng drawer để không khoá cuộn trên desktop
    if (mqDesktop && mqDesktop.addEventListener) {
      mqDesktop.addEventListener('change', function (e) { if (e.matches) AWT.close('menu'); });
    }
    // Chọn mục trong drawer → đóng menu
    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) AWT.close('menu');
    });
  }

  // ---------- Mục lục bài viết: details/accordion gọn trên mobile ----------
  var tocDetails = $('article-toc-details');
  if (tocDetails && window.matchMedia) {
    var mqSmall = window.matchMedia('(max-width: 1023px)');
    var syncToc = function () {
      if (mqSmall.matches) tocDetails.open = false; // mobile/tablet: thu gọn
    };
    syncToc();
    if (mqSmall.addEventListener) mqSmall.addEventListener('change', syncToc);
  }

  // ---------- Chia sẻ / sao chép liên kết bài viết ----------
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback cho trình duyệt cũ / bối cảnh không secure
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (ok) resolve(); else reject(new Error('copy failed'));
      } catch (err) { reject(err); }
    });
  }

  var shareBtn = $('art-share');
  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var title = shareBtn.getAttribute('data-title') || document.title;
      if (navigator.share) {
        navigator.share({ title: title, url: window.location.href }).catch(function () { /* người dùng huỷ */ });
      } else {
        copyToClipboard(window.location.href).then(function () {
          var old = shareBtn.textContent;
          shareBtn.textContent = 'Đã sao chép liên kết!';
          setTimeout(function () { shareBtn.textContent = old; }, 2000);
        }).catch(function () { /* bỏ qua */ });
      }
    });
  }

  var copyBtn = $('art-copy');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var old = copyBtn.textContent;
      copyToClipboard(window.location.href).then(function () {
        copyBtn.textContent = 'Đã sao chép liên kết!';
        var hint = $('art-copy-hint');
        if (hint) hint.textContent = 'Đã sao chép liên kết bài viết này.';
        setTimeout(function () {
          copyBtn.textContent = old;
          if (hint) hint.textContent = '';
        }, 2000);
      }).catch(function () {
        var hint = $('art-copy-hint');
        if (hint) hint.textContent = 'Không sao chép được — hãy copy từ thanh địa chỉ trình duyệt.';
      });
    });
  }
})();
