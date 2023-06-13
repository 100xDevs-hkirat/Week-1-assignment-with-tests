/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isAlphabet(character) {
  return /^[A-Za-z]$/.test(character);
}

function cleanAString(str){
  let cleanedStr="";
  for(let char of str){
    if(isAlphabet(char)){
      cleanedStr+=char;
    }
  }

  return cleanedStr.toLowerCase();
}

function isPalindrome(str) {
  str=cleanAString(str);
  const reversedStr = str.split("").reverse().join("");
  return str===reversedStr;
}

// console.log(isPalindrome("hello")) ;


module.exports = isPalindrome;
