/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str = str.toLowerCase()
  str = str.replace(/\s/g, "") // method to remove all whitespaces
  str = str.replace(/[^\w\s]|_/g, "") // method to remove all punctuations

  let arr = Array.from(str);

  let start = 0;
  let end = arr.length - 1;
  while(start < end){
    if(arr[start] !== arr[end]){
      return false;
    }
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
