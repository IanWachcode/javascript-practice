//alert("Hello, JavaScript is fun!");
//console.log("This is a log message from script.js");
//console.error("This is an error message from script.js");

// using let you can reassign values

//let age = 25;
//age = 26; // reassigning a new value to age
//console.log(age);

const name = "Alice";
const age = 30;
const isCool = true;
const rating = 4.5;
//const x = null;
const y = undefined;
let z; // declared but not assigned, so it's undefined

//console.log(name, age, isCool, rating, x, y, z);
//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof isCool);
//console.log(typeof rating);
//console.log(typeof x); // this will show 'object' due to a quirk in JavaScript
//console.log(typeof y);
//console.log(typeof z);

// Concatenation
//console.log("My name is " + name + " and I am " + age);

//template literals
//console.log(`My name is ${name} and I am ${age}`);

//Arrays
const numbers = new Array(1, 2, 3, 4, 5);
//console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
fruits.push("grapes"); // add to end
fruits.unshift("mangoes"); // add to beginning
fruits.pop(); // remove last
//console.log(fruits);
//console.log(Array.isArray(fruits)); // check if it's an array
//console.log(fruits.indexOf("oranges")); // get index of item

//Object literals
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 Main St",
        city: "Boston",
        state: "MA"
    }
};

//console.log(person);
//console.log(person.firstName, person.lastName);
//console.log(person.hobbies[1]);
//console.log(person.address.city);

//array of objects
const todos = [
    {id: 1, text: "Take out trash", isCompleted: true},
    {id: 2, text: "Meeting with boss", isCompleted: true},
    {id: 3, text: "Dentist appointment", isCompleted: false}
];

//console.log(todos);
//console.log(todos[1].text); // access text of second todo
//console.log(todos[1].id, todos[1].isCompleted, todos[1].text); // access all properties of second todo

//JSON
const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);


//for loop
for (let i = 0; i < 10; i ++) {
   // console.log(i) // prints numbers from 0 to 9
}

//while loop
let i  = 0
while (i < 10) {
   // console.log(i) // never ending loop if you forget to increment
    i++ // increment i to avoid infinite loop prints numbers from 0 to 9
}


for (let i = 0; i < todos.length; i++) {
    //console.log(todos[i].text); // prints text of each todo
}

//for..of loop
for (let todo of todos) {
    //console.log(todo.text); // prints text of each todo
}

//forEach, map, filter
todos.forEach(function(todo) {
    //console.log(todo.text); // prints text of each todo 
});

//map
const todoText = todos.map(function(todo) {
    return todo.text; // creates an array of todo texts
});
//console.log(todoText);

//filter
const completedTodos = todos.filter(function(todo) {
    return todo.isCompleted === true; // creates an array of completed todos
}).map(function(todo) {
    return todo.text; // creates an array of texts of completed todos
})
//console.log(completedTodos);

// chaining map and filter
const completedTodoTexts = todos
    .filter(function(todo) {
        return todo.isCompleted === true;
    })
    .map(function(todo) {
        return todo.text;
    });
//console.log(completedTodoTexts);


//conditionals

const x = 20;

 if (x === 10){
    //console.log("x is equal to 10");
 } else if (x > 10) {
    //console.log("x is greater than 10");
 }
 else {
    //console.log("x is less than 10");
 }

 //ternary operator
 const a = 10;

 const color = a > 8 ? "purple" : "orange";
    //console.log(color);

    //switch
switch(color) {
        case "purple":
            //console.log("color is purple");
            break;
        case "orange":
            //console.log("color is orange");
            break;
        default:
            //console.log("color is not purple or orange");
            break;
    }


//functions
function addNums(num1 = 1, num2 = 5) {
    return num1 + num2;
}
//console.log(addNums); // prints the function definition
//console.log(addNums(5, 10));

//arrow functions
const addNumsArrow = (num1 = 1, num2 = 5) => num1 + num2;
//console.log(addNumsArrow()); // uses default values
//console.log(addNumsArrow(10, 20)); // prints 30

//object-oriented programming

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    //this.getBirthYear = function() {
       // return this.dob.getFullYear();
    //}
    //this.getFullName = function() {
        //return `${this.firstName} ${this.lastName}`;
    //}

    ///prototype methods moved outside constructor
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}}
// instantiate object
const person1 = new Person("Mary", "Smith", "3-6-1985");
const person2 = new Person("James", "Johnson", "8-12-1990");

//console.log(person1.dob,'&', person2.dob);
//console.log(person1.getBirthYear());
//console.log(person2.getFullName());

//class syntax
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const person3 = new PersonClass("Emily", "Davis", "11-22-1995");
//console.log(person3.getFullName());
//console.log(person3.getBirthYear()); 

console.log(person1, person2, person3);
     