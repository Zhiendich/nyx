let ul = document.querySelector("ul");
for (;;) {
  let text = prompt("Введите текст списка");
  if (text == null || text == "") {
    break;
  }
  let li = document.createElement("li");
  li.textContent = text;
  ul.append(li);
}
