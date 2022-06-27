"use strict";
// Javascript
// class Car {
//   model;
//   constructor(model) {
//     this.model = model;
//   }
//   getBrand() {
//     console.log(this.model);
//   }
// }
exports.__esModule = true;
// let car1 = new Car("Audi");
// car1.getBrand();
//TypeScript
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    } ///public brand (property)
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var car2 = new CarX("Toyota");
console.log("public modifier", car2.brand);
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    } ///private brand (property)
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var car3 = new CarY("Toyota");
// console.log("private modifier", car3.brand); //Property 'brand' is private and only accessible within class 'CarY'
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    } ///protected brand (property)
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var car4 = new CarZ("Toyota");
