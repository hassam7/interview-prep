const powerSetRecursive = array => {
  if (array.length <= 1) return [[], array];
  else {
    const results = [];
    const [selected, ...rest] = array;
    const result = powerSetRecursive(rest);
    results.push(...result)
    result.forEach(item => results.push([selected, ...item]))
    return results;
  }
};
console.log(powerSetRecursive(['a', 'b', 'c', 'd', 'e', 'f']));
// function generateSubset(soFar, remaining) {
//   if (remaining == '') console.log(soFar);
//   else {
//     generateSubset(soFar + remaining[0], remaining.substring(1));
//     generateSubset(soFar, remaining.substring(1))
//   }
// }


// generateSubset('', 'abc');