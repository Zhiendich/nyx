let table = document.querySelector("table");
for (let i = 1; i <= 5; i++) {
  let tr = document.createElement("tr");
  table.append(tr);
  for (let y = 1; y <= 5; y++) {
    tr.innerHTML += `<td>${y}:${i}</td>`;
  }
}
for (let k = 0; k < table.rows.length; k++) {
  let row = table.rows[k];
  row.cells[k].style.backgroundColor = "red";
}
