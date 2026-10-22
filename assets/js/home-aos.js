(function () {
  'use strict';

  if (typeof window.AOS === 'undefined') {
    document.querySelectorAll('[data-aos]').forEach(function (element) {
      element.classList.add('aos-animate');
    });
    console.error('AOS could not initialize because its script did not load.');
    return;
  }

  window.AOS.init({
    duration: 500,
    easing: 'ease-out-quart',
    once: true
  });
}());
