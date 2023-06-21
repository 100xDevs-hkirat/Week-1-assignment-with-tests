/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[^\w]|_/g, "").replace(/\s+/g, "");
  let reverseString = newStr.split("").reverse().join("");

  if(newStr == reverseString){
    return true;
  }else{
    return false;
  }
  
}

module.exports = isPalindrome;
