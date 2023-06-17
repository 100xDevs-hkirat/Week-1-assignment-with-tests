/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^\w]/g, '')
  let arr = str.toLowerCase().split("");
  let arrRev = [];
  for(var i = arr.length-1; i>=0; i--) {
    arrRev.push(arr[i]);
  }
  var strRev = arrRev.join("");

  if(str.toLowerCase() == strRev) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
