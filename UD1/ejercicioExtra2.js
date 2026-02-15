//determina si los triangulos son equilatero, isosceles o escaleno.
//Equilatero = todos los lados misma distancia
//Isosceles = Por lo menos dos lados de la misma distancia
//Escaleno = Ningun lado de la misma distancia
function calculaDistancia(p1,p2) {
    const c1 = (p2.x - p1.x)
    const c2 = (p2.y - p1.y)

    const d1 = Math.sqrt(Math.pow(c1,2) + c2*c2)

    return d1
}

function calculaTriangulo(p1,p2,p3) {

    console.log(`D1 ${calculaDistancia(p1,p2)}`);
    console.log(`D2 ${calculaDistancia(p2,p3)}`);
    console.log(`D3 ${calculaDistancia(p1,p3)}`);

    // return 0 // equilatero
    // return 1 // isosceles
    // return 2 // escaleno
}
//crea objetos dinamicos con las mismas propiedades
let p1 = { x: 0, y: 0 }
let p2 = { x: 4, y: 0 }
let p3 = { x: 2, y: 10 }

calculaTriangulo(p1,p2,p3)