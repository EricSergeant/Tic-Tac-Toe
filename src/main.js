
// 👇 query selectors here...👇
var gameBoard = document.querySelector('.game-board');
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
a1.addEventListener('click', selectSquareChoice);
a2.addEventListener('click', selectSquareChoice);
a3.addEventListener('click', selectSquareChoice);
b1.addEventListener('click', selectSquareChoice);
b2.addEventListener('click', selectSquareChoice);
b3.addEventListener('click', selectSquareChoice);
c1.addEventListener('click', selectSquareChoice);
c2.addEventListener('click', selectSquareChoice);
c3.addEventListener('click', selectSquareChoice);

// 👇 functions and event handlers go here 👇
function startGameOnLoad() {
    renderWinCountDisplay();
    showPlayerTurn();
  }


function renderWinCountDisplay() {
  // shows the number of wins for each player
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  if (currentGame.player1.wins === null) {
    player1WinCount.innerText = 0;
  } else {
    player1WinCount.innerText = `${currentGame.player1.wins}`;
  }
  if (currentGame.player2.wins === null) {
    player2WinCount.innerText = 0;
  } else {
    player2WinCount.innerText = `${currentGame.player2.wins}`;
  }
  // console.log('clicked renderWinCountDisplay');
}

function showWinningMessage() {
  // will show which player won along with their icon
  displayPlayerTurnId.innerText = `Player ${currentGame.turn.id} Won!!!`;
  displayPlayerTurnToken.innerHTML = `<img src="${currentGame.turn.token}" alt="Player ${currentGame.turn.id} Icon">`;
  // console.log(`Current turn is: ${currentGame.turn.id}.`);
}

function showDrawMessage() {
  // will show a message in case of a draw
  displayPlayerTurnId.innerText = `It's a draw, try again!`;
  // console.log('clicked showDrawMessage');
}

function showPlayerTurn() {
  // will display the current player's turn and icon
  displayPlayerTurnId.innerText = `It's Player ${currentGame.turn.id}'s Turn`;
  displayPlayerTurnToken.innerHTML = `<img src="${currentGame.turn.token}" alt="Player ${currentGame.turn.id} Icon">`;
  console.log('clicked showPlayerTurn');
}


function selectSquareChoice() {
  // will show icon in selected button
  var buttonID = event.target.getAttribute('id');
  var square = event.target;
    square.disabled = true;
    square.innerHTML = `<img src="${currentGame.turn.token}" alt="Player ${currentGame.turn.id} Icon">`;
    if (currentGame.turn.id === 1) {
      square.classList.add('blue-selected');
    } else {
      square.classList.add('red-selected');
    }
// iconDisplay.classList.add('hidden');
  // square.classList.add('blue-selected');
    currentGame.recordPlayerMove(buttonID);
    showPlayerTurn();
    checkStatus();
}

function checkStatus() {
  if(currentGame.playerTurnCounter === 9) {
    showDrawMessage();
    disableAllButtons();
  } else if (currentGame.isWon) {
    showWinningMessage();
    disableAllButtons();
  }
    // console.log('checkStatus() was invoked');
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


function resetScores() {
  // NEW FEATURE: functionality for reset scores button, puts all back to zero wins in data model
    location.reload();
    this.playerTurnCounter = 0;
    this.isWon = false;
    this.isDraw = false;
    localStorage.clear();
}
