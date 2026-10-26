/**
 * KHIL Classic Animated Luxury Preloader Controller
 * Kamat Hotels (India) Limited
 * 
 * Configured: Loads only 1 time per browsing session (sessionStorage).
 * Subsequent page navigations bypass the loader instantly with zero flicker.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'khil_preloader_seen';
  var isForceTest = false;

  // Support ?preloader=1 or ?reset_preloader=1 in URL to easily re-test preloader if needed
  try {
    var search = window.location.search;
    if (search && (search.indexOf('preloader=1') !== -1 || search.indexOf('reset_preloader=1') !== -1)) {
      isForceTest = true;
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {}

  var alreadySeen = false;
  if (!isForceTest) {
    try {
      alreadySeen = !!sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {}
  }

  // If already seen in this session, immediately kill and remove preloader
  if (alreadySeen) {
    // 1. Mark html & body as loaded and bypassed immediately
    document.documentElement.classList.add('loaded', 'preloader-bypassed');
    if (document.body) {
      document.body.classList.add('loaded', 'preloader-bypassed');
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        document.body && document.body.classList.add('loaded', 'preloader-bypassed');
      });
    }

    // 2. Hide & remove preloader element immediately
    var preloader = document.getElementById('khil-preloader');
    if (preloader) {
      preloader.style.display = 'none';
      if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
    }

    // 3. Inject instant bypass style in head so no sub-millisecond flash can occur
    var bypassStyle = document.createElement('style');
    bypassStyle.id = 'khil-preloader-bypass-style';
    bypassStyle.textContent = '#khil-preloader, .khil-preloader-wrapper, .loader-wrapper { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; transition: none !important; }';
    (document.head || document.documentElement).appendChild(bypassStyle);

    // 4. Ensure AOS is initialized/refreshed smoothly once DOM is ready
    function refreshAos() {
      if (window.AOS) {
        if (typeof window.AOS.refreshHard === 'function') {
          window.AOS.refreshHard();
        } else if (typeof window.AOS.refresh === 'function') {
          window.AOS.refresh();
        }
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', refreshAos);
    } else {
      refreshAos();
    }
    return;
  }

  if (window.khilPreloaderInitialized) return;
  window.khilPreloaderInitialized = true;

  // Mark session storage immediately so rapid page navigations don't re-trigger it
  try {
    sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch (e) {}

  var phrases = [
    "Curating bespoke hospitality...",
    "Preserving heritage & luxury...",
    "Asia's pioneering hospitality chain...",
    "Welcoming you to Kamat Hotels..."
  ];

  function runPreloader() {
    var preloader = document.getElementById('khil-preloader');
    if (!preloader) return;

    var bar = document.getElementById('khil-preloader-bar');
    var percent = document.getElementById('khil-preloader-percent');
    var status = document.getElementById('khil-preloader-status');

    // Ensure preloader is actively visible from 0%
    preloader.classList.remove('khil-preloader-fade');
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    preloader.style.visibility = 'visible';

    var progress = 0;
    var interval = setInterval(function () {
      // Smooth steady progress (~1.8s) for a premium cinematic hospitality introduction
      progress += 2;
      if (progress > 100) progress = 100;

      if (bar) bar.style.width = progress + '%';
      if (percent) percent.textContent = Math.round(progress) + '%';

      if (status) {
        if (progress < 28) status.textContent = phrases[0];
        else if (progress < 60) status.textContent = phrases[1];
        else if (progress < 88) status.textContent = phrases[2];
        else status.textContent = phrases[3];
      }

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(function () {
          preloader.classList.add('khil-preloader-fade');
          document.body.classList.add('loaded');
          if (window.AOS) {
            if (typeof window.AOS.refreshHard === 'function') {
              window.AOS.refreshHard();
            } else if (typeof window.AOS.refresh === 'function') {
              window.AOS.refresh();
            }
          }
          try {
            window.dispatchEvent(new CustomEvent('khil-preloader-done'));
          } catch (e) {}
          setTimeout(function () {
            preloader.style.display = 'none';
            if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
          }, 650);
        }, 350);
      }
    }, 35);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPreloader);
  } else {
    runPreloader();
  }
})();
