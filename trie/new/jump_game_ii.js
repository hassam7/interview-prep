const Queue = require('@datastructures-js/queue');

// const bfs = (nums, currentIndex, stepsTaken = 0) => {
//   let max = Number.POSITIVE_INFINITY;
//   if (currentIndex == nums.length - 1) {
//     return stepsTaken;
//   } else {
//     const positions = currentIndex + nums[currentIndex];
//     for (let i = currentIndex + 1; i <= positions; i++) {
//       max = Math.min(bfs(nums, i, stepsTaken + 1), max);
//     }
//   }
//   return max;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
//   return bfs(nums, 0);
// };

var jump = function (nums) {
  var canJump = function(nums) {
    const size = nums.length;
    let reachable = 0;
    let steps = 0
    for(let i =0; i < size; i++) {
      if (reachable < i) return steps;
      else {
        reachable = Math.max(reachable, i + nums[i]);
        steps++;
      }
    }
    return steps
  };
   return canJump(nums);
};

console.log(jump([2, 3, 1, 1, 4]));
