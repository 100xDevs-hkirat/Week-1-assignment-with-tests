/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const string = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const length = string.length;

  for (var i=0; i<length/2; i++){
    if(string[i] !== string[length - 1 - i]){
      return false
    }
  }

  return true;
}

console.log(isPalindrome('level'));

module.exports = isPalindrome;
