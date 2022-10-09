let select = document.querySelector("select");
select.addEventListener("change", () => {
  alert(
    `Значение : ${select.value} Текст : ${
      select.options[select.selectedIndex].text
    }`
  );
});
let newOption = new Option("Классика", "classic");
select.append(newOption);
newOption.selected = true;
