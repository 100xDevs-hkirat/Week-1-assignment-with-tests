/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  str = str.toLowerCase();

  // Remove any non-alphanumeric characters from the string
  str = str.replace(/[^a-z0-9]/g, '');

  // Check if the string reads the same forwards and backwards
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

module.exports = isPalindrome;
