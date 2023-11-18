/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //first regex for remove space
  // next regex for removing punctuation
  const p = str
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^\w\s\']|_/g, "");
  const q = p;
  if (q === p.split("").reverse().join("")) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
