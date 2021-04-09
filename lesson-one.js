let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guestField");

let guestCount = 1;
let reset;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "previous guesses: ";
    }
    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congrats! you got it right";
        lastResult.style.backgroundcolor = "green";
        lowOrHigh = textContent = " ";
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = "!!!Game Over!!!";
        setGame();
    }
    else {
        lastResult.textContent = "Wrong! ";
        lastResult.style.backgroundcolor = "red";
        if (userGuess < randomNumber){
            lowOrHigh.textContent = "too low";
        }
        else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "too high!";
        }
    }
    guessCount++;
    guessField.value ="";
    guessField.focus();
}
.console.log(checkGuess);
