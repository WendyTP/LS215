/*
14:20 -14:55 (35)
input: a word string (a string with no space, contaning only alphabets a-zA-Z)
  invalid input:
    - a string contain non letter chars (ex. '1we4')
    - non string type (including no input)
    - empty string ('')
      - return error message (invalid input!)
output: a boolean true / false
rule:
  - a spelling blocks with 2 letters per block
  - only 1 letter from 1 block, and the block can be used once for a word
  - case insensitive
  - return true if a word can be spelled using the above rule; otherwise false
Data:
  - spelling block: ['BO', 'XK',...]
  - iterate through the input as string
  - an array to keep track of used group (ex. ['DQ', 'CP'])
Algo:
  - validate input (needs to be string type and only contains a-zA-Z)
  - create an array tracker [] for tracking
  - iterate through the word, one letter at a time:
    - iterate through the spelling block
    - if the group contains the letter, 
        - check if the tracker contains the group:
            - if yes, return false 
            - if not, then push group to the tracker
    - stop current iteration
  - after all iteration, retrun true
*/

const SPELLING_BLOCK = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT',
                        'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord(word) {

  if (typeof word !== 'string' || !word.match(/^[a-z]+$/ig)){
    return 'Invalid input!';
  }

  let groupTracker = [];

  for (let letterIdx = 0; letterIdx < word.length; letterIdx +=1) {
    for (let idx = 0; idx < SPELLING_BLOCK.length; idx += 1) {
      if (SPELLING_BLOCK[idx].includes(word[letterIdx].toUpperCase())) {
        if (groupTracker.includes(SPELLING_BLOCK[idx])) {
          return false;
        } else {
          groupTracker.push(SPELLING_BLOCK[idx]);
          break;
        }
      }
    }
  }

  return true;
}



// invalid input
//console.log(isBlockWord('just2'));
//console.log(isBlockWord(123));
//console.log(isBlockWord(''));

// valid input
console.log(isBlockWord('BATCH'));  //true
console.log(isBlockWord('BUTCH'));  // false
console.log(isBlockWord('jest'));   // true
console.log(isBlockWord('floW'));   // true
console.log(isBlockWord('APPLE'));   // false
console.log(isBlockWord('apple'));   // false
console.log(isBlockWord('apPLE'));   // false
console.log(isBlockWord('Box'));   // false