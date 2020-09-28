
function capitalize(text) {
  let words = text.split(' ');
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}


let text = 'The quick brown fox jumps over the lazy dog.';

console.log(capitalize(text));