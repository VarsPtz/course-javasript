"use strict";
let startBtn = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesBtn = document.querySelectorAll("button")[0],
    optionalExpensesBtn = document.querySelectorAll("button")[1],
    countBtn = document.querySelectorAll("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    expensesItem1Name = document.querySelectorAll(".expenses-item")[0],
    expensesItem1Price = document.querySelectorAll(".expenses-item")[1],
    expensesItem2Name = document.querySelectorAll(".expenses-item")[2],
    expensesItem2Price = document.querySelectorAll(".expenses-item")[3],
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    startCalculate = document.querySelectorAll("button")[3],
    optionalExpensesItem1 = document.querySelectorAll(".optionalexpenses-item")[0],
    optionalExpensesItem2 = document.querySelectorAll(".optionalexpenses-item")[1],
    optionalExpensesItem3 = document.querySelectorAll(".optionalexpenses-item")[2];

let money, time;

startBtn.addEventListener("click", function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-09-21");
  while (time == "" || time == null) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-09-21");
  }
  money = +prompt("Ваш бюджет на месяц в рублях?", "20000");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц в рублях?", "20000");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

function checkInputsData(incomingMass) {
    for (var i = 0; i < incomingMass.length; i++) {
        console.log(incomingMass[i].value);
        if (incomingMass[i].value == "") {
            return true;
        }
    }
    return false;
}



expensesItem[1].addEventListener("keyup", function() {
    var numRus = new RegExp("[0-9]");
    var cutString = expensesItem[1].value;
    var cutStringLen = expensesItem[1].value.length;
    
    if (numRus.test(cutString.substr(-1))) {
        // console.log("match");
    } else {
        cutString = cutString.substring(0, cutStringLen - 1);
        expensesItem[1].value = cutString;
    }    
});

expensesItem[3].addEventListener("keyup", function () {
    var numRus = new RegExp("[0-9]");
    var cutString = expensesItem[3].value;
    var cutStringLen = expensesItem[3].value.length;
    
    if (numRus.test(cutString.substr(-1))) {
        // console.log("match");
    } else {
        cutString = cutString.substring(0, cutStringLen - 1);
        expensesItem[3].value = cutString;
    }
});

expensesBtn.addEventListener("click", function(event) {
  if (appData.budget == undefined || appData.budget == "") {
    event.preventDefault();
  } else if (checkInputsData(expensesItem)) {
    event.preventDefault();
  } else {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
      let a = expensesItem[i].value,
        b = expensesItem[++i].value;
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50 &&
        !isNaN(b)
      ) {
        console.log("done");
        appData.expenses[a] = b;
        sum += +b;
      } else {
        console.log("что-то пошло не так");
        alert(
          "Вы ввели неправильные значения или пропустил одно из них. Пожалуйста, введите правильные значения!"
        );
        --i;
      }
    }
    expensesValue.textContent = sum;
    appData.dayExpenses = sum;
  }
});

optionalExpensesItem1.addEventListener("keyup", function() {
    var symRus = new RegExp("[а-яА-ЯёЁ]");
    var cutString = optionalExpensesItem1.value;
    var cutStringLen = optionalExpensesItem1.value.length;

    if (symRus.test(cutString.substr(-1))) {
        // console.log("match");
    } else {
        cutString = cutString.substring(0, cutStringLen - 1);
        optionalExpensesItem1.value = cutString;
    }
});

optionalExpensesItem2.addEventListener("keyup", function () {
    var symRus = new RegExp("[а-яА-ЯёЁ]");
    var cutString = optionalExpensesItem2.value;
    var cutStringLen = optionalExpensesItem2.value.length;

    if (symRus.test(cutString.substr(-1))) {
        // console.log("match");
    } else {
        cutString = cutString.substring(0, cutStringLen - 1);
        optionalExpensesItem2.value = cutString;
    }
});

optionalExpensesItem3.addEventListener("keyup", function () {
    var symRus = new RegExp("[а-яА-ЯёЁ]");
    var cutString = optionalExpensesItem3.value;
    var cutStringLen = optionalExpensesItem3.value.length;
    
    if (symRus.test((optionalExpensesItem3.value).substr(-1))) {
        // console.log("match");
    } else {
        cutString = cutString.substring(0, cutStringLen - 1);
        optionalExpensesItem3.value = cutString;
    }
});

optionalExpensesBtn.addEventListener("click", function(event) {
  optionalExpensesValue.textContent = "";
  if (checkInputsData(optionalExpensesItem)) {
    event.preventDefault();
  } else {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
      let opt = optionalExpensesItem[i].value;
      appData.optionalExpenses[i] = opt;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
  }
});

countBtn.addEventListener("click", function(event) {
  if (appData.budget == undefined || appData.budget == "" || (expensesValue.textContent == "")) {
      event.preventDefault();
  } else {
      if (appData.budget != undefined) {
          appData.moneyPerDay = Number(((appData.budget - appData.dayExpenses) / 30).toFixed(2));
          dayBudgetValue.textContent = appData.moneyPerDay;

          if (appData.moneyPerDay < 100) {
              levelValue.textContent = "Минимальный уровень достатка";
          } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
              levelValue.textContent = "Средний уровень достатка";
          } else if (appData.moneyPerDay > 2000) {
              levelValue.textContent = "Высокий уровень достатка";
          } else {
              levelValue.textContent = "Произошла ошибка";
          }
      } else {
          dayBudgetValue.textContent = "Произошла ошибка";
      }
  }
});

incomeItem.addEventListener("input", function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = Number(((sum / 100 / 12) * percent).toFixed(1));
    appData.yearIncome = Number(((sum / 100) * percent).toFixed(1));

    monthSavingsValue.textContent = appData.monthIncome;
    yearSavingsValue.textContent = appData.yearIncome;
  }
});

percentValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = Number(((sum / 100 / 12) * percent).toFixed(1));
    appData.yearIncome = Number(((sum / 100) * percent).toFixed(1));

    monthSavingsValue.textContent = appData.monthIncome;
    yearSavingsValue.textContent = appData.yearIncome;
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
  dayExpenses: 0
};

// function getAllProperties() {
//   for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key);
//   }
// }
// getAllProperties();
