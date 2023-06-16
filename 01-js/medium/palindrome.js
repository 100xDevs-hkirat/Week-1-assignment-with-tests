/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase(str)
  let s = ""
  for(let i = 0;i<str.length;i++){
    if(str[i]>='a' && str[i] <= 'z') s += str[i];
  }
  let i = 0,j = s.length-1;
  while(i<j){
    if(s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true
}
module.exports = isPalindrome;
