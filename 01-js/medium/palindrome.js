/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str = str.toLowerCase();

  strOne = "";

  for(let i = 0 ; i < str.length; i++){
    if('a'.charCodeAt(0) <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 'z'.charCodeAt(0)){
      strOne += str[i];
    }
  }

  strOnerev = "";

  for(let i = strOne.length-1; i>-1;i--){
    strOnerev+=strOne[i];
  }
  return strOnerev === strOne;
}


module.exports = isPalindrome;
