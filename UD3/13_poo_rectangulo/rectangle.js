class Rectangle {
    // add x1, y1

    /**
     * @param x {[pos1, pos2]} Positions of starting and ending of X vector.
     * @param y {[pos1, pos2]} Positions of starting and ending of Y vector.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Prints the coordinates of vectors X and Y
     */
    print() {
        console.log(`[${this.x}], [${this.y}]`);
    }
    /**
     * Calculates the area of a square
     * @returns {Number} Area (Base * Height)
     */
    area() {
        return (this.x[1] - this.x[0]) * (this.y[1] - this.y[0]);
    }
    /**
     *
     * Checks if two different rectangles overlay
     * @param {Rectangle} rectangle Rectangle to compare with
     * @returns {boolean} Returns true if overlayed
     */
    overlay(rectangle) {
        for (let i = this.x[0]; i < this.x[1]; i++) {
            for (let j = this.y[0]; j < this.y[1]; j++) {
                if (
                    this.x[i] === rectangle.x[i] &&
                    this.y[j] === rectangle.y[j]
                ) {
                    return true;
                }
            }
        }
        return false;
    }
    // area

    // overlay
    // tenemos que comprobar la siguiente situación
    // .x----------x......
    // .|..........|......
    // .|......x---|----x.
    // .x------|---x....|.
    // ........x--------x.
    // Se superponen si alguna de sus coordenadas están dentro de los límites
    // del otro rectángulo
}

let r1 = new Rectangle([1, 13], [0, 2]);
let r2 = new Rectangle([14, 17], [3, 4]);

r1.print();
r2.print();

let area = r1.area();
console.log(`area ${area}`);

let isOverlay = r1.overlay(r2);
console.log(`Se superponen: ${isOverlay}`);
