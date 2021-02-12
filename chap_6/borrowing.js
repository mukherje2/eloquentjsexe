let map = { one: true, two: true, hasOwnProperty: true };
// calling from map object's prototype
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
