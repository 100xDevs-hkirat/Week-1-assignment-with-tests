/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let res="";
  let s="";
  for(let i=0;i<str.length;i++)
  {
    let c=str.charCodeAt(i);
    if(c>=97 && c<=122)
      s=s+str.charAt(i);
  }
  for(let i=s.length-1;i>=0;i--)
  {
    res=res+s.charAt(i);
}
if(res===s)
  return true;
  else return false;
}

module.exports = isPalindrome;
