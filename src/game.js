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
    this.player1 = new Player(1, "./assets/blackMage.png", 0);
    this.player2 = new Player(2, ".assets/whiteMage.png", 0);
    this.turn = this.player1;
    this.playerTurnCounter = 0;
    this.isWon = false;
    this.isDraw = false;
  }
  //track game Data

  //track of player turn - change it!
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

  }
  checkForDraw() {
    // if there have been nine selections and isWon = false, then isDraw = true
  }
  runWinningSequences() {
    this.isWon=true;
    this.turn.wins++;
    this.turn.saveWinsToStorage();
    // do we need resetGame() as well?
  }
  resetGame() {
    // will use to reset game board, playerTurnCouner, isWon=false
  }

}
