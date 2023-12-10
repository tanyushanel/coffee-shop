"use strict";

/* Burger-menu */

const burgerMenu = document.getElementsByClassName("menu-container")[0];
const burgerMenuButton =
  document.getElementsByClassName("burger-menu-button")[0];

function toggleMenu(event) {
  event.preventDefault();

  if (burgerMenu.classList.contains("show")) {
    burgerMenu.classList.remove("show");
    burgerMenuButton.src = "assets/icons/button-icon-burger.svg";
  } else {
    burgerMenu.classList.add("show");
    burgerMenuButton.src = "assets/icons/button-icon-burger-close.svg";
  }
}
["touchstart", "click"].forEach(function (evt) {
  burgerMenuButton.addEventListener(evt, toggleMenu);
});

/* Slider */

const sliderImages = [
  {
    src: "assets/pics/coffee-slider-1.png",
    name: "S’mores Frappuccino",
    desc: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk",
    price: "5.50",
  },
  {
    src: "assets/pics/coffee-slider-2.png",
    name: "Caramel macchiato",
    desc: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.50",
  },
  {
    src: "assets/pics/coffee-slider-3.png",
    name: "Ice coffee",
    desc: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "9.50",
  },
];

let currentImage = 0;
const previousButton = document.getElementsByClassName("previous")[0];
const nextButton = document.getElementsByClassName("next")[0];

const slide = document.getElementsByClassName("slide")[0];
const slideImgElement = slide.getElementsByClassName("slider-img")[0];
const slideNameElement = slide.getElementsByClassName("slider-item-name")[0];
const slideDescElement = slide.getElementsByClassName("slider-item-desc")[0];
const slidePrice = slide.getElementsByClassName("price")[0];

const sliderControls = document.getElementsByClassName("slider-control");

function assignSliderData() {
  slideImgElement.src = sliderImages[currentImage].src;
  slideNameElement.innerHTML = sliderImages[currentImage].name;
  slideDescElement.innerHTML = sliderImages[currentImage].desc;
  slidePrice.innerHTML = sliderImages[currentImage].price;

  for (let i = 0; i < sliderControls.length; i++) {
    sliderControls[i].classList.remove("active");
  }

  initSlide();
  sliderControls[currentImage].classList.add("active");
}

function initSlide() {
  if (slide.classList.contains("slide-next")) {
    slide.classList.remove("slide-next");
  }
  if (slide.classList.contains("slide-back")) {
    slide.classList.remove("slide-back");
  }
}

function slideNext(event) {
  assignSliderData();
  event.preventDefault();
  currentImage++;
  if (currentImage >= sliderImages.length) {
    currentImage = 0;
  }

  slide.classList.add("slide-next");
}

function slideBack(event) {
  assignSliderData();
  event.preventDefault();

  currentImage--;
  if (currentImage < 0) {
    currentImage = sliderImages.length - 1;
  }

  slide.classList.add("slide-back");
}

["touchstart", "click"].forEach(function (evt) {
  previousButton.addEventListener(evt, slideBack);
  slide.addEventListener("transitionend", assignSliderData);
});

["touchstart", "click"].forEach(function (evt) {
  nextButton.addEventListener(evt, slideNext);
  slide.addEventListener("transitionend", assignSliderData);
});

/* Category tab switching */
/* Infinite loading */
/* Modal */
