/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}


function isPalindrome(str) {
  str=str.toUpperCase();
  let front=0;
  let back=str.length-1

  while(front<back)
  {
    while(front<str.length && !isLetter(str[front]))
     front++;
    while(back>=0 && !isLetter(str[back]))
     back--;

    if(front>=str.length || back<0 ||  str[front]!=str[back])
      return false;

    front++;
    back--;
  }

  return true;
  
}





module.exports = isPalindrome;
