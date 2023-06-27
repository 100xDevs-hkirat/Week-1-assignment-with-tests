/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

// function isPalindrome(str) {
//   str = str.replace(/[^\w\s]|_/g, "");
//   let len = str.length;
//   for (let x = 0; x < len/2; x++) {
//     if (str[x].toLowerCase() !== str[len - x - 1].toLowerCase()) {
//       return false;
//     }
//   }
//   return true;
// }


function isPalindrome(str) {
  // Remove spaces and punctuation marks using regular expression
  const cleanStr = str.replace(/[^\w]|_/g, "").toLowerCase();

  // Check if the cleaned string is a palindrome
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
