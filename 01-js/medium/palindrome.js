/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  // str=str.split('').filter((char)=>(char>='a'&&char<='z')||char==' ').join();
  str=str.replace(/[^a-z]/g, '');
  let str2=str;
  str2=str.split('').reverse().join('');
  return str===str2
}

module.exports = isPalindrome;
