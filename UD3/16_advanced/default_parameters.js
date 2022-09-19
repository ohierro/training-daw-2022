function defaultParameters(a, b = 3, c = 4) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
}

defaultParameters(1,2,3)
defaultParameters(1,2)
defaultParameters(1)
defaultParameters()

