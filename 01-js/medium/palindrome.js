/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1){
    return true;
  }else{
    const arr = str.toUpperCase().match(/[a-zA-Z]/g);
    const revArr = [...arr].reverse();
    for(let x=0; x<arr.length; x++){
      if(arr[x] !== revArr[x]){
        return false;
      }
    }
    return true;
  }
  
}

module.exports = isPalindrome;
