// var findAnagrams = function (s, p) {
//   const pLength = p.length - 1;
//   let results = [];
//   let currentStrHash = 0;
//   const pHash = p.split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
//   let currentStr = '';
//   console.log(`pHash is: `, pHash)
//   for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
//     currentStrHash += s[windowEnd].charCodeAt(0) - 96;
//     currentStr += s[windowEnd];;
//     if (windowEnd >= pLength) {
//       if (pHash === currentStrHash) results.push(windowEnd - pLength);
//       currentStrHash -= currentStr[0].charCodeAt(0) - 96;
//       currentStr = currentStr.slice(1)
//     }
//   }
//   return results;
// };
var findAnagrams = function (s, p) {
  const results = [];
  const pWindow = new Array(27).fill(0);
  const sWindow = new Array(27).fill(0);
  [...p].forEach((char) => {
    const ascii = char.charCodeAt(0) - 96;
    pWindow[ascii]++;
  });
  for (let index = 0; index < s.length; index++) {
    if (index >= p.length) {
      const char = s[index - p.length];
      const asciiForChar = char.charCodeAt(0) - 96;
      sWindow[asciiForChar]--;
    }
    const ascii = s.charCodeAt(index) - 96;
    sWindow[ascii]++;
    if (pWindow.join('') == sWindow.join('')) results.push(index + 1 - p.length)
  }
  return results;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
