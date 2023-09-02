/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.split(" ").join("");
  str=str.split("!").join("");
  str=str.split("?").join("");
  str=str.split(",").join("");
  str=str.split(".").join("");
  n = str.length;
  for(i=0;i<n/2;i++){
    if(str[i]!=str[n-i-1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
