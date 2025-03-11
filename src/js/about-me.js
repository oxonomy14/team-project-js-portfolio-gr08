//import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const elemSkillsBtnNext = document.querySelector('.skills-arrow-next');

const swiperSkills = new Swiper('.swiperr', {
  speed: 900,
  loop: true,

  navigation: {
    nextEl: '.skills-arrow-next',
  },

  // Default parameters
  slidesPerView: 2,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

window.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowRight') {
    swiperSkills.slideNext();
  }
});

const accordionParams = {
  openOnInit: [0],
  duration: 400,
  toggle: 'click',
  easing: 'ease-in-out',
  scrollTo: true, // Прокручує до відкритого елемента
};

new Accordion('.content-container', accordionParams);
