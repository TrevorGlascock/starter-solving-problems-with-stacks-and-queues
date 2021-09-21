const Stack = require("../lib/stack");

const match = (expression) => {
  const parens = new Stack();

  for (let char of expression) {
    // if the char is "(", push it into the stack
    if (char === "(") parens.push(char);
    if (char === ")") {
      // if the char is a ")" and there is no matching "(", return false
      if (!parens.top) return false;
      parens.pop(); // otherwise, pop out the matching paren.
    }
  }

  // return true if parens is empty, false otherwise
  return !parens.top;
};

module.exports = match;
