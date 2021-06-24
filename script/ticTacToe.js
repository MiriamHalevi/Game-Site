
const status = document.querySelector('.game--status');

let gameActive = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
console.log(status)
status.innerHTML = currentPlayerTurn();
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
 
    var mat = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];

    mat.forEach(row => {
        let [a, b, c] = row;
        if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c])
            roundWon = true;
    })



    if (roundWon) {
        status.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        status.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}
function handleCellClick(clicked) {
    const clickedCell = clicked.target;

    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    status.innerHTML = currentPlayerTurn();
    document.querySelectorAll('td')
        .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('td').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('#game--restart').addEventListener('click', handleRestartGame);

