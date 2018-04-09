const board = (positions) => `  
    ${positions[0]} | ${positions[1]} | ${positions[2]}
   --------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
   ________
    ${positions[6]} | ${positions[7]} | ${positions[8]}
    
  player x move:
`

class Game {
  constructor() {
    this.positions = Array(9).fill('');
  }

  generateBoard() {
    console.log(board(this.positions));
  }

}

const game = new Game();

console.log(game.generateBoard());