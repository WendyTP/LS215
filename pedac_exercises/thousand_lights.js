/*
11:11 - 12:11
Question:
  -  a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.
Rules:
  - n switches (1 or above), all off initially
  - start nth repetition (ex. 9 switches, then 9 repetitions)
    - 1st : toggle all switches  (start ffrom 1, increase by 1 ==> 1,2,3,4....) until reaching the last switch
    - 2nd: toggle from 2nd switch (increase by 2 ==> 2,4,6,8...)  (stops before the last swtich)
    - 3rd: toggle from 3rd switch (increase by 3 => 3,6, 9 )
    - 4th : toggle from 4th switch (increase by 4 => 4,8 )
Requirment:
  - returns an array of the lights that are on after n repetitions:
    - how to record the status of each light, to be able to choose the one with the status 'on'
  - what is an array of lights?
    - an array of integers (the number of each light that is on)

  - input: a positive integer (1 or above)
      - invalid input:  0 or negative integer, or non-integer
                       no input
                       non- number type
                       => retun an error message (invalid input!)
  - output: an array of integers (ex. [1,4])
test:
4 lights: 
  1st: all on
  2nd : 2 & 4 off; 1, 3 on
  3rd: 3 off; 1 on; 2 & 4 off;
  4th: 4 on; 1 on; 2 off; 3 off
Data :
  - light status record: {'1': off, '2': off, '3': off}  ( key needs to be turned into integer during iteration and for result)
Algo:
  - validate input
     - if the input is not of number type and is not positive integer => return error
  - create an object with key as light number, and status 'off' as value
      - create an empty object
      - iterate through nth light, at each iteration, add one light with status off
  - create an array of light numbers [1,2,3...]
  - iterate nth light from 1:
    - iterate through the array, if light number % nth repetiion === 0, then toggle the corresponding ligth in the record
        - toggle light : if status if off ==> on; if status is on ==> off
  - iterate through the record and select the light with status on
*/

function lightsOn(switches) {
  if (!Number.isInteger(switches) || switches <= 0) {
    return 'Invalid Input!';
  }

  let lightsRecord = {};
 

  for (let count = 1; count <= switches; count += 1) {
    lightsRecord[count] = 'off'
   
  }

  let lights = Object.keys(lightsRecord).map(lightKey => parseInt(lightKey));
  
  for (let nthLight = 1; nthLight <= switches; nthLight += 1) {
    lights.forEach(light => {
      if (light % nthLight === 0) {
        toggleLight(light, lightsRecord);
      }
    })
  }
  
  return lights.filter(light => lightsRecord[String(light)] === 'on');

}

function toggleLight(light, record) {
  if (record[String(light)] === 'off') {
    record[String(light)] = 'on';
  } else {
    record[String(light)] = 'off';
  }
}

// invalid input
/*
console.log(lightsOn(0));
console.log(lightsOn(1.5));
console.log(lightsOn());
console.log(lightsOn('we'));
*/

// valid input
  console.log(lightsOn(4))      //[1,4]
console.log(lightsOn(5));      // [1, 4]
console.log(lightsOn(100));    // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

