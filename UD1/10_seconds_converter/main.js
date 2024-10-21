const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:20:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:20:5")

function convertirSegundos(segundos) {
    if (!Number.isInteger(segundos) || segundos < 0) {
        console.log("ingresa un número entero no negativo.");
        return;
    }

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    console.log(`${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`);
}

convertirSegundos(5000); 
convertirSegundos(10000);  
convertirSegundos(15937);
