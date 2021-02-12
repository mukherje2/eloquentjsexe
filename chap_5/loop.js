function loop(v, tf, uf, bf) {
  for (let i = v; tf(i); i = uf(i)) {
    bf(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

loop(
  1,
  (n) => n <= 10,
  (n) => n + 1,
  console.log
);
