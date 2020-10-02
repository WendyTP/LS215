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
  odd num n:
    start from line with n *
    n / 2 === (ex. 5 / 2 ==> 2.5) extra 2 lines needed for upper and lower lines 
    each line : (n - 2) *
    each line: pre/apend (n - *) / 2 space enclose the stars
  Even num n :
   start from 2 x lines with n * 
   (n - 2) / 2 (ex 2 / 2 === 1)  extra 1 line needed for upper an lower lines
   each line: (n - 2) *   (ex 4 -2 === 2)
   each line: pre/apend (n - *) / 2 space  (ex. (4 - 2) / 2 === 2) 
Data:
Array of strings (lines)
Algo:
  odd number
  centre line : 1 line
  even number
  centre lune : 2 lines
Upper lines --> stored in an array
 iterate n / 2 times (odd) or (n - 2) / 2(even):
   - create a line with * and spaces
   - add the line to array of strings
lower lines
  - reverse the upper lines array
combine upper lines, centre lines and lower lines, then output each line with a `\n` delimeters
*/

function createDiamond(number) {
  let star = '*';
  let space = ' ';
  let centreLines = [];

  if (number % 2 !== 0) {
    centreLines.push(star.repeat(number));
  } else {
    centreLines.push(star.repeat(number), star.repeat(number));
  }

  let upperLines = [];
  let iterationTime = (number - centreLines.length) / 2;

  for (let time = 1; time <= iterationTime; time += 1) {
    upperLines.unshift(createLine(number, time, star, space))
  }

  let lowerLines = upperLines.slice().reverse();

  let allLines = upperLines.concat(centreLines, lowerLines)

  allLines.forEach(line => {
    console.log(line + '\n');
  })

  
}

function createLine(number, iterateTime, star, space) {
  let numberOfStars = number - (2 * iterateTime);
  let numberOfSpaceEachSide = (number - numberOfStars) / 2;

  return space.repeat(numberOfSpaceEachSide).concat(star.repeat(numberOfStars))
                                            .concat(space.repeat(numberOfSpaceEachSide))
}


createDiamond(5);
createDiamond(4);
createDiamond(3)
