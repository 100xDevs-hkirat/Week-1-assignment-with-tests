/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function check(str) {
  var answer = "";
  for(var i = str.length - 1 ; i >= 0 ; i--){
    answer += str[i];
  }
  console.log(answer);
  return  answer;
}

function transform(str){
  var answer = "";
  for(var i = 0 ; i < str.length ; i++){
    if(str[i] == " " || str[i] == "?" || str[i] == "," || str[i] == "!" || str[i] == "."){
  
}else {
    answer += str[i];  
}
  }
  console.log(answer);
  return answer;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  console.log(str);
  str = transform(str);
  console.log(str);
  if(str === check(str)){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
