
// 👇 query selectors here...👇
var gameBoard = document.getElementById('gameBoard');
var player1WinCount = document.querySelector('.player-1-wins');
var player2WinCount = document.querySelector('.player-2-wins');
var dsiplayPlayerTurnId = document.querySelector('.player-name-turn-display');
var displayPlayerTurnToken = document.querySelector('.player-icon-turn-display');
var resetScoreButton = document.querySelector('.reset-scores-to-zero');
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
var currentGame = new Game;
//will this instantiate both Game and P1/P2 ???


// 👇 event listeners go here 👇
window.addEventListener('load', startGameOnLoad);
resetScoreButton.addEventListener('click', resetScores);
// need to add:
//  event listener for each button in board
// OPTION ONE:
// a1.addEventListener('click', function(event) {
//   selectSquareChoice();
// })
// OPTION TWO:
gameBoard.addEventListener('click', selectSquareChoice);

// 👇 functions and event handlers go here 👇
function startGameOnLoad() {
  console.log('clicked startGameOnLoad');
}
// need to check on saved data and repopulate scores accordingly

function renderWinCountDisplay() {
  // shows the number of wins for each player
  console.log('clicked renderWinCountDisplay');
}

function showWinningMessage() {
  // will show which player won along with their icon
  console.log('clicked showWinningMessage');
}

function showDrawMessage() {
  // will show a message in case of a draw
  console.log('clicked showDrawMessage');
}

function showPlayerTurn() {
  // will display the current player's turn and icon
  console.log('clicked showPlayerTurn');
}

function selectSquareChoice() {
  // will allow button(square) to be selected
  // will show icon in selected button
  // will game.recordPlayerMove(moveClass)
  console.log('clicked selectSquareChoice');
}

function disableSelectSquare() {
    // will disable button for re-click
    console.log('clicked disableSelectSquare');
}

function resetScores() {
    console.log('clicked resetScores');
  // functionality for reset scores button, puts all back to zero wins in data model
  // need to point to new function in game.js probably ???
}
