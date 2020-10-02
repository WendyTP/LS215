/*
Question: Write a program that, given a number in string format, check if it is valid per the Luhn formula
Rule:
  - ignore all non-numeric chars in input string
  - formula: The formula verifies a number against its included check digit. The check digit is usually
      appended to o a partial number to generate the full number. 
  - Create a full number:
    - counting from the rightmost digit and moving left, double the value of every second digit
        ex. 1111 ==> 2121
    - For any digit that thus become 10 or more, subtract 9 from the result
        ex. 8763 ==> (16)7(12)3 => (16-9)7(12-9)3 ==> 7733
      Add all digits togehter:
        1111 ==> 2121 ==> 2+1+2+1 ==> checksum of 6
        8763 ==> 7733 ==> 7+7+3+3 ==> checksum of 20
  - Valid checksum:
    - if checksum % 10 === 0 (ie. ending 0) ==> valid; otherwise, not valid
input:
  a string of numbers (ignore non-digits char)
output:
  true / false 

Test case:
  Invalid data type or no input ==> return  'invalid input'
   - 1234  // 'invalid input'
   - [1,2,3,5]  // 'invalid input'
  
  Non-digits string or empty string ==> return 'invalid input'
    - ''    // 'invalid input'
    - 'aewer!£we' // 'invalid input'
  
  digit mix string
    - '1abe235'   // 1235 ==> 2265 ==> 2+2+6+5 ===15 ==> 15 % 10 !== 0 ==> false
    - '8awe7w%63'   ==> true
  
  pure digits
    - '1111' ==> false
    - '8763' ==> true
    - 2323 2005 7766 3554' ==> true

Data structure: an array of numbers
Algo:
  - validate input
  - remove all non-digit chars
  - create an array of chars (in numbers)
  - transform every other char, count from last digit, by doubling it, then
    subtract the number by 9 if more than 10
  - add up all numbers then % 10 
  - if remain 0, return true, else return false


Test case for function correctInvalidChecksum:
  - '1234' ==> 1464 => 15 (not valid) 
    '1234x' ==> 1438x => 16 + x ==> (16 + 1; 16 + 2,... (16 + 4) % 10 === 0 ) ==> x === 4
    => '12344'  14384 ==> 20
    '12483' => 14473 => 19 ( not valid)
      '12483x' ==> 22886x => 26 + x ==> (26 +1; 26 + 2.. (26 + 4)) ==> x = 4
    => '124834'   228864 => 30 
Algo 
  - input: a string of number
  - output: a string of number + checkdigit
  - verify if input is valid checksum
    - if not: 
      - double every other digit, start from last digit, 
      - add up all sum
      - iterate from 1 to 9:
        if ((sum + num) % 10 === 0)=> stop iteration; add num to number

    
*/

function validLuhnChecksum(number) {
  if (validInput(number) === false) {
    return 'invalid input'
  }

  let digits = stringNumbersToArrayOfDigits(number)

  let checksum = transformDigitsToChecksum(digits);

  return checksum % 10 === 0;

}

function validInput(number) {
  return typeof number === 'string' &&
  number.match(/\d/) !== null; 
}

function stringNumbersToArrayOfDigits(stringNumber) {
  return stringNumber.replace(/\D/g, '').split('')
                    .map(digit => parseInt(digit,10));
}



function transformDigitsToChecksum(digits) {
  let multiplyByTwo = false;

  for (let idx = digits.length - 1; idx >= 0; idx -= 1) {

    if (multiplyByTwo) {
      digits[idx] *= 2;
      digits[idx] = digits[idx] >= 10 ? digits[idx] - 9 : digits[idx];
    }

    multiplyByTwo = !multiplyByTwo;
  }

  return digits.reduce((sum, digit) => sum + digit);

}


/* bonus -- first try 
function correctInvalidChecksum(number) {
  let checkDigit = 0;

  if (validLuhnChecksum(number)) {
    return number;
  } else {
    let digits = stringNumbersToArrayOfDigits(number);

    digits.push(checkDigit);

    let currentSum = transformDigitsToChecksum(digits);


    for (let count = 1; count <= 9; count += 1) {
      if ((currentSum + count) % 10 === 0) {
        checkDigit = count;
        break;
      }
    }

  return number.concat(String(checkDigit));
  }
}
*/

function correctInvalidChecksum(string) {
  let correctString;

  if (validLuhnChecksum(string)) {
    return string;
  } else {
    for (let count = 1; count <= 9; count += 1) {
      correctString = string + String(count);
      if (validLuhnChecksum(correctString)) {
        return correctString;
      }
    }
  }
}

/*
console.log(validLuhnChecksum(1234));        // 'invalid input'
console.log(validLuhnChecksum([1,2,3,5]));   // 'invalid input'

console.log(validLuhnChecksum(''));          // 'invalid input'
console.log(validLuhnChecksum('aewer!£we'));   // 'invalid input'



console.log(validLuhnChecksum('1abe235'));     //false
console.log(validLuhnChecksum('8awe7w%63'));   //true

console.log(validLuhnChecksum('1111'));        //false
console.log(validLuhnChecksum('8763'));        //true
console.log(validLuhnChecksum('2323 2005 7766 3554'));         //true
*/

console.log(correctInvalidChecksum('1234'))  // '12344'
console.log(correctInvalidChecksum('12483'))  // '124834'
console.log(correctInvalidChecksum('2323 2005 7766 355'))  //2323 2005 7766 3554

//         4343 4005 5736 6514 => 14 + 9 + 21 + 16 => 