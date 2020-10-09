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

Decrypting:  ex. message WECRLTEERDSOEEFEAOCAIVDEN
To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.
  ex. 
  ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
  . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The first row has seven spots that can be filled with "WECRLTE".
  W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The 2nd row takes "ERDSOEEFEAOC":
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The 3rd row takes 'AIVDEN'
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

Algo:
  Create rails:
    - create an array of inner arrays [[], [], []];
    - same procedure as creating rails for encoding, except fill with ? mark
  Replace ? mark with letters:
    - iterate through inner arrays: one encounter a ? mark, replace it with a letter from message string (copy), then remove the letter from string
  return the 3 inner arrays flatten to be strings
*/



function railFenceDecode(encrypedMessage) {
  let questionMarks = '?'.repeat(encrypedMessage.length);
  let fences = ['', '', ''];
 
  let messageLetters = encrypedMessage.split('');

  let fenceRailsWithEncryptionPositions = createFenceRails(fences, questionMarks);
  
  return fenceRailsWithEncryptionPositions.map(fenceLine => {

    let splitLine = fenceLine.split('');

    splitLine.forEach((char, idx) => {
      if (char === '?') {
        splitLine[idx] = messageLetters.shift();
      }
    })

    return splitLine.join('')

  }).join('\n')
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


  console.log(railFenceDecode('WECRLTEERDSOEEFEAOCAIVDEN'));   // the zig-zag rails