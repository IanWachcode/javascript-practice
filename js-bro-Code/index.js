// arrays
let fruits = ["apple", "mango", "banana","kiwi"];
//console.log(fruits);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

fruits.push("orange");
console.log(fruits);  // add element at last

fruits.pop();
console.log(fruits);  // remove element from last

fruits.unshift("grapes");
console.log(fruits);  // add element at first

fruits.shift();
console.log(fruits);  // remove element from first

let numOfFruits = fruits.length;
console.log(numOfFruits);  // length of array

let index = fruits.indexOf("banana");
console.log(index);  // index of element

fruits.sort();
console.log(fruits);  // sort array

fruits.reverse();
console.log(fruits);  // reverse array


// loops
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);   // direct access to element shortcut
}

fruits.forEach(function(fruit, index){
    console.log(index + ": " + fruit);
});