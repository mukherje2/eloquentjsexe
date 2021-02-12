const SCRIPTS = require("./scripts");
// console.log(SCRIPTS);

function scriptFromCode(c) {
  for (let s of SCRIPTS) {
    if (
      s.ranges.some(([f, t]) => {
        return c >= f && c <= t;
      })
    ) {
      return s;
    }
  }
  return null;
}

function countBy(items, groupNamer) {
  let counts = [];
  for (let i of items) {
    let name = groupNamer(i);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let dom = countBy(text, (c) => {
    let s = scriptFromCode(c.codePointAt(0));
    return s ? s.direction : "none";
  }).reduce((a, b) => {
    return a.count > b.count ? a : b;
  });
  return dom.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
