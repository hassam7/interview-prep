// const isSubsequence = (s, t) => {
//   let subseqIndex = 0;
//   for(let i = 0; i < t.length; i++) {
//     if (s[subseqIndex] == t[i]) subseqIndex++;
//   }
//   console.log(subseqIndex)
//   return subseqIndex === s.length;
// }

const isSubsequence = (s, t) => {
  let arr  = t.split('');
  const check = str => {
    while (arr.length) {
      if (arr.shift() == str) return true;
    }
    return false;
  }
  return s.split('').every(str => check(str));
}

console.log(isSubsequence('abc', 'acbec'));