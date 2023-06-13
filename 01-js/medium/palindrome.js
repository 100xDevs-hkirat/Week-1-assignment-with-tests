/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str1) {
  let str = str1.trim();
  const regex = /[^a-zA-Z]/g;
  str = str.replace(regex, "");

  const n = str.length;

  for (let i = 0, j = n - 1; i <= j; i++, j--)
    if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;

  return true;
}

module.exports = isPalindrome;
