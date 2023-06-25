/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const smallCasedStr = str.toLowerCase().replace(/[^A-Za-z]/g, "");
  let start = 0;
  let end = smallCasedStr.length - 1;
  while (start < end) {
    if (smallCasedStr[start] !== smallCasedStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
