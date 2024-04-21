const coversSection = document.querySelector('.covers');
const coversImage = document.querySelectorAll('.covers-img');

const observer = new IntersectionObserver(observeSection);
observer.observe(coversSection);

function observeSection(entries) {
  const entry = entries[0];

  coversImage.forEach(image => {
    if (entry.isIntersecting) {
      image.classList.add('covers-active');
    } else {
      image.classList.remove('covers-active');
    }
  });
}
