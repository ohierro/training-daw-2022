//assert para verificar una condición
const assert = require('assert').strict;


function abs(value) {

}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)

function abs(value) {
    const valorAbsoluto = Math.abs(numero);
    console.log(valorAbsoluto);
}

abs(-10);
abs(5);
abs(0);
