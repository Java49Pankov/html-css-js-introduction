function f1() {
    const a = this;
    return a;
}

const f2 = () => {   //  <--lambda expression
    const a = this; // <-- lambda expression does not have its own THIS
    return a;
}

const f = f1;
f();
f2();
f1.d = 20;
console.log(f1.d);
console.log(f1);

//----------------------------------

const rectangle = {
    width: 3,
    height: 5,
    square: function () {
        return this.width * this.height;
    },
    perimeter: () => {
        return this.width * 2 + this.height * 2; // <-- lambda expression does not have its own THIS
    },
    perimeter1: function () {
        return this.width * 2 + this.height * 2;
    },
    display: function () {
        console.log(`square is ${this.square()}; perimeter is ${this.perimeter1()} 
        perimeret lambda expression is ${this.perimeter()}`);
    }
}

console.log(rectangle.square()); // <-- 15
console.log(rectangle.perimeter()); // <-- NaN
console.log(rectangle.perimeter1()) //<-- 16
rectangle.display();

//---------OOP JS constructor---------------------

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.square = function () {
    return this.width * this.height;
}


Rectangle.prototype.perimeter = function () {
    return this.width * 2 + this.height * 2;
}

const rectangle2 = new Rectangle(3, 5);
console.log(rectangle2.square());
console.log(rectangle2.perimeter());

