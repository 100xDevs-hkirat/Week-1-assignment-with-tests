/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  var pal=str.split(".").join("").split("?").join("").split(",").join("").split("!").join("").split(" ").join("").split("").reverse().join("").toLowerCase();
    var pall=str.split(".").join("").split("?").join("").split(",").join("").split("!").join("").split(" ").join("").toLowerCase();
     if (pal===pall) {return true
    
  }
  else return false;
}

module.exports = isPalindrome;
