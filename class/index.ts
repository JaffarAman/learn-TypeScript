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

// let car1 = new Car("Audi");
// car1.getBrand();

//TypeScript

class CarX {
  constructor(public brand) {} ///public brand (property)
  getBrand() {
    console.log(this.brand);
  }
}

let car2 = new CarX("Toyota");
console.log("public modifier", car2.brand);

class CarY {
  constructor(private brand) {} ///private brand (property)
  getBrand() {
    console.log(this.brand);
  }
}

let car3 = new CarY("Toyota");
// console.log("private modifier", car3.brand); //Property 'brand' is private and only accessible within class 'CarY'

class CarZ {
  constructor(protected brand) {} ///protected brand (property)
  getBrand() {
    console.log(this.brand);
  }
}

let car4 = new CarZ("Toyota");
// console.log("private modifier", car3.brand); //Property 'brand' is private and only accessible within class 'CarY'

export {};
