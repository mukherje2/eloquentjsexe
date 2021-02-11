const countBs = (string) => {
  return [...string].filter((c) => c == "B").length;
};

const countChar = (string, char) => {
  return [...string].filter((c) => c == char).length;
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
