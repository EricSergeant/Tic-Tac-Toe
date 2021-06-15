class Player {
  constructor(id, tokenAssetPath, wins, isTurn) {
    this.id = id;
    this.token = tokenAssetPath;
    this.wins = wins || 0;
    this.isTurn = isTurn;
  };
  saveWinsToStorage() {
    localStorage.setItem(`player${this.id}WinData`, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`player${this.id}WinData`));
  }
}
