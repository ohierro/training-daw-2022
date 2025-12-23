const assert = require('assert').strict;

function abs(value) {
    return Math.abs(value);
}

assert.strictEqual(abs(4), 4);
assert.strictEqual(abs(-4), 4);
assert.strictEqual(abs(0), 0);
