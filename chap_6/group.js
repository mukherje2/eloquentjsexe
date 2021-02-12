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
