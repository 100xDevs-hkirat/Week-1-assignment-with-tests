/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var l=str.length;
  f=1;
  var regex= /[,.?! ]/g;
  
  var revStr=str.split("").reverse().join("");
  var st1=str.toLowerCase().replace(regex,"");
  var st2=revStr.toLowerCase().replace(regex,"");
  for(var i=0;i<l;i++)
  {
    if(st1[i]!=st2[i] )
    {
      f=0;
    }
    
  }
  if(f===1)
  {
  return true;
  }
  else
  return false
}

module.exports = isPalindrome;
