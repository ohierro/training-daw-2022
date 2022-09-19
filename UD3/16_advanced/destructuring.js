function multiple() {
    return ['John', 39, { score: 5560, position: 8}]
}

let [ name, years, data ] = multiple()
let { score, position } = data

console.log(`name ${name}`);
console.log(`years ${years}`);
console.log(`data ${data}`);

console.log(`score ${score}`);
console.log(`position ${position}`);