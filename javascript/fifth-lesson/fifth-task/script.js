let list = document.querySelectorAll("li");
for (const li of list) {
  let text = li.firstChild.data;
  console.log(
    `Текст внутри списка : ${text}, вложенные потомки : ${
      li.querySelectorAll("li").length
    }`
  );
}
