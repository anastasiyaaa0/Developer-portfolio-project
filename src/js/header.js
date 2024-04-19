const dropdown = document.querySelector('.header-dropdown');
const navigationMenu = document.querySelector('.header-navigation');

dropdown.addEventListener('click', navigationOpen);

function navigationOpen() {
  if (navigationMenu.classList.contains('active')) {
    navigationMenu.classList.add('collapsed');
    setTimeout(() => {
      navigationMenu.classList.remove('active');
    }, 500);
  } else {
    navigationMenu.classList.remove('collapsed');
    navigationMenu.classList.add('active');
  }
}

const openModalBtn = document.querySelector('.burger-open-button');
const closeModalBtn = document.querySelector('.menu-close-button');
const mobileMenu = document.querySelector('.header-mobile-menu');

openModalBtn.addEventListener('click', modalOpen);
closeModalBtn.addEventListener('click', modalClose);

function modalOpen() {
  mobileMenu.classList.remove('menu-close');
  mobileMenu.classList.add('menu-open');
}

function modalClose() {
  mobileMenu.classList.remove('menu-open');
  mobileMenu.classList.add('menu-close');
}

const link = document.querySelector('.menu-sections-link');
const navigationMenuMobile = document.querySelector('.menu-header-navigation');
