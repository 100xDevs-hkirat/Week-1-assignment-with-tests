/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverse(str){
  return str.split(' ').join('').toLowerCase().split('').reverse().join('');
}

function isPalindrome(str) {
  // Remove special characters using regular expression and replace
  let cleanedStr = str.replace(/[^\w\s]/gi, '');
  let reversed = reverse(cleanedStr);
  let compareStr = cleanedStr.split(' ').join('').toLowerCase();
  return reversed === compareStr;
}

module.exports = isPalindrome;
