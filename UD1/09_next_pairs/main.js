// Importa el módulo 'assert' de Node.js para realizar pruebas
const assert = require('assert').strict;

// Función para obtener el par anterior y siguiente de un número
function nextPairs(value) {
    // Esta función debe implementarse
}

// Pruebas para la función nextPairs
assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])

// Función para imprimir números pares contiguos hasta un límite dado
function imprimirParesContiguos(numero) {
    // Verifica si el número es entero
    if (!Number.isInteger(numero)) {
        console.log("ingresa un número entero.");
        return;
    }

    // Toma el valor absoluto del número como límite
    const limite = Math.abs(numero); 

    // Itera desde 0 hasta el límite
    for (let i = 0; i <= limite; i++) {
        // Imprime el número si es par
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Ejemplos de uso de la función imprimirParesContiguos
imprimirParesContiguos(10);  // Imprime pares de 0 a 10
imprimirParesContiguos(-10); // Imprime pares de 0 a 10 (usa valor absoluto)
imprimirParesContiguos(5)    // Imprime pares de 0 a 5
