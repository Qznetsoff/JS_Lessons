"use strict";
let money = 40000;
let income = 25000;
let addExpenses = "Каршеринг, Кварплата, Телефон, Интернет";
let deposit = true;
let mission = 182000;
let period = 7;
let showTypeOf = function (data) {
  console.log(data, typeof (data));
}
showTypeOf(money)
showTypeOf(income)
showTypeOf(deposit);
console.log(addExpenses.length);
console.log('"Период равен ' + period + ' месяцев"');
console.log('"Цель заработать ' + mission + ' рублей"');
addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(", "));
// let budgetDay = money / 30;
// console.log(budgetDay);

money = +prompt("Ваш месячный доход");
//console.log(money);
addExpenses += ", " + prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses);
deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");

//let budgetMonth = money - (amount1 + amount2);
//console.log("Бюджет в месяц: " + budgetMonth);
//let missionPeriod = mission / budgetMonth;
//console.log("Кол-во месяцев для выполнения цели: " + Math.floor(missionPeriod));

//задание №4
const getExpensesMonth = function () {
  return amount1 + amount2 //  1
}
console.log('Расходы за месяц ', getExpensesMonth());
const getAccumulatedMonth = function () {
  return money - getExpensesMonth() // 2
}
//console.log('Накопленные средства за месяц: ', getAccumulatedMonth());
let accumulatedMonth = getAccumulatedMonth(); // 3
console.log('Накопленные средства за месяц: ', accumulatedMonth);
const getTargetMonth = function (a, b) {
  return a / b;
}
let TargetMonth = getTargetMonth(mission, accumulatedMonth);
console.log('Период за который будет достигнута цель: ', Math.floor(TargetMonth)); //4);
let budgetDay = accumulatedMonth / 30;
console.log('Накопление за день: ', budgetDay); //6 
let getStatusIncome = function () {
  if (accumulatedMonth >= 1200) {
    return ("У Вас высокий уровень дохода");
  }
  if (accumulatedMonth < 1200 && accumulatedMonth >= 600) {
    return ("У Вас средний уровень дохода");
  }
  if (accumulatedMonth < 600 && accumulatedMonth >= 0) {
    return ("К сожалению у вас уровень дохода ниже среднего");
  }
  if (accumulatedMonth < 0) {
    return ("Что то пошло не так");
  }
}
console.log(getStatusIncome());