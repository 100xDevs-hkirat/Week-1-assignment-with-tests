/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let string = str.toLowerCase().replace(/[\p{P}$+<=>^`|~]/gu, '').replace(/\s/g, "");
  console.log(string)
  let i = string.length - 1;
  let j = 0;
  while(i > j){
    if(string[i] != string[j]) return false;
    i--;
    j++;
  }
  return true;
}

console.log(isPalindrome('hello'))

module.exports = isPalindrome;
