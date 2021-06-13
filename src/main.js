
// 👇 query selectors here...👇
var gameBoard = document.querySelector('.game-board');
// var squares = document.querySelector('.square');
var player1WinCount = document.querySelector('.player-1-wins');
var player2WinCount = document.querySelector('.player-2-wins');
var displayPlayerTurnId = document.querySelector('.player-name-turn-display');
var displayPlayerTurnToken = document.querySelector('.player-icon-turn-display');
var resetScoreButton = document.querySelector('.reset-scores-to-zero');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');


// 👇 global variables go here...👇
var currentGame = new Game;


// 👇 event listeners go here 👇
window.addEventListener('load', startGameOnLoad);
resetScoreButton.addEventListener('click', resetScores);
gameBoard.addEventListener('click', selectSquareChoice);
// squares.addEventListener('click', selectSquareChoice);


// 👇 functions and event handlers go here 👇
function startGameOnLoad() {
  console.log('clicked startGameOnLoad');
  renderWinCountDisplay();
  showPlayerTurn();
}

function renderWinCountDisplay() {
  // shows the number of wins for each player
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  if (currentGame.player1.wins >= 0) {
    player1WinCount.innerText = `${currentGame.player1.wins}`;
  } else {
    player1WinCount.innerText = `0`;
  }
  if (currentGame.player2.wins >= 0) {
    player2WinCount.innerText = `${currentGame.player2.wins}`;
  } else {
    player2WinCount.innerText = `0`;
  }
  console.log('clicked renderWinCountDisplay');
}

function showWinningMessage() {
  // will show which player won along with their icon
  displayPlayerTurnId.innerText = `Player ${currentGame.turn.id} Won!!!`;
  displayPlayerTurnToken.innerText = `${currentGame.turn.token}`;
  console.log('clicked showWinningMessage');
}

function showDrawMessage() {
  // will show a message in case of a draw
  displayPlayerTurnId.innerText = `It's a draw, try again!`;
  // currentGame.changePlayerTurn();
  // displayPlayerTurnToken.innerText = `${currentGame.turn.token}`;
  console.log('clicked showDrawMessage');
}

function showPlayerTurn() {
  // will display the current player's turn and icon
  displayPlayerTurnId.innerText = `It's Player ${currentGame.turn.id}'s Turn`;
  displayPlayerTurnToken.innerHTML = `<img src="${currentGame.turn.token}" alt="Player ${currentGame.turn.id} Icon">`;
  console.log('clicked showPlayerTurn');
}


function selectSquareChoice() {
  // will show icon in selected button
  // will game.recordPlayerMove(moveClass)
  var buttonID = event.target.getAttribute('id');
  var square = event.target;
  square.disabled = true;
  // console.log(`buttonID is ${buttonID}`);
  square.innerHTML = `<img src="${currentGame.turn.token}" alt="Player ${currentGame.turn.id} Icon">`;
  currentGame.recordPlayerMove(buttonID);
  showPlayerTurn();
  checkStatus();

  // if (currentGame.turn.id === 1) {
  //   // buttonID.innerText = `<img class="emoji" src="./assets/blackMageIcon.png" alt="Black Mage Icon">`;
  // } else if (currentGame.turn.id === 2) {
  // } else if (disableSelectSquare(buttonID)) {
  //   console.log('this was an outside click');
  // }
  // need to add if !null
}

function checkStatus() {
  if(currentGame.playerTurnCounter === 9) {
    showDrawMessage();
    disableAllButtons();
  } else if (currentGame.isWon) {
    showWinningMessage();
    disableAllButtons();
  } else {
    console.log('checkStatus() was invoked');
    // showPlayerTurn();
  }
}

function disableAllButtons() {
  a1.disabled = true;
  a2.disabled = true;
  a3.disabled = true;
  b1.disabled = true;
  b2.disabled = true;
  b3.disabled = true;
  c1.disabled = true;
  c2.disabled = true;
  c3.disabled = true;
}

/*
function enableAllSquares() {
  // UPDATE: not needed when reload is creating the same effect
  // re-enable/unlock all squares after win or draw
}
*/

function resetScores() {
  // NEW FEATURE: functionality for reset scores button, puts all back to zero wins in data model
    console.log('clicked resetScores');
  // need to point to new function in game.js probably ???
}
