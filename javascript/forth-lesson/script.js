//1
{
  //   function camelize(str) {
  //     return str
  //       .split("-")
  //       .map((letter, index) =>
  //         index !== 0 ? letter[0].toUpperCase() + letter.slice(1) : letter
  //       )
  //       .join("");
  //   }
  //   alert(camelize("border-left-width"));
  //   alert(camelize("list-style-image"));
  //   alert(camelize("-webkit-transition"));
}
//2
{
  //   let arr = [5, 3, 8, 1];
  //   function filterRange(arr, a, b) {
  //     let newArr = [];
  //     for (let index = 0; index < arr.length; index++) {
  //       if (arr[index] >= a && arr[index] <= b) {
  //         newArr.push(arr[index]);
  //       }
  //     }
  //     return newArr;
  //   }
  //   alert(filterRange(arr, 1, 4));
  //   alert(arr);
}
//3
{
  //   function filterRangeInPlace(arr, a, b) {
  //     for (let index = 0; index < arr.length; index++) {
  //       if (arr[index] <= a || arr[index] >= b) {
  //         arr.splice(index, 1);
  //       }
  //     }
  //   }
  //   let arr = [5, 3, 8, 1];
  //   filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
  //   alert(arr); // [3, 1]
}
//4
{
  //   let arr = [5, 2, 1, -10, 8];
  //   arr.sort((a, b) => b - a);
  //   alert(arr);
}
//5
{
  //   function copySorted(arr) {
  //     let newArr = arr.slice(0);
  //     return newArr.sort();
  //   }
  //   let arr = ["HTML", "JavaScript", "CSS"];
  //   let sorted = copySorted(arr);
  //   alert(sorted);
  //   alert(arr);
}
//6
{
  //   function Calculator() {
  //     this.read = function () {
  //       this.a = +prompt("Введите первое значение", 0);
  //       this.b = +prompt("Введите второе значение", 0);
  //     };
  //     this.plus = function () {
  //       return this.a + this.b;
  //     };
  //     this.minus = function () {
  //       return this.a - this.b;
  //     };
  //     this.multiply = function () {
  //       return this.a * this.b;
  //     };
  //     this.divede = function () {
  //       return this.a / this.b;
  //     };
  //     this.modulo = function () {
  //       return this.a % this.b;
  //     };
  //   }
  //   let calc = new Calculator();
  //   calc.read();
  //   alert(calc.plus());
  //   alert(calc.minus());
  //   alert(calc.multiply());
  //   alert(calc.divede());
  //   alert(calc.modulo());
}
//7
{
  //   let vasya = { name: "Вася", age: 25 };
  //   let petya = { name: "Петя", age: 30 };
  //   let masha = { name: "Маша", age: 28 };
  //   let users = [vasya, petya, masha];
  //   let names = users.sort((a, b) => a.age - b.age);
  //   console.log(names);
}
//8
{
  //   const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);
  //   let vasya = { name: " Вася ", age: 25 };
  //   let petya = { name: " Петя ", age: 30 };
  //   let masha = { name: " Маша ", age: 28 };
  //   let arr = [vasya, petya, masha];
  //   sortByAge(arr);
  //   // тепер : [ vasya , masha , petya ]
  //   alert(arr[0].name); // Вася
  //   alert(arr[1].name); // Маша
  //   alert(arr[2].name); // Петро
}
//9
{
  //   function getAverageAge(arr) {
  //     let sumAge = arr.reduce((sum, current) => sum + current.age, 0);
  //     return sumAge / arr.length;
  //   }
  //   let vasya = { name: "Вася", age: 25 };
  //   let petya = { name: "Петя", age: 30 };
  //   let masha = { name: "Маша", age: 29 };
  //   let arr = [vasya, petya, masha];
  //   alert(getAverageAge(arr));
}
//10
{
  //   function unique(arr) {
  //     let newArr = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       let findCoincidence = newArr.find((item) => item === arr[i]);
  //       if (findCoincidence === undefined) {
  //         newArr.push(arr[i]);
  //       }
  //     }
  //     return newArr;
  //   }
  //   let strings = [
  //     "кришна",
  //     "кришна",
  //     "харе",
  //     "харе",
  //     "харе",
  //     "харе",
  //     "кришна",
  //     "крішна",
  //     ":-O",
  //   ];
  //   alert(unique(strings)); // кришна, харе, :-O Здесь опечатка есть еще крішна
}
//11
{
  //   function unique(arr) {
  //     let uniq = new Set();
  //     let uniqArr = [];
  //     for (let index = 0; index < arr.length; index++) {
  //       uniq.add(arr[index]);
  //     }
  //     for (const str of uniq) {
  //       uniqArr.push(str);
  //     }
  //     return uniqArr;
  //   }
  //   let values = [
  //     "Hare",
  //     "Krishna",
  //     "Hare",
  //     "Krishna",
  //     "Krishna",
  //     "Krishna",
  //     "Hare",
  //     "Hare",
  //     ":-O",
  //   ];
  //   alert(unique(values)); // Hare,Krishna,:-O
}
//12
{
  // Счетчики являются независимыми из-за принципа замыкания counter2 выведет 0 и 1, потому что
  // для каждого нового вызова функции makeCounter() замыкается свое собственный значение count,
  // при присваивание новой переменной результата функции makeCounter() создается новое окружение,
  // когда внутренняя функция начинает выполняться, начинается поиск переменной count изнутри-наружу,
  // после найдёт внешнюю переменную и увеличит её значение в лексическом окружении, которому она принадлежит.
  //
}
//13
{
  //   function Counter() {
  //     let count = 0;
  //     this.up = function () {
  //       return ++count;
  //     };
  //     this.down = function () {
  //       // тут была опечатка нужно добавить еще один минус
  //       return --count;
  //     };
  //   }
  //   // для переменной counter создается новое окружение и собственный count,
  //   // который изменяется при каждом вызове встроенных методов
  //   let counter = new Counter();
  //   alert(counter.up()); //? 1
  //   alert(counter.up()); //? 2
  //   alert(counter.down()); //? 1
}
//14
{
  //   function factorial(n) {
  //     return n == 1 ? 1 : n * factorial(n - 1);
  //   }
  //   alert(factorial(6)); // 120
}
