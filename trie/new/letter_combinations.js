const mapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};
const helper = (digits, results, temp = []) => {
  if (digits.length == 0) {
    results.push(temp.join(''));
    return;
  } else {
    for (let digit of mapping[digits[0]]) {
      temp.push(digit);
      helper(digits.substring(1), results, temp);
      temp.pop(digit);
    }
  }
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const results = [];
  helper(digits, results);
  return results;
};

console.log(letterCombinations('23'));
