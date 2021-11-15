import {Circle} from "./Circle";
import {Shape} from "./Shape";

let shape: Shape = new Shape(5, 5);
console.log(shape.getInfo());

let circle: Circle = new Circle(0, 10, 4);
console.log(circle.getInfo());