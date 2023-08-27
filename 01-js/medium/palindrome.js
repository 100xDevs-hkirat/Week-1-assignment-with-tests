/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  var str2 = "";
  for(const item of str){
    if(item >= 'a' && item <= 'z'){
      str2 += item;
    }
  }
  str = str2;
  for (let i = 0, j = str.length - 1; i < str.length/2; i++, j--){
    if(str[i] != str[j])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
