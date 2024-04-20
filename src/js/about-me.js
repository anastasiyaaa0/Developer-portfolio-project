import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.about-me-info-list.accordion-container', {
  duration: 300,
  openOnInit: [0],
  showMultiple: true,
});

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
