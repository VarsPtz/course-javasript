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
    expensesItems = document.querySelectorAll(".expenses-item");
    
expensesItems.forEach(function (item, i, massExpenses ) {
 massExpenses.push(item.value);
});    