const longestCommonSubsequence = (s1, s2) => {
  if (s1.length == 0 || s2.length == 0) return '';
  else if (s1[0] == s2[0]) {
    return s1[0] + longestCommonSubsequence(s1.substring(1), s2.substring(1));
  } else {
    const firstChoice = longestCommonSubsequence(s1, s2.substring(1));
    const secondChoice = longestCommonSubsequence(s1.substring(1), s2);
    if (firstChoice.length >= secondChoice.length) return firstChoice;
    else return secondChoice;
  }
};
console.log(longestCommonSubsequence('cs106a', 'cs106b'))
console.log(longestCommonSubsequence('nick', 'julie'));
console.log(longestCommonSubsequence('karel', 'c++'));
console.log(longestCommonSubsequence('she sells', 'seashells'));
