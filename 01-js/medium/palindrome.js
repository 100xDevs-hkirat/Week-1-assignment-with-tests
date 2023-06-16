/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.length == 1)return true;

  var trim_str = str.replace(/[^\w\s]/gi,"");
  trim_str = trim_str.replace(/\s/g, "").toLowerCase();

  return trim_str.split("").reverse().join("") === trim_str;
}

module.exports = isPalindrome;
