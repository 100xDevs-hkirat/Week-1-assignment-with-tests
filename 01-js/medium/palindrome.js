/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function ReverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  var str1 = str
    .replace(/\s+/g, "")
    .replace(/[.,?\/#!$%^&*;:{}=\-_`~()]/g, "")
    .toLowerCase();
  console.log(str1);
  if (str1 == ReverseString(str1)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
