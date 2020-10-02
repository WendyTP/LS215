/*
  Question: 
    A program that cleans up user-entered phone numbers so that they can be sent as SMS messages. 
  Rules:
    - only keep number, and ignore any special chars ex. space, dash, dot and ()
    - phone numbers < 10 digits ==> bad number
    - phone numbers === 10 digits ==> good number
    - phone numbers === 11 digits && first number == 1 ==> good  (use only last 10 digits)
    - phone numbers === 11 digits && first number !== 1 ==> bad
    - phone numbers > 11 digits ==> bad number
    - return a string of 10 0 's for bad numbers
  input:
    - a string of numbers, may including special chars 
    - output: a string of 10 numbers

  test case:
    - Invalid data type input:
      - '1abe23545'  ==> return 'invalid input'?
      - non-string type (numbers, null, array) ==> retun 'invalid data type' ?
    - Valid data type : 
      - a string contains only numbers and/or special chars : space, dash, dot and ()
    - Invalid input:
      - '123456789 (9 digits)==>  '0000 000 000'
      - '223456789804 (12 digits)==> '0000 000 000'
      - 
      - '22345678901 (11 digits) ==> '0000 000 000'
    - Valid input:
      - '12345678901 (11 digits) ==> '2345 678 901'
      - '(1) 2345 335 333'  ==> '2345335333'
      - '234-2243-223'      ==> '2342243223'
      - '2.3 45 89 (09) 12' ==> '2345890912'
      - 2345567891          ==> '234567891'

  Data structure:
    - string
  Algo:
    - validate input data type 
      - if input is not string or input contains any chars other than digits and given special chars
          then return ' invalid data type'
    - trim off any specail chars
      - replace any special chars with ''
    - verify length and order of numbers
      - if numbers length < 10 --> return 10 zeros
      - if numbers length > 11 --> return 10 zeros
      - if numbers length is 11:
          - if first number is 1, return last 10 digits
          - if first number is not 1, return 10 zeros
      - else (numbers length === 10) ==> return the digits
    - return cleaned-up numbers (in string)
*/


function cleanPhoneNumbers(phoneNums) {
  let validInput = /^([\.\-\(\) ]*\d+[\.\-\(\) ]*)+$/

  if (typeof phoneNums !== 'string' || 
      !validInput.test(phoneNums)) {
        return 'Invalid data type!';
  }
  
  phoneNums = phoneNums.replace(/[\.\-\(\) ]/g, '');  // or just .replace(/^\d/g, '')
  
  let phoneLength = phoneNums.length;

  if (phoneLength < 10 || phoneLength > 11) {
    return  '0'.repeat(10);
  } else if (phoneLength === 10) {
    return phoneNums;
  }


  if (phoneLength === 11 && phoneNums[0] === '1') {
    return phoneNums.slice(1);
  } else {
    return '0'.repeat(10);
  }
}

// invalid data type
console.log(cleanPhoneNumbers('1abe23545'));  // 'invalid data type'
console.log(cleanPhoneNumbers(456885));       // 'invalid data type'



// invalid numbers 
console.log(cleanPhoneNumbers('123456789'));      // '0000 000 000'
console.log(cleanPhoneNumbers('223456789804'));   // '0000 000 000'
console.log(cleanPhoneNumbers('22345678901'));    // '0000 000 000'

// valid numbers
console.log(cleanPhoneNumbers('12345678901'));    // '2345 678 901'
console.log(cleanPhoneNumbers('(1) 2345 335 333'));   // '2345335333'
console.log(cleanPhoneNumbers('234-2243-223' ));      // '2342243223'
console.log(cleanPhoneNumbers('2.3 45 89 (09) 12'));  // '2345890912'
console.log(cleanPhoneNumbers('2345567891'));         // '234567891'
