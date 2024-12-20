const Gameboard = (() => {
  const board = [];

  // dynamic size
  const boardSize = 9;

  // display in console
  const drawBoard = () => {
    console.log(board);
  };

  // updating board:
  const startBoard = () => {
    for (let i = 1; i <= boardSize; i++) {
      board.push('');
    }
  };

  const markBoard = (index, marker) => {
    if (board[index] === '') {
      board[index] = marker;
      return;
    }
    return false;
  };

  // board win logic:
  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2], // top row
      [3, 4, 6],
      [6, 7, 8],
      [0, 3, 6], // left column
      [1, 4, 7],
      [2, 6, 8],
      [0, 4, 8], // lastly: diagonals
      [2, 4, 6],
    ];

    winConditions.forEach((row, index) => {
      const [a, b, c] = row;
      if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    });
    return null;
  };

  const checkTie = () => {
    if (board.includes('')) {
      return false;
    }
    return true;
  };

  return { drawBoard, startBoard, markBoard, checkWinner, checkTie };
})();

const Players = (name, marker) => {
  return { name, marker };
};

const Game = (() => {
  const player1 = Players('Player 1', 'X');
  const player2 = Players('Player 2', 'Y');
  let currentPlayer = player1;
  let gameover = false;
  let winner = null;
  let tie = null;

  const startGame = () => {
    Gameboard.startBoard();

    while (!gameover) {
      playTurn();
      Gameboard.drawBoard();
      winner = Gameboard.checkWinner();
      tie = Gameboard.checkTie();
      currentPlayer = switchPlayer();
      if (winner !== null) {
        return gameOver(winner);
      }
      if (tie) {
        return gameOver(tie);
      }
    }
  };

  const switchPlayer = () => {
    return currentPlayer === player1 ? player2 : player1;
  };

  const playTurn = () => {
    let index = 0;
    do {
      index = prompt('Choose index of marker');
    } while (isNaN(index) || index === '' || index < 0 || index > 8);
    Gameboard.markBoard(index, currentPlayer.marker);
  };

  const gameOver = (result) => {
    if (result === 'X' || result === 'Y') {
      console.log(`Winner is ${result}`);
    } else {
      console.log("It's tie!");
    }
  };

  return { startGame };
})();
