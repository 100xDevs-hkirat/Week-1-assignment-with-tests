/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  var n = cleanStr.length;

  for (var i = 0; i < n / 2; i++) {
    var j = n - 1 - i;

    if (cleanStr[i] !== cleanStr[j]) {
      return false;
    }
  }

  return true;
}


module.exports = isPalindrome;
