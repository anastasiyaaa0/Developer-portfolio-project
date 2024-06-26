import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

// SWIPER
const projectsSwiper = new Swiper('.projects-swiper', {
  modules: [Keyboard, Mousewheel, Navigation],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },

  navigation: {
    nextEl: '.project-btn-swap.next',
    prevEl: '.project-btn-swap.prev',
    disabledClass: 'disabled',
  },

  loop: false,
  slidesPerView: 1,
  speed: 1000,
});
