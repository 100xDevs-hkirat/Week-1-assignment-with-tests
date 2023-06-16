/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str =str.replace(/[.," "\/#!?$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
  var l = 0;
  var r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    } 
    else {
      l++;
      r--;
    }
  }
  return true;
}


module.exports = isPalindrome;