/*
custom reduce functon:
  - takes an arr, a function, and optional initial value
  - if no initial value given, use first element of array instead
  - the return value of function invocation is passed to next invocation
  - returns the value returned by the last invocation of the function
*/

/* first try
function myReduce(array, func, initial) {
  let result;
 if (initial === undefined) {
   result = array[0];
   for (let idx = 1; idx < array.length; idx += 1) {
     result = func(result, array[idx]);
   }
 } else {
   result = initial;
   array.forEach(value => {
     result = func(result, value);
   })
 }

 return result;
}
*/

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


let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));