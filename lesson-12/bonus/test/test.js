let assert = require("chai").assert;
let newRes1 = sum1(5, 2);

function sum(num, num2) {
    return (num === num2);
}

function sum1(num, num2) {
  return num;
}

describe("sum", () => 
    it("Проверяем число 1 равно числу 2 ?", () => {
        assert.equal(sum(2,2), true, "Числа не равны!");
    })
);


describe("sum1", () =>
    it("Переменная num равна 5 ?", () => {
        assert.typeOf(newRes1, "number", "Первый аргумент не число");
        assert.equal(newRes1, 5, "Первый аргумент не равен 5.");
    })        
);

let arr = [2, 3, "abc", true];






// function sayName(name) {
//     let message = "My name is + name";
//     return message; 
// }

// let arr = [5,-3,6,-5,0,-7,8,10];
// let result = arr.reduce(function(sum,elem) {
//     return sum + elem;
// });

// let assert = require("chai").assert; // подключение стиля работы теста

// describe("sayName", function() {
//     it("Получаем фразу с новым именем", function() {
//        assert.typeOf(sayName("Alex"), "string"); 
//     });
// });

// describe("arr", function() {
//     it("Получаем cумму чисел", function() {
//         assert.equal(result, 13);
//     });
// });

// let assert = require("chai").assert;

// describe("Таймер", function() {
//     it("Возвращает ли функция объект?", function() {
//         assert.typeOf(getTimeRemaining(), "object");     
//     });

//     it("Устанавливаем таймер обратного отсчёта", function() {
//         assert.typeOf(setClock(), "string");
//     });
// });