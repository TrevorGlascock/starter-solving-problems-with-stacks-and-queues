const Stack = require("../lib/stack");

const match = (expression) => {
  const parens = new Stack();

  for (let char of expression) {
    // if the char is "(", push it into the stack
    if (char === "(") parens.push(char);
    if (char === ")" && !parens.pop()) return false;
  }

  // return true if parens is empty, false otherwise
  return !parens.top;
};

module.exports = match;
