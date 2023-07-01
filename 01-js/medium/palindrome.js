/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
let lowercase_alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function is_alphabet(x) {
  for (let i = 0; i < lowercase_alphabets.length; i++) {
    if (x == lowercase_alphabets[i]) {
      return true;
    }
  }
  return false;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}

function without_punctuation_spaces(str) {
  str=str.toLowerCase();
  var ans = "";
  for (let i = 0; i < str.length; i++) {
    if (is_alphabet(str[i])) {
      ans += str[i];
    }
  }
  return ans;
}
function isPalindrome(str) {
  str=str.toLowerCase();
  let str1 = without_punctuation_spaces(str);
  // let str2 = without_punctuation_spaces(str);
  // let str1 = str.toLowerCase();
  let str2 = reverseString(str1);
  if (str1 == str2) return true;
  else return false;
}

 
module.exports = isPalindrome;
 
 
 
