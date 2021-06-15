# Tic-Tac-Toe

How about a game or two of Tic-Tac-Toe between two old-school Final Fantasy mages<sup>*<sup>?  Connect any three squares in a line (vertical, horizontal, diagonally) to win.  Wins are stored and will be listed when you return to the app.  

A deploy link will be provided once the repository is moved from private to public.

The specs and comp information for this project can be [found here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html).

<sub>* Yes, I'm aware that's a White Mage image, not a Red Mage, but the red color works better for the purpose of this project.</sub>

## Playing the game
This operates like a classic game of Tic-Tac-Toe, where the winner is the one who gets three squares selected in a row.  After a win, the win tally will update and the game will restart after a three-second delay.  In the case of a draw, the game will automatically restart after a three-second delay.

![gif of Tic-Tac-Toe page use clicking](https://something.gif "Tic-Tac-Toe page use")

Wins are saved locally and are persistent across reloads or page refreshes.  You can click the green button at the bottom to reset the board and erase all saved win data.

## Overview of Project
This is the final, solo project for Module One at Turing.  The goals of this project are as follows:
  * Solidify and demonstrate your understanding of: DRY JavaScript, localStorage to persist data event delegation to handle similar event listeners.
  * Understand the difference between the data model and how the data is displayed on the DOM.
  * Iterate through/filter DOM elements using for loops.
  * Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge.

## Technologies used
 * HTML
 * CSS
 * JavaScript
 * WAVE
 * Git
 * GitHub

### Code Architecture
The entire application consists of one HTML page, one CSS file, and three JavaScript files:
  1. The `player.js` file contains the Player class constructor. It contains functions to save wins and retrieve wins from local storage.
  2. The `game.js` file contains the Game class constructor. It also contains two player instances and it tracks/checks the game board condition throughout play.
  3. The `main.js` file contains the DOM-related code, such as the functions to display player turn and square selections.

## Challenges
The main challenge in this project was applying all the previous learning from Module One into this solo effort.  Flexbox produced some challenges in getting the display layout arranged properly. It also wasn't possible to get the added functionality of making player turn data persist in local storage, within the time constraint of the project.  This will be added as a future improvement (see below).

## Wins


## Future Improvements



Screenshots/gifs of your app
