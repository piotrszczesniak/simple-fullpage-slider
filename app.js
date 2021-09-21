window.onload = function () {
  init();
  arrowRight.addEventListener('click', nextSlide);
  arrowLeft.addEventListener('click', prevSlide);
};

let sliderImages = document.querySelectorAll('.slider__slide');
const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function init() {
  reset();
  sliderImages[0].style.display = 'flex';
}

function nextSlide() {
  if (current < sliderImages.length - 1) {
    reset();
    sliderImages[++current].style.display = 'flex';
  } else {
    reset();
    sliderImages[(current = 0)].style.display = 'flex';
  }
}

function prevSlide() {
  if (current > 0) {
    reset();
    sliderImages[--current].style.display = 'flex';
  } else {
    reset();
    sliderImages[(current = sliderImages.length - 1)].style.display = 'flex';
  }
}
