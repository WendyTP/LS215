function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!func(array[idx])) {
      return false;
    }
  }
  return true;
}

//let isAString = value => typeof value === 'string';
//console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
//console.log(myOwnEvery([1, 2, 3], isAString));       // false

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));
console.log(areAllNumbers([1, 5, 6, 7, 1]));
console.log(areAllNumbers([1, 5, 6, 7, NaN]));

