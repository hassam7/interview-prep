var combinationSumHelper = function (
  candidates,
  target,
  set = [],
  results,
  startFrom = 0,
) {
  if (target == 0) {
    // console.log(result);
    results.push([...set]);
  } else {
    for (let i = startFrom; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (i > startFrom && candidates[i] == candidates[i - 1]) continue;
      if (target - candidate >= 0) {
        set.push(candidate);
        combinationSumHelper(
          candidates,
          target - candidate,
          set,
          results,
          i + 1,
        );
        set.pop();
      }
    }
  }
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const results = [];
  combinationSumHelper(candidates, target, [], results);
  return results;
};

let candidates = [10, 1, 2, 7, 6, 1, 5].sort(),
  target = 8;
console.log(combinationSum2(candidates, target));
/*
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
  */
