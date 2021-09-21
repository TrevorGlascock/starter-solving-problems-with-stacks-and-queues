const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const midIndex = Math.floor(sentence.length / 2);
  const charStack = new Stack();
  // Populate stack with first half of sentence
  for (let i = 0; i < midIndex; i++) charStack.push(sentence[i]);

  // Even length sentences reflect in half, odd lengths reflect off the middle element
  const reflIndex = sentence.length % 2 === 0 ? midIndex : midIndex + 1;
  for (let i = reflIndex; i < sentence.length; i++)
    if (charStack.pop() !== sentence[i]) return false;

  return true;
};

module.exports = isPalindrome;
