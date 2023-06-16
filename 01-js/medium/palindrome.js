/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = str.toLowerCase().split(' ').join('').split('');
  let n = s.length;

  let ns = [];
  for(i=0;i<n;i++){
    if(!(s[i] === '.' || s[i]===',' || s[i] === '!' || s[i]==='?')){
      ns.push(s[i]);
    }
  }

  s = ns;
  n = s.length;
  for(i=0;i<n;i++){
    if(s[i] !== s[n-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
