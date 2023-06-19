/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const punctuation = /[\.,?!]/g;

  str = str.replaceAll(punctuation, '');
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();

  const charArray = str.split('');
  const size = charArray.length;
  const half_length = Math.round(size / 2);

  for (let index = 0; index < half_length; index++) {
    if (charArray[index] === charArray[size - index - 1]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
