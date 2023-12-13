"use script";

import { sliderImages } from "./data.js";
/* Slider */

let slide = document.querySelector(".slide");
const sliderControls = document.querySelectorAll(".slider-control");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentImage = 0;

function assignSliderData() {
  const slideImgElement = slide.querySelector(".slider-img");
  const slideNameElement = slide.querySelector(".slider-item-name");
  const slideDescElement = slide.querySelector(".slider-item-desc");
  const slidePrice = slide.querySelector(".price");

  for (let i = 0; i < sliderControls.length; i++) {
    sliderControls[i].classList.remove("active");
  }

  slideImgElement.src = sliderImages[currentImage].src;
  slideNameElement.innerHTML = sliderImages[currentImage].name;
  slideDescElement.innerHTML = sliderImages[currentImage].desc;
  slidePrice.innerHTML = sliderImages[currentImage].price;
  initSlide();
}

function initSlide() {
  sliderControls[currentImage].classList.add("active");
  if (slide.classList.contains("slide-next")) {
    slide.classList.remove("slide-next");
  }

  if (slide.classList.contains("slide-back")) {
    slide.classList.remove("slide-back");
  }
}

function slideNext(event) {
  event.preventDefault();
  currentImage++;
  if (currentImage >= sliderImages.length) {
    currentImage = 0;
  }

  slide.classList.add("slide-next");
}

function slideBack(event) {
  event.preventDefault();
  currentImage--;
  if (currentImage < 0) {
    currentImage = sliderImages.length - 1;
  }

  slide.classList.add("slide-back");
}

["touchstart", "click", "transitionend"].forEach((evt) => {
  nextButton.addEventListener(evt, slideNext);
  previousButton.addEventListener(evt, slideBack);
  slide.addEventListener(evt, assignSliderData);
});
