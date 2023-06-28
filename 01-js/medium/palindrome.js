/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

/*
Same logic Applies
Palidrome string reads same as from front and back - some test cases involve removing white spaces, punctuation marks, case-insensitivity, etc.
For reversing a string we follow the same method of split and join as in-built js function reverse() works on alphabets not on string.
*/

function check(str) {
  var array = str.split("");
  array = array.reverse();
  array = array.join("");
  return array;
}
function isPalindrome(str) {
  str = str.replace(/[^\w]|_/g, "").replace(/\s/g, "");
  str = str.toLowerCase();
  var array = check(str);
  if (array == str)
    return true;
  else
    return false;
}

module.exports = isPalindrome;
