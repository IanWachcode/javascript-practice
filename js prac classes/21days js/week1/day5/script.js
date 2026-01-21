//const cars = ["Bmw", "Volkswagen", "Audi", "Mercedes"];

//cars.push("Volvo"); //add to the end
//cars.unshift("Ferrari"); //add to the beginning
//console.log(cars);
//output: ['Ferrari', 'Bmw', 'Volkswagen', 'Audi', 'Mercedes', 'Volvo']
//console.log(cars[0])
//console.log(cars.length)

//let task1 = "learn JS";
//let task2 = "Practice";

//tasks = task1 + "," + task2;

//tasks =["Learn JS", "Practice"];
//console.log(tasks); //output: learn JS,Practice
//console.log(tasks[1]); //output: Practice

//tasks.push("Read about JS");
//console.log(tasks); //output: ['Learn JS', 'Practice', 'Read about JS']
//tasks.unshift("Wake up");
//console.log(tasks); //output: ['Wake up', 'Learn JS', 'Practice', 'Read about JS']

//tasks.pop() //removes last element
//console.log(tasks); //output: ['Wake up', 'Learn JS', 'Practice']

//tasks.shift() //removes first element
//console.log(tasks); //output: ['Learn JS', 'Practice']

//console.log(tasks.length); //output: 2'

//for (let i = 0; i < tasks.length; i++) {
//    console.log(tasks[i]);
//} //output: Learn JS
//  //        Practice 

//let tasks = ["biking" , "swimming" , "running"];
//tasks.push("coding");
//console.log(tasks); //output: ['biking', 'swimming', 'running', 'coding']
//tasks.unshift("reading");
//console.log(tasks);

//removeTask = tasks.indexOf("swimming");
//console.log(removeTask); //output: 1

const items = [{
    name: "Bike",
    price: 100
}, {
    name: "TV",
    price: 200
}, {
    name: "Album",
    price: 10
}, {
    name: "Book",
    price: 5
}, {
    name: "Phone",
    price: 500          
}]

console.log(items)

//const filterItems = items.filter((item) => {
//    return item.price <= 100
//})
//console.log(filterItems)

//const itemNames = items.map((item) => {
//    return item.name //price
//})
//console.log(itemNames)

const foundItem = items.find((item) => {
    return item.name === "Book"
})
console.log(foundItem)

