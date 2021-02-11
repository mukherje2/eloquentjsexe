const isEven = (num) => {
  // throw error if num is negative
  if (num < 0)
    throw {
      name: "ValueError",
      message:
        "the function isEven accepts whole i.e. non-negative numbers as arguments",
    };
  else if (num == 0) return true;
  else if (num == 1) return false;
  else return isEven(num - 2);
};

console.log(isEven(50));
console.log(isEven(75));
try {
  console.log(isEven(-1));
} catch (e) {
  console.log(e.name + ":", e.message);
}
