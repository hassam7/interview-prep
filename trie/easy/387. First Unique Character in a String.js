/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (!s) return -1;
  else {
    const map = s.split('').reduce((prev, current) => {
      if (prev.has(current)) {
        prev.set(current, prev.get(current) + 1);
      } else prev.set(current, 1);
      return prev;
    }, new Map());
    for(let [key, value] of map) {
      if (value == 1) {
        return s.indexOf(key);
      }
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('pingping'));
