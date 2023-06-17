/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase();
  str1 = str1.split(" ").join("");
  str1 = removePunctuation(str1);
  let str4 =str1.split("").reverse().join("");
  if(str1 == str4){
    return true;
  }
  else{
    return false;
  }
}
function removePunctuation(str2) {
  return str2.replace(/[^\w\s]|_/g, "");
}
let ans = isPalindrome("Race car");
console.log(ans);
module.exports = isPalindrome;
