/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  
  const lowerStr = str.toLowerCase();
  let newStr = "";
  for (var i = 0; i < lowerStr.length; ++i) if (lowerStr[i] >= 'a' && lowerStr[i] <= 'z') newStr += lowerStr[i];

  const reverseStr = newStr.split('').reverse().join('');
  return newStr === reverseStr;
}

// const ans = isPalindrome("Aba");
// console.log(ans); // true

module.exports = isPalindrome;
