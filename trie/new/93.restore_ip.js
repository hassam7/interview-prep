const isValid = string => {
  if (string == '') return false;
  if (string.length > 3) return false;
  if (string.startsWith(0) && string.length > 1) return false;
  return string >= 0 && string <= 255;
};
const dfs = (s, results, temp = [], depth = 0) => {
  if (s.length == 0 && temp.length == 4) {
    console.log(' '.repeat(depth) + ' Found: ', temp);
    results.push([...temp]);
    return;
  } else {
    for (let i = 1; i <= 3; i++) {
      if (s.length < i) continue;
      const octet = s.substring(0, i);
      console.log(' '.repeat(depth) + 'Checking: ', octet);
      if (isValid(octet)) {
        console.log(' '.repeat(depth), octet, ' is Valid');
        temp.push(octet);
        dfs(s.substring(i), results, temp, depth + 1);
        temp.pop();
      } else console.log(' '.repeat(depth) + 'Discarding: ', octet);
    }
  }
};
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const results = [];
  dfs(s, results);
  return results;
};

console.log(restoreIpAddresses('25525511135'));
// 255.255.111.35, 255.255.11.135
// console.log(restoreIpAddresses('0000'));
//0.0.0.0
// console.log(restoreIpAddresses('1111'));
//1.1.1.1
// console.log(restoreIpAddresses('101023'));
//1.0.102.3 1.010.23 101.0.2.3
// "1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
