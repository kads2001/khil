/**
 * Gallery Circle Wheel Animation
 * Smooth scroll-driven circular orbit carousel
 * Integrated with Lenis + GSAP ScrollTrigger
 */

(function () {
  'use strict';

  let lenisInstance = null;
  let scrollTriggerInstance = null;
  let wheelTimeline = null;

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleryWheel);
  } else {
    initGalleryWheel();
  }

  function initGalleryWheel() {
    const wheelSection = document.querySelector('.wheel-banner-section') || document.querySelector('.gallery-wheel-section');
    const wheel = document.querySelector('.gallery-circle-wheel');
    const cards = document.querySelectorAll('.gallery-image-card');

    if (!wheelSection || !wheel || !cards.length) return;

    // 1. Setup Lenis Smooth Scrolling
    initLenis();

    // 2. Register GSAP ScrollTrigger
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded');
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // 3. Position Cards in a Perfect Circle
    layoutWheelCards(cards);

    // 4. Create Scroll-Driven Rotation & Scaling Timeline
    createWheelTimeline(wheelSection, wheel, cards);

    // 5. Handle Resize Gracefully
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        layoutWheelCards(cards);
        ScrollTrigger.refresh();
      }, 150);
    });
  }

  /**
   * Initializes Lenis smooth scrolling with GSAP ticker synchronization
   */
  function initLenis() {
    if (typeof Lenis === 'undefined') {
      console.warn('Lenis not found, falling back to native scroll');
      return;
    }

    // Prevent duplicate Lenis instances
    if (lenisInstance) {
      lenisInstance.destroy();
    }

    // Safely disable legacy smooth-scroll if loaded on page
    if (window.SmoothScroll && typeof window.SmoothScroll.destroy === 'function') {
      try {
        window.SmoothScroll.destroy();
      } catch (e) {}
    }

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.0,
      infinite: false,
    });

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's 120fps internal ticker
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to eliminate micro-stutter
    gsap.ticker.lagSmoothing(0);
  }

  /**
   * Reads dynamic wheel radius from CSS variables and positions cards around orbit
   */
  function getWheelRadius() {
    const rawVal = getComputedStyle(document.documentElement)
      .getPropertyValue('--wheel-radius')
      .trim();
    const parsed = parseFloat(rawVal);
    if (!isNaN(parsed) && parsed > 0) return parsed;

    // Fallbacks based on viewport width
    const w = window.innerWidth;
    if (w <= 480) return 138;
    if (w <= 991) return 170;
    if (w <= 1199) return 225;
    if (w <= 1400) return 250;
    return 275;
  }

  /**
   * Places cards evenly along the circular orbit (360 / N degrees)
   * Top card begins at -90deg (12 o'clock) matching the reference image
   */
  function layoutWheelCards(cards) {
    const radius = getWheelRadius();
    const totalCards = cards.length;
    const angleStep = 360 / totalCards; // 45 deg for 8 cards

    cards.forEach((card, i) => {
      // 0deg = 12 o'clock (-90deg offset in Cartesian)
      const angleDeg = i * angleStep - 90;
      const angleRad = (angleDeg * Math.PI) / 180;

      const x = radius * Math.cos(angleRad);
      const y = radius * Math.sin(angleRad);

      gsap.set(card, {
        x: x,
        y: y,
        rotation: 0, // initially upright
        force3D: true,
      });
    });
  }

  /**
   * Builds the scroll-pinned GSAP timeline
   * Orbit rotates by +360deg, all cards counter-rotate by -360deg (staying 100% upright)
   * Dynamically scales the entire wheel for cinematic depth
   */
  function createWheelTimeline(section, wheel, cards) {
    if (wheelTimeline) {
      wheelTimeline.kill();
    }

    wheelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 1.2, // Silky momentum damping tied to Lenis
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1. 1.2 full rotations (432 degrees) of the circle wheel
    wheelTimeline.to(
      wheel,
      {
        rotation: 120,
        ease: 'none',
      },
      0
    );

    // 2. Counter-rotation on cards so each card stays perfectly upright like a Ferris wheel
    wheelTimeline.to(
      cards,
      {
        rotation: -120,
        ease: 'none',
      },
      0
    );

    // 3. Natural scale: starts at 1.0 so wheel has full reference space without scaling, with subtle scroll depth
     wheelTimeline.fromTo(
      wheel,
      {
        scale: 0.88,
      },
      {
        scale: 1.06,
        ease: 'power2.out',
      },
      0
    );

    // 4. Subtle background watermark drift
    const watermark = document.querySelector('.wheel-banner-watermark') || document.querySelector('.gallery-wheel-watermark');
    if (watermark) {
      wheelTimeline.fromTo(
        watermark,
        { scale: 0.95, opacity: 0.03 },
        { scale: 1.04, opacity: 0.045, ease: 'power2.out' },
        0
      );
    }
  }

  // Cleanup on window unload
  window.addEventListener('beforeunload', () => {
    if (lenisInstance) lenisInstance.destroy();
    if (wheelTimeline) wheelTimeline.kill();
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    }
  });
})();
