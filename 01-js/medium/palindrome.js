/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.split(" ").join("").toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  console.log(str);
  var tempStr="";
  for(var i=str.length-1;i>=0;i--){
    tempStr=tempStr+str[i];
  }
  if (tempStr===str){
    return true;
  }
  else{
    return false;
  }
}
console.log(isPalindrome("Nam/? yufu hvhj"));
module.exports = isPalindrome;
