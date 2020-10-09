/*
15:06 -15:40
15:45- 16:11
(1h 5 min)

input: a string of letters, other chars; a key greater or equal to 0
output: the encrypted string with other chars (if any)
rules:
  -a letter is substituted by the letter located a given number of positions away in the alphabet (right shift).
    A, 3 ===> D (A: 1st ==> 1 + 3 ==> 4th position, which is D)
  -shift value as the key
  - if key value exceeds the length of the alphabet, it wraps around from the beginning.
   X, 5 ==> Y, Z , A B C  (x: 24th, 24 + 5 === 29 ==> 29 - 26 === 3 ==> which is C)
  - only encrypts letters (keep same case), other chars as it is
Data:
  - alpabets [A,B,C,D] (idx 0 --> 25)
  - turn input string to array of chars
Algo:
  - create alphabet array
  - trurn input to arry of chars
  - iterate through the array and transform each char :
      - if non-letter, return as it is
      - let tobeLowerCase = false
      - find the idx of letter in the alphabet
      - if letter (ex. A !== 'a'),  tobeLowerCase = true
      - add the key to the idx of letter
        - if over 26, continue minus 26 until result is less /=== 26
      - find the letter with the matching result idx, then return it (change case if tobeLowerCase)
  - return the transformed array as string
*/


const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function caesarEncrypt(string, key) {
  let chars = string.split('');

  return chars.map(char => {

    if (!char.match(/[a-z]/i)) {
      return char;
    } else {
      return findEncryptLetter(char, key);
    }
      
  }).join('')

}

function findEncryptLetter(letter, key) {
  let toBeLowerCase = false;
  let letterIdx = ALPHABETS.indexOf(letter.toUpperCase());
  
  if (letter !== ALPHABETS[letterIdx]) {
    toBeLowerCase = true;
  }

  let newLetterIdx = letterIdx + key;

  if (newLetterIdx >= ALPHABETS.length) {
    while (newLetterIdx >= ALPHABETS.length) {
      newLetterIdx -= 26;
    }
  }

  

  if (toBeLowerCase) {
    return ALPHABETS[newLetterIdx].toLowerCase();
  } else {
    return ALPHABETS[newLetterIdx]; 
  }
}


//console.log(findEncryptLetter('a', 47))
// simple shift
console.log(caesarEncrypt('A', 0));    // "A"    0 + 0 ==> 0 ==> A
console.log(caesarEncrypt('A', 3));    // "D"

// wrap around
console.log(caesarEncrypt('y', 5));    // "d"    24 + 5 === 29; 29 - 26 === 3 ==> d
console.log(caesarEncrypt('a', 47));    // "v"   0 + 47 = 47; 47 - 26 = 21  ==> v  (continue - 26 until the reuslt is less than 26)

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

