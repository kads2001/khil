(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) {
    console.error('Shared layout could not identify its script element.');
    return;
  }

  document.querySelectorAll('[data-current-year]').forEach(function (year) {
    year.textContent = new Date().getFullYear();
  });

  if (script.dataset.main === 'true') {
    var mainScript = document.createElement('script');
    mainScript.src = new URL('main.js', script.src).href;
    mainScript.onload = function () {
      if (document.readyState === 'complete') {
        document.body.classList.add('loaded');
      }
    };
    mainScript.onerror = function () {
      console.error('Failed to load the site JavaScript:', mainScript.src);
      document.body.classList.add('loaded');
    };
    document.body.appendChild(mainScript);
  } else {
    initializeStandaloneMenu();
    initializeStickyHeader();
  }

  function initializeStickyHeader() {
    function setupSticky() {
      var header = document.querySelector('.header--sticky');
      if (!header) return;

      var isSticky = false;
      function onScroll() {
        var top = window.pageYOffset || document.documentElement.scrollTop || 0;
        if (top > 150) {
          if (!isSticky) {
            header.classList.add('sticky');
            isSticky = true;
          }
        } else {
          if (isSticky) {
            header.classList.remove('sticky');
            isSticky = false;
          }
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupSticky);
    } else {
      setupSticky();
    }
  }

  function initializeStandaloneMenu() {
    document.addEventListener('click', function (event) {
      var target = event.target;
      var toggle = target.closest('.menu-btn-toggle');
      var close = target.closest('.close-icon-menu');
      var backdrop = target.closest('#anywhere-home');

      if (toggle) {
        document.getElementById('side-bar').classList.add('show');
        document.getElementById('anywhere-home').classList.add('bgshow');
      } else if (close || backdrop) {
        document.getElementById('side-bar').classList.remove('show');
        document.getElementById('anywhere-home').classList.remove('bgshow');
      }
    });

    document.querySelectorAll('#mobile-menu-active .has-droupdown > a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var submenu = link.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('mm-show');
        }
      });
    });
  }
}());
