/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const orgStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const remSpecl = str.replace(/[^a-zA-Z0-9]/g, "");
  const revStr = remSpecl.split("").reverse().join("").toLowerCase();
  return orgStr === revStr;
}

const test = isPalindrome("Able, was I ere I saw Elba!");
console.log(test);

module.exports = isPalindrome;
