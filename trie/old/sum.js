const canMakeSum = (nums, target, current = 0, index = 0) => {
  console.log({current, index});
  if (index >= nums.length) return current == target;
  else {
    return canMakeSum(nums, target, current + nums[index], index + 1) ||
      canMakeSum(nums, target, current, index + 1)
  }
};


const nums = [1, 1, 2, 3, 5];
console.log(canMakeSum(nums, 9));



