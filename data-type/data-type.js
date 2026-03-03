// A data type tells us what kind of data is stored in a variable.
// JavaScript Data Types Example

// 1️ Number
let age = 25;
let price = 99.99;

// 2️ String
let name = "Shaim";

// 3️Boolean
let isLoggedIn = true;

// 4️ Undefined
let city;
 
// 5️ Null
let data = null;

// 6️ Symbol (ES6)
let uniqueId = Symbol("id");

// 7️ BigInt
let bigNumber = 123456789012345678901234567890n;

// 8️ Object
let person = {
  name: "Shamshad",
  age: 25
};

// 9️ Array
let colors = ["red", "green", "blue"];

//  Function
function greet() {
  return "Hello World";
}

// Console Output


console.log("Number:", age, price);
console.log("String:", name);
console.log("Boolean:", isLoggedIn);
console.log("Undefined:", city);
console.log("Null:", data);
console.log("Symbol:", uniqueId);
console.log("BigInt:", bigNumber);
console.log("Object:", person);
console.log("Array:", colors);
console.log("Function:", greet());