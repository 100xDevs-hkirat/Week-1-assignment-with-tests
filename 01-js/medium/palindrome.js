/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let strArr = str.toLowerCase().split("");
  //as we are igoring spaces also
  strArr = strArr.filter((char) => char !== " ");
  // we are also ignoring special characters
  strArr = strArr.filter((char) => {
    if (char >= "a" && char <= "z") {
      return true;
    }
    return false;
  });
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    if (strArr[left] !== strArr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
