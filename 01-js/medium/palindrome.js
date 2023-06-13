/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  str = str.toLowerCase();

  // Define pointers for the start and end of the string
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    // Ignore non-alphabetic characters by advancing the pointers
    if (!isAlphabetic(str[start])) {
      start++;
      continue;
    }
    if (!isAlphabetic(str[end])) {
      end--;
      continue;
    }

    // Compare the characters at the current positions
    if (str[start] !== str[end]) {
      return false; // Characters don't match, not a palindrome
    }

    // Move the pointers towards the center
    start++;
    end--;
  }

  return true; // All characters matched, it is a palindrome
}

function isAlphabetic(char) {
  return /^[A-Za-z]+$/.test(char);
}

module.exports = isPalindrome;
