/*
Question: write a function that takes 2 version numbers and compare them
input: 2 strings of version number (in below format) (digits and . char)
  1 ; 1.0 ; 1.2 ; 3.2 ; 3.0.0 ; 4.2.3.0 ;
output: return 1 if v1 > v2
               -1 if v1 < v2
                0 if v1 === v2
               null if input is not valid (ex. 1.k.0)
Example:
  0.1 < 1 ; 
  1 === 1.0 ; 
  1.1 < 1.2 ;
  1.2 === 1.2.0.0;
  1.2.0.0 < 1.18.2;
  1.18.2 < 13.37
Data:
  - an array of numbers
algo:
  transform input and clean up 
  - validate the string
      invalid input: 1.a , .1 , 1. , 1..0
  - transform the string into array of numbers, split by .s
  - remove all the ending 0s from arrays
 compare:
  [1, 0, 4]  vs [1, 18]  ;  [1 , 1] vs [1, 1, 4]
  - iterate the shorter version array:
    - compare same idx number : 
     - return as soon as gets result (1, -1, 0)
  - the longer version is bigger if no result is determined after iteraion
*/

function compareVersion(v1, v2) {
  if (!validVersionNumber(v1) || !validVersionNumber(v2)) {
    return null;
  }

  let v1Numbers = v1.split('.').map(stringNum => parseInt(stringNum, 10))                       
  let v2Numbers = v2.split('.').map(stringNum => parseInt(stringNum, 10));

  v1Numbers = removeEndZeros(v1Numbers);
  v2Numbers = removeEndZeros(v2Numbers);


  let result;

  for (let idx = 0; idx < v1Numbers.length; idx += 1) {
    
    if (!v2Numbers[idx]) {
      break;
    }

    if (v1Numbers[idx] > v2Numbers[idx]) {
      result = 1;
      return result;
    } else if (v1Numbers[idx] < v2Numbers[idx]) {
      result = -1;
      return result;
    } else {
      result = 0;
    }
  }

  if (result === 0 && v1Numbers.length > v2Numbers.length) {
    result = 1;
  } else if (result === 0 && v1Numbers.length < v2Numbers.length) {
    result = -1;
  }

  return result;
}

function removeEndZeros(numbers) {
  for (let idx = numbers.length - 1; idx >= 0; idx -= 1) {
    if (numbers[idx] !== 0) {
      break;
    } else {
      numbers.pop();
    }
  }
  return numbers;
}

function validVersionNumber(version) {
  return version.match(/^(\d+\.)*\d+$/);
}



console.log(compareVersion('1.24.0', '1.2.5')); // 1
console.log(compareVersion('1', '1.0'));        // 0
console.log(compareVersion('1.1', '1.2'));      // -1
console.log(compareVersion('1.2', '1.2.5'));    // -1
console.log(compareVersion('1.8', '13.4'));     // -1
console.log(compareVersion('1.2', '1.4.a'));   // null

