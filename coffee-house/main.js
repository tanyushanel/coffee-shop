"use strict";

/* Burger-menu */

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".menu-container");
  const burgerMenuButton = document.querySelector(".burger-menu-button");

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

  const secondaryButtons = document.querySelectorAll(".button-secondary");

  Array.from(secondaryButtons).forEach((btn) => {
    btn.addEventListener("touchstart", () => btn.classList.add("click"));
    btn.addEventListener("transitionend", () => btn.classList.remove("click"));
  });
});
