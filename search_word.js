





function countWordInText(word, text) {
  let allCharacterWords = text.split(' ').map(word => removeNonLetterCharacter(word));
  
  let counter = 0;

  allCharacterWords.forEach(currentword => {
    if (currentword.toLowerCase() === word.toLowerCase()) {
      counter += 1;
    }
  })
  return counter;
}


function removeNonLetterCharacter(word) {
  return word.replace(/[^a-zA-Z]/g, '')
}

let texts = 'The quick brown fox jumps over the lazy dog.';

console.log(countWordInText('the',texts));
console.log(countWordInText('dog',texts));