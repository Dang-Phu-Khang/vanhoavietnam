// Hồn Việt — interactions
(function () {
  'use strict';

  // Fade-in on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // UNESCO region buttons toggle active state
  var regionBtns = document.querySelectorAll('.region-btn');
  regionBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      regionBtns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
    });
  });

  // "Chi tiết" buttons: gentle feedback (no destination in this static build)
  var detailBtns = document.querySelectorAll('.btn-detail');
  detailBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.card');
      if (card) {
        card.style.transform = 'scale(0.985)';
        setTimeout(function () { card.style.transform = ''; }, 160);
      }
    });
  });
})();
