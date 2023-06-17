/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function isPalindrome(str) {
  str = str.toLowerCase();
  var nStr = "";
  for (var i = 0; i < str.length; ++i) if (str[i] >= 'a' && str[i] <= 'z') nStr += str[i];
  var reversedStr = nStr.split('').reverse().join('');
  return nStr === reversedStr;
}

module.exports = isPalindrome;