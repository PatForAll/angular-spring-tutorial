import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let circle: Circle = new Circle(0, 10, 4);
console.log(circle.getInfo());

let rectangle: Rectangle = new Rectangle(10, 0, 5, 6);
console.log(rectangle.getInfo());