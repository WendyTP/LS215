/*
Question: 
  a function that takes a string as an argument and returns true if the string contains properly balanced parentheses
Algo:
  - Each left parenthesis must have a matching right parenthesis
  - 
*/

function isBalanced(string) {
  let balanceParen = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === '(') {
      balanceParen += 1;
    } else if (string[idx] === ')') {
      balanceParen -= 1;
    }

    if (balanceParen < 0) {
      return false;
    }
  }

    return balanceParen === 0 
}

console.log(isBalanced('What (is) this?'));
console.log(isBalanced('What is) this?'));
console.log(isBalanced('What (is this?'));
console.log(isBalanced('((What) (is this))?'));
console.log(isBalanced('((What)) (is this))?'));
console.log(isBalanced('Hey!'));
console.log(isBalanced(')Hey!('));
console.log(isBalanced('What ((is))) up('));
