/*
  Reverse a string using recursion only.
*/
a = "abc";
function reverseString(string) {
  if (string.length === 1 || string.length === 0) return string;
  else {
    string = reverseString(string.slice(1)) + string[0];
    return string;
  }
}

console.log(reverseString(a))