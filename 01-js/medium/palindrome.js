/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  const lowercaseStr = str.toLowerCase();

  // Remove any non-alphanumeric characters from the string
  const alphanumericStr = lowercaseStr.replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return alphanumericStr === reversedStr;
}

var sol= isPalindrome('maadam');
console.log(sol);

module.exports = isPalindrome;
