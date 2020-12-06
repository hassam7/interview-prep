// Write a function that returns the value at a give path
/*
    let testObj = {
        foo: 2,
        bar: 'car',
        baz: {x: 'xx', y: 'yy', biz: {a: 56}}
    };
    getByPath(['baz', 'biz', 'a'], testObj); //56
 */

function getByPath([first, ...rest], object) {
  if (!first || !object[first]) return;

  if (rest.length < 1) return object[first];
  else return getByPath(rest, object[first]);
}


let testObj = {
  foo: 2,
  bar: 'car',
  baz: { x: 'xx', y: 'yy', biz: { a: 56 } }
};
console.log(getByPath(['baz', 'biz', 'a'], testObj)); //56