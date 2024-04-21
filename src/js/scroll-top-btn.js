const scrollToTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY; // current scroll position

  if (scrollPos > document.querySelector('.hero').offsetHeight) {
    scrollToTop.classList.remove('visually-hidden');
  } else {
    scrollToTop.classList.add('visually-hidden');
  }
});
