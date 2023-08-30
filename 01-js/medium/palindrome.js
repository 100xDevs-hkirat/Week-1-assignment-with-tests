/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeSpacesAndPunctuation(inputString) {
  // Replace spaces and punctuation with an empty string
  const cleanedString = inputString.replace(/[ \p{P}]+/gu, "");

  return cleanedString;
}

function isPalindrome(str) {
  let newStr2 = str.toLowerCase().split(" ").join();
  let newStr = removeSpacesAndPunctuation(newStr2);

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] == newStr[newStr.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
