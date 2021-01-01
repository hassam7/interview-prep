const helper = (number, results, startFrom = 0, set) => {
  if (set.length == number) {
    results.push([...set]);
  } else {
    for (let i = 1; i <= 6; i++) {
      set.push(i);
      helper(number, results, i, set);
      set.pop(i);
    }
  }
};
const diceRoll = number => {
  const results = [];
  helper(number, results, 0, []);
  return results;
};

console.log(diceRoll(4));
