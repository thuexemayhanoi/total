// AI WIKI TOTAL — điều hướng: dropdown Thuê xe, mega menu, menu mobile
(function () {
  'use strict';
  var BASE = document.body.getAttribute('data-base-path') || '/';
  function $(id) { return document.getElementById(id); }

  // Dropdown "Thuê xe"
  var dd = document.querySelector('.dropdown');
  var ddTrigger = dd && dd.querySelector('.nav-dd-trigger');
  if (dd && ddTrigger) {
    ddTrigger.addEventListener('click', function () {
      var open = dd.classList.toggle('open');
      ddTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        ddTrigger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dd.classList.remove('open');
        ddTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mega menu "Tất cả"
  var megaTrigger = document.querySelector('.mega-trigger');
  var mega = $('mega-all');
  if (megaTrigger && mega) {
    megaTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !mega.hidden;
      mega.hidden = open;
      megaTrigger.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    document.addEventListener('click', function (e) {
      if (!mega.hidden && !mega.contains(e.target) && e.target !== megaTrigger) {
        mega.hidden = true;
        megaTrigger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mega.hidden) {
        mega.hidden = true;
        megaTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Menu mobile
  var navToggle = $('nav-toggle');
  var mobileNav = $('mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      mobileNav.hidden = !open;
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
