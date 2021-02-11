const reverseArray = (arr) => {
  let revarr = [];
  for (let i = 0; i < arr.length; i++) {
    revarr.unshift(arr[i]);
  }
  return revarr;
};

const reverseArrayAtPlace = (arr) => {
  for (i = 0; i < Math.ceil(arr.length / 2); i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = tmp;
  }
  return arr;
};

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayAtPlace(["A", "B", "C"]));
