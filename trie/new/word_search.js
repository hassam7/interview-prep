/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

const dfs = (board, i, j, word) => {
  if (word == '') return true;
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    word[0] != board[i][j]
  )
    return false;
  const tmp = board[i][j];
  board[i][j] = '#';
  const result =
    dfs(board, i + 1, j, word.substring(1)) ||
    dfs(board, i - 1, j, word.substring(1)) ||
    dfs(board, i, j + 1, word.substring(1)) ||
    dfs(board, i, j - 1, word.substring(1));
  board[i][j] = tmp;
  return result;
};
var exist = function (board, word) {
  const noOfRows = board.length;
  const noOfCols = board[0].length;
  for (let i = 0; i < noOfRows; i++) {
    for (let j = 0; j < noOfCols; j++) {
      if (dfs(board, i, j, word)) return true;
    }
  }
  return false;
};

console.log(exist([...board], 'ABCCED'));
console.log(exist([...board], 'SEE'));
console.log(exist([...board], 'ABCD'));
