/**
 * @param {number[][]} grid
 * @return {number}
 */
function dfs(grid, row, col) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] == 0
  )
    return 1;
  if (grid[row][col] == 'X') return 0;

  grid[row][col] = 'X';
  let neighbourCount =
    dfs(grid, row + 1, col) +
    dfs(grid, row - 1, col) +
    dfs(grid, row, col + 1) +
    dfs(grid, row, col - 1);
  return neighbourCount;
}
var islandPerimeter = function (grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 1) {
        return dfs(grid, row, col);
      }
    }
  }
};

var islandPerimeterLoop = function (grid) {
  let perimeter = 0;
  const rowSize = grid.length;
  const colSize = grid[0].length;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 0) continue;
      perimeter += 4;
      if (row > 0) perimeter -= grid[row - 1][col];
      if (col > 0) perimeter -= grid[row][col - 1];
      if (row < rowSize - 1) perimeter -= grid[row + 1][col]
      if (col < colSize - 1) perimeter -= grid[row][col + 1]
    }
  }
  return perimeter;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeterLoop(grid));
