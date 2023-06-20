/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.length == 0){
    return true
  }
  str = str.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(" ").join("");
  var temp = str.split("");
  var reversed = temp.reverse().join("");
  console.log(reversed);
  // str = str.join("");
  console.log(str);
  return reversed === str}

module.exports = isPalindrome;
