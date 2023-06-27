/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length == 0) {
    return true;
  }

  let refinedString = str.toLowerCase();
  refinedString = refinedString.replace(/[^a-zA-z]/g, '');

  // console.log("Refined String: ", refinedString);

  let reverseString = refinedString.split('').reverse().join('');

  // console.log("Original Refined String: ", refinedString);
  // console.log("Reversed String: ", reverseString);
  
  if (reverseString === refinedString)
    return true;
  return false;
}

module.exports = isPalindrome;
