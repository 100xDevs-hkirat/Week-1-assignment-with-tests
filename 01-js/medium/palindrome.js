/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str = str.replace(/[^a-zA-Z]+/g,"");
  console.log(str);
  var splitString = str.toLowerCase().split("");
  var reverseArray = splitString.reverse();
  var reverseString = reverseArray.join("");
  if(str.toLowerCase() === reverseString) return true;
  else return false;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
