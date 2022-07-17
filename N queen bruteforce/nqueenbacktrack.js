const boardTd = document.querySelectorAll("tr");
const N = 8;
let board = [];
for (let i = 0; i < N; i++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
}

function printMatrix(board) {
    let str = "";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 1) {
                str += board[i][j] + " ";
            } else {
                str += "0 ";
            }
        }
        console.log(str);
        str = "";
    }
}

function isSafe(row, col) {
    for (let i = 0; i < col; i++) {
        if (board[row][i] == 1)
            return false;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    for (let i = row, j = col; j >= 0 && i < N; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    return true;
}
let finalQueens = [];
let m = 0, n = 0;
function solveRec(col) {
    if (col == N)
        return true;
    for (let i = 0; i < N; i++) {
        if (isSafe(i, col)) {
            board[i][col] = 1;
            finalQueens.push([i, col]);
            setTimeout(() => {
                boardTd[finalQueens[i][0]].cells[finalQueens[i][1]].classList.add("queen");
            }, m * 300);
            m++;
            if (solveRec(col + 1)) {
                return true;
            }
            board[i][col] = 0;
            finalQueens.splice(finalQueens.indexOf([i, col]), 1);
            setTimeout(() => {
                boardTd[finalQueens[i][0]].cells[finalQueens[i][1]].classList.remove("queen");
            }, n * 300);
            n++;
        }
    }
    return false;
}

function solve() {
    if (solveRec(0) == false) {
        return false;
    } else {
        printMatrix(board);
        console.log("Solution Found");
        return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        solve();
    }, 1000);
}, false);  