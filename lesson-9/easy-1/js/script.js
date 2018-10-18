"use strict";

let age = document.getElementById('age'),
    newMes = showUser.bind(age);
    
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}

showUser("Иван", "Фёдоров");
