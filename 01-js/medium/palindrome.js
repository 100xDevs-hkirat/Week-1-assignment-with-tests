/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = [...str].map(i => [..." .!,@?"].some(c => c === i) ? '' : i).join('')
  return str.toLowerCase() === [...str].reverse().join('').toLowerCase();
}

module.exports = isPalindrome;
