/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  function removeSymbols(string) {
    const acceptableChars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for (const char of string) {
      if (acceptableChars.includes(char)) {
        newString += char;
      }
    }
    return newString;
  }
  str = str.toLowerCase().replaceAll(" ", "");

  str = removeSymbols(str);

  for (let i = 0; i < str.length; i++) {
    const start = i;
    const end = str.length - i - 1;

    if (str[start] !== str[end]) return false;

    if (start >= end) break;
  }
  return true;
}

module.exports = isPalindrome;
