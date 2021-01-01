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
// printSubArray([1, 2, 3, 4])

// const permute = str => {
//   if (str.length <= 1) return str;
//   else {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//       const remainingItems = str.filter((item, index) => index != i);
//       let ret = permute(remainingItems);

//       for (let j = 0; j < ret.length; j++) {
//         result.push(str[i] + ret[j]);
//       }
//     }
//     return result;
//   }
// };
// console.log(permute('abc'.split('')));

/*
'ab.cd.e' : 'foo',
'ab.cd.f' : 'bar',
'ab.g' : 'foo2'
*/

/*
void findSolutions(n, other params) :
    if (found a solution) :
        solutionsFound = solutionsFound + 1;
        displaySolution();
        if (solutionsFound >= solutionTarget) :
            System.exit(0);
        return

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            findSolutions(n+1, other params);
            removeValue(val, n);
*/
// const sum = array => array.reduce((prev, current) => prev + current, 0);

// const combinationSum = (k, n, startFrom, set = [], answers = []) => {
//   if (set.length == k && sum(set) == n) {
//     answers.push([...set]);
//   } else {
//     for (let i = startFrom; i <= 9; i++) {

//       set.push(i);
//       combinationSum(k, n, i + 1, set, answers);
//       set.pop(i)
//     }
//   }
// }
// let answers = [];
// combinationSum(3, 9, 1, [], answers);
// console.log(answers)
// const generateIpAddresses = (
//   startFrom = [0, 0, 0, 0],
//   endOn = [255, 255, 255, 255],
//   set = [],
//   iterator = 0,
// ) => {
//   if (iterator > 3) {
//     console.log(set.join('.'));
//     return;
//   }
//   for (let i = startFrom[iterator]; i <= endOn[iterator]; i++) {
//     set.push(i);
//     generateIpAddresses(startFrom, endOn, set, iterator + 1);
//     set.pop();
//   }
// };

// const anwswers = [];
// generateIpAddresses([10, 20, 10, 20], [10, 20, 10, 22]);
// console.log(anwswers);

// const restoreIpAddress = function (str) {
//   const results = [];
//   const isIpValid = s => {
//     if (s.length > 3) return false;
//     if (s.startsWith('0') && s.length > 1) return false;
//     const value = +s;
//     return value >= 0 && value <= 255;
//   };

//   for (let i = 1; i < 4 && i < str.length; i++) {
//     const firstPart = str.substring(0, i);
//     if (isIpValid(firstPart)) {
//       for (let j = 1; i + j < str.length && j < 4; j++) {
//         const secondPart = str.substring(i, i + j);
//         if (isIpValid(secondPart)) {
//           for (let k = 1; i + j + k < str.length && k < 4; k++) {
//             const thirdPart = str.substring(i + j, i + j + k);
//             const fourthPart = str.substring(i + j + k);
//             if (isIpValid(thirdPart) && isIpValid(fourthPart)) {
//               results.push(`${firstPart}.${secondPart}.${thirdPart}.${fourthPart}`);
//             }
//           }
//         }
//       }
//     }
//   }
//   return results;
// };
// console.log(restoreIpAddress(`010010`));

const permute = (array, result, temp, startFrom = 0) => {
  if (temp.length == array.length) {
    result.push([...temp]);
  } else {
    for (let i = startFrom; i < array.length; i++) {
      // if (temp.includes(array[i])) continue;
      temp.push(array[i]);
      permute(array, result, temp, startFrom + 1);
      temp.pop(array[i]);
    }
  }
};

const permutations = array => {
  const result = [];
  permute(array, result, []);
  return result;
};

console.log(permutations(['1', '2', '3']));
