const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const slides = document.querySelectorAll('.swiper-slide');

const LAST_SLIDE = slides.length - 1;
const FIRST_SLIDE = 0;
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide === FIRST_SLIDE - 1) currentSlide = LAST_SLIDE;
  update();
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide === LAST_SLIDE + 1) currentSlide = FIRST_SLIDE;
  update();
});

const update = () => {
  slides.forEach((slide, idx) => {
    slide.style.left = (idx - currentSlide) * 100 + '%';
  });
};
