import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = createExcuse();
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

function getElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Cambiamos createExcuse de una cadena a una función
function createExcuse() {
  return `${getElement(who)} ${getElement(action)} ${getElement(what)} ${getElement(when)}`;
}
