/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let modifiedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(str[i])) {
      modifiedStr += str[i];
    }
  }

  let len = (modifiedStr.length-1)/2;
  for(let i=0; i<len; i++) {
    if(modifiedStr[i] !== modifiedStr[modifiedStr.length-i-1]) return false;
     
  }
  return true;
}

module.exports = isPalindrome;
