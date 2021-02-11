const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let arr = [];
  let n = list;
  while (n) {
    arr.push(n.value);
    n = n.rest;
  }
  return arr;
};

const prepend = (elem, list) => {
  return {
    value: elem,
    rest: list,
  };
};

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
