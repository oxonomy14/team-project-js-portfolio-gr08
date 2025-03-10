import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionParams = {
  openOnInit: [0],
  duration: 400,
  toggle: 'click',
  easing: 'ease-in-out',
  scrollTo: true,
};

new Accordion('.faq-container', accordionParams);
