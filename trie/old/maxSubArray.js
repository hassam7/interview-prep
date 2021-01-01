// Approach #1
// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       let sum = 0;
//       for (let k = i; k <= j; k++) {
//         sum += nums[k];
//       }
//       maxSum = Math.max(maxSum, sum);
//     }
//   }
//   return maxSum;
// };

// Approach #2
// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       maxSum = Math.max(sum, maxSum);
//     }
//   }
//   return maxSum;
// };

// Approach #3
// var maxSubArray = function (nums) {
//   let runningSum = 0;
//   let maxSum = nums[0];
//   for (let number of nums) {
//     runningSum += number;
//     maxSum = Math.max(maxSum, runningSum);
//     if (runningSum < 0) runningSum = 0;
//   }
//   return maxSum;
// };

// Approach #4

// var maxSubArray = function (nums) {
//   let maxEndingHere = nums[0];
//   let maxSoFar = nums[0]
//   for(let i = 1; i < nums.length; i++) {
//     maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
//     maxSoFar = Math.max(maxEndingHere, maxSoFar);
//   }
//   return maxSoFar;
// };


// Approach 5
var maxSubArrayRecursive = function (array) {
  console.log(helper(array, array.length - 1, 0));
};

// var helper = function (array, index, someSoFar) {
//   if (index === 0) return [array[index], 0];
//   else {
//     let [previousValue, someSoFar] = helper(array, index - 1);
//     return [
//       Math.max(previousValue + array[index], array[index]),
//       Math.max(Math.max(previousValue + array[index], someSoFar)),
//     ];
//   }
// };

// console.log(maxSubArrayRecursive([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-2,1]));
// console.log(maxSubArray([-10, -10, -10]));

// print all subarrays
// const helper = (array, startIndex) => {
//   if (startIndex === array.length) return;
//   else {
//     let str = ''
//     for(let i = startIndex; i < array.length; i++) {
//       str += ':' + array[i];
//       console.log(str)
//     }
//   }
//   console.log(`'''''''''''`)
//   helper(array, startIndex + 1);
// }

// const printSubArray = array => {
//   return helper(array, 0)
// }
// printSubArray([1, 3, 7])