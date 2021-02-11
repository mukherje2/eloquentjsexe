for (let x = 1; x <= 100; x++) {
  let y = "";
  if (x % 3 == 0) y += "fizz";
  if (x % 5 == 0) y += "buzz";
  console.log(y.length == 0 ? x : y);
}
