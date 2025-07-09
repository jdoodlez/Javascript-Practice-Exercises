// Practice Set 2 — Basic Arithmetic

// Main Exercise: Write a program that takes two numbers, adds them, subtracts them, multiplies them, and divides them. Log each result.


let num1 = 30;
let num2 = 25;
let num3 = 10;

let add = num1 + num2;
let subt = num1 + num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log(`Add: ${add}`)
console.log(`Subtract: ${subt}`)
console.log(`Multiply: ${mul}`)
console.log(`Divide: ${div}`)


//Extra Practice:

//Use prompt() (in the browser) or hardcode two numbers and perform modulus (%).

let mod = num1 % num2;
console.log(`Modulus: ${mod}`);

//Calculate the average of three numbers.

let result = (num1 + num2 + num3) / 3;
console.log(`Average: ${result}`);

//Increment a number by 1 using "++"" and decrement another by 1 using "--"".  

let inc = ++num1;
let dec = --num2;

console.log(inc);
console.log(dec);
