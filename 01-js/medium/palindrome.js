/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var lstr=str.toLowerCase();
  lstr = lstr.replaceAll(" ","");

  var n=lstr.length;
  var i=0,j=n-1;

  while(i<j)
  {
    if(lstr[i]<'a' || lstr[i]>'z')i++;
    if(lstr[j]<'a' || lstr[j]>'z')j--;

    if(lstr[i]!= lstr[j]) return false;

    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
