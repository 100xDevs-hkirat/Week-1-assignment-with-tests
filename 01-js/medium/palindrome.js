/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str)
{
  // Remove spaces and punctuation marks from the string
  let alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the alphanumeric string
  let reversedStr = alphanumericStr.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return alphanumericStr === reversedStr;
}

module.exports = isPalindrome;
