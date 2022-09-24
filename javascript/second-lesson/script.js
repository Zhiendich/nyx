// 1
{
  //   let i = 3;
  // Последний вывод будет один, цикл while выполняется пока условие не будет выполнено,
  // поэтому когда переменная будет иметь значение 0 условие станет ложным и цикл остановится
  //   while (i) {
  //     alert(i--);
  //   }
}
// 2
{
  //   let a = 1;
  //   let b = 2;
  //   let c = 3;
  //   if (b > a && c > b) {
  //     a = a ** 2;
  //     b = b ** 2;
  //     c = c ** 2;
  //   } else {
  //     a = -a;
  //     b = -b;
  //     c = -c;
  //   }
  //   alert(`a : ${a}, b:${b}, c: ${c}`);
}
// 3
{
  //   let a = 3;
  //   let b = 2;
  //   let c = 1;
  //   if ((b > a && c > b) || (a > b && b > c)) {
  //     a = a ** 2;
  //     b = b ** 2;
  //     c = c ** 2;
  //   } else {
  //     a = -a;
  //     b = -b;
  //     c = -c;
  //   }
  //   alert(`a : ${a}, b:${b}, c: ${c}`);
}
// 4
{
//   let a = 1;
//   let b = 2;
//   let c = 3;
//   let closer;
//   let distance;
//   if (b - a < c - a) {
//     closer = "B";
//     distance = b - a;
//   } else {
//     closer = "C";
//     distance = c - a;
//   }
  // prettier-ignore
  //   alert(`Ближайшая точка до точки А : точка ${closer}, расстояние до точки А: ${distance}`);
}
// 5
{
  //   let x = 3;
  //   let y = 2;
  //   if (x === 0 && y === 0) {
  //     alert(0);
  //   } else if (x === 0) {
  //     alert(1);
  //   } else if (y === 0) {
  //     alert(2);
  //   } else {
  //     alert(3);
  //   }
}
// 6
{
  //   let x = -3;
  //   let y = -2;
  //   if (x > 0 && y > 0) {
  //     alert("Координатная ось номер 1");
  //   } else if (x < 0 && y > 0) {
  //     alert("Координатная ось номер 2");
  //   } else if (x < 0 && y < 0) {
  //     alert("Координатная ось номер 3");
  //   } else if (x > 0 && y < 0) {
  //     alert("Координатная ось номер 4");
  //   } else {
  //     alert("Точка не должна лежать на координатной оси!!!");
  //   }
}

