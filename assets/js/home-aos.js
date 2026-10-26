/**
 * KHIL AOS Orchestration Script
 * Applies silky smooth AOS 'fade-up' effect across all sections, elements, and content
 */
(function () {
  'use strict';

  function applyAosToElements() {
    // Helper to apply fade-up with optional delay
    function setFadeUp(el, delay) {
      if (!el) return;
      if (!el.getAttribute('data-aos')) {
        el.setAttribute('data-aos', 'fade-up');
      }
      if (delay !== undefined && delay !== null && !el.getAttribute('data-aos-delay')) {
        el.setAttribute('data-aos-delay', String(delay));
      }
    }

    // Helper to apply staggered fade-up to NodeList
    function staggerList(elements, baseDelay, step) {
      if (!elements || !elements.length) return;
      var delay = baseDelay || 0;
      var inc = step || 100;
      elements.forEach(function (el, index) {
        setFadeUp(el, delay + (index * inc));
      });
    }

    // 1. Hero Banner Content & Elements
    var heroContent = document.querySelector('.rts-banner-content-three');
    if (heroContent) {
      // Remove any parent fade-up to avoid double-transform on child elements
      heroContent.removeAttribute('data-aos');
      setFadeUp(heroContent.querySelector('.khil-hero-eyebrow-tag'), 100);
      setFadeUp(heroContent.querySelector('h1, .rts-text-anime-style-1'), 200);
      setFadeUp(heroContent.querySelector('.disc'), 300);
      setFadeUp(heroContent.querySelector('.button-group'), 400);
    }
    setFadeUp(document.querySelector('.khil-hero-image-wrapper'), 250);

    // 2. Brand Strip Marquee
    setFadeUp(document.querySelector('.khil-brand-strip'), 100);

    // 3. About Us Showcase Section
    var aboutCenter = document.querySelector('.khil-about-center-content');
    if (aboutCenter) {
      aboutCenter.removeAttribute('data-aos');
      setFadeUp(aboutCenter.querySelector('.khil-about-pill-badge'), 50);
      setFadeUp(aboutCenter.querySelector('.khil-about-headline'), 150);
      setFadeUp(aboutCenter.querySelector('.khil-about-subdesc'), 250);
      setFadeUp(aboutCenter.querySelector('.khil-about-cta-wrap'), 350);
    }
    // Fade in place without moving up
    function setFade(el, delay) {
      if (!el) return;
      el.setAttribute('data-aos', 'fade');
      if (delay !== undefined && delay !== null) {
        el.setAttribute('data-aos-delay', String(delay));
      }
    }
    document.querySelectorAll('.khil-about-stat-side.left .stat-item').forEach(function (el, i) {
      setFade(el, 100 + i * 100);
    });
    document.querySelectorAll('.khil-about-stat-side.right .stat-item').forEach(function (el, i) {
      setFade(el, 150 + i * 100);
    });
    staggerList(document.querySelectorAll('.khil-about-cards-stage .khil-showcase-card'), 100, 80);

    // 4. Founders & Leadership Section
    var foundersHeader = document.querySelector('.khil-founders-header');
    if (foundersHeader) {
      foundersHeader.removeAttribute('data-aos');
      setFadeUp(foundersHeader.querySelector('.khil-bento-pill'), 50);
      setFadeUp(foundersHeader.querySelector('.khil-founders-title'), 150);
      setFadeUp(foundersHeader.querySelector('.khil-founders-subtitle'), 250);
    }
    staggerList(document.querySelectorAll('.khil-founders-grid > div'), 100, 100);

    // 5. Bento Hotels Showcase Section
    var bentoHeader = document.querySelector('.khil-bento-header-block');
    if (bentoHeader) {
      bentoHeader.removeAttribute('data-aos');
      setFadeUp(bentoHeader.querySelector('.khil-bento-pill'), 50);
      setFadeUp(bentoHeader.querySelector('.khil-bento-title'), 150);
      setFadeUp(bentoHeader.querySelector('.khil-bento-desc'), 250);
      setFadeUp(bentoHeader.querySelector('.khil-bento-btn-primary'), 350);
    }
    staggerList(document.querySelectorAll('.khil-hotels-bento-grid .khil-bento-hotel-card'), 100, 70);

    // 6. IRA Agency Banner Section
    var iraContainer = document.querySelector('.banner-bg-attach-agency .container');
    if (iraContainer) {
      iraContainer.removeAttribute('data-aos');
      var iraContent = document.querySelector('.ira-banner-content');
      if (iraContent) {
        setFadeUp(iraContent.querySelector('.ira-banner-logo'), 50);
        setFadeUp(iraContent.querySelector('.hero-title'), 150);
        setFadeUp(iraContent.querySelector('.hero-desc'), 250);
        setFadeUp(iraContent.querySelector('.hero-action'), 350);
      }
    }

    // 7. Horizontal Gallery Section
    var galleryContainer = document.querySelector('.khil-gallery-container');
    if (galleryContainer) {
      setFadeUp(galleryContainer.querySelector('.khil-bento-pill'), 50);
      setFadeUp(galleryContainer.querySelector('.khil-gallery-title'), 150);
      setFadeUp(galleryContainer.querySelector('.khil-gallery-header-right'), 250);
    }
    setFadeUp(document.querySelector('.khil-gallery-viewport'), 200);

    // 8. Latest News & Blog Section
    var blogHeader = document.querySelector('.khil-blog-header');
    if (blogHeader) {
      blogHeader.removeAttribute('data-aos');
      setFadeUp(blogHeader.querySelector('.khil-blog-pill'), 50);
      setFadeUp(blogHeader.querySelector('.khil-blog-title'), 150);
      setFadeUp(blogHeader.querySelector('.khil-blog-desc'), 250);
      setFadeUp(blogHeader.querySelector('.khil-blog-header-right'), 300);
    }
    staggerList(document.querySelectorAll('.khil-blog-grid .khil-blog-card'), 100, 100);

    // 9. Contact Strip Section (if active)
    var contactHeader = document.querySelector('.rts-contact-us-strip .section-title-area, .rts-contact-us-strip .text-center');
    if (contactHeader) {
      setFadeUp(contactHeader.querySelector('.contact-main-title'), 100);
      setFadeUp(contactHeader.querySelector('.contact-subtitle'), 200);
    }
    staggerList(document.querySelectorAll('.contact-card-item'), 100, 100);
    setFadeUp(document.querySelector('.contact-right-column'), 200);

    // 10. KHIL Shared Footer
    setFadeUp(document.querySelector('.khil-shared-footer .khil-footer-brand-col'), 100);
    staggerList(document.querySelectorAll('.khil-shared-footer .khil-footer-column'), 150, 80);
    setFadeUp(document.querySelector('.khil-shared-footer .khil-footer-brands-bar'), 200);
    setFadeUp(document.querySelector('.khil-shared-footer .khil-footer-bottom'), 250);

    // 11. Generic Page Content / Inner Pages (e.g. About, Directors, Careers)
    staggerList(document.querySelectorAll('.khil-legacy-hero-section .row > div'), 100, 150);
    staggerList(document.querySelectorAll('.board-card, .director-card, .single-team-area'), 100, 100);
    staggerList(document.querySelectorAll('.milestone-card, .timeline-item'), 100, 100);
  }

  // Execute element tagging
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAosToElements);
  } else {
    applyAosToElements();
  }

  // Initialize or Refresh AOS Library
  function initAOS() {
    if (typeof window.AOS === 'undefined') {
      // Graceful fallback: reveal all elements if AOS script didn't load
      document.querySelectorAll('[data-aos]').forEach(function (element) {
        element.classList.add('aos-animate');
      });
      return;
    }

    window.AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      offset: 50,
      once: true,
      mirror: false
    });

    // Refresh after layout stabilization
    setTimeout(function () {
      if (window.AOS && window.AOS.refresh) {
        window.AOS.refresh();
      }
    }, 400);

    // Initialize About Metrics Counter Animation
    initAboutCounters();
  }

  function initAboutCounters() {
    function animateValue(el) {
      if (el.classList.contains('counter-triggered')) return;
      el.classList.add('counter-triggered');

      var raw = el.getAttribute('data-count') || el.textContent.trim();
      var target = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      if (isNaN(target)) return;

      // Calibrated timing and easing: small numbers like 7 get rhythmic quadratic pacing
      var duration = target <= 10 ? 1200 : (target <= 100 ? 1400 : 1800);
      var startTime = performance.now();
      var formatComma = target >= 1000 || el.getAttribute('data-format') === 'comma';

      // Pure in-place text update - no vertical movement or scrolling
      function step(now) {
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var easeOut = target <= 10
          ? (1 - Math.pow(1 - progress, 2))
          : (1 - Math.pow(1 - progress, 3));
        var current = Math.round(easeOut * target);
        el.textContent = formatComma ? current.toLocaleString('en-US') : current;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = formatComma ? target.toLocaleString('en-US') : target;
        }
      }
      requestAnimationFrame(step);
    }

    var numbers = document.querySelectorAll('.khil-about-container .stat-counter, .khil-about-container .odometer, .khil-about-stat-side .stat-counter, .khil-about-stat-side .odometer');
    if (!numbers.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateValue(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      numbers.forEach(function (num) {
        observer.observe(num);
      });
    } else {
      numbers.forEach(function (num) {
        animateValue(num);
      });
    }
  }

  if (document.readyState === 'complete') {
    initAOS();
  } else {
    window.addEventListener('load', initAOS);
  }

  // Refresh upon Preloader fadeout
  window.addEventListener('khil-preloader-done', function () {
    if (window.AOS) {
      if (typeof window.AOS.refreshHard === 'function') {
        window.AOS.refreshHard();
      } else if (typeof window.AOS.refresh === 'function') {
        window.AOS.refresh();
      }
    }
  });
})();
