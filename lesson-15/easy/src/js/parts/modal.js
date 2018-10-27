"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modal;

function modal() {
  // Modal
  var more = document.querySelector(".more"),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector(".popup-close");
  more.addEventListener("click", function () {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden"; // Запретим прокрутку страницы при открытом модальном окне.
  });
  close.addEventListener("click", function () {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
  var descriptionBtn = document.querySelector(".description-btn"),
      descriptionBtnCollection = document.getElementsByClassName("description-btn");

  for (var i = 0; i < descriptionBtnCollection.length; i++) {
    descriptionBtnCollection[i].addEventListener("click", function () {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden"; // Запретим прокрутку страницы при открытом модальном окне.
    });
  }
} // module.exports = modal;
// export default modal;