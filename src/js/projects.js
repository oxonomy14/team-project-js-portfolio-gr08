import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const elemProjectBtnNext = document.querySelector('.swiper-project-btn-next');
const elemProjectBtnPrev = document.querySelector('.swiper-project-btn-prev');

const swiperProject = new Swiper('.swiperrr', {
  modules: [Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 900,
  spaceBetween: 400,

  touchRatio: 1, 
  allowTouchMove: true, 

  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
  },
});

  document.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowRight') {
    swiperProject.slideNext();
  } else if (evt.code === 'ArrowLeft') {
    swiperProject.slidePrev();
  }
});
