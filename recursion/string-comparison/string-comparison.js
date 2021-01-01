/*
  Compare two string usings recursion only/
*/

a = 'foofoo'
b = 'foofoo'

function compare(a, b) {
    if (a.length === 0 || b.length === 0)
        return true;
    else
        return a[0] === b[0] && compare(a.slice(1), b.slice(1))
}

console.log(compare(a, b))
