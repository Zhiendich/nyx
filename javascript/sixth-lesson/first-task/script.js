const calendar = document.querySelector("table");
createCalendar(calendar, 2012, 9);
function createCalendar(elem, year, month) {
  let d = new Date(year, month - 1);
  let tableStart = "<tr>";
  for (let i = 0; i < getDay(d); i++) {
    tableStart += "<td></td>";
  }
  while (d.getMonth() == month - 1) {
    tableStart += "<td>" + d.getDate() + "</td>";
    if (getDay(d) % 7 == 6) {
      tableStart += "</tr><tr>";
    }
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      tableStart += "<td></td>";
    }
  }
  tableStart += "</tr>";
  elem.innerHTML += tableStart;
}

function getDay(date) {
  let day = date.getDay();
  //prettier-ignore
  return (day == 0 ? day = 7 : day) - 1;
}
