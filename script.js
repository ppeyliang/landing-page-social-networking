'use strict';

const headerEl = document.querySelector('.header');
const heroEl = document.querySelector('.hero');

const headerHeight = headerEl.getBoundingClientRect().height;

const sticky = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    headerEl.classList.add('header-sticky');
  } else {
    headerEl.classList.remove('header-sticky');
  }
};

const heroObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

heroObserver.observe(heroEl);
