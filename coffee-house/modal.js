"use strict";

export function createModal(product) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `  
    <div class="modal-body flex gap-12">    
    <img class="modal-img" src="${product.src}" alt="picture" />
    <div>
    <h4 class="modal-title">${product.name}</h4>
    <p class="modal-desc medium-txt margin-20">${product.description}</p>
    <div class="margin-20">
        <span>Size</span>
        <ul class="margin-15">
        <li class="tab-item active">
            <span class="tab-img">S</span>
            <span>${product.sizes.s.size}</span>
            <span class="addition hide">${product.sizes.s["add-price"]}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">M</span>
            <span>${product.sizes.m.size}</span>
            <span class="addition hide">${product.sizes.m["add-price"]}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">L</span>
            <span>${product.sizes.l.size}</span>
            <span class="addition hide">${product.sizes.l["add-price"]}</span>
        </li>
        </ul>
    </div>
    <div class="margin-20">
        <span>Additives</span>
        <ul class="margin-15">
        <li class="tab-item active">
        <span class="tab-img">1
        </span >
            <span>${product.additives[0].name}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">2</span
            >
            <span>${product.additives[1].name}</span>
            <span class="addition hide">${product.additives[0]["add-price"]}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">3</span
            >
            <span>${product.additives[2].name}</span>
        </li>
        </ul>
    </div>
    <h4 class="flex total ">
        <span>Total:</span>
        <span class="modal-price">$${product.price}</span>
    </h4>
    <p class="flex gap-8 info margin-20">
        <span class="material-symbols-outlined medium-txt"> info </span>
        <span class="caption-txt">The cost is not final. Download our mobile app to see the final
        price and place your order. Earn loyalty points and enjoy your
        favorite coffee with up to 20% discount.<span>
    </p>
    <button class="close-button button-secondary" data-close-button>Close</button>
    </div>   
    </div>
    `;

  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => closeModal(modal));

  modal.addEventListener("click", function (event) {
    if (event) event.stopPropagation();
  });

  const modalPrice = modal.querySelector(".modal-price");

  return modal;
}

function updateTotalPrice(product, modal) {
  let totalPrice = parseFloat(product.price);
  const selectedAdditives = modal.querySelectorAll(".tab-item.active");

  selectedAdditives.forEach((additive) => {
    totalPrice += parseFloat(additive.dataset.addPrice);
  });

  const priceElement = modal.querySelector(".modal-price");
  priceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

export function openModal(product) {
  const modal = createModal(product);
  document.body.appendChild(modal);
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".modal-overlay").style.display = "block";
}

export function closeModal(modal) {
  modal.style.display = "none";
  modal.remove();
  closeOverlay();
}

function closeOverlay() {
  const overlay = document.querySelector(".modal-overlay");
  overlay.style.display = "none";
}

export function closeAll() {
  const modals = document.querySelectorAll(".modal");
  const overlays = document.querySelectorAll(".modal-overlay");
  modals.forEach((el) => {
    el.style.display = "none";
    el.remove();
  });
  overlays.forEach((el) => {
    el.style.display = "none";
  });
}
document.querySelector(".modal-overlay").addEventListener("click", (event) => {
  if (
    !event.target.classList.contains("modal") &&
    !event.target.classList.contains("overlay")
  ) {
    closeAll();
  }
});
