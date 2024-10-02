// 1. Generating the random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;
// 2. Selecting the necessary DOM elements to interact with.
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

// 3. Adding the main game logic inside the checkGuess function.
function checkGuess() {
  // Convert the user's guess to a number.
  const userGuess = Number(guessField.value);

  // If this is the first guess, initialize the guesses paragraph.
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  // Append the current guess to the guesses paragraph.
  guesses.textContent += `${userGuess} `;

  // Check if the user's guess is correct.
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver(); // Ends the game if the guess is correct.
  }
  // If the user has used all their turns without guessing correctly.
  else if (guessCount === 10) {
    lastResult.textContent =
      "Game over :(. The correct number was " + randomNumber;
    lowOrHi.textContent = "";
    setGameOver(); // Ends the game when the player runs out of turns.
  }
  // If the guess is incorrect and turns are still available.
  else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    // Provide feedback if the guess is too low.
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Your guess is too low.";
    }
    // Provide feedback if the guess is too high.
    else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Your guess is too high.";
    }
  }

  // Increment the turn count and reset the input field for the next guess.
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

// 4. Adding an event listener to the submit button to trigger checkGuess when clicked.
guessSubmit.addEventListener("click", checkGuess);

// 5. Defining the setGameOver function to handle the end of the game.
function setGameOver() {
  guessField.disabled = true; // Disables the input field.
  guessSubmit.disabled = true; // Disables the submit button.
  // Creates a reset button for the player to start a new game.
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

// 6. Defining the resetGame function to reset the game state.
function resetGame() {
  guessCount = 1; // Resets the turn count to 1.

  // Clears all feedback paragraphs.
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  // Removes the reset button from the document.
  resetButton.parentNode.removeChild(resetButton);

  // Re-enables the input field and submit button.
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = ""; // Clears the input field.
  guessField.focus(); // Refocuses the input field.

  // Resets the background color.
  lastResult.style.backgroundColor = "white";

  // Generates a new random number for the new game.
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//The final line sets an event listener on our new button so that when it is clicked, a function called resetGame() is run.
//Now we need to define this function too! Add the following code, again to the bottom of your JavaScript:

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
