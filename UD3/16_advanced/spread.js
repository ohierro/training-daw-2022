let first = ['one', 'two', 'three']
let second = [...first, 'four', 'five']
let third = ['zero', ...second]

console.log(second)
console.log(third)