/*
Stutter Stack
Write a recursive function named stutterStack that takes a reference to a stack of ints and replaces each integer with
two copies of that integer.
For example, if s stores {1, 2, 3}, then stutterStack(s) changes it to {1, 1, 2, 2, 3, 3}..
*/

s = [1, 2, 3]

function stutterStack(a) {
  if (a.length != 0) {
    const item = a.pop();
    stutterStack(a)
    a.push(item)
    a.push(item)
  }
}
stutterStack(s)