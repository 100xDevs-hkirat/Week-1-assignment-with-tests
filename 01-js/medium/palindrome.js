/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const filteredString = str.replace(/[\W_]/g, "").toLowerCase();
  const newArray = [...filteredString];
  // replace() method is used with the regular expression /[\W_]/g. This regular expression matches any non-alphanumeric character (\W) or underscore (_). The g flag is added to perform a global search and replace, ensuring that all occurrences are removed.
  return newArray.every((char, index) => char === newArray[(newArray.length) - 1 - index]);
}

  module.exports = isPalindrome;
