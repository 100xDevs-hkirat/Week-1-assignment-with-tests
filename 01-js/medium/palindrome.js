/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isPunctuation(char) {
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  return punctuationRegex.test(char);
}

function isPalindrome(str) {
  var newStr = str.toLowerCase();
  console.log(newStr);
  var start = 0,
    end = newStr.length - 1;

  while (start <= end) {
    if (newStr[start] === " " || isPunctuation(newStr[start])) {
      console.log("1");
      start++;
    } else if (newStr[end] === " " || isPunctuation(newStr[end])) {
      console.log("2");
      end--;
    } else if (newStr[start] === newStr[end]) {
      console.log("3");
      start++;
      end--;
    } else {
      console.log("4");
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
