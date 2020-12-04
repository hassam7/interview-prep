// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// function reverse(str) {
//   return str.split('').reverse().join('');
// }


// a b c
// a + ''
// 'b' + 'a'
// 'c' + 'ba'
// function reverse(str) {
//   let toRet = '';
//   for(let char of str) {
//     toRet = char + toRet
//   }
//   return toRet;
// }

// function reverse(str) {
//   const strArray = str.split('');
//   let start = 0;
//   let end = strArray.length - 1;
//   while( start <= end) {
//     const temp = strArray[start];
//     strArray[start] = strArray[end];
//     strArray[end] = temp;
//     start++;
//     end--;
//   }
//   return strArray.join('');
// }

function reverseStrHelper(strArray, start, end) {
  if (start >= end );
  else {
    const temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;
    reverseStrHelper(strArray, start + 1, end - 1);
  }
}

function reverse(str) {
  const strArray = str.split('');
  reverseStrHelper(strArray, 0, strArray.length)
  return strArray.join('');
}

module.exports = reverse;
