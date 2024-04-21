import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getData } from './portfolio-api';

// SWIPER
const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Keyboard, Mousewheel, Navigation],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },

  navigation: {
    nextEl: '.review-swiper-button.next',
    prevEl: '.review-swiper-button.prev',
    disabledClass: 'disabled',
  },

  loop: false,
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

// GET DATA FROM BACKEND
const reviewsList = document.querySelector('.reviews-list');
document.addEventListener('DOMContentLoaded', () => {
  let result;

  getData()
    .then(data => {
      result = data
        .map(item => {
          return createElementMarkup(item);
        })
        .join('');

      reviewsList.insertAdjacentHTML('beforeend', result);
    })
    .catch(() => {
      handleError();
    });
});

function createElementMarkup(item) {
  return `<li class="swiper-slide reviews-list-item">
            <img width="48" class="reviews-img" src="${item.avatar_url}" alt="${item.author}" />
            <div class="reviews-customer-info">
              <h3 class="reviews-customer-author">${item.author}</h3>
              <p class="reviews-descr">${item.review}</p>
            </div>
          </li>`;
}

function handleError() {
  reviewsList.insertAdjacentHTML(
    'beforeend',
    `<p class="not-found-info">NOT FOUND</p>`
  );

  iziToast.error({
    position: 'topRight',
    message: 'Аn error occurred. Please reload your page!',
  });
}
