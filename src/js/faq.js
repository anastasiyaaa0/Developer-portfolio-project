import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// ACCORDEON
const faqAccordeon = new Accordion('.faq-list.accordion-container', {
  duration: 300,
  showMultiple: true,
});

const faqAccordionBtns = document.querySelectorAll('.faq-btn.ac-trigger');

faqAccordionBtns.forEach(btn => {
  btn.addEventListener('click', onAccordionBtn);
});

function onAccordionBtn(event) {
  const accordionBtn = event.currentTarget;
  const accordionBtnIcon = accordionBtn.firstElementChild;
  accordionBtnIcon.classList.toggle('rotate');
}
