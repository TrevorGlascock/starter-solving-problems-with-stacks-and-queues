const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
    return this;
  }

  pop() {
    if (!this.top) return null;
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}

module.exports = Stack;
