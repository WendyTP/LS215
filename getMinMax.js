function myForEach(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    func(array[idx], idx, array);
  }
}

let getMinMax = value => {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
}



let min = Infinity;
let max = -Infinity;
let arr = [4,5,12,23,3]
myForEach(arr, getMinMax);

console.log(min, max);           // 3 23
console.log(arr);                // [4, 5, 12, 23, 3]
