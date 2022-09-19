class Rectangle {

    // add x1, y1
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(`[${this.x}, ${this.y}]`)
    }

    // area

    // overlay
    // tenemos que comprobar la siguiente situación
    // .x----------x.....
    // .|..........|.....
    // .|......x---|----x
    // .x------|---x....|
    // ........x--------x
    // Se superponen si alguna de sus coordenadas están dentro de los límites
    // del otro rectángulo
}

let r1 = new Rectangle(5,9);
let r2 = new Rectangle(3,4);

r1.print()
r2.print()

// let area = r1.area();
// console.log(`area ${area}`)

// let isOverlay = r1.overlay(r2)
