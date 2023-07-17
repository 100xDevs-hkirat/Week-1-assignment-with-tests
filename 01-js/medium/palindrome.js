/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeWhiteSpace(str) {
  var formattedString = '';

  for(i=0; i<str.length; i++) {
    if(str[i] == " " || str[i] == "!" || str[i] == "," || str[i] == "?" || str[i] == ".") {
    } else {
      formattedString += str[i];
    }
  }

  return formattedString;
}

function reverse(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

function isPalindrome(str) {
  str = removeWhiteSpace(str.toLowerCase());

  if(str == reverse(str)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
