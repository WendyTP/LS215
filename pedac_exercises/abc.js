/*
Question:
  Write a function that takes a word string as an argument, and 
  returns true if the word can be spelled using the set of blocks given; otherwise, false
Rules: 
  - case insensitive
  - a word can not contain both letters from same group
  - use only same group once (ie. one letter from given group in a word)
  - input: a word string
  - output: boolean  true or false
Invalid input:
  - non-string : return invalid input type
  - no input   : return invalid input type
  - empty string : return input must contain only and at least one a-z
  - string with other chars other than a-z/A-Z : return input must contain only and at least one a-z
Data structure:
  - spelling block: an array of strings ['bo', 'gt', 'vi',...]
  - string for given arg.
  - record object {'bo': 1, 'gt': 1}
Algo:
  - validate input
  - create a record array []
  - uppercase word string
  - iterate through each letter:
    - iterate through spelling block:
        if the letter is included in a string,
          check if the string key exisit in record object
            - if yes, return false
            - if not, add new key with value of 1
    - return true in the end
*/

const SPELLING_BLOCK = ['BO', 'XK', 'DQ', 'CP', 'NA', 
                        'GT', 'RE', 'FS', 'JW', 'HU',
                        'VI', 'LY', 'ZM']


function isBlockWord(word) {
  if (!validWordInput(word)) {
    return 'Invalid input!';
  }

  let spellingRecord = [];
  let uppercasedWord = word.toUpperCase();

  for (let idx = 0; idx < uppercasedWord.length; idx += 1) {
    let letterPair = findMatchingLetter(uppercasedWord[idx]);

    if (spellingRecord.includes(letterPair)) {
      return false;
    } else {
      spellingRecord.push(letterPair);
    }
  }

  return true;
}


function validWordInput(word) {
  return typeof word === 'string' &&
  word.match(/^[a-zA-Z]+$/g);
}

function findMatchingLetter(letter) {
  return SPELLING_BLOCK.filter(stringPair => {
    return stringPair.includes(letter);
  })[0];
}





// invalid input
console.log(isBlockWord(123));  // 'Invalid input!'
console.log(isBlockWord());     // 'Invalid input!'
console.log(isBlockWord(''));   // 'Invalid input!'
console.log(isBlockWord('BA 34'));   //// 'Invalid input!'

// 
console.log(isBlockWord('BATCH'));  //true
console.log(isBlockWord('BUTCH'));  //false
console.log(isBlockWord('jest'));  //true
console.log(isBlockWord('jEst'));  //true

