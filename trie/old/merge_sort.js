const merge = (leftArray, rightArray) => {
  const temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const rightElement = rightArray[rightIndex];
    const leftElement = leftArray[leftIndex];
    if (leftElement < rightElement) {
      temp.push(leftElement);
      leftIndex++;
    } else {
      temp.push(rightElement);
      rightIndex++;
    }
  }
  return [
    ...temp,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
};
function sort(array) {
  if (array.length == 1) return array;
  const middle = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle);
  return merge(sort(leftArr), sort(rightArr));
}
const array = [5, 4, 3, 2, 1];
console.log(array);
console.log('Sorted: ', sort(array));
