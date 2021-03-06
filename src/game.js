class Game {
  constructor(player1, player2) {
    this.player1Moves = [];
    this.player2Moves = [];
    this.player1 = new Player(1, "./assets/blackMageIcon.png", 0, true);
    this.player2 = new Player(2, "./assets/whiteMageIcon.png", 0, false);
    this.turn = this.player1;
    this.playerTurnCounter = 0;
    this.isWon = false;
    this.isDraw = false;
  };
  recordPlayerMove(moveMade) {
    if (this.player1.isTurn) {
      this.player1Moves.push(moveMade);
      this.playerTurnCounter++;
    } else if (this.player2.isTurn) {
      this.player2Moves.push(moveMade);
      this.playerTurnCounter++;
    }
    this.checkForWin();
    this.checkForDraw();
  }
  getTurnInfo() {
    console.log(`It is ${this.turn} time`);
    if (this.player1.isTurn === true) {
      return this.turn = this.player1.id;
    } else {
      return this.turn = this.player2.id;
    }
  }
  changePlayerTurn() {
    if (this.player1.isTurn === true) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
    this.player1.isTurn = !this.player1.isTurn;
    this.player2.isTurn = !this.player2.isTurn;
    console.log('invoked changePlayerTurn here');
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
      console.log('ran checkForWin here');
    }
  }
  checkForDraw() {
    if (this.playerTurnCounter === 9) {
      this.isDraw = true;
      this.resetGame();
    }
  }
  runWinningSequences() {
    this.isWon=true;
    this.turn.wins++;
    this.turn.saveWinsToStorage();
    console.log(`The saved id should be: ${this.turn.id}`);
    this.resetGame();
  }
  resetGame() {
    setTimeout(function() {
      location.reload();
      this.playerTurnCounter = 0;
      this.isWon = false;
      this.isDraw = false;
    }, 3000);
  }
  saveTurnToStorage() {
    localStorage.setItem(`playerTurnData`, JSON.stringify(this.turn));
  }
}
