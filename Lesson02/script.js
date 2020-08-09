let money = 40000;
let income = 25000;
let addExpenses = 'Каршеринг, кварплата, телефон, интернет';
let deposit = true;
let mission = 182000;
let period = 7;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length); //длина строки
console.log('"Период равен ' + (period) + ' месяцев"');
console.log('"Цель заработать ' + (mission) + ' рублей"');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = money / 30;
console.log(budgetDay);