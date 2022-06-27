let a: number = 50;
console.log(a);

let num: number = 100;
console.log(num);

///Type-Annotations

///string
let fullName: string;
fullName = "Jaffar Aman";
// fullName = 20; Type 'number' is not assignable to type 'string'
console.log(fullName);

///number
let num1: number = 20;
console.log("number type", num1);

//Array
let names: string[];
names = ["jaffar", "aman"];
console.log("string array", names);

let numbers: number[] = [10, 20, 30];
console.log("number array ", numbers);

///functions
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 20));

///Tuples

// Array
let address: [number, string, number];
address = [1001, "abcd", 100];
console.log(address);

//Object
let person: { name: string };
person = { name: "Jaffar" };
// person = {name : "Jaffar" , age :21}  //Type '{ name: string; age: number; }' is not assignable to type '{ name: string; }'.
// Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'

let anotherPerson: { name: string; age: number };
anotherPerson = { name: "Jaffar", age: 20 };

//Age optional
let personObj2: { name: string; age?: number };
personObj2 = {
  name: "Jaffar",
};




// The error "Cannot redeclare block-scoped variable"
// occurs when we redeclare a variable in the same block
// or when TypeScript uses global typings,
// which interfere with local variable names.
// To solve the error, only declare a variable
// once in a block and use ES modules.
export {};
