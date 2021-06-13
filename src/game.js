// A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(player1, player2) {
    this.player1Moves = [];
    this.player2Moves = [];
    this.player1 = new Player(1, "./assets/blackMageIcon.png", 0);
    this.player2 = new Player(2, "./assets/whiteMageIcon.png", 0);
    this.turn = this.player1;
    this.playerTurnCounter = 0;
    this.isWon = false;
    this.isDraw = false;
  }
  //UPDATE: moved to main.js --> also need function to start a game on page load
  //track game Data - current moves are stored in array above
  //selecting moves and capturing will occur in main.js and pass argument "moveMade" of button
  recordPlayerMove(moveMade) {
    if (this.turn === this.player1) {
      this.player1Moves.push(moveMade);
      this.playerTurnCounter++;
    } else if (this.turn === this.player2) {
      this.player2Moves.push(moveMade);
      this.playerTurnCounter++;
    }
    this.checkForWin();
    this.checkForDraw();
  }
  //track of player turn. Turn tracker above, invoke function in checkForWin()?
  changePlayerTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
  holdWinningMoves(playerMoves) {
    if (playerMoves.includes("a1") && playerMoves.includes("a2") && playerMoves.includes("a3") ||
      playerMoves.includes("b1") && playerMoves.includes("b2") && playerMoves.includes("b3") ||
      playerMoves.includes("c1") && playerMoves.includes("c2") && playerMoves.includes("c3") ||
      playerMoves.includes("a1") && playerMoves.includes("b1") && playerMoves.includes("c1") ||
      playerMoves.includes("a2") && playerMoves.includes("b2") && playerMoves.includes("c2") ||
      playerMoves.includes("a3") && playerMoves.includes("b3") && playerMoves.includes("c3") ||
      playerMoves.includes("a1") && playerMoves.includes("b2") && playerMoves.includes("c3") ||
      playerMoves.includes("c3") && playerMoves.includes("b2") && playerMoves.includes("a1") ||
      playerMoves.includes("a3") && playerMoves.includes("b2") && playerMoves.includes("c1")) {
    return true;
    }
  }
  checkForWin() {
    if (this.holdWinningMoves(this.player1Moves)) {
      this.runWinningSequences();
    } else if (this.holdWinningMoves(this.player2Moves)) {
      this.runWinningSequences();
    } else {
      this.changePlayerTurn();
    }
    //add a saveWinsToStorage invocation here?
  }
  checkForDraw() {
    if (this.playerTurnCounerurnCounter === 9) {
      this.isDraw = true;
    }
    // if there have been nine selections and isWon = false, then isDraw = true
  }
  runWinningSequences() {
    this.isWon=true;
    this.turn.wins++;
    this.turn.saveWinsToStorage();
    // setTimeout(function() {
    //   this.resetGame(); }, 3000);
    this.resetGame();
    // do we need this resetGame() as well?
    // this.resetGame();
  }
  resetGame() {
    // will use to reset game board, playerTurnCounter, isWon=false
    setTimeout(function() {
      location.reload();
      this.playerTurnCounter = 0;
      this.isWon = false;
      this.isDraw = false;
    }, 3000);

  }

}
