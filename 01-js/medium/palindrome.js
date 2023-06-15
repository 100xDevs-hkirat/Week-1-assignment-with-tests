/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length-1;

  while(i < j){
    if(!isAlphaNumeric(str.charAt(i))) i++;
    else if(!isAlphaNumeric(str.charAt(j))) j--;
    else if(str.charAt(i) !== str.charAt(j)) return false;
    else {
      i++; j--;
    }
    
  }

  return true;
}

let alphaNumericRegex = /^[0-9a-zA-Z]+$/

function isAlphaNumeric(char){
  return alphaNumericRegex.test(char);
}

module.exports = isPalindrome;
