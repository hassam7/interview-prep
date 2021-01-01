/*
Is Subsequence
Write a recursive function named isSubsequence that accepts two string parameters, and returns true if the second
string is a subsequence of the first string. A string is a subsequence of another if it contains the same letters in the same
order, but not necessary consecutively. You can assume both strings are already lowercased.
*/

str = "computer";
seq = "cute"

function isSubSequence(str, seq) {
    if (seq.length === 0)
        return true;
    else if (str.length === 0)
        return false;
    else {
        if (seq[0] === str[0])
            return isSubSequence(str.slice(1), seq.slice(1));
        else if (seq[0] !== str[0])
            return isSubSequence(str.slice(1), seq);
    }
}


/*
For reference here is how you can find subsequence using loops

string = 'abcdefghijklmopq'
seq = 'apq';
var match = 0;
var j = 0;
for (var i = 0; i < seq.length; i++) {
    let seqChar = seq[i];
    for (; j < string.length; j++) {
        let stringChar = string[j]
        if (seqChar === stringChar) {
            j++;
            match++;
            break;
        }
    }
}

console.log(match === seq.length);

*/