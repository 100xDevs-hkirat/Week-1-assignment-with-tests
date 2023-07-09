/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left <= right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }

    left++;
    right--;
  }
  
  return true;
}

module.exports = isPalindrome;
