"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slider;

require("core-js/modules/web.dom.iterable");

function slider() {
  // Slider
  var slideIndex = 1,
      // Слайд в текущий момент
  slides = document.querySelectorAll(".slider-item"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      dotsWrap = document.querySelector(".slider-dots"),
      dots = document.querySelectorAll(".dot");
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    // slides.forEach(function (item) {
    //   return item.style.display = "none";
    // }); 
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } // альтернативный способ записи forEach



    // dots.forEach(function (item) {
    //   return item.classList.remove("dot-active");
    // });
    for (var z = 0; z < dots.length; z++) {
      dots[z].classList.remove("dot-active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }
  

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener("click", function () {
    plusSlides(-1);
  });
  next.addEventListener("click", function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener("click", function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
} // module.exports = slider;
// export default slider;