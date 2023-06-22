/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  
  let str1 = str.toLowerCase().replace(/[\W_]/g, "");
  console.log(str1);
  let str2 = str1.split('').reverse().join("");

  return str1 === str2;
  
}

isPalindrome('Able, was I ere I saw Elba!')

module.exports = isPalindrome;
