/*
Question:
  a function that transforms a given string to a string with every odd words reversed.
Rule: 
  words consist one or more, but at most 20 letters.
  Input is a text consisit of one or more words, separated by one or more space, and terminated 
    0 or more spaces, then followed by a point.
Output: 
  a string that consist words, separated by one space, with a point joined the last word (ie. no space).
  Every odd words in the string is reversed, even words remain the same.
  (index counting starts from 0; and only count words, not spaces)
Example:
  input : whats  the matter   with kansas  .
  output: whats eht matter htiw kansas.
Edge case:
  input: non-string    ==> return error notice
  input: empty string  ==> output: empty string ? 
  input: no input      ==> return error notice
  boundary conditions : no more than 20 letters
Data: 
  array then string
Algo:
  - remove extra spaces: 
     create an array containing only words and point from the string without any spaces.
  - remove point:
    if last item in array is point, or if last word ends with a point, remove it
  - transform odd word by reversing it
  - combine all words to a string
  - ad back point
  - return the new string
*/

function reverseOddWords(text) {
  let words = text.split(/\s+/)

  if (words[words.length - 1] === '.') {
    words.pop();
  } else if (words[words.length - 1].endsWith('.')) {
    words[words.length - 1] = removeEndPoint(words[words.length - 1]);
  }


  for (let idx = 1; idx < words.length; idx += 2) {
    words[idx] = reverseWord(words[idx])
    
  }

  return words.join(' ').concat('.');

}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function removeEndPoint(word) {
  return word.slice(0, word.length - 1);
}

let text1 = 'hello.'

console.log(reverseOddWords(text1));
console.log(text1);

console.log(reverseOddWords('hello .'));
console.log(reverseOddWords('hello world.'));
console.log(reverseOddWords('hello word .'));
console.log(reverseOddWords('hello   word  .'));
console.log(reverseOddWords('hello  hello word.'));