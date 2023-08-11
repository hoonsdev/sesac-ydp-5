class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let rec1 = new Rectangle(3, 4);
let tri1 = new Triangle(3, 4);
let cir1 = new Circle(3, 4, 5);
console.log(rec1.getArea());
console.log(rec1.getDiagonal());
console.log(tri1.getArea());
console.log(cir1.getArea());
