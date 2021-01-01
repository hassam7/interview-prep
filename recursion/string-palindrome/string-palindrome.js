/*
 Find Palindrome of a string using recursion only
*/


function isPalindrome(string) {
  if (string.length === 0 || string.length === 1) return true;
  else {
      stringLength = string.length - 1;
      return string[0] === string[stringLength] && isPalindrome(string.slice(1, stringLength))
  }
}

console.log(isPalindrome('radar'))
console.log(isPalindrome('abcd'))
