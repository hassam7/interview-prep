// function computeLeft(nums) {
//   const left = [];
//   left[0] = nums[0]
//   for(let i = 1; i < nums.length; i++) {
//     left[i] = nums[i] * left[i-1];
//   }
//   return left;
// }
// function computeRight(nums) {
//   const right = new Array(nums.length);
//   right[right.length - 1] = nums[right.length - 1]
//   for(let i = right.length - 2; i > -1; i--) {
//     right[i] = nums[i] * right[i+1];
//   }
//   return right;
// }

// var productExceptSelf = function (nums) {
//   if (nums.length === 2) return [nums[1], nums[0]];
//   else {
//     const right = computeRight(nums);
//     console.log(right);
//     const left = computeLeft(nums);
//     console.log(left);
//     const output = new Array(nums.length);
//     output[0] = right[1];
//     output[nums.length - 1] = left[nums.length - 2]
//     for(let i = 1; i < nums.length - 1; i++) {
//       output[i] = left[i-1] * right[i+1];
//     }
//     return output;
//   }
// };

// var productExceptSelf = function (nums) {
//   const output = new Array();
//   let prd = 1;
//   for (let i = 0; i < nums.length; ++i) output[i] = prd *= nums[i];
//   prd = 1;
//   for (let i = nums.length - 1; i > 0; i--) {
//     output[i] = output[i - 1] * prd;
//     prd *= nums[i];
//   }
//   output[0] = prd;
//   return output;
// };
var productExceptSelf = function (nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let prd = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      else {
        output[i] = prd *= nums[j];
      }
    }
  }
  return output;
};
console.log(productExceptSelf([1, 2, 3, 4]));
