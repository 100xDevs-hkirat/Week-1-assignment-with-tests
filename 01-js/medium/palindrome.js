/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function sanitiseString(str){
  ans = "";
  for(let i=0; i<str.length; i++){
    if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')){
      ans += str[i];
    }
  }
  return ans;
}

function isPalindrome(str) {
  str = sanitiseString(str);
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;  

  console.log(str);

  while(i < j){
    if(str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome("A man a plan a canal Panama"));
module.exports = isPalindrome;
