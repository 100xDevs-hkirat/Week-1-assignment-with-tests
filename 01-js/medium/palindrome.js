/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

/**
 * 
 * @param {string} str 
 */
function isPalindrome(str) {
  str = str.replace(/[.,'?\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  str = str.split(" ").reduce((prev,str)=>prev + str)
  let len = str.length;
  console.log(str);
  for(let i = 0;i < len/2;i++) {
    if(str.charAt(i).toLowerCase() != str.charAt(len - 1 - i).toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Mr. Owl ate my metal worm.'"))

module.exports = isPalindrome;
