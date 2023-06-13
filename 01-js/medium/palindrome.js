/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  lowstr = str.replace(/[^\w]/g, '').toLowerCase();


  for (let i = 0, j = lowstr.length - 1; i < j; i++, j--) {
    if (lowstr[i] !== lowstr[j]) {
      return false; // Characters don't match, not a palindrome
    }
  }
  
  return true;

}

module.exports = isPalindrome;
