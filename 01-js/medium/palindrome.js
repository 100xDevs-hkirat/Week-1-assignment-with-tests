/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let start = 0;
  let end = str1.length - 1;
  while (start < end) {
    if (str1[start] !== str1[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
