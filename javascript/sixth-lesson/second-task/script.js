function showNotification(options) {
  let div = document.createElement("div");
  div.className = "notification";
  div.innerText = options.html;
  div.classList.add(options.className);
  div.style.marginTop = options.top + "px";
  div.style.marginRight = options.right + "px";
  document.body.append(div);
  setTimeout(() => {
    div.remove();
  }, 1500);
}
showNotification({
  top: 50, // 10px від верхньої межі вікна (за замовчуванням 0px)
  right: 10, // 10px від правого краю вікна (за замовчуванням 0px)
  html: "Hello!", // HTML-повідомлення
  className: "welcome", // Додатковий клас для div (необов'язково)
});
