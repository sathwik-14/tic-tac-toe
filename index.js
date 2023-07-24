const togglePlayer = () => {
  player === 1 ? player = 2 : player = 1;
  document.getElementById("player").innerText = player;
};

let player = 1;
document.getElementById("player").innerText = player;

let currentPlayer = "X";
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function cellClicked(row, col) {
  if (gameBoard[row][col] === "") {
    gameBoard[row][col] = currentPlayer;
    document.getElementById("cell" + row + col).innerText = currentPlayer;
    document
      .getElementById("cell" + row + col)
      .classList.add("filled-" + currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    setTimeout(()=>checkWin(),500)
    
  }
}

function checkWin() {
  // Check rows, columns, and diagonals for a win
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2] &&
      gameBoard[i][0] !== ""
    ) {
      alert("Player "+player + " wins!");
      resetGame();
      return;
    }
    if (
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[1][i] === gameBoard[2][i] &&
      gameBoard[0][i] !== ""
    ) {
      alert("Player "+player + " wins!");
      resetGame();
      return;
    }
  }

  if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2] &&
    gameBoard[0][0] !== ""
  ) {
    alert("Player "+player + " wins!");
    resetGame();
    return;
  }

  if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0] &&
    gameBoard[0][2] !== ""
  ) {
    alert("Player "+player +" wins!");
    resetGame();
    return;
  }

  // Check for a draw
  let isDraw = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === "") {
        isDraw = false;
        break;
      }
    }
    if (!isDraw) {
      break;
    }
  }

  if (isDraw) {
    alert("It's a draw!");
    resetGame();
    return;
  }else {
    togglePlayer();
  }
}

function resetGame() {
  player = 2
  togglePlayer()
  currentPlayer = "X";
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.innerText = ""));
}
