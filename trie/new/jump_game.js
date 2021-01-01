
// const helper = (nums, index) => {
//   if (index == nums.length - 1) return true;
//   else {
//     const nextIndex = index + nums[index];
//     for(let nextPosition = index + 1; nextPosition <= nextIndex; nextPosition++) {
//       if (helper(nums, nextPosition)) return true;
//     }
//   }
//   return false;
// }
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
//   return helper(nums, 0);
// };

var canJump = function(nums) {
  const size = nums.length;
  let reachable = 0;
  for(let i =0; i < size; i++) {
    if (reachable < i) return false;
    else reachable = Math.max(reachable, i + nums[i]);
  }
  return true
};
// // let nums = [2,3,1,1,4];
let nums = [3,2,1,0,4];
console.log(canJump(nums));


