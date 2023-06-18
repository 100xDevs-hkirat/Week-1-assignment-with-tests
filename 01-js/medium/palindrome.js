/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

let str = "Able, was I ere I saw Elba!";
function isPalindrome(str) {
  str = str.replace(/[^a-z]/gi, '').toLowerCase();
  strLen = str.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (str[i] === str[strLen - i - 1]) {
      continue;
    } else return false;
  }
  return true;
}

module.exports = isPalindrome;
