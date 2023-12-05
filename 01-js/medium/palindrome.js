/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removePunctuation(str1) {
  let s = "";
  for (let i = 0; i < str1.length; i++) {
    if ((str1.charCodeAt(i) >= 97 && str1.charCodeAt(i) <= 122))
      s += str1[i];
  }
  return s;
}
function isPalindrome(str) {
  str = str.toLowerCase();
  str = removePunctuation(str);
  if(str == str.split("").reverse().join(""))
  return true;
  else
  return false;
}

module.exports = isPalindrome;
