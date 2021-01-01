function helper(nums, i) {
  if (i >= nums.length) return 0;
  return Math.max(nums[i] + helper(nums, i + 2), helper(nums, i + 1));
}

function houseRobberLoop(nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  let previous = nums[0],
    current = Math.max(previous, nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let tmp = current;
    current = Math.max(current, nums[i] + previous);
    previous = tmp;
  }
  return current;
}
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  return helper(nums, 0);
};

// console.log(rob([1, 2, 3, 1]));
// console.log(houseRobberLoop([1, 2, 3, 1]));
console.log(houseRobberLoop([1, 2, 3, 1]));
// console.log(houseRobberLoop([2, 7, 9, 3, 1]));
