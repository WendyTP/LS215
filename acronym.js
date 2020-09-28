/*
Question: a function that generates and returns an acronym from a string of words.
Algo:
  - split words to array of words by space and -
  - iterate through the words and get only first letters, then transform to capitals
*/

function acronym(string) {
  let splitWords = string.split(/[-' ']/);
  return splitWords.map(word => {
    return word[0].toUpperCase()
  }).join('')

}

console.log(acronym('Portable Network Graphics'));
console.log(acronym('First In, First Out'));
console.log(acronym('PHP: HyperText Preprocessor'));
console.log(acronym('Complementary metal-oxide semiconductor'));
console.log(acronym('Hyper-text Markup Language'));