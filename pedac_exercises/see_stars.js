/*
11:03 - 11:59  (56 min)
inpur: an odd integer, as n grid
output: multi line strings of star * and space
rule:
  - n x n grid (n horizontal lines, n spots each line)
  - n is odd integer >= 7 (ex. 7, 9, 11, 13...)
  - each line has 3 stars (n - 3 space), except middle line 
  - middle line has n stars
  - * x x ? x x *  outerstar: 1 (idx = 1 -1), last (n.length - 1)     middlestar: Math.ceil(n/2) === 4th spot (idx == 4 - 1)
  - x * x ? x * x  outerstar: 2 (idx = 2- 1), last -1 (n.length - 2)
  - x x * ? * x x  outerstar: 3 (idx = 3 - 1), last - 2 (n.length -3)
  4 x x x x x x x  middle line (Math.ceil(n / 2) === 4th line)
  - x x * x * x x  reverse line 1- line 3
  - x * x x x * x
  - * x x x x x *
data: 
  - each line : string
  - an array of all n lines 
algo:
  - create an empty array for all lines
  - create first upper lines: 
    - loop for Math.floor(n/2) (ex. 3) times:
    - let lineNum = current idx
    - create each line of star space:
        - create empty string
        - iterate n times:  
          - if idx === lineNum - 1 or idx === middle or idx === n - lineNum
            concat *
          - otherwise
            concat space
    -finish loop
  - create middle line and insert to array
  - create bottom lines:
    - create a copy of an array with upper lines
    - reverse the array
    - push the reversed array to existing array
    - flattn the nested array
  - join the array to strings with \n separator
*/

function star(gridNum) {
  let allStarLines = [];
  let star = '*';
  let space = ' ';
  let middleLineNum = Math.ceil(gridNum / 2);

  let upperStarLines = [];

  for (let idx = 1; idx < middleLineNum; idx += 1) {
    let lineNum = idx;
    upperStarLines.push(createStarLine(gridNum, lineNum, star, space));
  }

  let bottomStarLines = upperStarLines.slice().reverse();
  
  let middlStarLine = star.repeat(gridNum);

  allStarLines.push(upperStarLines, middlStarLine, bottomStarLines);
  
  return allStarLines.flat().join('\n')

}

function createStarLine(gridNum, lineNum, star, space) {
  let stars = '';
  for (let idx = 0; idx < gridNum; idx += 1) {
    if (idx === lineNum - 1 || idx === Math.ceil(gridNum / 2) - 1 || idx === gridNum - lineNum) {
      stars += star;
    } else {
      stars += space;
    }
  }
  return stars;
}


//console.log(star(7))
console.log(star(9))

