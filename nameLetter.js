/*
determine which letter is the most frequent starting letter of the names in this list

  - For each name in the list, determine its first letter.
  - Count the occurrences of each first letter.
  - Find the first letter that occurs most often.
*/

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

let firstLetters = names.map(name => name[0])

let counts = firstLetters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

let highestCount = Object.keys(counts).reduce((lastLetter, currentLetter) => {
  if (counts[lastLetter] > counts[currentLetter]) {
    return lastLetter;
  } else {
    return currentLetter;
  }
});

//console.log(firstLetters) //  [ "H", "G", "K", "H", "K", "K", "O" ]
//console.log(counts) // { H: 2, G: 1, K: 3, O: 1 }
console.log(highestCount)

