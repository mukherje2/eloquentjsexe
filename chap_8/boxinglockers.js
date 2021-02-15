const box = {
  locked: true,
  // locked: false,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  const l = box.locked;
  if (l) box.unlock();

  try {
    return body();
  } finally {
    // leave as is if box wasn't locked
    if (l) box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

withBoxUnlocked(function () {
  console.log(box.content);
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
