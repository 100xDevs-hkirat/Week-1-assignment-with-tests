/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = str ;
  s= s.toLowerCase();
  str = str.toLowerCase();
  let a = str.length-1;
  for(let i = 0;i<a/2;i++){
    let temp = str[i];
    str[i]=str[a-i];
    str[a-i]=temp;
  }
  if(s!=str){
    return false;
  }
  return true;
}

module.exports = isPalindrome;
isPalindrome("hello help me")
