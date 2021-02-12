function every(array, test) {
  for (let el of array) {
    if (!test(el)) return false;
  }
  return true;
}

// if some or one of the el doesn't pass test
// it means not every el passes the test
function everyS(array, test) {
  return !array.some((el) => !test(el));
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
console.log(everyS([1, 3, 5], (n) => n < 10));
// → true
console.log(everyS([2, 4, 16], (n) => n < 10));
// → false
console.log(everyS([], (n) => n < 10));
// → true
