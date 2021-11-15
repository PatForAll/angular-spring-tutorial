import {Circle} from "./Circle";
import {Shape} from "./Shape";
import {Rectangle} from "./Rectangle";

let shape: Shape = new Shape(5, 5);
let circle: Circle = new Circle(0, 10, 4);
let rectangle: Rectangle = new Rectangle(10, 0, 5, 6);

let shapes: Shape[] = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

shapes.push(new Shape(10, 10));

for (let item of shapes) {
    console.log(item.getInfo());
}