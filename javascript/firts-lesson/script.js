// 1.
{
  let name, admin;
  admin = name = "Nikita";
  //   alert(admin);
}
// 2.
{
  // Так можно ніяких помилок не буде
  const BIRTHDAY = "18.04.1982";
  const AGE = BIRTHDAY;
}
// 3.
{
  let name = "Ilya";
  //   alert(` hello ${1} `); // hello 1
  //   alert(` hello ${"name"} `); // hello name
  //   alert(` hello ${name} `); // hello Ilya
}

// 4
{
  //1) 10
  //2) -1
  //3) 1
  //4) 2
  //5) 6
  //6) 9px
  //7) $45
  //8) 2
  //9) Nan
  //10) Inf
  //11) -4
  //12) -14
  //13) 1
  //14) Nan
}

// 5.
{
  let a = 1;
  let b = 1;
  // c = 2 a = 2
  let c = ++a;
  // d = 1 b = 2
  let d = b++;
}
// 6.
{
  let a = 2;
  // x = 5
  let x = 1 + (a *= 2);
}
// 7.
{
  //1) true
  //2) false
  //3) true
  //5) false
  //6) false
  //7) false
}
//8
{
  //   let name = prompt("Введите ваше имя", "");
  //   if (isNaN(+name) && +name !== 0) {
  //     alert(name);
  //   } else {
  //     alert("Введите имя !");
  //   }
}
//9
{
  // Да
  //   if ("0") {
  //     alert(" Привіт");
  //   }
}
//10
{
  //   let question = prompt("Какое официальное название Javascript?", "");
  //   question == "ECMAScript"
  //     ? alert("Правильно")
  //     : alert("Не знаєте? ECMAScript!");
}
//11
{
  //   const num = +prompt("Введите число", 0);
  //   if (!isNaN(num)) {
  //     num > 0 ? alert(1) : num < 0 ? alert(-1) : alert(0);
  //   } else {
  //     alert("Введите число !");
  //   }
}
//12
{
  let a = 3;
  let b = 2;
  let result;
  result = a + b > 4 ? "Много" : "Мало";
  console.log(result);
}
//13
{
  let message;
  let login = "Директор";
  message =
    login == "Співробітник"
      ? "Привіт"
      : login == "Директор"
      ? "Добрый день"
      : login == ""
      ? "Відсутній логін"
      : "";
  console.log(message);
}
//14
{
  // 2
  // alert( null || 2 || undefined );
}
//15
{
  // 1 потом 2
  // alert(alert (1) || 2 || alert(3));
}
//16
{
  // null
  // alert(1 && null && 2);
}
//17
{
  // 1 потом undefinet
  // alert(alert(1) && alert(2));
}
//18
{
  // 3
  // alert(null || 2 && 3 || 4 );
}
//19
{
  let age = 90;
  age > 14 && age <= 90
    ? console.log("Входит в диапазон")
    : console.log("Не входит в диапазон");
}
//20
{
  let age = 90;
  age <= 14 || age > 90
    ? console.log("Не входит в диапазон")
    : console.log("Входит в диапазон");
  if (!(age > 14) || !(age <= 90)) {
    console.log("Не входит в диапазон");
  } else {
    console.log("Входит в диапазон");
  }
}
//21
{
  // 1 и 3 условие выполнятся значения алертов будут fist third
  //   if (-1 || 0) alert("first");
  //   if (-1 && 0) alert("second");
  //   if (null || (-1 && 1)) alert("third");
}
//22
{
  //   let login = prompt("Введите логин", "");
  //   if (login === "Админ") {
  //     let password = prompt("Введите пароль", "");
  //     if (password === "я головний") {
  //       alert("Здравствуйте!");
  //     }
  //     else if (password === null || password === "") {
  //       alert("Скасовано");
  //     }
  //     else {
  //       alert("Неверный пароль");
  //     }
  //   }
  //   else if (login === null || login === "") {
  //   }
  //   else {
  //     alert("Я вас не знаю");
  //   }
}
//23
{
  //   let browser = "Safari";
  //   if (browser == "Edge") {
  //     alert(" You've got the Edge! ");
  //   } else if (
  //     browser == "Chrome" ||
  //     browser == "Opera" ||
  //     browser == "Safari" ||
  //     browser == "Firefox"
  //   ) {
  //     alert(" Okay we support these browsers too");
  //   } else {
  //     alert(" We hope that this page looks ok!");
  //   }
}
//24
{
  //   let a = +prompt("a?", "");
  //   switch (a) {
  //     case 0:
  //       alert(0);
  //       break;
  //     case 1:
  //       alert(1);
  //       break;
  //     case 2:
  //     case 3:
  //       alert("2,3");
  //       break;
  //   }
}
//25
{
  // let num = 2;
  // if (num >= 0) {
  //   alert(num + 1);
  // } else {
  //   alert(num);
  // }
}
//26
{
  // let num = 2;
  // if (num >= 0) {
  //   alert(num + 1);
  // } else {
  //   alert(num - 2);
  // }
}
//27
{
  //   let num = 2;
  //   if (num > 0) {
  //     alert(num + 1);
  //   } else if (num === 0) {
  //     num = 10;
  //     alert(num);
  //   } else {
  //     alert(num - 2);
  //   }
}
//28
{
  let counter = 0;
  [2, -3, 4].forEach((item) => (item >= 0 ? counter++ : item));
  console.log(counter);
}
//29
{
  let positiveNumber = 0;
  let negativeNumber = 0;
  [2, -3, 4].forEach((item) =>
    item >= 0 ? positiveNumber++ : negativeNumber++
  );
  console.log("positiveNumber: " + positiveNumber);
  console.log("negativeNumber: " + negativeNumber);
}
//30
{
  let bigger = 0;
  [5, 4].forEach((item) => (item > bigger ? (bigger = item) : item));
  console.log(bigger);
}
//31
{
  let lower = 0;
  [5, 6].forEach((item, index) => {
    if (index == 0) {
      lower = item;
    }
    lower = lower < item ? lower : item;
  });
  console.log(lower);
}
//32
{
  let lower = 0;
  let bigger = 0;
  [5, 6].forEach((item, index) => {
    if (index == 0) {
      lower = item;
    }
    if (item > bigger) {
      bigger = item;
    }
    if (item < lower) {
      lower = item;
    }
  });
  console.log(lower, bigger);
}
//33
{
  let a = 4;
  let b = 3;
  let tempory;
  if (a > b) {
    tempory = a;
    a = b;
    b = tempory;
  }
  console.log(` a: ${a}, b: ${b}`);
}
//34
{
  let a = 4;
  let b = 3;
  let tempory = a + b;
  if (a === b) {
    a = 0;
    b = 0;
  } else {
    a = tempory;
    b = tempory;
  }
  console.log(` a: ${a}, b: ${b}`);
}
//35
{
  let a = 4;
  let b = 3;
  let tempory = a + b;
  if (a === b) {
    a = 0;
    b = 0;
  } else {
    a += tempory;
    b += tempory;
  }
  console.log(` a: ${a}, b: ${b}`);
}
//36
{
  let lower = 0;
  [7, 5, 6].forEach((item, index) => {
    if (index == 0) {
      lower = item;
    }
    lower = lower < item ? lower : item;
  });
  console.log(lower);
}
//37
{
  let lower = 0;
  let bigger = 0;
  let middle;
  [7, 5, 6].forEach((item, index) => {
    if (index == 0) {
      lower = item;
      middle = item;
    }
    if (item > bigger) {
      bigger = item;
    }
    if (item < lower) {
      lower = item;
    }
    if (item !== bigger && item !== lower) {
      middle = item;
    }
  });
  console.log(middle);
}
//38
{
  let lower = 0;
  let bigger = 0;
  [7, 5, 6].forEach((item, index) => {
    if (index == 0) {
      lower = item;
    }
    if (item > bigger) {
      bigger = item;
    }
    if (item < lower) {
      lower = item;
    }
  });
  console.log(lower, bigger);
}
//39
{
  let lower = 0;
  let sum = 0;
  [7, 5, 6].forEach((item, index) => {
    if (index == 0) {
      lower = item;
    }
    lower = lower < item ? lower : item;
    sum += item;
  });
  console.log(sum - lower);
}
//40
{
  let current;
  let unic;
  [5, 5, 7].forEach((item, index) => {
    if (index == 0) {
      current = item;
      unic = item;
    }
    if (current !== item) {
      if (index == [5, 5, 7].length - 1 && unic !== item) {
        unic = item;
      } else {
        unic = current;
        current = item;
      }
    }
  });
  console.log(unic);
}
