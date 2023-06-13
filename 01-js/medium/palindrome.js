/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/[ ,.?!']/g, '');
  let n = str1.length;
  let start = 0;
  let end = n - 1;
  console.log(str1);

  while (start <= end) {
    if (str1[start++] !== str1[end--])
      return false;

  }
  return true;
}

module.exports = isPalindrome;
