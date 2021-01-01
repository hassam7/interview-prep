
const flattenArray = (array, result = []) => {
  array.forEach(element => {
    if (Array.isArray(element)) {
      flattenArray(element, result)
    } else {
      result.push(element);
    }
  });
  return result;
};
// const array = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100, [101, 102, [103]]]], 120, 130, 140], 150, 160], 170];
// const flattenArray = array => {
//   let ret = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       ret = [...ret, ...flattenArray(array[i])];
//     } else ret = [...ret, array[i]];
//   }
//   return ret;
// };
console.log(flattenArray([10, 20, [30, [40, 50, [60, [70]]]]]));
console.log(flattenArray([[[],[],[],[],[,[],[],[],[],[]],[],[],[],[],[]]]));
