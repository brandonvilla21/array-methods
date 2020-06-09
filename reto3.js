/**
 * Reto 3
 */

const helados = [
  { sabor: 'vainilla', color: 'amarillo' },
  { sabor: 'aguacate', color: 'verde' },
  { sabor: 'fresa', color: 'rojo' },
  { sabor: 'chocolate', color: 'café' },
  { sabor: 'pera', color: 'verde' },
  { sabor: 'mora', color: 'morado' },
  { sabor: 'menta', color: 'verde' },
];

// Funcion que obtiene unicamente los helados de color verde
// filter

const heladosVerdes = helados.filter((helado) => {

    if(helado.color == "verde"){
        return true
    } return false

})

console.log(heladosVerdes)