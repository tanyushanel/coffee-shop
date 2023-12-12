"use strict";

import { products, tabImages } from "/coffee-house/data.js";

function createTabs(products) {
  const categories = [...new Set(products.map((product) => product.category))];
  const tabLinks = document.querySelector(".tab-container");

  categories.forEach((category, index) => {
    const tabButton = document.createElement("li");
    const tabImg = tabImages[index];

    tabButton.className = "tab-item medium-txt flex-center gap-8";
    tabButton.onclick = (event) => displayProducts(event, category);
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

function displayProducts(event, category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const tabContent = document.getElementById("tab-content");
  tabContent.innerHTML = "";

  filteredProducts.forEach((product) => {
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
    tabContent.appendChild(productDiv);
  });

  updateActiveTab(event);
}

function updateActiveTab(event) {
  const tabLinks = document.querySelectorAll(".tab-item");
  tabLinks.forEach((tab) => tab.classList.remove("active"));
  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => createTabs(products));
