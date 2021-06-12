
// 👇 query selectors here...👇
var gameBoard = document.getElementById('gameBoard');
var player1WinCount = document.querySelector('.player-1-wins');
var player2WinCount = document.querySelector('.player-2-wins');
var dsiplayPlayerTurnId = document.querySelector('.player-name-turn-display');
var displayPlayerTurnToken = document.querySelector('.player-icon-turn-display');
var resetScoreButton = document.querySelector('.reset-scores-to-zero');

// ...board button identifiers below...
var a1 = document.querySelector('.a1');
var a2 = document.querySelector('.a2');
var a3 = document.querySelector('.a3');
var b1 = document.querySelector('.b1');
var b2 = document.querySelector('.b2');
var b3 = document.querySelector('.b3');
var c1 = document.querySelector('.c1');
var c2 = document.querySelector('.c2');
var c3 = document.querySelector('.c3');

// 👇 global variables go here...👇
var game = new Game;
//will this instantiate both Game and P1/P2 ???


// 👇 event listeners go here 👇
window.addEventListener('load', startGameOnLoad());

// need to add:
//  reset resetScoreButton function
//  event listener for each button in board


// 👇 functions and event handlers go here 👇
startGameOnLoad() {
  // need to check on saved data and repopulate scores accordingly
}
