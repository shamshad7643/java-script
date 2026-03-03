//is statement

const num = 5;
if (num > 0) {
    console.log("The number is positive.");
};


//if else statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


//else if 
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
}
else if (marks >= 70) {
  console.log("Grade B");
}
else if (marks >= 50) {
  console.log("Grade C");
}
else {
  console.log("Fail");
}


//switch statement
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}