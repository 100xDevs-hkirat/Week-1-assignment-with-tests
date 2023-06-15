/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let arr=[];
  for(let i=0;i<=str.length;i++){
    if(str.charAt(i).charCodeAt(0)>=65 && str.charAt(i).charCodeAt(0)<=90){
      arr.push(str.charAt(i).toLowerCase());
    }else if(str.charAt(i).charCodeAt(0)>=97 && str.charAt(i).charCodeAt(0)<=122){
      arr.push(str.charAt(i).toLowerCase());
    }
  }
  let start=0;
  let end=arr.length-1;

  while (start<=end) {
    if(arr[start]!=arr[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
