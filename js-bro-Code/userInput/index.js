// how to accept user input in javascript

//we can use the prompt() function to get user input
//the prompt() function displays a dialog box that prompts the user for input
//the function returns the input value as a string

//easy way to get user input
//let username;
//username = window.prompt("Enter your name: "); //prompting the user to enter their name
//console.log(username); //printing the user's name to the console

//using input from an HTML form
let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
}
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

