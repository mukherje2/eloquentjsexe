let s = 8;
let shape = "";
const symbol = [" ", "#"];
for (i = 0; i < s; i++) {
  for (j = 0; j < s; j++) {
    shape += symbol[(i + j) % 2];
  }
  shape += "\n";
}
console.log(shape.slice(0, -1));
