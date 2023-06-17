/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function removeSpacesAndPunctuation(str1) {
  return str1.replace(/\s+/g, '').replace(/[^\w\s]|_/g, '');
}

function isPalindrome(str) {

  if (!str) return true;
  if (str.length === 1) return true;

  var cleanstr = removeSpacesAndPunctuation(str.toLowerCase());

  let i = 0;
  let j = cleanstr.length - 1;

  while (i <= j) {
    if (cleanstr[i] !== cleanstr[j]) break;
    i++; j--;
  }
  return i > j ? true : false;

}

module.exports = isPalindrome;
