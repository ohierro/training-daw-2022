class Figure {
    print() {
        console.log('I\'m a figure');
    }
}

class Square extends Figure {
    print() {
        console.log('I\'m a square');
    }
}

class Circle extends Figure {
}

class Triangle extends Figure {
    print() {
        super.print();
        console.log('and a triangle')
    }
}


let draws = [new Figure(3,4), new Square(7,8,9,9), new Circle(4,5,7), new Triangle(2,3,2,4)]
draws.forEach(f => f.print())