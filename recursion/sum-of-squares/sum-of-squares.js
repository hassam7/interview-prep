/*
Sum of Squares
Write a recursive function named sumOfSquares that accepts an integer parameter n and returns the sum of squares from
1 to n. For example, the call of sumOfSquares(3) should return 1 + 4 + 9 = 14.
*/


a = 3; // 3 => 14, 1*1 + 2*2 * 3*3 => 1+4+9 => 14

function sumOfSquare(number) {
    if (number === 0) return 0;
    else {
        return (number * number) + sumOfSquare(number - 1);
    }
}

console.log(sumOfSquare(3))