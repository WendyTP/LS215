function myReduce(array, func, initial) {
  let result;
  let index;

  if (initial === undefined) {
    result = array[0];
    index = 1;
  } else {
    result = initial;
    index = 0;
  }

  array.slice(index).forEach(element => {
    result = func(result, element);
  })

  return result; 
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

function longestWord(words) {
  return myReduce(words, longest);
}

console.log(longestWord(['abc', 'launch', 'targets', '']));