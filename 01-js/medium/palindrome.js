/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const regex= /[^A-Za-z0-9]/g;
  let cleanString = str.replace(regex,'').toLowerCase();
  let reverseString = cleanString.split("").reverse().join("")
  if (reverseString === cleanString) {
    return true
  } else {
    return false
  }
}




module.exports = isPalindrome;
