/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function isPalindrome(str) {
  const str1=str.toLowerCase()
  var array = str1.split(" ")
  var str2 = array.join("")
  var str3=str2.replace(/[^\w\s]|_/g, '');
  const n=str3.length;
  for(var i in str2){
    if(str3[i]!=str3[n-i-1]){
      return false;
    }
  }
  return true;
}

//console.log(isPalindrome('Mr. Owl ate my metal worm.'));
module.exports = isPalindrome;
