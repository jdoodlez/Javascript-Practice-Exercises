// Practice #5 - Objects

// Create an object called person with these properties: name (string), age (number),  isStudent (boolean)

// Add a method greet that logs: Hello, my name is [name] and I am [age] years old.

// Call the greet method

let person = {
    name: 'Jhon',
    age: 20,
    isStudent: true,
    greet: function (){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    },
}

person.greet();

//Extra Practice: 

//Add a new property to person after you create it.

person.hobby = "playing video games";

// Delete the isStudent property.

person.isStudent = '';

// Loop over the object’s keys and log each key and value.

console.log(person);
// Create an array of person objects and write a loop to call greet for each one.

let persons = [{
    p_name: "Doe",
    age: 21,
    isStudent: true,
    hobby: "playing chess",
    greet: function () {
    console.log(`Hello, my name is ${this.p_name} and I am ${this.age} years old.`);
    }
},
{
    p_name: 'Khris',
    age: 19,
    isStudent: false,
    hobby: "coding websites",
    greet: function () {
    console.log(`Hello, my name is ${this.p_name} and I am ${this.age} years old.`);
    }
},
{
    p_name: 'Krisel',
    age: 21,
    isStudent: false,
    hobby: "studying",
    greet: function () {
    console.log(`Hello, my name is ${this.p_name} and I am ${this.age} years old.` );
    }
}
]

// Call greet function for each one
for (let i = 0; i <= 2; i++){
    persons[i].greet();
}