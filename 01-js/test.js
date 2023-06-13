function infixToPostfix(expression) {
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
  };

  const stack = [];
  const postfix = [];

  for (let i = 0; i < expression.length; i++) {
    const token = expression[i];

    if (token.match(/[0-9]/)) {
      // If the token is a digit, push it to the postfix array
      postfix.push(token);
    } else if (token in precedence) {
      // If the token is an operator
      while (
        stack.length > 0 &&
        stack[stack.length - 1] !== "(" &&
        precedence[token] <= precedence[stack[stack.length - 1]]
      ) {
        // Pop operators from the stack and push them to the postfix array
        postfix.push(stack.pop());
      }
      // Push the current operator onto the stack
      stack.push(token);
    } else if (token === "(") {
      // If the token is an opening parenthesis, push it onto the stack
      stack.push(token);
    } else if (token === ")") {
      // If the token is a closing parenthesis
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        // Pop operators from the stack and push them to the postfix array
        postfix.push(stack.pop());
      }
      // Pop the opening parenthesis from the stack
      stack.pop();
    }
  }

  while (stack.length > 0) {
    // Pop any remaining operators from the stack and push them to the postfix array
    postfix.push(stack.pop());
  }

  return postfix;
}
console.log(infixToPostfix("10 +   2 *    (   6 - (4 + 1) / 2) + 7"))
