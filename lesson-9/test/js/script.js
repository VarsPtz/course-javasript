"use strict";

//В браузерах !IE !EDGE - модальное окно меняет цвет на красный и края имеют скругление вначале.

let modalBtn = document.querySelector(".label"),
    modalWindow = document.querySelector(".modal"),
    closeBtn = document.querySelector(".close");

if (/edge/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent)) {
     
} else if (window.screen.width <= 982) {
    
} else {
    modalBtn.addEventListener("click", function () {
        modalWindow.style.background = "red";
        modalBtn.style.borderColor = "red";
        modalBtn.style.background = "red";
    });

    closeBtn.addEventListener("click", function () {
     modalWindow.style.background = "blueviolet";
     modalBtn.style.borderColor = "blueviolet";
     modalBtn.style.background = "blueviolet";
    });
}
