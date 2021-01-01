// function permute(array) {
//   if (array.length <= 1) return [array];
//   else {
//     const results = [];
//     for(let i = 0; i < array.length; i++) {
//       const remainingItems = array.filter((item, index) => index != i);
//       let ret = permute(remainingItems);
//       for(let j = 0; j < ret.length; j++) {
//         const valueToPush = [array[i], ...ret[j]];
//         results.push(valueToPush);
//       }
//     }
//     return results
//   }
// }

// const permute = (nums, set = [], results = []) => {
//   if (!nums.length) results.push([...set]);
//   for (let i = 0; i < nums.length; i++) {
//     const exceptCurrent = nums.filter((item, index) => index != i);
//     set.push(nums[i]);
//     permute(exceptCurrent, set, results);
//     set.pop();
//   }
//   return results
// };

// console.log(permute(['1', '2', '3']));

const permute = (nums, set = [], results = []) => {
  if (!nums.length) results.push([...set]);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
      const exceptCurrent = nums.filter((item, index) => index != i);
    set.push(nums[i]);
    permute(exceptCurrent, set, results);
    set.pop();
  }
  return results;
};

console.log([...new Set(permute(['1', '2', '1'].sort()))]);

// const permute = string => {
//   const permute_actual = (soFar, rest) => {
//     if (rest.length == 0) console.log(soFar);
//     else {
//       for(let i = 0; i < rest.length; i++) {
//         let next = soFar + rest[i];
//         const remaining = rest.split('').filter((item, index) => index != i).join('');
//         permute_actual(next, remaining)
//       }
//     }
//   }
//   permute_actual("", string)
// }
