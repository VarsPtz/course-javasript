'use strict';
let massOfCouples = [],
    pairsMass = [];



function getFriendlyNumbers(start, end) {
    let num1 = start.toFixed();
    let num2 = end.toFixed();
    if (num1 >= num2 || isNaN(num1) || isNaN(num2) || num1 < 0 || num2 <= 0) {
        console.log("Не соблюдены условия задачи. Выполнение прервано!");
        return false;
    } else {
        for (num1; num1 < num2; num1++) {
            //   console.log(num1, num2);
            for (let i = num1 + 1; i <= num2; i++) {
                if (getDividersSum(num1) == i && getDividersSum(i) == num1) {
                    console.log("Числа " + num1 + " и " + i + " являются дружественными.");
                    pairsMass.push(num1);
                    pairsMass.push(i);
                    massOfCouples.push(pairsMass);
                    //   pairsMass.length = 0;
                }
                pairsMass = [];
            }
        }
    }
}
getFriendlyNumbers(1, 1300,23);

function getDividersSum(num) {
    return getSum(getDividers(num));
}

function getDividers(num) {
    let arr = [];
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function getSum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++ ) {
        sum += arr[i]
    }
    return sum;
}

