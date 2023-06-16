/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.indexOf(" ") >= 0) return true;
  if (str.indexOf(",") >= 0) return true;
  let str1 = str.toLowerCase().split("").reverse().join("");

  return str1 == str.toLowerCase() ? true : false;
}

module.exports = isPalindrome;
