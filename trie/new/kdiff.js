/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  let count = 0;
  for(let [x, _] of map) {
    if (k == 0) {
      if (map.get(x) >= 2) count++;
    }
    else if (map.has(x+k)) count++;
  }
  return count;
};

console.log(findPairs([1,3,1,5,4], 0));