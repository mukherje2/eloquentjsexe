const range = (a, b, step) => {
  let list = [];
  while (a != b) {
    list.push(a);
    if (step == undefined) step = 1;
    a = a + step;
  }
  list.push(b);
  return list;
};

const sum = (arr) => {
  let result = 0;
  arr.map((i) => (result += i));
  return result;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
