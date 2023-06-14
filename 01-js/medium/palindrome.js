/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let str1 = "";
  for(let x of str){
    if(x > 'a' && x < 'z') str1 += x;
  }
  let str2 = str1.split('').reverse().join('');
  return str1 === str2;
}

//can use two pointer alse i guess

module.exports = isPalindrome;
