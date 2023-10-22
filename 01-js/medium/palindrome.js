/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  var len=str.length;
  var s='';
  for(let i=0;i<len;i++)
  {  
    //console.log(str.charCodeAt(i));
    if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
    {
      s=s.concat(str[i]);
      //console.log(s);
    }
  }
  len=s.length;
  for(let i=0;i<=(len/2);i++)
  {
    if(s[i]!==s[len-i-1])
    {
      return false;
    }
  }
  //console.log(s);
  return true;
}

module.exports = isPalindrome;
