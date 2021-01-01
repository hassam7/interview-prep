/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const pairsArray = [];
  for(let i = 0; i < N+1; i++) pairsArray.push({ trusts: 0, trustedBy: 0 });
  for (let i = 0; i < trust.length; i++) {
    const selectedPair = trust[i];
    pairsArray[selectedPair[0]].trusts += 1;
    pairsArray[selectedPair[1]].trustedBy += 1;
  }
  for(let i = 1; i <= N; i++) {
    if (pairsArray[i].trusts == 0 && pairsArray[i].trustedBy == N - 1) return i;
  }
  return -1;
};

let N = 4,
  trust = [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ];

// let N = 3,
//   trust = [
//     [1, 2],
//     [2, 3],
//   ];

// let N = 3,
//   trust = [
//     [1, 3],
//     [2, 3],
//     [3, 1],
//   ];

// let N = 3,
//   trust = [
//     [1, 3],
//     [2, 3],
//   ];

// let N = 2,
//   trust = [[1, 2]];
console.log(findJudge(N, trust));
