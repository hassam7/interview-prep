/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = chars => {
//   if (chars.length == 1) return chars.length;
//   let str = '';
//   let pointer1 = 0;
//   for(var pointer2 = 1; pointer2 < chars.length; pointer2++) {
//     if(chars[pointer2] != chars[pointer1]) {
//       if (pointer2 - pointer1 == 1) {
//         str += chars[pointer1];
//         pointer1 = pointer2;
//         continue;
//       }
//       str += chars[pointer1]
//       str += pointer2 - pointer1;
//       pointer1 = pointer2;
//     }
//   }
//   if (pointer1 < pointer2) {
//     if (pointer2 - pointer1 == 1) {
//       str += chars[pointer1];
//     } else {
//       str += chars[pointer1];
//       str += pointer2 - pointer1;
//     }
//   }
//   chars.length = 0;
//   chars.push(...str.split(''))
//   console.log(chars)
//   return chars.length;
// };
const compress = char => {
  let index = 0;
  let i = 0;
  while(i < chars.length) {
    let j = i;
    while(j < chars.length && chars[i] == chars[j]) j++;
    chars[index++] = chars[i];
    if ( j - i > 1) {
      const count = `${j - i}`;
      count.split('').forEach(item => chars[index++] = item);
    }
    i = j;
  }
  return index;
}
// const chars = ['a', 'a', 'a', 'b', 'b', 'a', 'a'];
// const chars = ['a', 'b', 'c'];
// const chars = ['a', 'b', 'a', 'b', 'a', 'b', 'b', 'a', 'a'];
// const chars = ['a', 'a', 'b' ,'a', 'b', 'b', 'a', 'a'];
// const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
// const chars = ['a'];
const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
console.log(compress(chars));
console.log(chars)