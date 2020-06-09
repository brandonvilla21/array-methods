/**
 * Reto 2
 */

const numbers = [4, 6, 10, 33, 90];

// Funcion que multiplica cada numero del arreglo por dos
// map

function mult(num) {
  return num * 2;
}

const numbersNuevo = numbers.map(mult)

console.log(numbersNuevo)