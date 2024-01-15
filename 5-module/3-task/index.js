function initCarousel() {
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselInnerWidth = document.querySelector(".carousel__inner").offsetWidth;
  let countSlide = document.querySelectorAll('.carousel__slide').length;
  let index = 0;

  hideArrow(index, arrowRight, arrowLeft, countSlide);

  arrowRight.addEventListener( "click", () => {
    index++;
    document.querySelector(".carousel__inner").style.transform = `translateX(-${index * carouselInnerWidth}px)`;
    hideArrow(index, arrowRight, arrowLeft, countSlide);
  });

  arrowLeft.addEventListener( "click", () => {
    index--;
    document.querySelector(".carousel__inner").style.transform = `translateX(-${index * carouselInnerWidth}px)`;
    hideArrow(index, arrowRight, arrowLeft, countSlide);
  });
}

function hideArrow(index, right, left, slide) {
  if (index >= slide -1) {
    right.style.display = 'none';
  } else {
    right.style.display = '';
  }
  if (index === 0) {
    left.style.display = 'none';
  } else {
    left.style.display = '';
  }
}