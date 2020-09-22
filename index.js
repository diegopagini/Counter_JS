const COUNT = document.getElementById("count");
const RESTA = document.getElementById("resta");
const SUMA = document.getElementById("suma");
let num = 0;


// Dos formas diferentes de hacerlo.
function sumar(){
  COUNT.innerHTML = ++num;
}


// Modificando antes la variable.
function restar(){
  num = num - 1;
  COUNT.innerHTML = num;
}


RESTA.addEventListener("click", function(){
  restar();
})

SUMA.addEventListener("click", function(){
  sumar()
})