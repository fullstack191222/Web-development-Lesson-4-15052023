// Get the game board and cells
const gameBoard = document.getElementById("gameBoard");
const cells = document.getElementsByClassName("cell");

// Initialize game variables
let currentPlayer = "X";
let gameEnded = false;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Add click event listeners to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    // Check if the cell is already filled or if the game has ended
    if (this.innerHTML !== "" || gameEnded) {
      return;
    }

    // Update the cell with the current player's symbol
    this.innerHTML = currentPlayer;

    // Update the board array with the current player's symbol
    const row = Math.trunc(i / 3);
    // const row = this.id.charAt(4);
    // const col = this.id.charAt(5);
    const col = i % 3;
    board[row][col] = currentPlayer;

    // Check if the game has been won or tied
    if (checkWin() || checkTie()) {
      gameEnded = true;
      return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
}

// Add click event listener to reset button
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetGame);

// Helper function to check if the game has been won
function checkWin() {
  // Check rows and columns for three in a row
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      endGame();
      return true;
    }

    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer
    ) {
      endGame();
      return true;
    }
  }

  // Check diagonals for three in a row
  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) {
    endGame();
    return true;
  }

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) {
    endGame();
    return true;
  }

  return false;
}

// Helper function to check if the game is tied
function checkTie() {
  // Check if all cells are filled
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false;
    }
  }

  endGame(true);
  return true;
}

// Helper function to end the game
function endGame(tie = false) {
  // Display win/tie message
  const message = tie ? "It's a tie!" : `Player ${currentPlayer} wins!`;
  //alert(message);
  showWinner(message);

  // Disable all cells
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", function () {});
  }
}

// //Exercise
// const showWinner = (message) => {
//   const divPanel = document.getElementById("winner");
//   divPanel.innerHTML = `<h1>  ${message}  </h1>`;
// };

// Helper function to reset the game
function resetGame() {
  // Reset game variables
  currentPlayer = "X";
  gameEnded = false;
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // Clear all cells
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }

//   //Clear the panel of winner message.
//   const divPanel = document.getElementById("winner");
//   divPanel.innerHTML = ``;
}

// function handleCellClick(event) {
//   const cell = event.target;
//   const row = cell.dataset.row;
//   const col = cell.dataset.col;

//   // Check if the cell is already occupied
//   if (gameBoard[row][col] !== "") {
//     return;
//   }

//   // Update the cell
//   cell.textContent = currentPlayer;
//   gameBoard[row][col] = currentPlayer;

//   // Check if the game is over
//   if (checkForWin() || checkForDraw()) {
//     endGame();
//   } else {
//     switchPlayers();
//   }
// }
