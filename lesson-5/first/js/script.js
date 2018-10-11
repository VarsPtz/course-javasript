"use strict";
let parentList = document.querySelector(".menu"),
   itemsList = document.querySelectorAll(".menu-item"),
   item2 = itemsList[2],
   item3 = itemsList[1],
   newLi = document.createElement("li"),
   newLiText = document.createTextNode("Пятый пункт");

newLi.appendChild(newLiText);
newLi.classList.add("menu-item");

parentList.appendChild(newLi);


parentList.insertBefore(item2, item3);

document.body.style.background = "url(../first/img/apple_true.jpg) center no-repeat";

document.querySelector("#title").innerHTML = "Мы продаем только " + "<b>подлинную</b>" + " технику Apple";

document.querySelector(".adv").style.display = "none";

document.querySelector(".users-button").onclick = function () {
 // alert("Вы нажали кнопку!");
document.querySelector(".users-answer").innerHTML = document.querySelector('.users-input').value;
}