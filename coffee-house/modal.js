"use strict";

export function openModal(product) {
  document.querySelector(".modal-title").textContent = product.name;
  document.querySelector(".modal-img").textContent = product.name;
  document.querySelector(".modal-desc").textContent = product.description;
  document.querySelector(".modal-price").textContent = `$${product.price}`;
  document.querySelector(".modal").style.display = "block";
}

export function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }
});

document.querySelector(".modal").addEventListener("click", function (event) {
  if (event) event.stopPropagation();
});
