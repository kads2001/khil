(function () {
  'use strict';

  var track = document.querySelector('.khil-hotels-scroll-track');
  var panel = track && track.querySelector('.khil-hotels-panel');
  var grid = track && track.querySelector('.khil-hotels-grid');
  var cards = grid ? Array.prototype.slice.call(grid.querySelectorAll('.khil-hotel-card')) : [];
  var desktopQuery = window.matchMedia('(min-width: 1200px) and (min-height: 820px)');
  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var stickyTop = 145;

  if (!track || !panel || !grid || cards.length < 2) {
    return;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function clearCardTransforms() {
    cards.forEach(function (card) {
      card.style.transform = '';
      card.style.zIndex = '';
      card.style.willChange = '';
    });
  }

  function updateCards() {
    if (!track.classList.contains('is-scroll-animated')) {
      return;
    }

    var travel = track.offsetHeight - panel.offsetHeight;
    var progress = travel > 0
      ? clamp((stickyTop - track.getBoundingClientRect().top) / travel, 0, 1)
      : 1;
    var gridCenter = grid.clientWidth / 2;

    cards.forEach(function (card, index) {
      var cardCenter = card.offsetLeft + card.offsetWidth / 2;
      var stackDistance = 1 - progress;
      var x = (gridCenter - cardCenter) * stackDistance;
      var y = index * 5 * stackDistance;
      var scale = 1 - Math.min(index * 0.025, 0.1) * stackDistance;
      var rotation = (index % 2 === 0 ? 1 : -1) * index * 0.35 * stackDistance;

      card.style.zIndex = String(cards.length - index);
      card.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(' + scale + ') rotate(' + rotation + 'deg)';
    });
  }

  function configureAnimation() {
    var shouldAnimate = desktopQuery.matches && !reducedMotionQuery.matches;
    track.classList.toggle('is-scroll-animated', shouldAnimate);

    if (shouldAnimate) {
      updateCards();
    } else {
      clearCardTransforms();
    }
  }

  function handleScroll() {
    var shouldAnimate = desktopQuery.matches && !reducedMotionQuery.matches;
    if (track.classList.contains('is-scroll-animated') !== shouldAnimate) {
      configureAnimation();
      return;
    }
    updateCards();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', configureAnimation);
  [desktopQuery, reducedMotionQuery].forEach(function (mediaQuery) {
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', configureAnimation);
    } else {
      mediaQuery.addListener(configureAnimation);
    }
  });

  configureAnimation();
}());
