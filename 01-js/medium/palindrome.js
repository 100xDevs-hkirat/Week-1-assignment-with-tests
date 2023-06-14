/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
 
  //new str has all the chars to lowercase and removes all the unessary symbols like ?,_ numbers etc using this regular expression([^A-Za-z0-9])
  const newstr = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
  let i = 0;
  let j = newstr.length-1;

  
  while(i<j){
    if(newstr.charAt(i) !== newstr.charAt(j)){
      return false;
    }
    i++;
    j--;
  }
  return true;



}

module.exports = isPalindrome;
