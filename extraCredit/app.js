"use strict";

/**
 * Represents the winning combinations on the Tic-Tac-Toe board.
 * @type {Array<Array<number>>}
 */
const winners = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [4, 8, 12, 16],
  [1, 6, 11, 16],
  [4, 7, 10, 13],
];

/**
 * Player 1's selections.
 * @type {Array<number>}
 */
let player1Selections = [];

/**
 * Player 2's selections.
 * @type {Array<number>}
 */
let player2Selections = [];

/**
 * Current player (0 or 1).
 * @type {number}
 */
let currentPlayer = 0;

/**
 * Player 1's points.
 * @type {number}
 */
let points1 = 0;

/**
 * Player 2's points.
 * @type {number}
 */
let points2 = 0;

/**
 * The size of the Tic-Tac-Toe board.
 * @type {number}
 */
const size = 4;

/**
 * Gets an HTML element by its ID.
 * @function
 * @param {string} id - The ID of the HTML element.
 * @returns {HTMLElement} - The HTML element with the specified ID.
 */
const getById = (id) => document.getElementById(id);

/**
 * Draws the Tic-Tac-Toe board dynamically.
 * @function
 * @returns {void}
 */
const drawBoard = () => {
  const parent = getById("game");

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }

  /**
   * Creates a cell for the Tic-Tac-Toe board.
   * @function
   * @param {number} id - The ID of the cell.
   * @returns {HTMLTableCellElement} - The created cell element.
   */
  const createCell = (id) => {
    const col = document.createElement("td");
    col.id = id;
    col.addEventListener("click", handleCellClick);
    return col;
  };

  for (let s = 0; s < size; s++) {
    const row = document.createElement("tr");
    for (let r = 0; r < size; r++) {
      row.appendChild(createCell(s * size + r + 1));
    }
    parent.appendChild(row);
  }
};

/**
 * Handles a click on a cell of the Tic-Tac-Toe board.
 * @function
 * @param {Event} event - The click event.
 * @returns {void}
 */
const handleCellClick = (event) => {
  const clickedCell = event.target;

  /**
   * Handles the turn of a player.
   * @function
   * @param {string} symbol - The player's symbol ('X' or 'O').
   * @param {Array<number>} selections - The player's selections array.
   * @param {string} currentPlayerId - The ID of the current player's element.
   * @param {string} nextPlayerId - The ID of the next player's element.
   * @returns {void}
   */
  const handlePlayerTurn = (
    symbol,
    selections,
    currentPlayerId,
    nextPlayerId
  ) => {
    clickedCell.innerHTML = symbol;
    selections.push(parseInt(clickedCell.id));
    selections.sort((a, b) => a - b);
    getById(currentPlayerId).classList.remove("selected");
    getById(nextPlayerId).classList.add("selected");
  };

  if (currentPlayer === 0) {
    handlePlayerTurn("X", player1Selections, "player1", "player2");
  } else {
    handlePlayerTurn("O", player2Selections, "player2", "player1");
  }

  if (checkWinner()) {
    updatePoints();
    resetGame();
    drawBoard();
  } else if (
    player2Selections.length + player1Selections.length ===
    size * size
  ) {
    resetGame();
    drawBoard();
  } else {
    switchPlayer();
    clickedCell.removeEventListener("click", handleCellClick);
  }
};

/**
 * Updates the points of the players.
 * @function
 * @returns {void}
 */
const updatePoints = () => {
  if (currentPlayer === 0) {
    points1++;
  } else {
    points2++;
  }

  getById("player1").innerHTML = points1;
  getById("player2").innerHTML = points2;
};

/**
 * Switches the current player.
 * @function
 * @returns {void}
 */
const switchPlayer = () => {
  currentPlayer = 1 - currentPlayer; // Switching between 0 and 1
};

/**
 * Resets the game state.
 * @function
 * @returns {void}
 */
const resetGame = () => {
  currentPlayer = 0;
  player1Selections = [];
  player2Selections = [];
  getById("player1").classList.add("selected");
  getById("player2").classList.remove("selected");
};

/**
 * Loads the winning combinations into the winners array.
 * @function
 * @returns {void}
 */
const loadAnswers = () => {
  // winners array initialization remains the same
};

/**
 * Checks if the current player has won.
 * @function
 * @returns {boolean} - True if the current player has won, false otherwise.
 */
const checkWinner = () => {
  const playerSelections =
    currentPlayer === 0 ? player1Selections : player2Selections;

  if (playerSelections.length >= size) {
    for (let i = 0; i < winners.length; i++) {
      const winner = winners[i];
      let isWinner = true;
      for (let j = 0; j < winner.length; j++) {
        if (!playerSelections.includes(winner[j])) {
          isWinner = false;
          break;
        }
      }
      if (isWinner) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Initializes the Tic-Tac-Toe game when the window has loaded.
 * @function
 * @returns {void}
 */
window.addEventListener("load", () => {
  drawBoard();
  loadAnswers();
});
