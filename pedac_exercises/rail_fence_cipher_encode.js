/*
Question: Implement encoding and decoding for the rail fence cipher. ( 2 functions)
Rule: 
Encoding:
In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, 
  then moving up when we get to the bottom (like a zig-zag). 
  Finally the message is then read off in rows.
  ex. message:  "WE ARE DISCOVERED FLEE AT ONCE" (25 letters)
    ==> rails  (first word takes first line firt dot position; 2nd word takes 2nd line 2nd dot; 3rd word takes 3rd line 3 dot; 3th word takes 2nd line 4th dot; 5th word takes 1st line 5th dot => 123 2 123 2 123)
    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .
    ==> reads off 
  WECRLTEERDSOEEFEAOCAIVDEN    (first row : WECRLTE;  2nd row: ERDSOEEFEAOC;  3rd row: AOCAIVDEN)

input: a string of words (ex. 'WE ARE DISCOVERED FLEE AT ONCE')
output: a string of letters (ex.'WECRLTEERDSOEEFEAOCAIVDEN')

valid input: any string chars (letters, nums, special chars), separated by space

Algo:
  - remove spaces between arg. ==> 'WEAREDISCOVEREDFLEEATONCE'
  create rail:
  - create fence:
    [
      [],
      [],
      []
    ]
  - iterate the string, each idx of char (start from idx 0) is the same idx of the fence where it is added to (ex. 5th char at 5th idx of fence )
    - start by adding dots on all 3 fences
  - iterate between fence lines (0121 0121 0121) for placing each char (replace dot with char)
  - 
  read off:
    - create an empty string
    - iterate through each inner array, concat the letters (not dots) to empty string
*/

function railFenceEncode(message) {
  message = message.replace(/\s/g, '');
  let fences = ['','', ''];
  
  let encodedFence = createFenceRails(fences, message);



  let encodedMessage = '';

  return encodedFence.map(fenceLine => {
    return fenceLine.replace(/\./g, '');
  }).join('')

 
}

function createFenceRails(fences, message) {
  let fenceIterationOrder = [0,1,2,1];
  let startIdx = 0
  

  for (let letterIdx = 0; letterIdx < message.length; letterIdx += 1) {
    fences = fences.map(fence => fence.concat('.'))
    
    let fenceIdx = fenceIterationOrder[startIdx];
    let currentFence = fences[fenceIdx];

    fences[fenceIdx] = currentFence.substring(0, currentFence.length -1).concat(message[letterIdx]);

    if (startIdx >= fenceIterationOrder.length - 1) {
      startIdx = 0;
    } else {
      startIdx += 1;
    }
  }

  return fences;
}


console.log(railFenceEncode('WE ARE DISCOVERED FLEE AT ONCE'));
//console.log(railFenceEncode('WEAb'));
