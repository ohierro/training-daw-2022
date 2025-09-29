
// Función select que recibe un array y una función de condición
function select(array, condition) {
    return array.filter(condition);
}

// Funciones de condición (pares, mayores que 15, menores de 10)
const pairs = (num) => num % 2 === 0;
const gt15 = (num) => num > 15;
const lt10 = (num) => num < 10;

// Array de valores
let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

// Pruebas
// Solo pares
assert.deepStrictEqual(select(values, pairs), [2]);


// Mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);

// Menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);

console.log("Todas las pruebas pasaron correctamente.");

/*assert.deepStrictEqual:
lñibreria, compara valores, estructuras anidadas y arrays*/ 