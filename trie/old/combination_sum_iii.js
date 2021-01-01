const sum = array => array.reduce((prev, current) => prev + current, 0);

// const combinationSum = (k, n, startFrom, set = [], answers = []) => {
//   if (set.length == k && sum(set) == n) {
//     answers.push([...set]);
//     return;
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

const combinationSum = (k, n, startFrom, set = [], answers = []) => {
    if (set.length == k && n == 0) {
      answers.push([...set]);
      return;
    } else {
      for (let i = startFrom; i <= 9; i++) {

        set.push(i);
        combinationSum(k, n - i, i + 1, set, answers);
        set.pop(i)
      }
    }
  }

let answers = [];
combinationSum(3, 9, 1, [], answers);
console.log(answers)

/* Try This
var combinationSum3 = function(k, n) {
    const perms = [];
    findCombos(1, [], k, n, perms);
    return perms;
};

const findCombos = (num, curr, k, n, perms) => {
    if(k === 0 && n === 0) return perms.push(curr);
    if(num > 9 || k === 0 || n < 0) return;
    curr.push(num);
    findCombos(num + 1, curr.slice(0), k - 1, n - num, perms);
    curr.pop();
    findCombos(num + 1, curr.slice(0), k, n, perms);
}
*/
