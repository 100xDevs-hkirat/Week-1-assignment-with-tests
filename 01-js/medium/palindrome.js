/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if(str.length === 1 || str.length===0){
    return true;
  }
 var s=str.toLowerCase();
 console.log(s);
 const lowercaseLetters = s.match(/[a-z]/g).join("");
 console.log(lowercaseLetters);
 var l=lowercaseLetters.length;
 for(let i=0;i<l/2;i++){
   if(lowercaseLetters[i] !== lowercaseLetters[l-i-1]){
    return false;
   }
 }
 return true;
}
var value=isPalindrome('Eva, can I see bees in a cave?');
console.log(value);
module.exports = isPalindrome;
