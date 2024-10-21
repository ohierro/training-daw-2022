'use strict'
/*A partir del array de pilotos siguiente, realizar las siguientes operaciones:*/

//filter
//map convierte
//reduce  
//siempre aplican sobre objetos!!!!!!!


const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];


//● iterateSimple: iterar e imprimir los pilotos utilizando un for “normal”
let sum = 0 ;
function iterateSimple() {
  for (let i = 0; i < pilots.length; pilots++) {
    console.log(pilots[i]);
  }
    /*for (let pilot in pilots){
      console.log(pilots)
    }*/
}


//● iterateForEach: iterar e imprimir los pilotos utilizando array.forEach
function iterateForEach() {
  pilots.forEach((pilot) => {
    console.log(pilot.id)
    sum += pilot.years;
  })
}


//● mapIds: devolver un array con los id’s de los pilotos utilizando map
function mapIds() {

  let ids = []
  for (let pilot of pilots)
  console.log(pilot),
  ids.push(pilot.id)

  /*let res = pilots.map(function(value , index , array ){
    return value.id
  })*/
  return pilots.map((value) => value.id)
  
}





//● rebels: devolver únicamente los pilotos rebeldes, utilizando la función
filter
function rebels() {
  return pilots
    .filter((value) => value.faction ===`Rebels` )
    .map ((value) => value.id)
    .filter((value) => value > 5)
  }






 //● totalFaction: devolver el número de pilotos de una determinada facción
function totalFaction(faction) {


}


//● avgYears: calcular la media de edad de los pilotos de una facción*/ 
function avgYears(faction) {
  let selectedFaction  = pilots 
  .filter ((value ) => value.faction  === faction)
  
  selectedFaction.reduce((previousValue, currentValue) => previousValue + currentValue.yeards, 0 )/ selectedFaction.length
  
  /*let suma = 0;

  selectedFaction.forEach(function (pilot){
    //console.log(pilot)
    suma += pilot.years;
  })
  return suma / selectedFaction.length;*/
}

// use console.log
iterateSimple()

iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}