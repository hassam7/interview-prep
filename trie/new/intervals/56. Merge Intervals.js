const doIntervalsOverlap = (a, b) => {
  const front = Math.max(a[0], b[0]);
  const back = Math.min(a[1], b[1]);
  return back - front >= 0;
};
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  result.push(intervals[0]);
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

// console.log(
//   merge([
//     [1, 4],
//     [4, 5],
//   ]),
// );
