/*
Digit Sum
Write a recursive function digitSum that takes an integer and returns the sum of its digits. For example, calling
digitSum(1729) should return 1 + 7 + 2 + 9, which is 19.
*/

a = 222;
function digitSum(number) {
    if (number !== 0) {
        const num = Math.floor(number%10)
        return  num + digitSum(number / 10)
    } else return 0;
}

console.log(digitSum(a))