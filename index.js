const COUNT = document.getElementById("count");
const RESTA = document.getElementById("resta");
const SUMA = document.getElementById("suma");
let num = 0;

const SUMAR = () => {
  COUNT.innerHTML = num++;
}

const RESTAR = () => {
  COUNT.innerHTML = num--;
}