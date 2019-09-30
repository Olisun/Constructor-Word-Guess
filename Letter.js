// Creating a constructor function to to display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
function Letter(letter) {
  // Creating a string value to store the underlying character for the letter.
  this.letter = letter;
  // Creating a boolean value that stores whether that letter has been guessed yet.
  this.guessedYet = false;
  // Creating a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed.
  this.checkLetter = function() {
    //
    if (this.letter === ' ') {
      this.guessedYet === true;
      return ' ';
    } else if (this.guessedYet === false) {
      return '_';
    } else {
      return this.letter;
    };
  };
  // Creating a function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.guess = function(guess) {
    if (guess === this.letter) {
      this.guessedYet === true;
    };
  };
};

// Setting up this constructor function to be exported so that Word.js can require it.
module.exports = Letter;