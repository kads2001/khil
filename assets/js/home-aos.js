(function () {
  'use strict';

  document.querySelectorAll(
    '.khil-shared-footer .left-wiget, .khil-shared-footer .copyright-1'
  ).forEach(function (element) {
    element.setAttribute('data-aos', 'fade-up');
  });

  document.querySelectorAll('.khil-shared-footer .footer-wized-wrapper > .single')
    .forEach(function (element, index) {
      element.setAttribute('data-aos', 'fade-up');
      element.setAttribute('data-aos-delay', String(index * 100));
    });

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
    offset: 0,
    once: true
  });
}());
