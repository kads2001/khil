/**
 * KHIL Classic Animated Luxury Preloader Controller
 * Kamat Hotels (India) Limited
 */
(function () {
  'use strict';

  if (window.khilPreloaderInitialized) return;
  window.khilPreloaderInitialized = true;

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
