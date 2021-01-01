
var climbStairs = function(n) {
  const table = [0, 1, 2];
  for(let i = 3; i <= n; i++) {
    table[i] = table[i-1] + table[i-2];
  }
  return table[n]
};

console.log(climbStairs(40));