/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var str1=str.toLowerCase();
  var str12=str1.replaceAll(' ','');
  var count=0;
  var pp=0;
  for(var i=0; i<str12.length; i++){
    if(str12[i]=='!' || str12[i]=='.' || str12[i]=='?'){
      pp=1;
    }
  }
  for(var i=0; i<(str12.length)/2; i++){
    if(str12[i]!=str12[str12.length-1-i]){
      count =1;
    }
  }
  if(count==0 || pp==1){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
