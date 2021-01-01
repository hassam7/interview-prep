const Queue = require('@datastructures-js/queue');
const helper = (arr, startIndex) => {
  const n = arr.length;
  const q = new Queue();
  const visitedIndexes = new Set();
  q.enqueue(startIndex);
  while (!q.isEmpty()) {
    const currentIndex = q.dequeue();
    if (arr[currentIndex] == 0) return true;
    if (visitedIndexes.has(arr[currentIndex])) continue;
    if (currentIndex + arr[currentIndex] < n) {
      q.enqueue(currentIndex + arr[currentIndex]);
    }
    if (currentIndex - arr[currentIndex] >= 0) {
      q.enqueue(currentIndex - arr[currentIndex]);
    }
    visitedIndexes.add(currentIndex);
  }
  return false;
};

const helperBFS = (arr, startIndex) => {
  if (startIndex >= 0 && startIndex < arr.length && arr[startIndex] >= 0) {
    if (arr[startIndex] == 0) return true;
    arr[startIndex] = -arr[startIndex];
    return helperBFS(arr, startIndex + arr[startIndex]) || helperBFS(arr, startIndex - arr[startIndex])
  } else return false;
}
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, startIndex) {
  return helperBFS(arr, startIndex);
};

//         0, 1, 2, 3, 4, 5, 6
// let arr = [4, 2, 3, 0, 3, 1, 2],
//   start = 0;
// 0  1  2  3  4  5  6
let arr = [4, 2, 3, 0, 3, 1, 2],
  start = 5;
// let arr = [3, 0, 2, 1, 2],
//   start = 2;
// let arr = [0, 1],
//   start = 1;
console.log(canReach(arr, start));
