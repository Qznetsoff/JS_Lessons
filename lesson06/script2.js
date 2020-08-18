'use strict';

"Загадывание случайного числа от 1 до 100"



// Что должна делать программа:

//   —спрашивает пользователя: "Угадай число от 1 до 100".—если пользовательское число больше, то бот выводит "Загаданное число меньше"
// и предлагает ввести новый вариант;—
// если пользовательское число меньше, то бот выводит "Загаданное число больше"
// и предлагает ввести новый вариант;—
// если пользователь ввел не число, то выводит сообщение "Введи число!"
// и предлагает ввести новый вариант;—
// если пользователь нажимает "Отмена", то игра заканчивается.


// Программа должны быть выполнена с помощью рекурсии, без единого цикла.
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let findNumber = function () {
  let number = Math.ceil(Math.random() * 100);
  console.log(number);
  let getNumber = function () {
    let getAct = function (flag) {
      if (flag) {
        getNumber()
      }
    }
    let activity;
    let inputNumber = prompt('Угадай число от 1 до 100');
    if (inputNumber == number) {
      alert("Верно");
    } else if (inputNumber > number) {
      activity = confirm('Загаданное число меньше');
      getAct(activity);

    } else if (inputNumber < number) {
      activity = confirm('Загаданное число больше');
      getAct(activity);
    } else if (inputNumber === Null) {
      alert('Повтори попытку')
    } else if (!isNaN(parseFloat(number)) || parseFloat(number) > 100) {
      activity = confirm('Введите число от 1 до 100')
      getAct(activity);
    }
  }
  return getNumber();
}
findNumber()