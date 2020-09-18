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

function isMultipleOfThreeOrFive(value) {
  return value % 3 === 0 || value % 5 === 0;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]