"use strict";

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let planButtons = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

const noButton = document.querySelector(".modal__action--negative");

// console.dir(planButtons);

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

if (noButton) {
  noButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
