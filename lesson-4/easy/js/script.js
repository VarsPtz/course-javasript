"use strict";

let money, time, items;

function start() {
  money = +prompt("Ваш бюджет на месяц в рублях?", "20000");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-09-21");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц в рублях?", "20000");
  }
}
start();

let optionalExpenses = {},
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: optionalExpenses,
    income: [],
    savings: true,
    chooseExpenses: function () {
      for (let i = 0; i < 2; i++) {
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
    },
    detectDayBudget: function () {
      appData.moneyPerDay = Number(((appData.budget / 30).toFixed(2)));
      alert("Ваш бюджет на один день: " + ((appData.budget / 30).toFixed(2)) + " руб.");
    },
    detectLevel: function () {
      if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
      } else {
        console.log("Произошла ошибка");
      }
    },
    checkSavings: function () {
      if (appData.savings == true) {
        let save = +prompt("Какова сумму накоплений?"),
          percent = +prompt("Под какой процент?");
        appData.monthIncome = Number((save / 100 / 12 * percent).toFixed(2));
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome + " руб.");
      }
    },
    chooseOptExpenses: function () {
      for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "кино");
        if ((typeof (a)) === 'string' && ((typeof (a)) != null) &&
          a != "" && a.length < 50) {
          console.log("done chooseOptExpenses");
          appData.optionalExpenses[i + 1] = a;
        } else {
          console.log("что-то пошло не так");
          alert("Вы ввели неправильные значения или пропустил одно из них. Пожалуйста, введите правильные значения!");
          --i;
        }
      }
    },
    chooseIncome: function () {
      items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
      while (!((typeof (items)) === 'string' && ((typeof (items)) != null) && items != "")) {
        items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
      }
      appData.income = items.split(', ');
      let lastItems = (prompt("Может что-то ещё?"));
      while (!((typeof (lastItems)) === 'string' && ((typeof (lastItems)) != null) && lastItems != "")) {
        lastItems = prompt("Может что-то ещё?", "");
      }
      appData.income.push(lastItems);
      appData.income.sort();
      appData.income.forEach(function (item, i, mass) {
        alert("Способ дополнительного заработка №" + (i + 1) + ": " + item);
      });
    }
    // getAllProperties: function () {
    //   for (let key in appData) {
    //     console.log("Наша программа включает в себя данные: " + key + " имеет значение " + appData[key]);
    //     // console.log("Наша программа включает в себя данные: " + key + " имеет значение " + appData.key);
    //   }
    // }
 };

function getAllProperties() {
  for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
  }
}
getAllProperties();