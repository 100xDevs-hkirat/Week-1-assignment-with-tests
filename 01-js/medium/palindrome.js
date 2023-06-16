/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isPunctuation(character) {
  console.log(character)
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  return punctuationRegex.test(character);
}
function isPalindrome(str) {
  
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  str = str.toLowerCase().replace(punctuationRegex, '').split(' ').join('');

  const reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
  
 
}



module.exports = isPalindrome;
