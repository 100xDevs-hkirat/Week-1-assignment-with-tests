/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
  str = str.toLowerCase()
  let i=0
  let j=str.length-1
  while(i<j) {
    if(str[i]!=str[j])
      return false
    i=i+1
    j=j-1;
  }
  console.log(str)
  return true;
}

console.log(isPalindrome("Able, was I ere I saw Elba!"))

module.exports = isPalindrome;
