let age: number = 23;
let fname: string = "Alice";
let isAdmin: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
let person: {name: string; age: number} = {name: "Bob", age: 30};
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let user: {name: string, age: number} = {name: "Charlie", age: 25};


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


interface Product {
    name: string;
    price: number;
    getdiscount(percentage: number): number;
}
let product1: Product = {
    name: "Laptop",
    price: 1000,
    getdiscount(percentage) {
        return this.price * (percentage / 100);
    }
};
product1.getdiscount(10); // returns 100


interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property cannot change later
}
let user1: User = {name: "Charlie", age: 25, email: "charlie@example.com", id: 1};


//types are similar to interface
type Id = number | string;
const username: Id = 123; 
const username2: Id = "john_doe"; 


// types cannot extend like interfaces
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
const myDog: Dog = {name: "Buddy", breed: "Golden Retriever"};


// interface can be declared multiple times and will be merged
interface Person {
    name: string;
}
interface Person {
    age: number;
}
const person1: Person = {name: "Alice", age: 30};

//interfaces are generally preferred for defining object shapes, while types include unions and intersections.

// union types
type Status = "success" | "error" | "loading";
function setstatus(status: Status): string {
    return `Status: ${status}`;
}
setstatus("success"); 


// intersection types (AND)
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
const myCircle: ColorfulCircle = {color: "red", radius: 5};


// string literal types
let direction: "up" | "down" | "left" | "right";
direction = "up"; // valid


// combining with other types
type SuccessResponse = {
    status: "success";
    data: any;
}
type ErrorResponse = {
    status: "error";
    message: string;
}
type ApiResponse = SuccessResponse | ErrorResponse;


// type assertion
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;