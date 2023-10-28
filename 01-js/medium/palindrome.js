/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var l = 0;
  var r = str.length -1;
  str = str.toLowerCase();
  while(l<r) {
    while(l<r && (str[l]<'a' || str[l]>'z')) l++;
    while(l<r && (str[r]<'a' || str[r]>'z')) r--;
    if(str[l]!=str[r]) return false;
    l++;
    r--;
  }

  return true;
}

//console.log(isPalindrome("Nan"));
module.exports = isPalindrome;
