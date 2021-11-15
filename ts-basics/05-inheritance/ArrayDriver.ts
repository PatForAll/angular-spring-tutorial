import {Circle} from "./Circle";
import {Shape} from "./Shape";
import {Rectangle} from "./Rectangle";

let circle: Circle = new Circle(0, 10, 4);
let rectangle: Rectangle = new Rectangle(10, 0, 5, 6);

let shapes: Shape[] = [];
shapes.push(circle);
shapes.push(rectangle);


for (let item of shapes) {
    console.log(item.getInfo());
    console.log(item.calculateArea() + '\n');
}