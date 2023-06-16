/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

/**
 * Remove all the characters like !,.?spaces
 */
function sanitizeStrings(str) {
  let sanitizedStr = "";
  let strVector = str.split("");
  for (let ch of strVector) {
    if (ch != " " && ch != "!" && ch != "&" && ch != "!" && ch != '?' && ch != ',' && ch != '.') {
      sanitizedStr = sanitizedStr + ch;
    }
  }

  return sanitizedStr;
}

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}
/**
 * 
 * Do the following:
 * Sanitize the string
 * trim start/end
 * reverse the string
 * 
 * compare reversed == str and return
 */
function isPalindrome(str) {

  str = sanitizeStrings(str);
  str = str.trimStart().trimEnd();
  str = str.toLowerCase()
  let reversedStr = reverseString(str);

  console.log("Sanitzed string is " + str);
  console.log("reverses string is " + reversedStr);
  if (str == reversedStr) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;

console.log(isPalindrome("Eva, can I see bees in a cave?"));