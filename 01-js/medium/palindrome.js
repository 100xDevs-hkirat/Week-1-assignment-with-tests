/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isAlphabet(character) {
  return character.match(/[a-zA-Z]/) !== null;
}

function filterAlpha(str){
  str1 = "";
  for(let j of str){
    if(!isAlphabet(j)){
      continue;
    }
    else{
      str1 += j;
    }
  }
  return str1;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  arr = str.split(" ");
  str = arr.join("");
  str = filterAlpha(str);
  let str2 = "";
  let n = str.length - 1;
  while(n > -1){
    str2 = str2 + str[n]
    n -= 1;
  }
  return (str === str2)
}


module.exports = isPalindrome;
