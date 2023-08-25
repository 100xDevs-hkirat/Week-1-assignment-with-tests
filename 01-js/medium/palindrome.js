/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const cleanStr = str
    .split(" ")
    .join("")
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}?=\-_`~()]/g, "");
  let reverseStr = "";

  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i];
  }

  return cleanStr === reverseStr;
}

module.exports = isPalindrome;
