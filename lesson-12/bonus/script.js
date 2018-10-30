let assert = require("chai").assert;
// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];


// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};
// console.log(each(arr1, myFunc).length);
var outcomningArr = each(arr1, myFunc);
// console.log(outcomningArr[0] == 8 && outcomningArr[1] == 7 && outcomningArr[2] == 6 && outcomningArr[3] == 5 && outcomningArr[0] == 4);
var rightNumbers = (outcomningArr[0] == 8 && outcomningArr[1] == 7 && outcomningArr[2] == 6 && outcomningArr[3] == 5	&& outcomningArr[4] == 4);

describe("sum", () =>
			it("Проверяем a + b > 10 ?", () => {
				assert.equal(sum(9, 2), true, "a + b <= 10 !");
			})
);

describe("sum1", () =>
	it("Переменная num равна 5 ?", () => {
		assert.typeOf(num, "number", "Первый аргумент не число");
		assert.equal(num, 5, "Первый аргумент не равен 5.");
	})
);

describe("outcomningArr", () =>
	it("Квадтрантый корень", () => {
		assert.equal(typeof outcomningArr, "object");
		assert.equal(outcomningArr.length, 5);
		assert.equal(rightNumbers, true);
	})
);

