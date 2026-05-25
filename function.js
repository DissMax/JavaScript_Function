//funcion de tipo exprecion 
const sumar = function(a, b) {
  return a + b;
};

console.log(sumar(3, 4));

//funcion de tipo Arrow
const restar = (a, b) => a - b;

console.log(restar(10, 5));

//funcion callback
function procesarOperacion(a, b, operacion) {
  return operacion(a, b);
}

console.log(procesarOperacion(6, 2, sumar));
console.log(procesarOperacion(6, 2, restar));