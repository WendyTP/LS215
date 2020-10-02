/*
Question: write a programme, that given a word, computes the scrabble score for that word
Letter values:

Letter                      Value
A E I O U L N R S T           1
D G                           2
B C M P                       3
F H V M Y                     4
K                             5
J X                           8
Q Z                           10

rule: score is the sum of each letter's score in the string

Input: a string (case- insensitive)
output: an integer (scrabble score)

Examples:
'a'   => 1
'cabbage'  => 14
'CaBbage'  => 14
''    => 0 ? (edge case)
'ab4e'   => ? (edge case)

Data structure:
letter value look up : object 
{
  'AEIOULNRST': 1,
  'DG': 2,
}
string -> array of letter
Algo:
 - Change the string to all uppercase
 - split the string by letters
 - iterate through letters :
  - check if letter is in one of the letter value key  (iterate through all keys, check if key contain the letter)
    - if yes, add the score the sum
- return the sum of score
*/

const LETTER_VALUES = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10, 
}

function score(word) {
  let allLetters = word.split('');

  return allLetters.reduce((sum, letter) => {
    return sum + searchLetterValue(letter);
  }, 0)

  
}


function searchLetterValue(letter) {
  let letterKeys = Object.keys(LETTER_VALUES);

  for (let idx = 0; idx < letterKeys.length; idx += 1) {
    if (letterKeys[idx].includes(letter.toUpperCase())) {
      return LETTER_VALUES[letterKeys[idx]];
    }

  }
}


//console.log(score('a'));    // 1
console.log(score('cabbage'));   // 14
console.log(score('Cabbage'));   // 14
