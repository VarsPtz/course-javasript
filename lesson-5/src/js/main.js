let startCalculation = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    expensesItems = document.querySelectorAll(".expenses-item"),
    expensesItem1Name = document.querySelectorAll(".expenses-item")[0],
    expensesItem1Price = document.querySelectorAll(".expenses-item")[1],
    expensesItem2Name = document.querySelectorAll(".expenses-item")[2],
    expensesItem2Price = document.querySelectorAll(".expenses-item")[3],
    massExpenses = [],
    getApprove1 = document.querySelectorAll("button")[0],
    getApprove2 = document.querySelectorAll("button")[1],
    getCalculate = document.querySelectorAll("button")[2],
    startCalculate = document.querySelectorAll("button")[3],
    optionalExpensesItem1 = document.querySelectorAll(".optionalexpenses-item")[0],
    optionalExpensesItem2 = document.querySelectorAll(".optionalexpenses-item")[1],
    optionalExpensesItem3 = document.querySelectorAll(".optionalexpenses-item")[2],
    chooseIncome = document.querySelector("#income"),
    savingsCheck = document.querySelector("#savings"),
    chooseSum = document.querySelector("#sum"),
    choosePercent = document.querySelector("#percent");


//Тестирование полученных значений в консоли
// console.log(getApprove1, getApprove2, getCalculate, startCalculate, 
//  expensesItem1Name, expensesItem1Price, expensesItem2Name, 
//  expensesItem2Price, optionalExpensesItem1, optionalExpensesItem2, optionalExpensesItem3);

//Накапливание значения value полей input-ов
// for (let i = 0; i < expensesItems.length; i++) {
//    let z = (expensesItems[i].value);
//    massExpenses.push(z);
// }

