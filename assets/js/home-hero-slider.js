/**
 * KHIL Hero Background Slideshow Controller
 * Crossfades 3 background images automatically every 4 seconds behind unchanged foreground text.
 */
(function () {
  'use strict';

  if (window.khilHeroSliderInitialized) return;
  window.khilHeroSliderInitialized = true;

  function initHeroSlideshow() {
    var slides = document.querySelectorAll('.khil-hero-slideshow .khil-hero-slide');
    if (!slides || slides.length === 0) return;

    var dots = document.querySelectorAll('.khil-hero-slide-controls .khil-slide-dot');
    var currentIndex = 0;
    var totalSlides = slides.length;
    var duration = 4000; // 4 seconds per slide
    var timer = null;

    function goToSlide(nextIndex) {
      if (nextIndex === currentIndex && slides[currentIndex].classList.contains('active')) return;

      var prevIndex = currentIndex;
      currentIndex = (nextIndex + totalSlides) % totalSlides;

      // Update slide classes with smooth crossfade
      slides.forEach(function (slide, i) {
        slide.classList.remove('prev');
        if (i === prevIndex) {
          slide.classList.add('prev');
          slide.classList.remove('active');
        } else if (i === currentIndex) {
          slide.classList.add('active');
          slide.classList.remove('prev');
        } else {
          slide.classList.remove('active', 'prev');
        }
      });

      // Update animated pagination progress bars
      if (dots && dots.length > 0) {
        dots.forEach(function (dot, i) {
          dot.classList.remove('active');
          // Trigger reflow to restart the 4s progress bar animation
          void dot.offsetWidth;
          if (i === currentIndex) {
            dot.classList.add('active');
          }
        });
      }
    }

    function advance() {
      goToSlide(currentIndex + 1);
    }

    function startTimer() {
      stopTimer();
      timer = setInterval(advance, duration);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Attach click handlers to indicator dots
    if (dots && dots.length > 0) {
      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function (e) {
          e.preventDefault();
          goToSlide(i);
          startTimer();
        });
      });
    }

    // Initialize first dot progress bar
    if (dots && dots[0]) {
      void dots[0].offsetWidth;
      dots[0].classList.add('active');
    }

    // Start automatic cycling immediately
    startTimer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSlideshow);
  } else {
    initHeroSlideshow();
  }
})();
