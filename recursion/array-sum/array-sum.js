/*
  Sum all elements of array using recursion only.
*/

var a = [1, 2, 3, 4, 5];

function sumArray(array, currentIndex) {
    if (currentIndex >= array.length)
        return 0;
    else
        return array[currentIndex] + sumArray(array, currentIndex + 1);

}

console.log(sumArray(a, 0))