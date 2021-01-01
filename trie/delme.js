const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// const crackHelper = (soFar = '', maxLength) => {
//   if (soFar.length >= maxLength) return '';
//   if (soFar == 'zzz') return soFar;
//   console.log(soFar);
//   for (let i = 0; i < alphabets.length; i++) {
//     const password = crackHelper(soFar + alphabets[i], maxLength);
//   }
// };
// crackHelper('', 4);

const canMakeSum = (array, sum) => {
  if (array.length == 0) return sum == 0;
  const first = array[0];
  const rest = [...array.splice(1)];
  return canMakeSum(rest, sum - first) || canMakeSum(rest, sum);
};

// console.log(canMakeSum([1, 1, 2, 3, 5], 9));
// console.log(canMakeSum([1, 4, 5, 6], 8));
console.log(canMakeSum([1, 4, 5], 8));

// const isMeasurable = (target, weights) => {
//   if (weights.length == 0) return target == 0;
//   else {
//     const last = weights[weights.length - 1];
//     weights.pop();
//     const result =
//       isMeasurable(target - last, weights) ||
//       isMeasurable(target + last, weights) ||
//       isMeasurable(target, weights);
//     weights.push(last);
//     return result;
//   }
// };
// console.log(isMeasurable(2, [1, 3]));
// console.log(isMeasurable(5, [1, 3]));
// console.log(isMeasurable(6, [1, 3, 7]));
