/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let strNew = str.toLowerCase();
  let cleanStr = strNew.replace(/[^\w]/g, "");

  let left = 0;
  let right = cleanStr.length-1;

  while(left <= right)
  {
    if(cleanStr[left] == cleanStr[right])
    {
      left++;
      right--;
    }
    else 
    {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
