function markCurrentIsland(grid, rows, cols, i, j) {
  if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] != '1') return;
  grid[i][j] = 'X';
  markCurrentIsland(grid,rows,cols, i + 1, j);
  markCurrentIsland(grid,rows,cols, i + -1, j);
  markCurrentIsland(grid,rows,cols, i, j + 1);
  markCurrentIsland(grid,rows,cols, i, j - 1);
}
var numIslands = function (grid) {
  const rows = grid.length;
  if (rows == 0) return 0;
  const cols = grid[0].length;
  let numberOfIslands = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == '1') {
        markCurrentIsland(grid, rows, cols, i, j);
        numberOfIslands++;
      }
    }
  }
  return numberOfIslands;
};

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]),
);
