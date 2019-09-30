// Creatng a variable to get the inquirer method from the node package isntalled. 
var inquirer = require('inquirer');
// Creating a variable to get the Word constructor function.
var Word = require('./Word.js')

// Creating an array of random avengers for the random word to be passed into the Word constructor. 
var avengers = ['iron man', 'thor', 'captain america', 'doctor strange', 'spiderman', 'hulk', 'black widow', 'falcon', 'scarlet witch', 'black panther'];
// Using Math.floor(Math.random()) method to select the random avenger.
var randomAvenger = avengers[Math.floor(Math.random() * avengers.length)];
// Pushing the randomly chosen avenger into the Word constructor function. 
var randomWord = new Word(randomAvenger);
// Creating a variable to store the user's correctly guessed letters. 
var correctlyGuessed = [];
// Creating a variable to store the user's incorrectly guessed letters. 
var incorrectlyGuessed = [];
// Creating a variable to store the number of remaining guesses.
var remainingGuesses = 10;

// Creating the game logic. 
function playGame() {
  // Creating the text prompts for the command line using inquirer's node package. 
  inquirer.prompt([
      //
      {
        type: 'input',
        message: 'Guess a letter!',
        name: 'userInput',
      },
    ])
    .then(function(response) {
      console.log(response.userInput);
      // console.log(randomWord.letterObjArray);
      for (var i = 0; i < randomWord.letterObjArray.length; i++) {
        console.log(randomWord.letterObjArray[i].letter);
        if (randomWord.letterObjArray[i].letter === response.userInput) {
          console.log('YES!');
        } else {
          console.log('No matching letter.')
        }
      };
      // if (randomWord.includes(response.userInput)) {
      //   console.log('==============================================');
      //   console.log('You got a letter!')
      //   console.log('==============================================');
      // } else {
      //   console.log('==============================================');
      //   console.log('Sorry! Guess again')
      //   console.log('==============================================');
      // };
    });
  //
}

playGame();