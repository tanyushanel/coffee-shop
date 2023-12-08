"use strict";

const menu = document.getElementsByClassName("menu-container")[0];
const button = document.getElementsByClassName("burger-menu-button")[0];

function toggleMenu(event) {
  event.preventDefault();

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    button.src = "assets/icons/button-icon-burger.svg";
  } else {
    menu.classList.add("show");
    button.src = "assets/icons/button-icon-burger-close.svg";
  }
}

button.addEventListener("touchstart", toggleMenu);
button.addEventListener("click", toggleMenu);
