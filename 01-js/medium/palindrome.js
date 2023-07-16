/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  let str_lower = str.toLowerCase();
  for(let i=0;i<str.length/2;i++){
    if(str_lower[i]!=str_lower[str.length-1-i])
      return false;
  }
  return true;
}

let ans = isPalindrome("Shaahs");
console.log(ans);

module.exports = isPalindrome;
