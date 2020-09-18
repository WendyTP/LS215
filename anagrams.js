/*
Question: Write a Function named anagram that takes two arguments: a word and an array of words.
return: an array containing anagrams of the word argument
anagarm: word with same composition of letters, but in different order ex. listen ==> enlist, inlets, etc
Think abstraction:
  filter the array by given condtion
  conditon: word argument becomes a sorted array; each word becomes a sorted array, compares the two
*/

function anagram(word, list) {
  let sortedWord = word.split('').sort().join('');
  let sortedWordList = list.map(word => word.split('').sort().join(''));
  return list.filter((word, idx) => {
    return sortedWord === sortedWordList[idx];
  }) 
}



let arr1 = ['enlists', 'google', 'inlets', 'banana']
console.log(anagram('listen', arr1));
console.log(arr1);


let arr2 = ['enlist', 'google', 'inlets', 'banana']
console.log(anagram('listen', arr2));
console.log(arr2);