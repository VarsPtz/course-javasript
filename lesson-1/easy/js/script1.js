"use strict";
let money = +prompt("Ваш бюджет на месяц в рублях?", "20000"),
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-09-21"),
  // expensesItem1 = prompt("Введите обязательную статью расходов в этом месяце", "интернет"),
  // expensesCost1 = +prompt("Во сколько обойдется ?", "500"),
  // expensesItem2 = prompt("Введите обязательную статью расходов в этом месяце", "сотовая связь"),
  // expensesCost2 = +prompt("Во сколько обойдется ? ", "1000"),
  // expenses = {
  //   [expensesItem1]: expensesCost1,
  //   [expensesItem2]: expensesCost2
  // },
  
  
  optionalExpenses = {},
  income = [],
  appData = {
    budget: money,
    timeData: time,
    // expenses: expenses,
    expenses: {},
    optionalExpenses: optionalExpenses,
    income: income,
    savings: false
  };

//  appData.expenses.expensesItem1 = expensesCost1;
//  appData.expenses.expensesItem2 = expensesCost2;



// let i = 0;
// while (i < 2) {
//   i++;
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "интернет"),
//     b = +prompt("Во сколько обойдется ?", "500");
//   if ((typeof (a)) === 'string' && ((typeof (a)) != null) && ((typeof (b)) != null) &&
//     a != "" && b != "" && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     console.log("что-то пошло не так");
//     alert("Вы ввели неправильные значения или пропустил одно из них. Пожалуйста, введите правильные значения!");
//     --i;
//   }
// };

// let i = 0;
// do {
//   i++;
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "интернет"),
//     b = +prompt("Во сколько обойдется ?", "500");
//   if ((typeof (a)) === 'string' && ((typeof (a)) != null) && ((typeof (b)) != null) &&
//     a != "" && b != "" && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     console.log("что-то пошло не так");
//     alert("Вы ввели неправильные значения или пропустил одно из них. Пожалуйста, введите правильные значения!");
//     --i;
//   }
// } while (i < 2);


appData.moneyPerDay = Number(((appData.budget / 30).toFixed(2)));

alert("Ваш бюджет на один день: " + ((appData.budget / 30).toFixed(2)) + " руб.");

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

// console.log(appData.timeData, appData.expenses, appData.expenses[expensesItem1], appData.savings);
console.log(appData, appData.timeData, appData.moneyPerDay, appData.expenses, appData.savings);