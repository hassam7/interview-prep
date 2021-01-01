/*
  Flatten a  nested array
  [1, 2, [3, 4, [5, 6, [7, 8, [9]]]], 10, 11, 12, [13, [14, 15, 16]]] => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
*/

var b = [1, 2, [3, 4, [5, 6, [7, 8, [9]]]], 10, 11, 12, [13, [14, 15, 16]]]

function flattenArray(arrayToFlatten, currentIndex=0) {
    if (currentIndex >= arrayToFlatten.length)
        return [];
    const selectedItem = arrayToFlatten[currentIndex];

    if (Number.isInteger(selectedItem))
        return [selectedItem, ...flattenArray(arrayToFlatten, currentIndex + 1)]
    else
        return [...flattenArray(selectedItem), ...flattenArray(arrayToFlatten, currentIndex + 1)];
}
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]))
console.log(flattenArray(b))