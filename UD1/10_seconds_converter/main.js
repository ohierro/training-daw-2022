const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let h = Math.floor(value / 3600),
        m =
            Math.floor((value % 3600) / 60 + 0) < 10 &&
            Math.floor((value % 3600) / 60 + 0) !== 0
                ? Math.floor((value % 3600) / 60) + '0'
                : Math.floor((value % 3600) / 60),
        s = Math.floor((value % 3600) % 60);
    return `${h}:${m}:${s}`;
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), '1:0:0');
assert.deepStrictEqual(toHoursMinutesSeconds(3720), '1:20:0');
assert.deepStrictEqual(toHoursMinutesSeconds(3725), '1:20:5');
