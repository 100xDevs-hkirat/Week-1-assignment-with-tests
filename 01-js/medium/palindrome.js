/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let palin = false;
  let len = str.length;

  if (len <= 1) {
    return true;
  }
  str = str.toLowerCase();
  let str1 = "";

  for (s of str) {
    if (s >= "a" && s <= "z") {
      str1 += s;
    }
  }

  for (let i = 0, len = str1.length; i < len / 2; i++) {
    if (str1[i] != str1[len - 1 - i]) {
      palin = false;
      break;
    }
    palin = true;
  }
  return palin;
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
