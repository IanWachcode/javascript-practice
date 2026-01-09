//let x = 5;
//let y = "5";
//console.log(x != y); // true, because == does type coercion

//let year = prompt("new year");
//if (year == 2025) alert ("you are right!");

//let year = prompt("what year is it?");
//if (year == 2026) {
//    alert("Happy New Year!......" + "Welcome to 2026!");
//    alert("you are right!");
//} else if (year < 2026) {
//    alert("too late!");
//} else if (year > 2026) {
//    alert("too early!");
//} else {
//    alert("try again!");
//}

//let accessAllowed;
//const age = prompt("How old are you?", "");

//if (age >= 18) {
//  accessAllowed = true;
//    alert("Access granted - you are old enough!");
//} else {
  //accessAllowed = false;
  //alert("Access denied - you must be at least 18 years old.");
//}

let age = prompt("How old are you?", "");
if(age < 13) 
    console.log("child");
else if (age < 19)
    console.log("teenager");
else if (age >= 22)
    console.log("adult");
let accessAllowed;

if (age >= 18) {
  accessAllowed = true;
    alert("Access granted - you are old enough!");
} else {
  accessAllowed = false;
  alert("Access denied - you must be at least 18 years old.");
}

