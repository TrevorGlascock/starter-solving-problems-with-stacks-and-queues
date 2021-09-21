const Stack = require("../lib/stack");

const pemdas = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

// STOP CTRL Z HERE ! ! !
//  //  //  //
//
//  //  //  //
//
//    //    //

const postfix = (expression) => {
  expression = expression.replace(/\s/g, "");
  const operations = new Stack();
  const result = [];
  console.log(expression);
  for (let symbol of expression) {
    if (!"()+-*/".includes(symbol)) result.push(symbol);

    if (symbol === "(") operations.push(symbol);

    if (symbol === ")") {
      let top = operations.pop();
      while (top !== "(") {
        result.push(top);
        top = operations.pop();
      }
    }

    if ("+-*/".includes(symbol)) {
      if (
        !operations.top ||
        operations.top.value === "(" ||
        pemdas[symbol] > pemdas[operations.top.value]
      ) {
        operations.push(symbol);
        continue;
      }
      while (operations.top && pemdas[operations.top.value] >= pemdas[symbol])
        result.push(operations.pop());

      operations.push(symbol);
    }
  }
  while (operations.top) result.push(operations.pop());
  console.log(result.join(""));
  return result.join(" ");
};

module.exports = postfix;
