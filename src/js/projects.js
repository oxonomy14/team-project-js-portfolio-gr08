import Swiper from 'swiper';
import 'swiper/css/bundle';
//import { Navigation } from 'swiper/modules';

const elemProjectBtnNext = document.querySelector('.swiper-project-btn-next');
const elemProjectBtnPrev = document.querySelector('.swiper-project-btn-prev');

const swiperProject = new Swiper('.swiperrr', {
  speed: 900,
  spaceBetween: 400,
  //modules: [Navigation],
  on: {
    slideChange: updateButtonsState, // Викликаємо функцію при зміні слайду
  },
  touchRatio: 1, // Дозволяє свайпи
  allowTouchMove: true, // Вмикає можливість свайпу
  // navigation: {
  //   nextEl: '.swiper-project-btn-next',
  //   prevEl: '.swiper-project-btn-prev',
  //},
});

// Функція для оновлення стану кнопок
function updateButtonsState() {
  if (swiperProject.isBeginning) {
    elemProjectBtnPrev.classList.add('swiper-project-btn-disabled');
    elemProjectBtnPrev.setAttribute('disabled', 'true');
  } else {
    elemProjectBtnPrev.classList.remove('swiper-project-btn-disabled');
    elemProjectBtnPrev.removeAttribute('disabled');
  }

  if (swiperProject.isEnd) {
    elemProjectBtnNext.classList.add('swiper-project-btn-disabled');
    elemProjectBtnNext.setAttribute('disabled', 'true');
  } else {
    elemProjectBtnNext.classList.remove('swiper-project-btn-disabled');
    elemProjectBtnNext.removeAttribute('disabled');
  }
}

elemProjectBtnNext.addEventListener('click', evt => {
  swiperProject.slideNext();
  updateButtonsState(); // Оновлюємо стан кнопок
});

elemProjectBtnPrev.addEventListener('click', evt => {
  swiperProject.slidePrev();
  updateButtonsState(); // Оновлюємо стан кнопок;
});

//

window.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowRight') {
    swiperProject.slideNext();
    updateButtonsState(); // Оновлюємо стан кнопок
    // console.log('Натискається клавіша Вправо');
  } else if (evt.code === 'ArrowLeft') {
    swiperProject.slidePrev();
    updateButtonsState(); // Оновлюємо стан кнопок;
    //  console.log('Натискається клавіша Вліво');
  }
});

// Викликаємо функцію один раз, щоб встановити правильний стан кнопок на початку
updateButtonsState();
