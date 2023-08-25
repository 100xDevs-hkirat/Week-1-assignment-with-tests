/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) return true;
  else {
    str = str.toLowerCase();
    nstr = "";
    for (let i = 0; i <= str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "a" && ch <= "z") nstr += ch;
    }
    rev = [...nstr].reverse().join("");
    return nstr === rev;
  }
}

module.exports = isPalindrome;
