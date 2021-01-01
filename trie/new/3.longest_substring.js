/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let maxSoFar = 0;
  while( right < s.length) {
    const element = s[right];
    if (!set.has(element)) {
      set.add(element);
      maxSoFar = Math.max(maxSoFar, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxSoFar;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('abcedfgh'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
