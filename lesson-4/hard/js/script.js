'use strict';

let str = "урок-3-был слишком легким",
    strLen = str.length,
    newStr = "",
    lostWord = "легким",
    lostWordLen =lostWord.length,
    i = 0,
    arr = [20,33, 1,"Человек",2,3],
    arrLen = arr.length,
    sum = 0;

str = (str.charAt(0).toUpperCase() + str.substring(1));
console.log(str);

newStr = str.replace(/-/g, " ");
console.log(newStr);

newStr = newStr.replace(lostWord, "");
console.log(newStr);


lostWord = lostWord.slice(0, (lostWordLen-2)) + "оо";
console.log(lostWord);

for (i = 0; i < arrLen; i++) {
    if (isNaN(arr[i])) {
      console.log("Элемент массива \"" + arr[i] + "\" не число!");  
    } else {
        sum = (sum + (arr[i] **= 3));
    }
}
console.log(Math.sqrt(sum));

function modifyString() {
    let incStr = prompt("Введите строку с проивольным текстом.", "");
    while ( (typeof(incStr) !== "string") || (incStr == "") ) {
        alert("Ошибка ввода данных. Повторите попытку.");
        incStr = prompt("Введите строку с проивольным текстом.");
    }
    incStr = incStr.trim();
    if (incStr.length > 50) {
        incStr = (incStr.slice(0, 50) + "...");
        console.log(incStr);
    }
}
modifyString();




