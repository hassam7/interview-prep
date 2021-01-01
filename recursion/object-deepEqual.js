/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

*/

const isObject = obj => typeof obj === "object" && obj !== null;

function deepEqual(obj1, obj2) {
  if (isObject(obj1) && !isObject(obj2)) return false;
  if (isObject(obj2) && !isObject(obj1)) return false;
  else if (!isObject(obj1) && !isObject(obj2)) {
    return obj1 === obj2;
  }
  else {
    const firstObjectKeys = Object.keys(obj1);
    const secondObjectKeys = Object.keys(obj2);
    if (firstObjectKeys.join() !== secondObjectKeys.join()) return false;
    else {
      return firstObjectKeys.every(key => {
        return deepEqual(obj1[key], obj2[key]);
      })
    }
  }
}


//taken from: https://eloquentjavascript.net/04_data.html