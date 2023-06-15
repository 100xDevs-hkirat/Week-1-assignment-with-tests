/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  const alphanumericStr = lowerStr.replace(/[^a-z0-9]/g, "");

  const reversedStr = alphanumericStr.split("").reverse().join("");

  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;
