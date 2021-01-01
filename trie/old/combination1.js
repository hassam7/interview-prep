const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumHelper = function (candidates, target, result = [], results, startFrom = 0) {
  if (target == 0) {
    // console.log(result);
    results.push([...result]);
  } else {
    for (let i = startFrom; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (target - candidate >= 0) {
        result.push(candidate);
        combinationSumHelper(candidates, target - candidate, result, results, i);
        result.pop();
      }
    }
  }
};

// let candidates = [2,3,6,7], target = 7;
let candidates = [2, 3, 5],
  target = 8;
// let candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4],
//   target = 15;
const result = [];
combinationSumHelper(candidates, target, [], result);
console.log(result);
