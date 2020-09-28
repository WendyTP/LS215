/*
  Question: write  a function that determines whether a string has any character that appears more than once.
  return: return true if all characters are unique; false otherwise
  ignore multiple space and case difference
  Think abstraction:
  - create an empty array
  `iterate through each char :
    - if space , skip 
    - if new char, push to array
    - if char exisits in array, return false and quit iteration
  - return true
*/

function isAllUnique(string) {
  let comparedArr = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === ' ') {
      continue;
    } else if (comparedArr.includes(string[idx].toLowerCase())) {
      return false;
    } else {
      comparedArr.push(string[idx].toLowerCase());
    }
  }

  return true;
}

//console.log(isAllUnique('t f '))

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true