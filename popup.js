const { parse, stringify } = require("./index");

const getValueRoman = document.getElementById("roman").value;
const getValueArabigo = document.getElementById("arabigo").value;

const btnRoman = document.getElementById("btn-roman");
const btnArabigo = document.getElementById("btn-arabigo");

btnRoman.addEventListener("click", function (e) {
e.preventDefault();
const showResult = document.getElementById("res");
const result = parse(getValueRoman);
showResult.innerHTML = result
})

btnArabigo.addEventListener("click", function (e) {
  e.preventDefault();
  const result = stringify(getValueArabigo);
});