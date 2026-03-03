// JavaScript operators are symbols or keywords used to perform operations on values and variables.


// JavaScript Operators Examples


// 1️ Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// 2️ Assignment Operators
let x = 20;

x += 5;
console.log("Add & Assign:", x);

x -= 5;
console.log("Subtract & Assign:", x);

x *= 2;
console.log("Multiply & Assign:", x);

x /= 2;
console.log("Divide & Assign:", x);

x %= 3;
console.log("Modulus & Assign:", x);

x **= 2;
console.log("Exponent & Assign:", x);

// 3️ Comparison Operators
let p = 10;
let q = "10";

console.log("Equal (==):", p == q);
console.log("Strict Equal (===):", p === q);
console.log("Not Equal (!=):", p != q);
console.log("Strict Not Equal (!==):", p !== q);
console.log("Greater Than:", p > 5);
console.log("Less Than:", p < 20);
console.log("Greater or Equal:", p >= 10);
console.log("Less or Equal:", p <= 5);

// 4️ Logical Operators
let isLoggedIn = true;
let isAdmin = false;

console.log("AND (&&):", isLoggedIn && isAdmin);
console.log("OR (||):", isLoggedIn || isAdmin);
console.log("NOT (!):", !isLoggedIn);

// 5️ Increment / Decrement
let num = 5;
console.log("Post Increment:", num++);
console.log("After Increment:", num);
console.log("Pre Increment:", ++num);

console.log("Post Decrement:", num--);
console.log("After Decrement:", num);
console.log("Pre Decrement:", --num);

// 6️ Ternary Operator
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary:", result);