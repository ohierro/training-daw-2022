'use strict'

var x = 10
var test = 5

console.log('valor de x ' + x)

function shadow() {
    var x = 20

    console.log('valor de x ' + x)
    console.log('valor de test ' + test)
}

shadow()
console.log('valor de x ' + x)


function scopes() {
    var i = 0;

    for (let j = 0; j<10; j++) {
        var i = j;
        console.log('i ' + i)
    }

    console.log(i)
}

scopes()