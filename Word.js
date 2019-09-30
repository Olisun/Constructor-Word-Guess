// Creating a variable to store the Letter construction function. 
var Letter = require('./Letter.js');

// Creating the word constructor function. 
function Word(word) {
  // setting the word to an array of new Letter objects.  
  this.letterObjArray = [];
  // pushing a letter from the Letter constructor into the letter objects array. 
  for (i = 0; i < word.length; i++) {
    this.letterObjArray.push(new Letter(word[i]));
  };
  // Creating a function that returns a string representing the word. This calls on the function on each letter object that displays the character or underscore and conacts those together.
  this.wordString = function() {
    var finalWord = '';
    // Looping through the letter obj array and calling on the checkLetter method from the Letter constructor for each letter. Then contacting the letters together. 
    for (var i = 0; i < this.letterObjArray.length; i++) {
      finalWord += this.letterObjArray[i].checkLetter() + ' ';
    };
  };
  // Creating a function that takes a character input from the user as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
  this.guessCheck = function(userInput) {
    // Looping through the letter object array to compare each letter the user types using the guess method from the letter.js file.  
    for (var i = 0; i < letterObjArray.length; i++) {
      this.letterObjArray[i].guess(userInput);
    };
  };
};

// Setting up this constructor function to be exported so that index.js can require it.
module.exports = Word;