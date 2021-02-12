class Group {
  constructor() {
    this.contents = [];
  }
  add(v) {
    if (this.contents.indexOf(v) == -1) this.contents.push(v);
  }
  delete(v) {
    let i = this.contents.indexOf(v);
    if (i != -1) this.contents.splice(i, 1);
  }
  has(v) {
    if (this.contents.indexOf(v) == -1) return false;
    else return true;
  }
  static from(arr) {
    let g = new Group();
    arr.filter((i) => g.contents.indexOf(i) == -1).map((j) => g.add(j));
    return g;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class GroupIterator {
  constructor(g) {
    this.position = 0;
    this.group = g;
  }
  next() {
    if (this.position >= this.group.contents.length) return { done: true };
    this.position++;
    return {
      value: this.group.contents[this.position - 1],
      done: false,
    };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
