// Creatng a variable to get the inquirer method from the node package isntalled. 
var inquirer = require('inquirer');
// Creating a variable to get the Word constructor function.
var Word = require('./Word.js')

// Creating the text prompts. 
inquirer.prompt([
    // Creating the text prompt for the CL. 
    {
      type: 'input',
      message: 'Guess a letter!',
      name: 'letter guess'
    },
  ])
  .then(function(inquirerRespsone) {
    console.log(inquirerRespsone);
    //

  });

console.log(Word)