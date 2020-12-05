const flatten = array => {
  const arrayToReturn = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      arrayToReturn.push(...flatten(item));
    } else arrayToReturn.push(item);
  }
  return arrayToReturn;
}

console.log(flatten([10, 20, 30]));
console.log(flatten([10, [20], [30, 40, [50, 60, [70]]]]));