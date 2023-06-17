/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.replace(/\s+|[.,:!?]/g, '') // pattern match to remove spaces and punctuation marks
  arr=str.toLowerCase().split("")  // to convert to one type of case, lowe case here and string conversion to arr
  if(arr.length >1){              // Handels border line cases of empty string or only one character
    console.log(arr)
    for (var i =0; i<=(Math.trunc(arr.length/2)-1); i++){
      if (arr[i] != arr[(arr.length)-i-1]){
        return false
      }
    }
  }
  return true;
}
module.exports = isPalindrome;
