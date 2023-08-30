/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function removeSpacesAndSpecialCharacters(str) {
  let strWithoutSpaces = str.replace(/\s/g, '');
  let strWithoutSpecialCharacters = strWithoutSpaces.replace(/[^\w\s]/g, '');
  return strWithoutSpecialCharacters;
}
function reverse(str) {
  var rev = "";
  for(var i=str.length-1; i>=0; i--) {
    rev += str[i];
  }
  return rev;
}
function isPalindrome(str) {
  str = str.toLowerCase();
  str = removeSpacesAndSpecialCharacters(str); 
  var rev = reverse(str);
  
  if(str === rev){
    return true
  }
  else {
    return false
  }
  
}

module.exports = isPalindrome;
