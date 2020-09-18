/*
Array.prototype.some method:
  - The some method iterates over all the elements in the array until the callback function returns a truthy value
  - if no elements have a truthy result, it returns false

custom some function:
  - takes an array and a fucntion as args
  - returns true if one element passed to the function evalates to true
*/

function myOwnSome(array, func) {

  for (let idx = 0; idx < array.length; idx += 1) {
    if (func(array[idx])) {
      return true;
    }
  }

  return false;
}

let isAString = value => typeof value === 'string';
console.log(myOwnSome(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnSome([1, 2, 3], isAString));       // false