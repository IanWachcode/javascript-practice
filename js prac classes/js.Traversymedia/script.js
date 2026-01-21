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
    console.log(i) // prints numbers from 0 to 9
}

//while loop
let i  = 0
while (i < 10) {
    console.log(i) // never ending loop if you forget to increment
    i++ // increment i to avoid infinite loop prints numbers from 0 to 9
}


for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text); // prints text of each todo
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
    console.log("x is equal to 10");
 } else if (x > 10) {
    console.log("x is greater than 10");
 }
 else {
    console.log("x is less than 10");
 }

    //ternary operator
    