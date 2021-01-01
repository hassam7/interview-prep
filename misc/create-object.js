// {
//     'ab.cd.e' : 'foo',
//     'ab.cd.f' : 'bar',
//     'ab.g' : 'foo2'
// }
// Into a nested object :

// {ab: {cd: {e:'foo', f:'bar'}, g:'foo2'}}


let obj = {
  'ab.cd.e': 'foo',
  'ab.cd.f': 'bar',
  'ab.g': 'foo2'
}

function createObj(path, val, storage) {
  if (path.length == 1) {
    const [key] = path;
    storage[key] = val;
    return storage;
  }
  else {
    const [key] = path;
    if (!storage[key]) storage[key] = {}
    createObj(path.slice(1), val, storage[key]);
  }
  return storage;
}
let result = {}
for(let [key, value] of Object.entries(obj)) {
  createObj(key.split('.'), value, result);
}
console.log(result);