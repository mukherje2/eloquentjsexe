const deepEqual = (x, y) => {
  // comparing values
  if (x === y) return true;
  // checking for objects
  // checking for null as typeof null == 'object'!!!
  if (x == null || y == null || typeof x != "object" || typeof y != "object")
    return false;
  // list of keys have different length
  if (Object.keys(x).length != Object.keys(y).length) return false;
  // list of keys have same length
  for (let k of Object.keys(x)) {
    if (!Object.keys(y).includes(k) || !deepEqual(x[k], y[k])) return false;
  }

  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
