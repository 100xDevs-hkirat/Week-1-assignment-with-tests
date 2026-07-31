/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  /*
  str = str.toLowerCase();
  str = str.replace(/[^\w\s]/g, '');
  str.split(" ").join("");
  console.log(str);
  */


  /* 

  Learn With Javascript functions instead of normal Logic. 

  */

  var newStr = "";

  for(var i = 0; i < str.length; i++) {
    if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      newStr += str[i];
    }
  }

  newStr = newStr.toLowerCase();

  console.log(newStr);

  var start = 0, end = newStr.length - 1;

  while(start < end) {
    if(newStr[start] !== newStr[end]) {
      return false;
    }

    start++, end--;
  }

  return true;
}

module.exports = isPalindrome;
