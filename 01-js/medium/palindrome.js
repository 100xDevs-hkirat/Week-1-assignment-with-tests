/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  //From the test case we have to remove punctuation and spaces 
  let correct = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  /**
   /[^a-zA-Z0-9]/g this is how we remove punctuation and spaces
   for test case like 'A man, a plan, a canal. Panama'
   
   */

  let reverse = correct.split("").reverse().join("");

  console.log(correct, ":", reverse);
  if (correct == reverse) {
    return true;
  }
  return false;
}


console.log(isPalindrome('A man, a plan, a canal. Panama'))

module.exports = isPalindrome;
