/*
Question: a function that takes an integer as input, and print out a diamond with the * char, whose width is
  the given integer
Example:
  input: 3
  output: 
   *
  ***
   *
  input: 5
  output:
    *  
   *** 
  *****
   ***
    *
Input: assume positive integer n
output: n x strings, composed of space and *
Ex:
  - given an odd number , 5
  - output n string of *
    1 3 5 3 1
  - prepend space on both side of each line:
    2 1 0 1 2
Ex: 
  - given an even number , 4  
  - output n sring of *   -> 2 4 4 2
   **
  ****
  ****
   **
  - prepend space on both side of each line:
    2 0 0 2
Logic:
  create an array
  for odd number :
   - iterate from 1 (num), add 2 at each iteration, end iteration until reaches n
  for even number:
   - iterate from 2, add 2 at ....
  at each iteration:
    - have num * 
    - have (n - num) / 2 space on each side of stars
    - push lines to array
  create lowerLines by using reversed upperLines 
*/

function createDiamond(number) {
  let startIterate = number % 2 !== 0 ? 1 : 2;

  
  let allLines = [];

  for (let startPoint = startIterate; startPoint <= number; startPoint += 2) {
    allLines.push(createNewLine(number,startPoint));
  }

  let lowerLines = [];
  
  if (number % 2 !== 0) {
    lowerLines = allLines.slice(0, allLines.length - 1).reverse();
  } else {
    lowerLines = allLines.slice(0).reverse();
  }

  allLines = allLines.concat(lowerLines).flat();
  
  allLines.forEach(line => {
    console.log(line + '\n');
  })
}

function createNewLine(totalNumber, num) {
  let space = ' ';
  let star = '*';
  let numberOfStar = num;
  let numberOfSpaceEachSide = (totalNumber - numberOfStar) / 2;
  return space.repeat(numberOfSpaceEachSide).concat(star.repeat(numberOfStar))
                                            .concat(space.repeat(numberOfSpaceEachSide))
}

console.log(createDiamond(3));
console.log(createDiamond(4));
console.log(createDiamond(5));