// 7
{
  //   let ax = 2;
  //   let ay = 5;
  //   let bx = 7;
  //   let by = 5;
  //   let cx = 2;
  //   let cy = 1;
  //   let dx;
  //   let dy;
  //   if (ax == cx) {
  //     dx = bx;
  //   } else if (bx == cx) {
  //     dx = ax;
  //   } else if (ax == bx) {
  //     dx = cx;
  //   }
  //   if (ay == by) {
  //     dy = cy;
  //   } else if (ay == cy) {
  //     dy = by;
  //   }
  //   if (cy == by) {
  //     dy = ay;
  //   }
  //   alert(`Координаты точки d : х = ${dx}, y = ${dy}`);
}
// 8
{
  //   let year = 1944;
  //   if (year % 4 == 0) {
  //     if (year % 100 !== 0) {
  //       alert("Высокосный");
  //     } else if (year % 400 == 0) {
  //       alert("Высокосный");
  //     } else {
  //       alert("Невысокосный");
  //     }
  //   } else {
  //     alert("Невысокосный");
  //   }
}
// 9
{
  //   let number = -3;
  //   if (number % 2 == 0 && number > 0) {
  //     alert("Позитивное парное число");
  //   } else if (number % 2 !== 0 && number > 0) {
  //     alert("Позитивное непарное число");
  //   } else if (number % 2 == 0 && number < 0) {
  //     alert("Негативное парное число");
  //   } else if (number % 2 !== 0 && number < 0) {
  //     alert("Негативное непарное число");
  //   } else {
  //     alert("Нулевое число");
  //   }
}
// 10
{
  //   let number = -100;
  //   if (number < 10 && number % 2 == 0) {
  //     alert("Однозначное парное число");
  //   } else if (number > 10 && number < 100 && number % 2 == 0) {
  //     alert("Двух значное парное число");
  //   } else if (number >= 100 && number % 2 == 0) {
  //     alert("Трех значное  парное число");
  //   }
  //   if (number < 10 && number % 2 !== 0) {
  //     alert("Однозначное непарное число");
  //   } else if (number > 10 && number < 100 && number % 2 !== 0) {
  //     alert("Двух значное непарное число");
  //   } else if (number >= 100 && number % 2 !== 0) {
  //     alert("Трех значное  непарное число");
  //   }
}
// 11
{
  // Результат вывода будет разным  в первом случае 4 так как префиксная форма возвращает новое значение,
  //  которое меньше 5 поэтому выводит 4, а постфиксная форма выводит старое значение поэтому,
  // при сравнение значение i все еще меньше 5 но потом оно увеличивается и поэтому выводит 5.
}
// 12
{
  // Выведутся одинаковые значение 4, так как в приведенных примерах циклов результаты выражений не используются, то для циклов никакой разницы нет,
  // в циклах используются значения переменной i уже после вычисления выражений с инкрементами.
}
// 13
{
  //   for (let index = 1; index <= 10; index++) {
  //     if (index % 2 == 0) {
  //       console.log(index);
  //     }
  //   }
}
// 14
{
  //   let number = 0;
  //   while (number < 3) {
  //     alert(`number ${number}!`);
  //     number++;
  //   }
}
// 15
{
  //   let flag = true;
  //   while (flag) {
  //     let num = prompt("Введите число больше 100", 0);
  //     if (num > 100 || num == null) {
  //       flag = false;
  //     }
  //   }
}
// 16
{
  //   for (let i = 1; i <= 10; i++) {
  //     if (i == 1) {
  //       console.log(i);
  //       continue;
  //     }
  //     for (let y = 2; y <= i; y++) {
  //       if (i == y) {
  //         console.log(i);
  //         break;
  //       } else if (i % y == 0) {
  //         break;
  //       } else {
  //         console.log(i);
  //         break;
  //       }
  //     }
  //   }
}
// 17
{
  //   let firtsNum = prompt("Введите число 1", 0);
  //   let secondNum = prompt("Введите число 2", 0);
  //   if (
  //     !isNaN(+firtsNum) &&
  //     !isNaN(+secondNum) &&
  //     firtsNum !== null &&
  //     secondNum !== null
  //   ) {
  //     alert((firtsNum + secondNum) / 2);
  //   } else {
  //     alert("Введите числа !");
  //   }
}

