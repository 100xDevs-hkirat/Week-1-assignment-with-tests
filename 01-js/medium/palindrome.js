/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str = str.toLowerCase();

  let arr = str.split("");
  let new_arr = [];
  for(let i = 0; i < arr.length ; i++){
    if (!([' ', '?','!','.',','].includes(arr[i]))){
      new_arr.push(arr[i]);
    }
  }
  
  let n = new_arr.length;
  for (let i = 0; i < Math.round(n/2); i++){
    if (new_arr[i] === new_arr[n-1-i]){
      continue;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
