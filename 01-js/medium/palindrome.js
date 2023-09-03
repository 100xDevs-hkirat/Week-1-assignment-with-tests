/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let i = 0 , j=str.length-1;
  str=str.toUpperCase();
  while(i<j){
    if(str[i] <= 'A' || str[i] >= 'Z' ) {
      i++;
      continue;
    }
    if(str[j] <= 'A' || str[j] >= 'Z' ) {
      j--;
      continue;
    }
    if(str[i] == str[j]){
      i++;
      j--;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
