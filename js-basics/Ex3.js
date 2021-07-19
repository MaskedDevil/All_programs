//Factory Functions

function createSquare(length,width) {
    return {
        length,
        width,
        draw() {
            console.log('Draw Square');
        }
    }
}

const Square1 = createSquare(1,2);
Square1.draw();

//Constructor Functions

function Square(length,width) {
    this.length = length;
    this.width = width;
    this.draw = function() {
        console.log('Draw Square');
    }
}

const Square2 = new Square(4,5);
Square2.draw();