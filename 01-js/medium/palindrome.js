/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function removeNonAlphanumericString(str) {
  let newStr = "";
  for (var idx = 0; idx < str.length; idx++) {
    if ((str[idx].toUpperCase() >= 'A' && str[idx].toUpperCase() <= 'Z'))
      newStr += str[idx].toUpperCase();
  }
  return newStr;
}

function isPalindrome(str) {
  const cleanedString = removeNonAlphanumericString(str);
  let leftPtr = 0, rightPtr = cleanedString.length - 1;
  while (leftPtr < rightPtr) {
    if (cleanedString[leftPtr] != cleanedString[rightPtr]) {
      return false;
    }
    leftPtr++, rightPtr--;
  }
  return true;
}

module.exports = isPalindrome;
