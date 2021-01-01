/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const blackList = new Set([...banned]);
  const answer = { word: '', count: 0 };
  const freqTable = paragraph.split(/\W+/).reduce((prev, current) => {
    if (blackList.has(current)) return prev;
    if (prev.has(current)) {
      let inc = prev.get(current) + 1;
      prev.set(current, inc);
    } else {
      prev.set(current, 1);
    }
    if (prev.get(current) > answer.count) {
      answer.count = prev.get(current);
      answer.word = current;
    }
    return prev;
  }, new Map());
  return answer.word;
};

let paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'.toLocaleLowerCase(),
  banned = ['hit'];

mostCommonWord(paragraph, banned);
