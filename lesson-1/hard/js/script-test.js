'use strict';

let num = 33721,
    sum = 1,
    // sum1 = 1,
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
    // console.log(sum);

    alert("Первые 2 цифры полученного числа: " + getNumbers(sum));
    // sum = String(sum);
    // for (let i = 0; i < 2; i++) {
    //     total = total + sum.charAt(i);
    // }
    // alert("Первые 2 цифры полученного числа: " + total);
    // console.log(typeof(total));
}

function getNumbers(sum) {
    sum = String(sum);
    for (let i = 0; i < 2; i++) {
        total = total + sum.charAt(i);
    }
    return total;
}

getMultiplication();

// function getMultiplication2(num) {
//     console.log(typeof(num));
//     num = String(num);
//     console.log(typeof (num));
//     for (let i = 0; i < num.length; i++) {
//         console.log(i, num.charAt(i));
//         if (num.charAt(i) != 0) {
//             sum1 = sum1 * num.charAt(i);
//         }
//     }
//     console.log(sum1);
//     sum1 = sum1 ** 3;
//     console.log(sum1);
// };

// getMultiplication2(33721);