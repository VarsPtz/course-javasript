// let massOfCouples = [],
//     pairsMass = [];



function getFriendlyNumbers(start, end) {
    let massOfCouples = [],
        pairsMass = [],
        num1 = start,
        num2 = end;
    // console.log(typeof(num1), typeof(num2));
    // console.log(isNaN(num1) || isNaN(num2));
    // console.log(isNaN(num1));
    // console.log(isNaN(num2));
    // console.log(((num1 ^ 0) === num1));
    // console.log(((num2 ^ 0) === num2));
    // console.log(isNaN(num1) || isNaN(num2) || num1 > num2 || num1 < 0 || num2 < 0 || ((num1 ^ 0) === num1) || ((num2 ^ 0) === num2));
    if (typeof(num1) == "string" || typeof(num2) == "string" || num1 > num2 || num1 < 0 || num2 < 0) {
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
                }
                pairsMass = [];
            }
            // return massOfCouples;
        }
        // return massOfCouples;
    }
    return massOfCouples;
}
console.log(getFriendlyNumbers(1, 1210));

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
        sum += arr[i];
    }
    return sum;
}

module.exports = {
    firstName: 'Alexandr',
    secondName: 'Varugin',
    task: getFriendlyNumbers
};