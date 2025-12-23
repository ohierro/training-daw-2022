const { join } = require('path');

function evenNumbers() {
    let num = 0;
    let array = [];
    while (num < 98) {
        array.push((num += 2));
    }
    console.log(array.join(', '));
}

evenNumbers();
// expected output 2,4,6,8,10......98
