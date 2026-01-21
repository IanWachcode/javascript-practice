for (let i = 1; i <= 10; i++) {
    console.log(i);
}
 
//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//console.log(6);
//console.log(7);
//console.log(8);
//console.log(9);
//console.log(10); 

//while (true) {
//    console.log('infinite loop');
//}
//let secret = 5;
//let guess = 5;
//if (guess === secret) {
//    console.log('you guessed it!');
//} else console.log('wrong guess, try again!');

//let userName = '';

//while(userName ==='' || userName === null){  
    userName = window.prompt("Enter your username:"); // username has to be entered
//}
//console.log(`Hello ${userName}`);

let secretNumber = 7;
let userGuess = 5;

if (userGuess === secretNumber) {
    console.log('Congratulations! You guessed the secret number.');
} else {
    console.log('Too high! Try again.');
} 