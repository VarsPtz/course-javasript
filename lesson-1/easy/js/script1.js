"use strict";
let money = +prompt("Ваш бюджет на месяц в рублях?", "20000"),
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-09-21"),
  expensesItem1 = prompt("Введите обязательную статью расходов в этом месяце", "интернет"),
  expensesCost1 = +prompt("Во сколько обойдется ?", "500"),
  expensesItem2 = prompt("Введите обязательную статью расходов в этом месяце", "сотовая связь"),
  expensesCost2 = +prompt("Во сколько обойдется ? ", "1000"),
  expenses = {
    [expensesItem1]: expensesCost1,
    [expensesItem2]: expensesCost2
  },
  optionalExpenses = {},
  income = [],
  appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: income,
    savings: false
  };
alert("Ваш бюджет на один день: " + ((appData.budget / 30).toFixed(2)) + " руб.");
console.log(appData.timeData, appData.expenses, appData.expenses[expensesItem1], appData.savings);