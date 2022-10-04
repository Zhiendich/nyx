let a = document.querySelector("div").lastChild.nextSibling;
// Всегда равен null потому что мы берем последний элемент и у него пытаемся найти следующий узел того же родителя
let b = document.querySelector("ul").children[0].previousSibling;
// Нет можно получить текстовый узел, потому что elem.children[0] – потомок-элемент
console.log(a);
console.log(b);
