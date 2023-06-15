/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1="";

 for(let i=0;i<str.length;i++){
  if((str.charAt(i)>='a' && str.charAt(i)<='z') || (str.charAt(i)>='A' && str.charAt(i)<='Z')){
    let ch=str.charAt(i);
    str1+=ch;
  }
 }

 str1=str1.toLowerCase();
 let i=0;
 let j=str1.length-1;

 while(i<=j){
  if(str1.charAt(i)!==str1.charAt(j)){
    return false;
  }
  i++;
  j--;
 }
  return true; 
}

module.exports = isPalindrome;
