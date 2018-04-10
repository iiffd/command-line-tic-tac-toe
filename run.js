const prompt = require('prompt');

const board = (positions, player) => `  
    ${positions[0]} | ${positions[1]} | ${positions[2]}
   -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
   -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
    
  player ${player} move:
  `

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

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
      
      if (this.evaluate(this.player)) {
        console.log(`player ${this.player} wins!!!`);
        return;
      } else if (this.checkDraw()) {
        console.log('DRAW');
        return;
      }
      
      this.player = this.player === 'X' ? 'O' : 'X';
      this.generateBoard();
    });
  }

  evaluate(char) {
    let bool = false;
    winConditions.forEach((win) => {
      if (win.every((index) => this.positions[index] === char)) bool = true;
    })

    return bool;
  }

  checkDraw() {
    return this.positions.every((char) => char === 'X' || char === 'O');
  }
}

const game = new Game();

console.log(game.generateBoard());