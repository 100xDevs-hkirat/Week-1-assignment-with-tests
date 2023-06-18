/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

let punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function isPalindrome(str) {
  str=str.replace(punctuationRegex,'')
  str=str.trim().split(' ').join('')
  let i=0
  let j=str.length-1
  while(i<j){
    if(str[i].toLowerCase() != str[j].toLowerCase()){
      return false
    }
    i++;
    j--;
  }
  return true;
}
module.exports = isPalindrome;
