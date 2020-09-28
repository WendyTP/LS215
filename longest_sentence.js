/*
Question:   a program that determines the sentence with the most words in some text. 
  - output: the longest sentence ; the word count of it
Rules: A sentence begins with a word char, and ends with . or ! or ?
       Word count: space not count; sentence-ending char not count
Algo:
  - split chars:
    - split by sentence-ending char
  - create array of sentences
    - iterate through chars array, remove first two items at each iteration
    - push the two items to array
  - sort sentences by length
  - output longest sentence and its length
*/

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  let splitText= splitByEndingChars(text);

  let sentences = createSentence(splitText);
  
  let maxSentence = sentences.sort((a,b) =>  b.length - a.length)[0];
  let wordCountOfMaxSentence = maxSentence.split(' ').length;
  
  console.log(maxSentence);
  console.log('\n')
  console.log(`The longest sentence has ${wordCountOfMaxSentence} words.`)
  console.log(wordCountOfMaxSentence)
}


function splitByEndingChars(text) {
  let result = text.split(/(\.|\?|!)/);
  result.pop();

  return result.map(splitPart => splitPart.trim());
}


function createSentence(words) {
  let result = [];

  for (let idx = 0; idx < words.length; idx += 2) {
    let subString = words.slice(idx, idx + 2).join('');
    result.push(subString);
  }
  
  return result;
}



console.log(longestSentence(longText))