// 18
{
  //   let num = prompt("Введите число", 0);
  //   if (!isNaN(+num) && num !== null) {
  //     alert(num ** 2);
  //   } else {
  //     alert("Введите число!");
  //   }
}
// 19
{
  //   let firstNum = +prompt("Введите число 1", 0);
  //   let secondNum = +prompt("Введите число 2", 0);
  //   let thirdNum = +prompt("Введите число 3", 0);
  //   if (firstNum < secondNum && secondNum < thirdNum) {
  //     alert(thirdNum - firstNum);
  //   } else if (firstNum > secondNum && firstNum < thirdNum) {
  //     alert(thirdNum - secondNum);
  //   } else if (firstNum > secondNum && secondNum > thirdNum) {
  //     alert(firstNum - thirdNum);
  //   } else if (firstNum > thirdNum && thirdNum > secondNum) {
  //     alert(firstNum - secondNum);
  //   } else if (secondNum > thirdNum && thirdNum > firstNum) {
  //     alert(secondNum - firstNum);
  //   } else if (secondNum > firstNum && firstNum > thirdNum) {
  //     alert(secondNum - thirdNum);
  //   } else {
  //     alert("Введите правильные числа !");
  //   }
}
// 20
{
  //   let num = prompt("Введите парное число", 0);
  //   if (num % 2 == 0) {
  //     alert("Парное");
  //   } else {
  //     alert("Непарное");
  //   }
}
// 21
{
  //   let number = 299;
  //   if (String(number).length == 1) {
  //     alert(`Количество цифр : ${String(number).length}`);
  //   } else {
  //     let sum = 0;
  //     for (let index = 0; index < String(number).length; index++) {
  //       sum += +String(number)[index];
  //     }
  //     alert(`Количество цифр : ${String(number).length}, их сумма : ${sum}`);
  //   }
}
// 22
{
  //   let inch = 2.54;
  //   let unit = prompt(
  //     "Выберите значение единицы введя слово сантиметр(с) или дюйм(д)"
  //   );
  //   if (unit === "д") {
  //     let number = +prompt(
  //       "Введите число которое хотите конвертировать в эту величину"
  //     );
  //     alert(`Значение в сантиметрах будет : ${(number * inch).toFixed(2)}`);
  //   } else if (unit === "с") {
  //     let number = +prompt(
  //       "Введите число которое хотите конвертировать в эту величину"
  //     );
  //     alert(`Значение в дюймах будет : ${(number / inch).toFixed(2)}`);
  //   } else {
  //     alert("Введите правильное название величины !");
  //   }
}
// 23
{
  //   alert("Выберите 1 из 4 правильных ответов");
  //   let answer;
  //   answer = prompt(
  //     "Какого типа данных нет в джаваскрипт? \n a) number; b) string; c) char; d) void"
  //   );
  //   if (answer === "d") {
  //     answer = prompt(
  //       "Какого оператора привязки контекста нет в джаваскрипт? \n a) bind; b) apply; c) call; d) priv"
  //     );
  //     if (answer === "d") {
  //       answer = prompt(
  //         "Какой хук меняет состояние в React? \n a) useEffect; b) useContext; c) useNavigate; d) useState"
  //       );
  //       if (answer === "d") {
  //         alert("Поздравляю вы выиграли миллион");
  //       } else {
  //         alert("Неправильный ответ :( Вы теряете возможность получить миллион");
  //       }
  //     } else {
  //       alert("Неправильный ответ :( Вы теряете возможность получить миллион");
  //     }
  //   } else {
  //     alert("Неправильный ответ :( Вы теряете возможность получить миллион");
  //   }
}
// 24
{
  //   let number = 333;
  //   let result = +String(number)[0];
  //   if (number % 2 == 0) {
  //     for (let index = 1; index < String(number).length; index++) {
  //       result += +String(number)[index];
  //     }
  //   } else {
  //     for (let index = 1; index < String(number).length; index++) {
  //       result *= +String(number)[index];
  //     }
  //   }
  //   alert(result);
}
// 26
{
  //   let firstNum = +prompt("Введите сторону 1", 0);
  //   let secondNum = +prompt("Введите сторону 2", 0);
  //   let thirdNum = +prompt("Введите сторону 3", 0);
  //   if (
  //     firstNum + secondNum < thirdNum ||
  //     firstNum + thirdNum < secondNum ||
  //     secondNum + thirdNum < firstNum
  //   ) {
  //     alert("Треугольник не существует");
  //   } else {
  //     alert("Треугольник существует");
  //   }
}
// 26
{
  //   let ax = 4;
  //   let ay = 9;
  //   let radius = 10;
  //   let hypotenuse = Math.sqrt(ax ** 2 + ay ** 2);
  //   if (hypotenuse <= radius) {
  //     alert("Точка принадлежит кругу");
  //   } else {
  //     alert("Точка НЕ принадлежит кругу");
  //   }
}
// 27
{
  //   const user = {};
  //   user.name = "John";
  //   user.surname = "Smith";
  //   user.name = "Pete";
  //   delete user.name;
}
// 28
{
  // Да сработает, мы меняем свойство внутри объекта а не саму переменную объекта
}
// 29
{
  //   let sum = 0;
  //   let salaries = {
  //     John: 100,
  //     Ann: 160,
  //     Pete: 130,
  //   };
  //   for (const key in salaries) {
  //     sum += salaries[key];
  //   }
  //   alert(sum);
}
// 30
{
  //   let user = {
  //     name: "Nikita",
  //     salary: 1000,
  //     developer: true,
  //   };
  //   const multiplyNumeric = (obj) => {
  //     for (const key in obj) {
  //       if (typeof obj[key] === "number") {
  //         obj[key] = obj[key] * 2;
  //       }
  //       alert(obj[key]);
  //     }
  //   };
  //   multiplyNumeric(user);
}
