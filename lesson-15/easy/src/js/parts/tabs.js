"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tabs;

function tabs() {
  var tab = document.querySelectorAll(".info-header-tab"),
      //все пункты меню
  info = document.querySelector(".info-header"),
      //область включающая все пункты меню
  tabContent = document.querySelectorAll(".info-tabcontent"); //содержимое табов
  //скрываем содержимое всех табов начиная с элемента a

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  };

  hideTabContent(1); //скрываем все табы кроме нулевого
  //отобразить таб b

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.hide("show");
    }
  }; //отслеживаем нажатие в области с меню


  info.addEventListener("click", function (event) {
    var target = event.target; //делегируем нажатый таб

    if (target && target.classList.contains("info-header-tab")) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0); //скрываем все! табы

          showTabContent(i);
          break;
        }
      }
    }
  });
} // module.exports = tabs;
// export default tabs;