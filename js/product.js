"use strict";

let count = 0;

document
  .querySelector(".bi-plus-circle")
  .addEventListener("click", function () {
    count++;
    document.querySelector(".cart-no").textContent = count;
  });

document
  .querySelector(".bi-dash-circle")
  .addEventListener("click", function () {
    if (count > 0) {
      count--;
      document.querySelector(".cart-no").textContent = count;
    }
  });

document.querySelector(".icon2").addEventListener("click", function () {
  count++;
  document.querySelector(".cart-no2").textContent = count;
});

document.querySelector(".icon22").addEventListener("click", function () {
  if (count > 0) {
    count--;
    document.querySelector(".cart-no2").textContent = count;
  }
});

document.querySelector(".icon3").addEventListener("click", function () {
  count++;
  document.querySelector(".cart-no3").textContent = count;
});

document.querySelector(".icon33").addEventListener("click", function () {
  if (count > 0) {
    count--;
    document.querySelector(".cart-no3").textContent = count;
  }
});
