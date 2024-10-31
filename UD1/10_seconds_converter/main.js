// Importa el módulo 'assert' de Node.js para realizar pruebas
const assert = require('assert').strict;

// Función para convertir segundos a formato de horas:minutos:segundos
function toHoursMinutesSeconds(value) {
    // Esta función debe implementarse
}

// Pruebas para la función toHoursMinutesSeconds
assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:20:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:20:5")

// Función para convertir segundos a horas, minutos y segundos
function convertirSegundos(segundos) {
    // Verifica si el input es un número entero no negativo
    if (!Number.isInteger(segundos) || segundos < 0) {
        console.log("ingresa un número entero no negativo.");
        return;
    }

    // Calcula las horas
    const horas = Math.floor(segundos / 3600);
    // Calcula los minutos
    const minutos = Math.floor((segundos % 3600) / 60);
    // Calcula los segundos restantes
    const segundosRestantes = segundos % 60;

    // Imprime el resultado formateado
    console.log(`${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`);
}

// Ejemplos de uso de la función convertirSegundos
convertirSegundos(5000);  // Convierte 5000 segundos
convertirSegundos(10000); // Convierte 10000 segundos
convertirSegundos(15937); // Convierte 15937 segundos
