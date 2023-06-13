/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let len = str.length;
  if (len === 0) {
    return true;
  }
  if (len === 1) {
    return true;
  }
  let newString = "";

  let str1 = str.toLowerCase();
  for (let i = 0; i < len; i++) {
    if (str1[i].toLowerCase() != str1[i].toUpperCase()) {
      newString += str1[i];
    }
  }
  len = newString.length;

  let times = 0;
  if (len % 2 == 0) {
    times = len / 2;
  } else {
    times = (len - 1) / 2;
  }
  let ans = true;
  for (let i = 0; i < times; i++) {
    if (newString[i] !== newString[len - i - 1]) {
      ans = false;
      break;
    }
  }

  return ans;
}

module.exports = isPalindrome;
