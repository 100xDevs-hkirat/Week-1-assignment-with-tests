/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  let new_str = str.split("").reverse().join("");
  if (new_str === str) return true;
  return false;
}

module.exports = isPalindrome;

// console.log(isPalindrome("Madam"));
