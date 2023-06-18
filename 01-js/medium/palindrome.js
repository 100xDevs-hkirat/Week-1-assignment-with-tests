/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let string = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();
  for(let i = 0; i < Math.floor(string.length/2); i++){
    if(string[i] != string[string.length - i - 1]){
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
