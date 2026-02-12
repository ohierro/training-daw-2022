'use strict';

const assert = require('assert').strict;

var pilots = [
    {
        id: 2,
        name: 'Wedge Antilles',
        faction: 'Rebels',
        years: 10,
    },
    {
        id: 8,
        name: 'Ciena Ree',
        faction: 'Empire',
        years: 20,
    },
    {
        id: 40,
        name: 'Iden Versio',
        faction: 'Empire',
        years: 30,
    },
    {
        id: 66,
        name: 'Thane Kyrell',
        faction: 'Rebels',
        years: 35,
    },
];

function iterateSimple() {}
function iterateForEach() {}
function mapIds() {
    return pilots.map((v) => v.id);
}
function rebels() {
    return pilots.filter((v) => v.faction === 'Rebels');
}
function totalFaction(faction) {
    return pilots.filter((v) => v.faction === faction).length;
}
function avgYears(faction) {
    return (
        pilots
            .filter((v) => v.faction === faction)
            .reduce((a, b) => a.years + b.years) /
        pilots.filter((v) => v.faction === faction).length
    );
}

// use console.log
iterateSimple();
iterateForEach();
try {
    assert.deepStrictEqual(mapIds(), [2, 8, 40, 66]);
    assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]]);

    assert.deepStrictEqual(totalFaction('Rebels'), 2);

    assert.deepStrictEqual(avgYears('Rebels'), 22.5);
    assert.deepStrictEqual(avgYears('Empire'), 25);
} catch (error) {
    console.error(error);
}
