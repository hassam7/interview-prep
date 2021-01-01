// // Method #1
// const premute = array => {
//   if (array.length <= 1) return [array];
//   else {
//     const results = [];
//     for(let i = 0; i < array.length; i++) {
//       const allButCurrent = array.filter((item, index) => index != i);
//       const innerPermutations = premute(allButCurrent);
//       for(let j = 0; j < innerPermutations.length; j++) {
//         results.push([array[i], ...innerPermutations[j]])
//       }
//     }
//     return results;
//   }
// }


// console.log(premute([1,2,3]))

// const permute2 = (soFar, string, results = []) => {
//   if (string.length === 0) return results.push([soFar]);
//   else {
//     for(let i = 0; i < string.length; i++) {
//       const allExceptCurrent = string.split('').filter((item, index) => index != i).join('');
//       permute2(soFar+string[i], allExceptCurrent, results)
//     }
//   }
// }
// const array = [];
// permute2('', '1234', array)
// console.log(array)

