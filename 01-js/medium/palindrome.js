/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

// function isPalindrome(str) {
//   let revStr = str.split(""). reverse().join("");
//   return revStr===str

// }


function isPalindrome(str) {
  let oriStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let revStr = oriStr.split('').reverse().join('');

  if (revStr === oriStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('hello')); // Returns false




module.exports = isPalindrome;
