"use strict";
let money = 40000;
let income = 25000;
let addExpenses;
let deposit = true;
let mission = 182000;
let period = 7;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
//console.log(addExpenses.length);
console.log('"Период равен ' + period + ' месяцев"');
console.log('"Цель заработать ' + mission + ' рублей"');
//addExpenses = addExpenses.toLowerCase();

let budgetDay = money / 30;
console.log(Math.floor(budgetDay));

money = +prompt("Ваш месячный доход");
//console.log(money);
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses);
console.log(addExpenses.split(", "));
deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");

let budgetMonth = money - (amount1 + amount2);
console.log("Бюджет в месяц: " + budgetMonth);
let missionPeriod = mission / budgetMonth;
console.log("Кол-во месяцев для выполнения цели: " + Math.floor(missionPeriod));
if (budgetMonth >= 1200) {
  console.log("У Вас высокий уровень дохода");
}
if (budgetMonth < 1200 && budgetMonth >= 600) {
  console.log("У Вас средний уровень дохода");
}
if (budgetMonth < 600 && budgetMonth >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
}
if (budgetMonth < 0) {
  console.log("Что то пошло не так");
}