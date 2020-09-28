/*
question: a function that takes a string as an argument and returns a new string that contains the original string in reverse.
*/

function reverse(string) {
  return string.split('').reverse().join('');
}

let greeting = 'hello';
console.log(reverse(greeting));
console.log(reverse('The quick brown fox'))
console.log(greeting)