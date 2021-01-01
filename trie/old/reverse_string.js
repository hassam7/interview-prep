const helper = (array, i, j) => {
  if (i >= j) return;
  else {
    swap(array, i, j);
    helper(array, i + 1, j - 1);
  }
}

function swap(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

const reverseArray = string => {
  helper(string, 0, string.length - 1);
}

const array = ['a', 'b', 'c', 'd', 'e'];
reverseArray(array);
console.log(array)
// const reverseStr = str => {
//   if (str.length === 0) return '';
//   else {
//     return reverseStr(str.substring(1)) + str[0]
//   }
// }
// const s = 'hello world WTF';
// console.log(reverseStr(s))


