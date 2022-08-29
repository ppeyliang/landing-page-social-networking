'use strict';

const headerEl = document.querySelector('.header');
const navEl = document.querySelector('.main-nav');
const heroEl = document.querySelector('.hero');
const menuEl = document.querySelector('.menu-link');
const mobileNavEl = document.querySelector('.main-nav-mobile');

// Implement sticky header
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

// Implement smooth scrolling to section
navEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('main-nav-link')) {
    const sectionId = e.target.getAttribute('href');
    const sectionCoords = document
      .querySelector(sectionId)
      .getBoundingClientRect();

    window.scrollTo({
      top: sectionCoords.top + window.pageYOffset - headerHeight,
      left: sectionCoords.left + window.pageXOffset,
      behavior: 'smooth',
    });
  }
});

// Implement mobile navigation
menuEl.addEventListener('click', () => {
  mobileNavEl.classList.toggle('main-nav-open');
});
