// Creating a variable to store the Letter construction function. 
var Letter = require('./letter.js');

// Creating the word constructor function 
function Word(word) {
  // setting the word to an array of new Letter objects.  
  this.letterObjArray = [];
  // pushing a letter from the Letter constructor into the letter objects array. 
  for (i = 0; i < word.length; i++) {
    this.letterObjArray.push(new Letter([i]));
  };
  // Creating a function that returns a string representing the word. This calls on the function on each letter object that displays the character or underscore and conacts those together.
  this.wordString = function() {
    var finalWord = '',
      // Looping through the letter obj array and calling on the guess method from the Letter constructor for each letter. Then contacting the letters together. 
      for (i = 0; i < this.letterObjArray.length; i++)[
        finalWord += this.letterObjArray[i].guess() + ' ';
      ]
  }


};