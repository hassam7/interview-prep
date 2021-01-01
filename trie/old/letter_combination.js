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

var letterCombinations = function (digits) {
  let combinations = [...mapping[digits[0]]]; // a, b, c
  for(let i = 1; i < digits.length; i++) { //, 2,3
    let newCombination = [];
    combinations.forEach(combination => {
      mapping[digits[i]].split('').forEach(letter => {
        newCombination.push(combination + letter);
      })
    })
    combinations = newCombination;
  }
  return combinations;
};

console.log(letterCombinations('23'));