/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function charIsLetter(char) {
  if (typeof char !== 'string') {
    return false;
  }

  return char.toLowerCase() !== char.toUpperCase();
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  var left = 0;
  var right = str.length - 1;
  while(left<right){
    if(str[left]===str[right]&& charIsLetter(str[left])&& charIsLetter(str[right])){
      left++;
      right--;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
