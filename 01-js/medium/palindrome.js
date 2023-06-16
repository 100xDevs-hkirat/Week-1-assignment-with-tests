/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let processedString = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");
  let reversedString = processedString.split("").reverse().join("");
  console.log(processedString,reversedString);
  return (processedString === reversedString)?true:false;
}

// isPalindrome("Race? car");

module.exports = isPalindrome;
