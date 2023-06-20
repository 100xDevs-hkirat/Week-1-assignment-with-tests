/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  console.log(str)
  let first = 0
  let last = str.length - 1
  while(first<last){
    // console.log(str.charCodeAt(last))
    if(str.charCodeAt(first)<65 || str.charCodeAt(first)>122){
      first +=1
      continue
    }
    if(str.charCodeAt(last)<65 || str.charCodeAt(last)>122){
      last -=1
      continue
    }
    if(str[first].toLowerCase()!=str[last].toLowerCase()){
      console.log(str[first],str[last])
      return false
    }
    first +=1
    last -=1
  }
  return true;
}


module.exports = isPalindrome;
