"use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц в рублях?", "20000");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-09-21");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц в рублях?", "20000");
  }
}
start();

let  optionalExpenses = {},
  income = [],
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: optionalExpenses,
    income: income,
    savings: true
  };

function chooseExpense() {
  for (let i = 0; i < 2; i ++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "интернет"),
      b = +prompt("Во сколько обойдется ?", "500");
    if ((typeof (a)) === 'string' && ((typeof (a)) != null) && ((typeof (b)) != null) &&
      a != "" && b != "" && a.length < 50 && !isNaN(b)) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      console.log("что-то пошло не так");
      alert("Вы ввели неправильные значения или пропустил одно из них. Пожалуйста, введите правильные значения!");
      --i;
    }
  }
}

chooseExpense();

function detectDayBudge() {
  appData.moneyPerDay = Number(((appData.budget / 30).toFixed(2)));
  alert("Ваш бюджет на один день: " + ((appData.budget / 30).toFixed(2)) + " руб.");
}

detectDayBudge();


function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let a = prompt("Статья необязательных расходов?", "кино");
    if ((typeof (a)) === 'string' && ((typeof (a)) != null) &&
      a != "" && a.length < 50) {
      console.log("done chooseOptExpenses");
      appData.optionalExpenses[i+1] = a;
    } else {
      console.log("что-то пошло не так");
      alert("Вы ввели неправильные значения или пропустил одно из них. Пожалуйста, введите правильные значения!");
      --i;
    }
  }
}

chooseOptExpenses();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумму накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.monthIncome = Number((save/100/12*percent).toFixed(2));
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome + " руб.");
  }
}

checkSavings();

// console.log(appData.timeData, appData.expenses, appData.expenses[expensesItem1], appData.savings);
console.log(appData, appData.timeData, appData.moneyPerDay, appData.expenses, appData.savings);