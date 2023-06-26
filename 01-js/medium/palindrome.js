/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isCharacter(char) {
  return char.toUpperCase() != char.toLowerCase();
}


function isPalindrome(str) {
  let start = 0, end = str.length - 1;

  if (str.length <= 0) return true;
  while (start < end) {
    while (!isCharacter(str[start])) {
      start++;
    }
    while (!isCharacter(str[end])) {
      end--;
    }
    if (str[start].toUpperCase() !== str[end].toUpperCase()) {

      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

module.exports = isPalindrome;
