/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transform(str){
  str = str.toLowerCase();
  ans = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
      ans += str[i];
    }
  }
  return ans;
} 

function reverse(str){
  ans = "";
  for(var i = str.length-1; i >= 0; i--){
    ans += str[i];
  }
  return ans;
}

function isPalindrome(str) {
  str = transform(str);
  let reverseString = reverse(str);

  if(str === reverseString){
    return true;
  }
  return false;
}

module.exports = isPalindrome; 
