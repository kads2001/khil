/**
 * KHIL Luxury Preloader Controller
 * Handles smooth progressive line animation, window load detection, and graceful dismissal
 */
(function () {
  'use strict';

  function initKhilPreloader() {
    var preloader = document.getElementById('khil-preloader') || document.querySelector('.khil-preloader-wrapper') || document.querySelector('.loader-wrapper');
    var progressBar = document.getElementById('khil-preloader-bar') || (preloader ? preloader.querySelector('.khil-preloader-progress-bar') : null);

    if (!preloader) return;

    var progress = 0;
    var startTime = Date.now();
    var minDuration = 1200; // 1.2s smooth minimum duration
    var isDone = false;

    // Progressive simulated incremental steps
    var progressInterval = setInterval(function () {
      if (progress < 85) {
        progress += Math.floor(Math.random() * 8) + 5;
        if (progress > 85) progress = 85;
        if (progressBar) {
          progressBar.style.width = progress + '%';
        }
      }
    }, 85);

    function completePreloader() {
      if (isDone) return;
      isDone = true;
      clearInterval(progressInterval);

      var elapsed = Date.now() - startTime;
      var remaining = Math.max(0, minDuration - elapsed);

      setTimeout(function () {
        if (progressBar) {
          progressBar.style.width = '100%';
        }
        setTimeout(function () {
          preloader.classList.add('khil-preloader-fade');
          document.body.classList.add('loaded');
          setTimeout(function () {
            preloader.style.display = 'none';
          }, 600);
        }, 250);
      }, remaining);
    }

    if (document.readyState === 'complete') {
      completePreloader();
    } else {
      window.addEventListener('load', completePreloader);
    }

    // Fail-safe timeout so loader NEVER gets stuck on slow networks (max 2.8s)
    setTimeout(completePreloader, 2800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKhilPreloader);
  } else {
    initKhilPreloader();
  }
})();
