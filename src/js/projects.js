import Swiper from 'swiper';
import 'swiper/css/bundle';

const elemProjectBtnNext = document.querySelector('.swiper-project-btn-next');
const elemProjectBtnPrev = document.querySelector('.swiper-project-btn-prev');

const swiper = new Swiper('.swiper-project-list', {
  speed: 900,
  spaceBetween: 400,
  on: {
    slideChange: updateButtonsState, // Викликаємо функцію при зміні слайду
  },
  touchRatio: 1, // Дозволяє свайпи
  allowTouchMove: true, // Вмикає можливість свайпу
});

// Функція для оновлення стану кнопок
function updateButtonsState() {
  if (swiper.isBeginning) {
    elemProjectBtnPrev.classList.add('swiper-project-btn-disabled');
    elemProjectBtnPrev.setAttribute('disabled', 'true');
  } else {
    elemProjectBtnPrev.classList.remove('swiper-project-btn-disabled');
    elemProjectBtnPrev.removeAttribute('disabled');
  }

  if (swiper.isEnd) {
    elemProjectBtnNext.classList.add('swiper-project-btn-disabled');
    elemProjectBtnNext.setAttribute('disabled', 'true');
  } else {
    elemProjectBtnNext.classList.remove('swiper-project-btn-disabled');
    elemProjectBtnNext.removeAttribute('disabled');
  }
}

elemProjectBtnNext.addEventListener('click', evt => {
  swiper.slideNext();
  updateButtonsState(); // Оновлюємо стан кнопок
});

elemProjectBtnPrev.addEventListener('click', evt => {
  swiper.slidePrev();
  updateButtonsState(); // Оновлюємо стан кнопок;
});

//

window.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowRight') {
    swiper.slideNext();
    updateButtonsState(); // Оновлюємо стан кнопок
    console.log('Натискається клавіша Вправо');
  } else if (evt.code === 'ArrowLeft') {
    swiper.slidePrev();
    updateButtonsState(); // Оновлюємо стан кнопок;
    console.log('Натискається клавіша Вліво');
  }
});

// Викликаємо функцію один раз, щоб встановити правильний стан кнопок на початку
updateButtonsState();
