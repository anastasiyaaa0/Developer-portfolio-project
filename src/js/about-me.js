import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';

// ACCORDEON
const aboutMeAccordeon = new Accordion(
  '.about-me-info-list.accordion-container',
  {
    duration: 300,
    openOnInit: [0],
    showMultiple: true,
  }
);

const accordionBtns = document.querySelectorAll(
  '.disclosure-button.ac-trigger'
);
accordionBtns.forEach(btn => {
  btn.addEventListener('click', onAccordionBtn);
});

function onAccordionBtn(event) {
  const accordionBtn = event.currentTarget;
  const accordionBtnIcon = accordionBtn.firstElementChild;
  accordionBtnIcon.classList.toggle('rotate');
}

// SWIPER
const swipeBtn = document.querySelector('.swiper-button');
const aboutMeSwiper = new Swiper('.about-me-swiper', {
  modules: [Keyboard, Mousewheel],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },

  loop: true,
  slidesPerView: 2,
  slideActiveClass: 'is-active',
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
    },
  },
});

swipeBtn.addEventListener('click', () => aboutMeSwiper.slideNext());
