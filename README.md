# Constructor-Word-Guess

## *** Since this is an optional assignment, this project is being tabled until a later date (so I can focus my attention on the next mandatory assignment.) ***

## Screen Shot of App Cycle:

![](images/screen-shot-main.png)


## Link to Video on Github Pages:



## About the project:

For this assignment, we have to create a word guess game for the command-line using contructor functions. The completed game should meet the following criteria:

  * The completed game should be able to receive user input using the inquirer or prompt npm packages.
  
  * The game should contain three js files:
  
      1. Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
   
         a. A string value to store the underlying character for the letter.

         b. A boolean value that stores whether that letter has been guessed yet.

         c. A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed.

         d. A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly 
         
      2. Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

         a. An array of new Letter objects representing the letters of the underlying word.
   
         b. A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    
         c. A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

      3. index.js: The file containing the logic for the course of the game, which depends on Word.js and the following:
        
         a. Randomly selects a word and uses the Word constructor to store it.
        
         b. Prompts the user for each guess and keeps track of the user's remaining guesses.

      4. Letter.js should not require any other files.
   
      5. Word.js should only require Letter.js


## Techologies used to build:
  * Node.js
  * JavaScript
  * Node Package for Inquirer

## Methodology:


## Problems That I Overcame:



## Problems Still Facing (Bugs):



## Code Snippets:

