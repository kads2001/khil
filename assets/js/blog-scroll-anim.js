/**
 * Blogs Section - Sticky Sequential Scroll Animation
 * - Smooth S-curve easing (easeInOutCubic)
 * - Equalized vertical step-down spacing: Distance(Card 1 -> Card 2) === Distance(Card 2 -> Card 3)
 * - Built-in Lenis smooth scrolling integration (60-144Hz buttery smooth RAF)
 * - Safe desktop pin-track with responsive fallback on mobile/tablet (<992px)
 */
(function initBlogStickySequentialScroll() {
  'use strict';

  function ensureLenis() {
    if (typeof Lenis !== 'undefined' && !window.lenis) {
      try {
        window.lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
        });

        function raf(time) {
          if (window.lenis) {
            window.lenis.raf(time);
          }
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis init:', e);
      }
    }
  }

  function setupBlogTrack(track) {
    if (!track) return;
    const wrap = track.querySelector('.blog-grid');
    if (!wrap) return;

    const cards = wrap.querySelectorAll('.blog-card');
    if (cards.length < 3) return;

    const card1 = cards[0];
    const card2 = cards[1];
    const card3 = cards[2];

    card1.classList.add('blog-card-anim', '_1st');
    card2.classList.add('blog-card-anim', '_2nd');
    card3.classList.add('blog-card-anim', '_3rd');

    let targetProgress = 0;
    let currentProgress = -1;
    let animationFrame = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function updateProgress() {
      if (window.innerWidth < 992) {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }
        card1.style.transform = 'none';
        card1.style.opacity = '1';
        card2.style.transform = 'none';
        card2.style.opacity = '1';
        card3.style.transform = 'none';
        card3.style.opacity = '1';
        return;
      }

      const rect = track.getBoundingClientRect();
      const stickyTop = 75;
      const scrollDistance = track.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const currentScroll = stickyTop - rect.top;
      targetProgress = Math.max(0, Math.min(1, currentScroll / scrollDistance));

      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(render);
      }
    }

    function render() {
      if (window.innerWidth < 992) {
        animationFrame = null;
        return;
      }

      if (currentProgress < 0) {
        currentProgress = targetProgress;
      } else {
        const lerpFactor = window.lenis ? 0.16 : 0.085;
        currentProgress += (targetProgress - currentProgress) * lerpFactor;
        if (Math.abs(targetProgress - currentProgress) < 0.0002) {
          currentProgress = targetProgress;
        }
      }

      const p = currentProgress;

      // Sequential arrival timeline:
      // Phase 1 [0.02, 0.30]: Card 1 arrives completely into place
      // Hold 1  [0.30, 0.35]: Card 1 fully settled, Card 2 & 3 waiting
      // Phase 2 [0.35, 0.63]: Card 2 arrives completely into place
      // Hold 2  [0.63, 0.68]: Cards 1 & 2 fully settled, Card 3 waiting
      // Phase 3 [0.68, 0.94]: Card 3 arrives completely into place
      // Hold 3  [0.94, 1.00]: All 3 cards resting in place
      const p1 = Math.max(0, Math.min(1, (p - 0.02) / 0.28));
      const p2 = Math.max(0, Math.min(1, (p - 0.35) / 0.28));
      const p3 = Math.max(0, Math.min(1, (p - 0.68) / 0.26));

      const e1 = easeInOutCubic(p1);
      const e2 = easeInOutCubic(p2);
      const e3 = easeInOutCubic(p3);

      // Equal vertical step spacing: Distance(1 -> 2) === Distance(2 -> 3)
      const STEP = 140;
      const y1 = (1 - e1) * 60;
      const y2 = y1 + (1 - e2) * STEP;
      const y3 = y2 + (1 - e3) * STEP;

      const scale1 = 0.96 + 0.04 * e1;
      const scale2 = 0.96 + 0.04 * e2;
      const scale3 = 0.96 + 0.04 * e3;

      card1.style.transform = `translate3d(0, ${y1.toFixed(2)}px, 0) scale(${scale1.toFixed(4)})`;
      card1.style.opacity = '1';

      card2.style.transform = `translate3d(0, ${y2.toFixed(2)}px, 0) scale(${scale2.toFixed(4)})`;
      card2.style.opacity = '1';

      card3.style.transform = `translate3d(0, ${y3.toFixed(2)}px, 0) scale(${scale3.toFixed(4)})`;
      card3.style.opacity = '1';

      if (Math.abs(targetProgress - currentProgress) > 0.0002) {
        animationFrame = requestAnimationFrame(render);
      } else {
        animationFrame = null;
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    // Bind to Lenis scroll ticks
    if (window.lenis && typeof window.lenis.on === 'function') {
      window.lenis.on('scroll', updateProgress);
    } else {
      window.addEventListener('load', function () {
        if (window.lenis && typeof window.lenis.on === 'function') {
          window.lenis.on('scroll', updateProgress);
        }
      });
    }

    updateProgress();
    setTimeout(updateProgress, 100);
  }

  function initAll() {
    ensureLenis();
    const tracks = document.querySelectorAll('.blog-pin-track');
    tracks.forEach(setupBlogTrack);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
