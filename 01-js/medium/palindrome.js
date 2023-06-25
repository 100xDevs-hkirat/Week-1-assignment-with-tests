/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function isPalindrome(str) {
  str = str.toLowerCase()
  let i = 0;
  let j = str.length - 1;

  while(i < j){

    if(!isLetter(str[i])){
      i++;
    }

    else if(!isLetter(str[j])){
      j--;
    }

    else if(str[i] === str[j]){
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
