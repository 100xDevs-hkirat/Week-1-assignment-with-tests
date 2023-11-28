/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) return true;
  let cleanString = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) ||
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
    )
      cleanString += str[i].toLowerCase();
  }
  let i = 0,
    j = cleanString.length - 1;
  while (i < j) {
    if (cleanString[i] != cleanString[j]) return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
