/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isEnglishLetter(character) {
  return /^[A-Za-z]$/.test(character);
}
function isPalindrome(str) {
  var s = str.split(" ").join("");
  if (s.length === 0) return true;
  if (s.length === 1) return true;
  var i = 0,
    j = s.length - 1;
  while (i < j) {
    if (!isEnglishLetter(s[i]) || !isEnglishLetter(s[j])) {
      if (!isEnglishLetter(s[i])) {
        i++;
        continue;
      }
      if (!isEnglishLetter(s[j])) {
        j--;
        continue;
      }
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;