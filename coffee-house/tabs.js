"use strict";

import { products, tabImages } from "./data.js";
import { openModal } from "./modal.js";

const tabContent = document.getElementById("tab-content");
const refreshButton = document.querySelector(".bttn-refresh");

document.addEventListener("DOMContentLoaded", () => createTabs(products));
refreshButton.addEventListener("transitionend", (event) => loadMore(event));

function createTabs(products) {
  const categories = [...new Set(products.map((product) => product.category))];
  const tabLinks = document.querySelector(".tab-container");

  categories.forEach((category, index) => {
    const tabButton = document.createElement("li");
    const tabImg = tabImages[index];

    tabButton.className = "tab-item medium-txt flex-center gap-8";
    tabButton.onclick = (event) => initLoadProducts(event, category, 4);
    tabLinks.appendChild(tabButton);

    tabButton.innerHTML = `       
        <img src=${tabImg.src} alt="tabImg" />
        <span class="capitalize">${category}</span>
    `;

    if (index === 0) {
      tabButton.click();
    }
  });
}

function createItemDiv(product) {
  const productDiv = document.createElement("li");
  productDiv.className = "grid-menu-item";
  productDiv.innerHTML = `

  <div class="grid-item">
      <img src="${product.src}" alt="pic" />
  </div>
  <div class="grid-item-desc margin-20 flex gap-12">
      <h4>${product.name}</h4>
      <p class="medium-txt cut">
          ${product.description}
      </p>
      <h4 class="price">$${product.price}</h4>
  </div>          
      `;

  productDiv.addEventListener("click", function () {
    openModal(product);
  });
  return productDiv;
}

function displayProducts(products) {
  products.forEach((product) => {
    const newProduct = createItemDiv(product);
    tabContent.appendChild(newProduct);
  });
}

function initLoadProducts(event, category, amount) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const shownProducts = amount
    ? filteredProducts.slice(0, amount)
    : filteredProducts;

  tabContent.innerHTML = "";
  displayProducts(shownProducts);

  if (shownProducts.length === filteredProducts.length) {
    refreshButton.classList.add("hide");
  } else {
    refreshButton.classList.remove("hide");
  }

  updateActiveTab(event);
}

function updateActiveTab(event) {
  const tabLinks = document.querySelectorAll(".tab-item");
  tabLinks.forEach((tab) => tab.classList.remove("active"));
  event.currentTarget.classList.add("active");
}

function loadMore() {
  const shownProducts = tabContent.querySelectorAll(".grid-menu-item");
  const category = document.querySelector(".active").innerText.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const hiddenProducts = filteredProducts.slice(
    shownProducts.length,
    shownProducts.length + 2
  );

  displayProducts(hiddenProducts);

  if (!hiddenProducts.length) {
    document.querySelector(".bttn-refresh").classList.add("hide");
  }
}
