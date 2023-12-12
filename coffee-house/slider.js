"use script";
/* Slider */
const sliderImages = [
  {
    src: "assets/pics/coffee-slider-1.png",
    name: "S’mores Frappuccino",
    desc: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk",
    price: "$5.50",
  },
  {
    src: "assets/pics/coffee-slider-2.png",
    name: "Caramel macchiato",
    desc: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "$7.50",
  },
  {
    src: "assets/pics/coffee-slider-3.png",
    name: "Ice coffee",
    desc: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "$9.50",
  },
];

let slide = document.getElementsByClassName("slide")[0];
const sliderContent = document.getElementsByClassName("slider-content")[0];
const sliderControls = document.getElementsByClassName("slider-control");
const previousButton = document.getElementsByClassName("previous")[0];
const nextButton = document.getElementsByClassName("next")[0];

let currentImage = 0;

function assignSliderData() {
  const slideImgElement = slide.getElementsByClassName("slider-img")[0];
  const slideNameElement = slide.getElementsByClassName("slider-item-name")[0];
  const slideDescElement = slide.getElementsByClassName("slider-item-desc")[0];
  const slidePrice = slide.getElementsByClassName("price")[0];

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
