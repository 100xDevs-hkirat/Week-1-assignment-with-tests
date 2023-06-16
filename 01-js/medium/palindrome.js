/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z]/g, "");

  reveseredString = str.split("").reverse().join("");
  console.log(str, reveseredString);

  if (reveseredString == str) {
    return true;
  }
  return false;

}

console.log(isPalindrome("aNnA"));

module.exports = isPalindrome;
