"use strict";
exports.__esModule = true;
var a = 50;
console.log(a);
var num = 100;
console.log(num);
///Type-Annotations
///string
var fullName;
fullName = "Jaffar Aman";
// fullName = 20; Type 'number' is not assignable to type 'string'
console.log(fullName);
///number
var num1 = 20;
console.log("number type", num1);
//Array
var names;
names = ["jaffar", "aman"];
console.log("string array", names);
var numbers = [10, 20, 30];
console.log("number array ", numbers);
///functions
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
///Tuples
// Array
var address;
address = [1001, "abcd", 100];
console.log(address);
//Object
var person;
person = { name: "Jaffar" };
// person = {name : "Jaffar" , age :21}  //Type '{ name: string; age: number; }' is not assignable to type '{ name: string; }'.
// Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'
var anotherPerson;
anotherPerson = { name: "Jaffar", age: 20 };
//Age optional
var personObj2;
personObj2 = {
    name: "Jaffar"
};
//function with optional parameter
function sum1(a, b) {
    return b ? a + b : a;
}
sum1(20);
