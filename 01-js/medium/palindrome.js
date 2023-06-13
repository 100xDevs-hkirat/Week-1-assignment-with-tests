/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function isPalindrome(str) {
  const pattern = /[^A-Za-z]/g;
  const str1 = str.replace(pattern, "").toLowerCase();
  
  const rev = [];
  const act = [];
  for(var i = str1.length -1; i >= 0; i--){
      rev.push(str1[i]); 
  }
  for(var i = 0; i< str1.length; i++){
      act.push(str1[i]); 
  }
  
  const array1String = JSON.stringify(act);
  const array2String = JSON.stringify(rev);
  const areEqual = array1String === array2String;
  
 
  return areEqual;
}

module.exports = isPalindrome;
