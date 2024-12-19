const Gameboard = (() => {
  const board = Array(9).fill(null);

  board[0] = 'X';
  board[1] = 'X';
  board[2] = 'X';

  const placeMarker = (index, marker) => {
    if (board[index] === null) {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const clearBoard = () => {
    board = Array(9).fill(null);
  };

  const checkWin = () => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winCombos) {
      [a, b, c] = combo;

      if (board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
      return false;
    }
  };

  return { board, placeMarker, checkWin };
})();

// Player Object
const Player = (name, marker) => {
  name, marker;
};

// Game object
const Game = (() => {
  const player1 = Player('Player 1', 'X');
  const player2 = Player('Player 2', 'X');
  const board = Gameboard.board;

  const startGame = () => {
    console.log(board);
  };

  return {
    startGame,
  };
})();

Game.startGame();
