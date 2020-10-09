/*
16: 21 - 17:20  (59 min)

input: a string with letters, other chars; a keyword, which is an ecrypted word using Caesar Cipher
output: encryped string, keeping all non-letter chars, and cases

Rule:
  - Each keyword letter is a shfit value
  - To get new letter: add shift value to current letter idx
  - Ignore non-letter chars
  - index starts from 0 - 25 (a-z)
  - keep the letter case

Data: 
  - alphabets : a string 'ABCDE...Z'
  - plaintext: return to array of chars 
  - keyword and its shift value : an array of shift values

Algo:
  - create an array of shift values
  - iterate through the keyword:
      find its shift value, then inser to the shift values array
  - Iterate through each char of plaintext and transform the char:
    - if non-letter => keep the char 
    - if letter :
      get current idx of letter 
      check if letter is lowercase, if yes, toBeLowerCase = true
      start shift values from 0 idx
      find the corresponding cipherd letter by adding shift value to current value; if total > 25, then minus 25; then get the corresponding letter 
      if toBeLowerCAse, lowercase the corresponding letter
      start shift value += 1 (if it's > 4, reset to 0)
  - return the transformed array as string


'meat' ==> 12 4 0 19
pine ==> b (16+12 - 25 = 3 ==> b); m(8+4 = 12 ==> m); (n); (4 + 19 ==> x )
*/

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function vigenereEncrypt(string, keyword) {
  let shiftValues = [];
  
  for (let idx = 0; idx < keyword.length; idx += 1) {
    let shiftValue = findLetterIdx(keyword[idx])
    shiftValues.push(shiftValue);
  }

  let allChars = string.split('');
  let shiftIdx = 0;

  return allChars.map(char => {
    if (!char.match(/[a-z]/i)) {
      return char;
    } else {
      let charIdx = findLetterIdx(char);
      
      let encrypedLetter = encrypt(charIdx, shiftValues[shiftIdx]);
      
      if (char !== ALPHABETS[charIdx]) {
        encrypedLetter = encrypedLetter.toLowerCase();
      }

      shiftIdx += 1;
      
      if (shiftIdx >= shiftValues.length) {
        shiftIdx = 0;
      }

      return encrypedLetter;
    }
  }).join('')

  
}

function findLetterIdx(letter) {
  return ALPHABETS.indexOf(letter.toUpperCase());
}

function encrypt(letterIdx, shiftValue) {
  let encryptLetterIdx = letterIdx + shiftValue;

  if (encryptLetterIdx > ALPHABETS.length - 1) {
    while (encryptLetterIdx > ALPHABETS.length - 1) {
      encryptLetterIdx -= ALPHABETS.length;
    }
  }

  return ALPHABETS[encryptLetterIdx];
}



console.log(vigenereEncrypt('Pine', 'meat'))   //'Bmnx'
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat')) 
// Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('Dog', 'Rabbit'))  // Uoh