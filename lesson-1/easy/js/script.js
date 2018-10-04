'use strict';

let budgetOfMonth = +prompt("Ваш бюджет на месяц в рублях?", "20000"),
    nameOfShop = prompt("Название Вашего магазина?", "Магнит"),
    product1 = prompt("Какой тип товаров будем продавать ?", "яблоки"),
    product2 = prompt("Какой тип товаров будем продавать ?", "груши"),
    product3 = prompt("Какой тип товаров будем продавать ?", "виноград"),
    shopGoods = [product1, product2, product3],
// for (let i = 0; i < 3 ; i++) {
//   shopGoods = prompt("Какой тип товаров будем продавать?")
// };    
    employers = {},
    mainList = {
      budget: budgetOfMonth,
      name: nameOfShop,
      shopGoods: shopGoods,
      employers: employers,
      open: false
    };
console.log(budgetOfMonth);
console.log(nameOfShop);
console.log(mainList.budget, mainList.name, mainList.shopGoods[0]);
alert("Ваш бюджет на один день: " + ((mainList.budget / 30).toFixed(2)) + " руб.");