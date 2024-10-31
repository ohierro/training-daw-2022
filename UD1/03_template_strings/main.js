// Definición de la función hello
// Toma tres parámetros: nombre, apellido y edad
function hello(name, lastname, years) {
    // Retorna una cadena formateada usando template strings
    return `Hola ${name} ${lastname}, tienes ${years} años de edad`;
}

// Primera prueba
let result = hello('John', 'Anderton', 35);
// Comprueba si el resultado es exactamente igual a la cadena esperada
if (result != "Hola John Anderton, tienes 35 años de edad") {
    console.log('test fail'); // Imprime si la prueba falla
    return; // Termina 
}

// Segunda prueba
result = hello('John', 'Foo', 47);
// Comprueba si el resultado es exactamente igual a la cadena 
if (result != "Hola John Foo, tienes 47 años de edad") {
    console.log('test fail'); // Imprime 
    return; // Termina
}


console.log('Test OK');
