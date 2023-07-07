/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str = str.split(" ").join("");

  str = str.toLowerCase();

  var res = "";
  for(var i=0;i<str.length;i++){
    if(str[i]>='a' && str[i]<='z')
      res += str[i];
  }

  var i = 0;
  var j = res.length - 1;

  while(i<j){
    if(res[i]!=res[j])
      return false;
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
