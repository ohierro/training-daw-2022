function f (x, y, ...a) {
    return (x + y) * a.length
}

console.log(`is 9? ${f(1, 2, "hello", true, 7) === 9}`)