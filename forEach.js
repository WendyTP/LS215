/*
Array.prototype.forEach methdo:
  - invokes the callBack function on every element of the caller (array)
  - callBack function takes 3 optional arguments - element, idx, caller array
  - forEach method returns undefined, and not mutate caller
custom forEach function:
  - take an array and a function as arguments
  - the function is called on every element of the array
  - The Function passed to myForEach should mutate a variable in the outer scope
  - the function returns undefined
*/

function myForEach(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    func(array[idx], idx, array);
  }
}
let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);