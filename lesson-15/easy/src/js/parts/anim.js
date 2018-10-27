"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anim;

function anim() {
  // Скрипт плавной прокрутки
  function animate(draw, duration) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timePassed = time - start;

      if (timePassed > duration) {
        timePassed = duration;
      }

      draw(timePassed);

      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
    });
  }

  var menu = document.getElementsByTagName("nav")[0];
  menu.addEventListener("click", function (event) {
    event.preventDefault();
    animate(function (timePassed) {
      var target = event.target;
      var section = document.getElementById(target.getAttribute("href").slice(1));
      window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
    }, 1500);
  });
} // module.exports = anim;
// export default anim;