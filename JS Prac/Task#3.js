// Practice Set 3 — Conditionals

// Main Exercise: Write a program that checks if a number is even or odd using if...else.

let num = 2;
let num2 = -10;
let age = 14;

if (num % 1) {
    console.log("The number is odd");
} else {
    console.log("The number is even");
}

// Write a program that checks if a number is positive, negative, or zero.

if (num > 0) {
    console.log("The number is positive");
}
else if (num === 0) {
    console.log("The number is zero");
}
else {
    console.log("The number is negative");
}


// Write a program that checks which of two numbers is larger.
if (num > num2) {
    console.log("The first number is larger than the second number.");
}
else {
    console.log("The first number is larger than the first number.");
}


// Write a program that checks if a person is old enough to vote (age >= 18).

if(age >= 18){
    console.log("You are eligible to vote.");
}
else {
    console.log("You are still a minor.");
}
