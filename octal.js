/*
Question: Write a Function named octalToDecimal that performs octal to decimal conversion.
  argument: string representing an octal number
  return: a number - decimal of the given octal number
  do not use something else to perform the conversion for you
  ex:   
  233                          // octal
    = 2*8^2 + 3*8^1 + 3*8^0
    = 2*64  + 3*8   + 3*1
    = 128   + 24    + 3
    = 155                          // decimal

think abstraction: 
 - convert string to array of numbers in reversed order
 - reduce the array of numbers to a single number 
*/

function octalToDecimal(numberString) {
  const OCTAL_BASE = 8;
  let numbers = numberString.split('').map(numString => parseInt(numString)).reverse();
  return numbers.reduce((sum, number, idx) => {
    return sum + (number * OCTAL_BASE ** idx);
  }, 0)
}

console.log(octalToDecimal('1'));
console.log(octalToDecimal('10'));
console.log(octalToDecimal('130'));
console.log(octalToDecimal('17'));
console.log(octalToDecimal('2047'));
console.log(octalToDecimal('011'));