const superficies = [
  { id: 1, descripcion: "Casa habitación pequeña", largo: 6, fondo: 17 },
  { id: 2, descripcion: "Cancha de futbol", largo: 90, fondo: 120 },
  { id: 3, descripcion: "Cancha de tenis", largo: 8, fondo: 23 },
  { id: 4, descripcion: "Bodega de autos", largo: 15, fondo: 40 },
  { id: 5, descripcion: "Casa habitación grande", largo: 12, fondo: 30 },
];

// Obtener la suma total de las areas de todas las superficies

// 1. Obtener las areas => [102, 10800, ...]
const areas = superficies.map((superficie)=>{

    let area= superficie.largo * superficie.fondo
    return area

})

// console.log(areas)

// 2 El total de las areas
const suma = areas.reduce((acumulador, siguienteArea) => {
  console.log({ acumulador, siguienteArea })
  return acumulador + siguienteArea
}, 0)


console.log('TOTAL: ', suma)