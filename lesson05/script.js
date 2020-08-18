"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let income = 25000;
let addExpenses;
let deposit = true;
let mission = 182000;
let period = 7;

let start = function () {
  // money = prompt("Ваш месячный доход");

  //   while (!isNumber(money)) {
  //     money = prompt("Ваш месячный доход");
  //   }
  // };
  do {
    money = prompt("Ваш месячный доход");
  } while (!isNumber(money));
};
start();

let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('"Период равен ' + period + ' месяцев"');
console.log('"Цель заработать ' + mission + ' рублей"');
//money = +prompt("Ваш месячный доход");

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
console.log(addExpenses);
console.log(addExpenses.split(", "));
deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);
// let expenses1 = prompt("Введите обязательную статью расходов?");
// let amount1 = +prompt("Во сколько это обойдется?");
// let expenses2 = prompt("Введите обязательную статью расходов?");
// let amount2 = +prompt("Во сколько это обойдется?");

let expenses = [];
//let amount1,amount2;
let getExpensesMonth = function () {
    //return amount1 + amount2 //  1
    let sum = 0;
    let question;
    for (let i = 0; i < 2; i++) {
      expenses[i] = prompt("Введите обязательную статью расходов?");
      do {
        question = prompt("Во сколько это обойдется?");
      }
      while (!isNumber(question))
      console.log(question);
      sum += parseInt(question;
      };
      return sum;
    };
    //getExpensesMonth();
    let expensesAmount = getExpensesMonth();
    console.log("Расходы за месяц ", expensesAmount);
    const getAccumulatedMonth = function () {
      return money - expensesAmount; // 2
    };
    let accumulatedMonth = getAccumulatedMonth(); // 3
    console.log("Накопленные средства за месяц: ", accumulatedMonth);
    let getTargetMonth = function (a, b) {
      return a / b;

    };
    let targetMonth = getTargetMonth(mission, accumulatedMonth);
    if (targetMonth > 0) {
      console.log(
        "Период за который будет достигнута цель: " + Math.floor(targetMonth)
      );

      //4);
      let budgetDay = accumulatedMonth / 30;
      console.log("Накопление за день: ", Math.floor(budgetDay)); //6
      let getStatusIncome = function () {
        if (accumulatedMonth >= 1200) {
          return "У Вас высокий уровень дохода";
        }
        if (accumulatedMonth < 1200 && accumulatedMonth >= 600) {
          return "У Вас средний уровень дохода";
        }
        if (accumulatedMonth < 600 && accumulatedMonth >= 0) {
          return "К сожалению у вас уровень дохода ниже среднего";
        }
        if (accumulatedMonth < 0) {
          return "Что то пошло не так";
        }
      };

      console.log(getStatusIncome());
    } else {
      console.log("Цель не будет достигнута");
    }