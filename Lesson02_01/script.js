let num = 266219;

let arrayNumber = (num.toString().split(''));
console.log(arrayNumber);
let multy = (arrayNumber[0] * arrayNumber[1] * arrayNumber[2] * arrayNumber[3] * arrayNumber[4] * arrayNumber[5]); //сумма цифр числа
console.log(multy);
let pow = multy ** 3; //степень
console.log(pow);
//console.log(typeof pow);
pow = pow.toString();
//console.log(typeof pow);
alert(pow.substring(0, 2));