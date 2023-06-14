/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(stra) {
  let str = [];
  stra.split('').forEach((s) => {
    e=s.toLowerCase();
    if(e>='a' && e<='z'){
      str.push(e);
    }
  });
  let n = str.length;
  let j = n - 1;
  
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[j])
      return false;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
