// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: [])
// saveWinsToStorage
// retrieveWinsFromStorage

class Player {
  constructor(id, tokenPiece, wins) {
    this.id = id;
    this.token = tokenPiece;
    this.wins = wins || 0;
  }
  saveWinsToStorage() {
    localStorage.setItem(`player${this.id}Data`, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`player${this.id}Data`));
  }

}
