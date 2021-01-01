/*
  Find length of array using recursion.
  arrayLength([1,2,3]) => 3
*/

a = [1,2,89];

function arrayLength(array, currentIndex=0) {
    if (currentIndex >= array.length) return 0;
    else return 1 + arrayLength(array, currentIndex + 1);
}

console.log(arrayLength(a))