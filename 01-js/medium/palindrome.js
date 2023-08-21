/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let first = 0;
  let last = str.length - 1;
  const pattern = /[a-z]/;

  while (first < last) {
    while (!pattern.test(str.charAt(first)) && first < last) {
      first++;
    }
    while (!pattern.test(str.charAt(last)) && first < last) {
      last--;
    }
    if (first < last && str.charAt(first) !== str.charAt(last)) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}

module.exports = isPalindrome;
