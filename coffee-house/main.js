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
["touchstart", "click"].forEach((evt) => {
  burgerMenuButton.addEventListener(evt, toggleMenu);
});

/* Secondary buttons */

const secondaryButtons = document.getElementsByClassName("button-secondary");

Array.from(secondaryButtons).forEach((btn) => {
  btn.addEventListener("touchstart", () => btn.classList.add("click"));
  btn.addEventListener("transitionend", () => btn.classList.remove("click"));
});

/* Category tab switching */
/* Infinite loading */
/* Modal */
