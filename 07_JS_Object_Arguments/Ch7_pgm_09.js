// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

var startIndex = message.indexOf("go");  // Find index of 'go' in the string
console.log(startIndex);  // Output: 13

// Extract 'go' from the message
console.log(message.substr(startIndex, 2));  // Output: "go"

var chooseIndex = message.indexOf("choose");  // Find index of 'choose' in the string
console.log(message.substr(chooseIndex, 6));  // Output: "choose"

var moonIndex = message.lastIndexOf("oo");  // Find index of 'oo' in the string
console.log(moonIndex);  // Output: 28

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */