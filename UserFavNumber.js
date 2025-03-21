//declare a variable to store the favorite number
let theFavNumber = 7; //you can change this to any number

//ask the user to guess the number
let guess;
while (guess != theFavNumber) {
    guess = prompt("Guess my favorite number:");
    
    //convert the input to a number
    guess = Number(guess);

    //check if the guess is too high, too low, or correct
    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! You guessed it.");
    }
}
