/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
// abccbaa
function isPalindrome(str) {
  const org = str.toLowerCase().split('').filter(char=>char !=' ').join();
  const spc = str.toLowerCase().split('').filter(char=>char !=' ').reverse().join()
  console.log(org)
  console.log(spc)
  if(org.replace(/[^\w\s]|_/g, '')==spc.replace(/[^\w\s]|_/g, '')){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
console.log(isPalindrome("Nan"));
