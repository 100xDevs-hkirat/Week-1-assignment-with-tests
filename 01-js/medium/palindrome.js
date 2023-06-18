/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.length<=1){
    return true;
  }
  var lowerString=str.toLowerCase().match(/[a-z]/g).join("");
  console.log(lowerString);
  var palindromeString=lowerString.split("").reverse().join("")
  console.log(palindromeString);
  if(lowerString===palindromeString){
    return true
  }
  return false;
}

module.exports = isPalindrome;
