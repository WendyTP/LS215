/*
custom map function:
  - take an array and a function as args
  - function returns transformed element
  - return a new array with all elements transformed
  - not mutate caller array
*/

function myMap(array, func) {
  let newArr = [];
  
  for (let idx = 0; idx < array.length; idx += 1) {
    newArr.push(func(array[idx], idx, array));
  }

  return newArr;
}

let plusOne = n =>n + 1;
console.log(myMap([1, 2, 3, 4], plusOne)); // [2,3,4,5]