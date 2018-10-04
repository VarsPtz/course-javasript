'use strict';

let num = 33721,
    sum = 1,
    total = "";

function getMultiplication() {
    num = String(num);
    for (let i = 0; i < num.length; i++) {
        if (num.charAt(i) != 0) {
         sum = sum * num.charAt(i);
        } 
    }
    console.log(sum);
    sum **= 3;
    alert("Первые 2 цифры полученного числа: " + getNumbers(sum));
}

function getNumbers(sum) {
    sum = String(sum);
    for (let i = 0; i < 2; i++) {
        total = total + sum.charAt(i);
    }
    return total;
}

getMultiplication();
