//Create a game of guessing the right number by the user

let gameNum = 45;

let userNum = prompt("Guess the GameNumber");

while(gameNum != userNum) {
    userNum = prompt("You Guessed wrong Please guess again ");
}

console.log("Congratulations You Guessed the Right number");