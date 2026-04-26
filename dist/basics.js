"use strict";
let age = 23;
let fname = "Alice";
let isAdmin = true;
let hobbies = ["Reading", "Traveling", "Cooking"];
let person = { name: "Bob", age: 30 };
let nullValue = null;
let undefinedValue = undefined;
let user = { name: "Charlie", age: 25 };
// Function with return type string
function greet(name) {
    return `Hello, ${name}!`;
}
// Function with return type number
function add(a, b) {
    return a + b;
}
// Function with return type void
function logMessage(message) {
    console.log(message);
}
// optional parameter
function printInfo(name, age) {
    if (age) {
        return `Name: ${name}, Age: ${age}`;
    }
    return `Name: ${name}`;
}
// default parameter
function calculateArea(radius, pi = 3.14) {
    return pi * radius * radius;
}
// rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// arrow function
const multiply = (x, y) => x * y;
// const multiply = (x: number, y: number): number => {
//   return x * y;
// };
// function types
let calculate;
calculate = multiply;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
let randomValue = "Could be anything";
randomValue = 42;
// Using unknown type is safer than any
let unknownValue = "Unknown type";
unknownValue = 10;
let product1 = {
    name: "Laptop",
    price: 1000,
    getdiscount(percentage) {
        return this.price * (percentage / 100);
    }
};
product1.getdiscount(10); // returns 100
let user1 = { name: "Charlie", age: 25, email: "charlie@example.com", id: 1 };
const username = 123;
const username2 = "john_doe";
const myDog = { name: "Buddy", breed: "Golden Retriever" };
const person1 = { name: "Alice", age: 30 };
function setstatus(status) {
    return `Status: ${status}`;
}
setstatus("success");
const myCircle = { color: "red", radius: 5 };
// string literal types
let direction;
direction = "up"; // valid
// type assertion
let someValue = "Hello, TypeScript!";
let strLength = someValue.length;
let strLength2 = someValue.length;
let strLength3 = "123";
let str = strLength3.length;
console.log("str", str);
