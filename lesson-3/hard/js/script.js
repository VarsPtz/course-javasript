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


for (i = 0; i < strLen; i++) {
    if (str.charAt(i) == "-") {
        newStr += " ";
    } else {
        newStr += str.charAt(i);
    }
}
console.log(newStr);

var pos = 0;
while (true) {
   var foundPos = str.indexOf(lostWord, pos);
   if (foundPos == -1) {
       break;
   } else {
       newStr = newStr.replace(lostWord, "");
       pos = foundPos + 1;  
   }
}
console.log(newStr);


lostWord = lostWord.slice(0, (lostWordLen-2)) + "оо";
console.log(lostWord);

for (i = 0; i < arrLen; i++) {
    if (isNaN(arr[i])) {
      console.log("Элемент массива \"" + arr[i] + "\" не число!");  
    } else {
        // console.log(i);
        sum = (sum + (arr[i] **= 3));
        // console.log(sum);
    }
}
console.log(Math.sqrt(sum));

function modifyString() {
    let incStr = prompt("Введите строку с проивольным текстом.", "");
    while ( (typeof(incStr) !== "string") || (incStr == "") ) {
        alert("Ошибка ввода данных. Повторите попытку.");
        incStr = prompt("Введите строку с проивольным текстом.");
    }
    for (i = 0; i < incStr.length; i++) {
        if (incStr.charAt(0) == " ") {
           incStr = incStr.substring(1);
        } else {
            break;
        }
    }
    for (i = incStr.length; i > 0; i--) {
        if (incStr.charAt(i-1) == " ") {
            incStr = incStr.slice(0, -1);
        } else {
            break;
        }
    }
    // console.lo12345678901234567890123456789012345678901234567890g(incStr + "111");
    if (incStr.length > 50) {
        incStr = (incStr.slice(0, 50) + "...");
        console.log(incStr);
    }
}
modifyString();




