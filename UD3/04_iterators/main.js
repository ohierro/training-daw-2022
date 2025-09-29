'use strict';

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

//● iterateSimple: iterar e imprimir los pilotos utilizando un for "normal"
function iterateSimple() {
  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i]);
  }
}

//● iterateForEach: iterar e imprimir los pilotos utilizando array.forEach
function iterateForEach() {
  pilots.forEach((pilot) => {
    console.log(pilot);
  });
}



//● mapIds: devolver un array con los id’s de los pilotos utilizando map
function mapIds() {


  /*array vaci ids,itera sobre cada pilot, imprimimos pillot, se añade id con push*/
  let ids = []
  for (let pilot of pilots){
    console.log(pilot),
    ids.push(pilot.id)
  }

  /*let res = pilots.map(function(value , index , array ){
    return value.id
  })*/
  return pilots.map((pilot) => pilot.id)
  
}

//● rebels: devolver únicamente los pilotos rebeldes, utilizando la función filter

function rebels() {
  return pilots.filter((pilot) => pilot.faction === 'Rebels');
}

function rebels() {
  return pilots
    .filter((pilot) => pilot.faction ===`Rebels` )
    .map ((pilot) => pilot.id)
    .filter((pilot) => pilot > 5)
  }


//● totalFaction: devolver el número de pilotos de una determinada facción
function totalFaction(faction) {
  return pilots.filter((pilot) => pilot.faction === faction).length;
}

//● avgYears: calcular la media de edad de los pilotos de una facción
/*function avgYears(faction) {
  const selectedFaction = pilots.filter((pilot) => pilot.faction === faction);
  const totalYears = selectedFaction.reduce((sum, pilot) => sum + pilot.years, 0);
  return totalYears / selectedFaction.length;
}*/

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
console.log("iterateSimple:");
iterateSimple();

console.log("\niterateForEach:");
iterateForEach();

try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66]);
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]]);
  assert.deepStrictEqual(totalFaction('Rebels'), 2);
  assert.deepStrictEqual(avgYears('Rebels'), 22.5);
  assert.deepStrictEqual(avgYears('Empire'), 25);
  console.log("\nTodas las pruebas pasaron con éxito.");
} catch (error) {
  console.error("\nError en las pruebas:", error);
}