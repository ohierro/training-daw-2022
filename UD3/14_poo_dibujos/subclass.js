class Figure {
    constructor(point) {
        this.iCoords = point;
    }
    print() {
        this.drawPosition();
        console.log("I'm a figure");
    }
    drawPosition() {
        console.log(
            `I'm in the position [${this.iCoords.x}, ${this.iCoords.y}]`
        );
    }
}

class Square extends Figure {
    constructor(point, point2) {
        super(point);
        this.coords = point2;
    }
    print() {
        super.drawPosition();
        console.log("I'm a square", this.getData());
    }
    getData() {
        return (
            'with area ' +
            (this.coords.x - this.iCoords.x) * (this.coords.y - this.iCoords.y)
        );
    }
}

class Circle extends Figure {
    constructor(point, radius) {
        super(point);
        this.radius = radius;
    }
    print() {
        super.drawPosition();
        console.log("I'm a circle", this.getData());
    }
    getData() {
        return 'with area ' + Math.PI * this.radius ** 2;
    }
}

class Triangle extends Figure {
    constructor(point, base, height) {
        super(point);
        this.base = base;
        this.height = height;
    }
    print() {
        super.drawPosition();
        console.log("I'm a triangle", this.getData());
    }
    getData() {
        return 'with area ' + (this.base * this.height) / 2;
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `x:${this.x}, y:${this.y}`;
    }
}

let draws = [
    new Figure(new Point(3, 4)),
    new Square(new Point(7, 8), new Point(9, 9)),
    new Circle(new Point(4, 5), 7),
    new Triangle(new Point(2, 3), 2, 4),
];
draws.forEach((f) => f.print());
