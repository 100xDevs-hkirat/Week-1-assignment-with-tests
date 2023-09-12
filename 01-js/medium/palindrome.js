/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const p1 = 0;
  const p2 = str.length - 1;
  while (p1 < p2){
    if (str[p1] !== str[p2]){
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

module.exports = isPalindrome;
