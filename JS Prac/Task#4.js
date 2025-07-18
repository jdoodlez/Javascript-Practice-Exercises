// Practice #4 - Functions

//Main Exercise: Create a function called greet that takes a first name as a parameter and logs Hello, [name]! to the console. Call it with different names.


function greet(first_name){
    console.log("Hello " + first_name);
}

greet("Jhon Dale");

//Write a function square that takes a number and returns its square.

let number = 5;
console.log(square(number));

function square(number){
    return number * number;
}

//Write a function isEven that returns true if a number is even, and false if it’s odd.

let result = function isEven (number){
    if (number % 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(result(number));