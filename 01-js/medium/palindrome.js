/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverse(str){
  var answer = "";
  for(let i = str.length - 1;i >= 0; i--){
    answer += str[i];
  }
  return answer;
}

function transform(str){
  var answer = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] == " " || str[i] == "?" || str[i] == "!" || str[i] == "," || str[i] == "."){

    }
    else{
      answer += str[i];
    }
  }
  return answer;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = transform(str);
  var reverseString = reverse(str);
  reverseString = reverseString.toLowerCase();

  if(str == reverseString){
    return true;
  }
  else{
    return false;
  }
}

var str1 = "race car";
var str2 = "jill";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

module.exports = isPalindrome;