"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let start = function () {
  do {
    money = prompt("Ваш месячный доход");
  } while (!isNumber(money));
  money = parseInt(money);
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let expensesAsk;
    let question;
    for (let i = 0; i < 2; i++) {
      expensesAsk = prompt("Введите обязательную статью расходов?");
      do {
        question = prompt("Во сколько это обойдется?");
      } while (!isNumber(question));
      question = parseInt(question);
      appData.expenses[expensesAsk] = question;
    }
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth = sum;
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.floor(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return "У Вас высокий уровень дохода";
    }
    if (appData.budgetDay < 1200 && appData.budgetDay >= 600) {
      return "У Вас средний уровень дохода";
    }
    if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    }
    if (appData.budgetDay < 0) {
      return "Что то пошло не так";
    }
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
};
appData.asking();
console.log(appData.addExpenses);
appData.getExpensesMonth();
console.log("Расходы за месяц ", appData.expensesMonth);
console.log(appData.budget);
appData.getBudget();
appData.getStatusIncome();
if (appData.getTargetMonth() > 0) {
  console.log(
    "Период за который будет достигнута цель: " +
      Math.floor(appData.getTargetMonth())
  );
} else {
  console.log("Цель не будет достигнута");
}
console.log("Наша программа включает в себя данные:");
for (let key in appData) {
  console.log(key, appData[key]);
}
