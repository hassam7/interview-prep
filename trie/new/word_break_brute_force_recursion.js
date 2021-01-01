/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//   let result = false;
//   if (s == '' || s.length == 0) return true;
//   else {
//     for (let word of wordDict) {
//       if (s.startsWith(word)) {
//         result = wordBreak(s.substring(word.length, s.length), wordDict);
//         return result;
//       }
//     }
//   }
//   return result;
// };
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for(let i = 1; i <= s.length; i++) {
    for(let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('abcd', ['a', 'abc', 'b', 'cd']));
