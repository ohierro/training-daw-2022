class coche {
    constructor(marca, modelo, consumo) {
        this.marca = marca;
        this.modelo = modelo;
        this.consumo = consumo;
        this.gasolina = 0;
    }
    reposta(litros) {
        this.gasolina += litros;
    }
    move(distancia) {
        this.gasolina -= (distancia * this.consumo) / 100;
    }
    restante() {
        return (this.gasolina * 100) / this.consumo;
    }
}

const assert = require('assert').strict;

let cocheA = new coche('ford', 'mondeo', 7);
let cocheB = new coche('chevrolet', 'camaro', 14);

cocheA.reposta(70);
cocheB.reposta(140);

cocheA.move(200);
cocheB.move(200);

assert.equal(cocheA.restante(), 800);
assert.equal(cocheB.restante(), 800);
