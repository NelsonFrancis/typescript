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
