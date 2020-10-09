/*
Question:
  write a function that takes a string of numbers and chars, 
      return a list of numbers
Rule:
  - range (ex. 1-3, 1:3, 1..3) limit is inclusive
  - '1, 3, 7, 2, 4, 1' ==> 
    iterate through numbers, insert num (ex 1,3,7) if arr is empty or if num is larger than last num in array [1,3,7]
    iterate rest numbers [2,4,1] => add 1 to the last array number, and continue adding number until the number matches number ending in 2, then add this new num to array

  - '1-3, 1-2'  ==>
    separate range by , or ', ' ==> ['1-3', '1-2']
    if '1-3' includes '-' :
      separate numbers by `-` ==> ['1','3', '1','2']; ['104', '2'], ['104', '02']
    if '1:5:2' includes ':'
    

    


input: a string of numbers and chars - or : or , or ..
output: an array of numbers (ascending)
Algo:
  - replace any space with '' ==> '1,3, 1-2' ==> '1,3,1-2'
  - separate string by ','  ==> ['1', '2', '3']  or ['1-3','1-2'], or ['545', '64:11']
  - iterate through arr, if item contains '-' or ':', separate by '-' or ':' ==> [['1', '3'], ['1', '2']] , or ['545', ['64', '11']]

  - create a result array []

  - iterate through new nested array (or just array):
    - if single number: if arr is empty or if num is larger than last num in array [1,3,7] => insert num directly to result;
          if  num <= last num in array, num + 1 + 1... until num is bigger than last num and the new num matches to the ending of string of  num (ex. 112 matches '12'), then insert to result
    - if nest array: 
        - iterate through each item: return an inner array of number range --
             (get last num in empty array if there's any, add num to last num to become the first number; or use num directly as first number;
             start from the frist number, then add 1 until reaching the 2nd number of the item (['1', '3'] ==> 1,2,3; ['1', '3', '2'] ==> 1,2,3,4 ...12)
          if )
        - insert the range numbers to result array

*/

function completeNumbers(shortHandNumbers) {
  let numbersArr = shortHandNumbers.replace(/\s/g, '').split(',');
  
  let splitRanges = numbersArr.map(numberRange => {
    if (numberRange.match(/(:|\.\.|\-)+/g)) {
      return numberRange.replace(/[:\-]/g, '..').split('..');
    } else {
      return numberRange;
    }
  })
 
  let result = [];

  splitRanges.forEach(numberRange => {
    if (typeof numberRange === 'string') {
      result.push(createFullNumber(numberRange, result));
    } else {
      result.push(createRange(numberRange, result));
      result = result.flat()
    
    }
  })
  return result;
}


function createFullNumber(stringNumber, arr) {
  let num = parseInt(stringNumber, 10);
  let lastNum = arr[arr.length -1];

  if (arr.length !== 0 && num <= lastNum) {
      num = lastNum;
      while(!String(num).endsWith(stringNumber) ) {
        num += 1;
      }
  };

  return num;
}


function createRange(numberArr, result) {

  let range = [];
  let firstNum = createFullNumber(numberArr[0], result);
  range.push(firstNum);

  numberArr.slice(1).forEach(stringNum => {

    let num = createFullNumber(stringNum, range);

    for(let start = firstNum + 1; start <= num; start += 1) {
      range.push(start);
    }

    firstNum = num;
  })

  return range;
}




// no ranges:
console.log(completeNumbers('1, 3, 7, 2, 4, 1'));  // [1,3,7, 12,14, 21]
console.log(completeNumbers('546, 64, 11'));       // [546, 564, 611 ]


// ranges
console.log(completeNumbers('1-3, 1-2'));    // [1,2,3, 11,12]
console.log(completeNumbers('1:5:2'));    // [1,2,3,4...10,11,12]
console.log(completeNumbers('104-2'));   //[104,105,106...110,111,112]
console.log(completeNumbers('104..02'));  //[104,105,106,...201,202]
console.log(completeNumbers('545, 64:11')); //[545, 564,565,...611]

