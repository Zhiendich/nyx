//1
{
  //   let object = {};
  //   function isEmpty(obj) {
  //     for (const key in obj) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   alert(isEmpty(object));
}
//2
{
  //   let object = {
  //     name: "Nikita",
  //     salary: 20000,
  //     isAdmin: true,
  //   };
  //   function multiplyNumeric(obj) {
  //     for (const key in obj) {
  //       if (typeof obj[key] == "number") {
  //         obj[key] = obj[key] * 2;
  //       }
  //     }
  //   }
  //   multiplyNumeric(object);
  //   alert(object.name);
  //   alert(object.salary);
}
//3
{
  //   function readNumber() {
  //     for (;;) {
  //       let num = prompt("Введите число");
  //       if (!isNaN(num)) {
  //         return num;
  //       } else if (num == null) {
  //         return null;
  //       }
  //     }
  //   }
  //   readNumber();
}
//4
{
  //   function random(min, max) {
  //     return min + Math.random() * (max - min);
  //   }
  //   alert(random(2, 8));
}
//5
{
  //   function randomInteger(min, max) {
  //     return (min + Math.random() * (max - min)).toFixed(0);
  //   }
  //   alert(randomInteger(2, 8));
}
//6
{
  //   function ucFirst(str) {
  //     return (str = str[0].toUpperCase() + str.slice(1));
  //   }
  //   alert(ucFirst("никита"));
}
//7
{
//   function checkSpam(str) {
     // prettier-ignore
//     if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
//         return true
//     }
//     else {
//         return false
//     }
//   }
//   alert(checkSpam("buy ViAgRA now"));
//   alert(checkSpam("free xxxxx "));
//   alert(checkSpam("innocent rabbit"));
}
//8
{
  // prettier-ignore
//   const truncate  = (str, maxlength) => (str.length > maxlength) ? str = str.substr(0, maxlength) + '...' : str
//   alert(truncate("Nikita", 3));
}
//9
{
  // prettier-ignore
//   const extractCurrencyValue = (str) => str = Number(str.slice(1));
//   alert(extractCurrencyValue("$120"));
}
//10
{
  //   function sumInput() {
  //     let array = [];
  //     let sum = 0;
  //     for (;;) {
  //       let num = prompt("Введите число");
  //       if (isNaN(num) || num == null || num === "".trim()) {
  //         return sum;
  //       }
  //       sum += +num;
  //       array.push(num);
  //     }
  //   }
  //   alert(sumInput());
}
//11
{
  // Не нашел разницы :(
}
//12
{
  //   function checkAge(age) {
  //     return age > 18 ? true : confirm(" Батьки дозволили ?");
  //   }
  //   function checkAge(age) {
  //     return age > 18 || confirm(" Батьки дозволили ?");
  //   }
  //   alert(checkAge(14));
}
//13
{
  //   const min = (a, b) => (a < b ? a : b);
  //   alert(min(2, 5));
}
//14
{
  //   function pow(x, n) {
  //     let result = x;
  //     for (let index = 1; index < n; index++) {
  //       result *= x;
  //     }
  //     return result;
  //   }
  //   alert(pow(3, 3));
}
//15
{
  //   const ask = (question, yes, no) => (confirm(question) ? yes() : no());
  //   ask(
  //     "Ви згодні?",
  //     function () {
  //       alert("Ви погодилися.");
  //     },
  //     function () {
  //       alert("Ви скасували виконання.");
  //     }
  //   );
}
//16
{
  //   let income = 3333;
  //   let monthCounter = 0;
  //   while (income < 8000) {
  //     income += 1750;
  //     monthCounter += 1;
  //   }
  //   alert(`Я смогу купить пальму через ${monthCounter} месяца`);
}
//17
{
  //   let result = 0;
  //   for (let index = 0; index <= 10; index++) {
  //     let num = +prompt("Введите число");
  //     if (num < 0) {
  //       result += num;
  //     }
  //   }
  //   alert(result);
}
