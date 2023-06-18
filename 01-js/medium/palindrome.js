/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let cleanString = '';
  if (typeof str !== 'string'){
    return false;
  }
  for (let char of str){
    if ( char.match(/[a-z]/i)){
      cleanString += char;
    }
  }
  cleanString = cleanString.toLowerCase();
  return cleanString === cleanString.split('').reverse().join('');
}

module.exports = isPalindrome;
