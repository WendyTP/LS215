/*
Array.prototype.filter method:
  - takes 1 argument - a callback function
  - the callback function has 3 arguments - element, idx (optional), caller array (optional)
  - callback returns true or false at each iteratrion
  - if true, current element is selected and placed to a new array
  - filter returns this new array
  - caller not mutated
custom filter function:
  - takes an array and a function as args
  - returns a new array contains values that the function returns true when they are passed in
*/

function myFilter(array, func) {
  let newArr = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    let returnedValue = func(array[idx], idx, array);
    if (returnedValue) {
      newArr.push(array[idx]);
    }
  }
  
  return newArr;
}

/*
function isOddNum(num) {
  return num % 2 === 0;
}

let arr = [1,2,3,4];
console.log(myFilter(arr, isOddNum));
console.log(arr)
*/

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));