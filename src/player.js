// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: [])
// saveWinsToStorage
// retrieveWinsFromStorage

class Player {
  constructor(id, tokenAssetPath, wins, isTurn) {
    this.id = id;
    this.token = tokenAssetPath;
    this.wins = wins;
    this.isTurn = isTurn;
  }
  //when to push to storage?  After each win.
  saveWinsToStorage() {
    localStorage.setItem(`player${this.id}WinData`, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`player${this.id}WinData`));
  }

}
