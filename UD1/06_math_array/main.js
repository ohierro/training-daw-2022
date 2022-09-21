// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    console.log("Caso: ["+array+"]")
console.log("Suma: "+array.reduce((prev, next) => prev + next, 0))
console.log("Más Alto: "+Math.max(...array))
console.log("Más Pequeño: "+Math.min(...array))
console.log("Media: "+(array.reduce((prev, next) => prev + next, 0)/array.length))
}

doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])