"use strict";

export function createModal(product) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `  
    <div class="modal-body flex gap-12">    
    <img class="modal-img" src="${product.src}" alt="picture" />
    <div>
    <h4 class="modal-title">${product.name}</h4>
    <p class="modal-desc medium-txt">${product.description}</p>
    <div>
        <span>Size</span>
        <ul>
        <li class="tab-item">
            <span class="tab-img">S</span>
            <span>${product.sizes.s.size}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">M</span>
            <span>${product.sizes.m.size}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">L</span>
            <span>${product.sizes.l.size}</span>
        </li>
        </ul>
    </div>
    <div>
        <span>Additives</span>
        <ul>
        <li class="tab-item">
        <span class="tab-img">1
        </span >
            <span>${product.additives[0].name}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">2</span
            >
            <span>${product.additives[1].name}</span>
        </li>
        <li class="tab-item">
            <span class="tab-img">3</span
            >
            <span>${product.additives[2].name}</span>
        </li>
        </ul>
    </div>
    <h4>
        <span>Total:</span>
        <span class="modal-price">$${product.price}</span>
    </h4>
    <hr />
    <p class="caption-txt">
        <span class="material-symbols-outlined"> info </span>
        <p>The cost is not final. Download our mobile app to see the final
        price and place your order. Earn loyalty points and enjoy your
        favorite coffee with up to 20% discount.<p>
    </p>
    <button class="close-button" data-close-button>Close</button>
    </div>   
    </div>
    `;

  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => closeModal(modal));

  modal.addEventListener("click", function (event) {
    if (event) event.stopPropagation();
  });

  return modal;
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

// document.querySelector(".tab-item").addEventListener("click", () => {
//   document.querySelector(".tab-item").classList.add("active");
// });
