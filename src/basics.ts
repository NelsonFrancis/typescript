let age: number = 23;
let fname: string = "Alice";
let isAdmin: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
let person: {name: string; age: number} = {name: "Bob", age: 30};
let nullValue: null = null;
let undefinedValue: undefined = undefined;

interface User {
  name: string;
  age: number;
}
let user: User = {name: "Charlie", age: 25};

// Function with return type string
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with return type number
function add(a: number, b: number): number {
  return a + b;
}

// Function with return type void
function logMessage(message: string): void {
  console.log(message);
}

// optional parameter
function printInfo(name: string, age?: number): string {
  if (age) {  
    return `Name: ${name}, Age: ${age}`;  
  }
  return `Name: ${name}`;
}

// default parameter
function calculateArea(radius: number, pi: number = 3.14): number {
  return pi * radius * radius;
}

// rest parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// arrow function
const multiply = (x: number, y: number): number => x * y;
// const multiply = (x: number, y: number): number => {
//   return x * y;
// };

// function types
let calculate: (num1: number, num2: number) => number;
calculate = multiply;

enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

let randomValue: any = "Could be anything";
randomValue = 42; 

// Using unknown type is safer than any
let unknownValue: unknown = "Unknown type";
unknownValue = 10;


