const prompt = require('prompt');

const board = (positions, player) => `  
    ${positions[0]} | ${positions[1]} | ${positions[2]}
   -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
   -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
    
  player ${player} move:
`

class Game {
  constructor() {
    this.positions = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    this.player = 'X';
  }

  generateBoard() {
    console.log(board(this.positions, this.player));
    prompt.start();

    prompt.get(['move'], (err, result) => {
      this.positions[Number(result.move)] = this.player;
      this.player = this.player === 'X' ? 'O' : 'X';
      this.generateBoard();
    });
  }

}

const game = new Game();

console.log(game.generateBoard());