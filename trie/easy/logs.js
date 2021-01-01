/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLogs = [];
  const digiLogs = [];
  const isLetterLog = string => !string[string.length - 1].match(/[0-9]/g);
  logs.forEach(log => {
    if (isLetterLog(log)) letterLogs.push(log);
    else digiLogs.push(log);
  });
  letterLogs.sort((a, b) => {
    const [id1, ...letters1] = a.split(' ');
    const [id2, ...letters2] = b.split(' ');
    const diff = letters1.join(' ').localeCompare(letters2.join(' '));
    return diff === 0 ? id1.localeCompare(id2) : diff;
  });
  return [...letterLogs, ...digiLogs];
};

// console.log(
//   reorderLogFiles([
//     'dig1 8 1 5 1',
//     'let1 art can',
//     'dig2 3 6',
//     'let2 own kit dig',
//     'let3 art zero',
//   ]),
// );
console.log(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
  ]),
);

// Aplhnumeric Identifier lowercase letters letter logs
// Aplhnumeric Identifier  digits digit logs

// letter logs
//  sort by identifier use identifier to break the tie
// digit logs
