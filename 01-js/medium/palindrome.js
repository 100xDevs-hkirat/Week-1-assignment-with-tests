/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let len = str.length

  if (len <= 1) return true

  str = str.replace(/[^a-zA-Z]/g, '');
  str = str.toLowerCase();

  len = str.length;

  let lo = 0, hi = len - 1;

  while (lo < hi) {
    if (str[lo] != str[hi]) {
      return false;
    }
    lo++;
    hi--;
  }


  return true;
}

module.exports = isPalindrome;
