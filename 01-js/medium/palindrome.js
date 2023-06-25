/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let alphabets='abcdefghijklmnopqrstuvwxyz';
  str=str.replace(/\s/g, '');
  str=str.replace(/[,.!?/><]/g, '');
  for(let i=0;i<str.length/2;i++){
    if(!str.includes(str[i])){
      str=str.substring(0, index) + str.substring(index + 1);
    }
    if(!str.includes(str[str.length-i-1])){
      str=str.substring(0, str.length-i-1) + str.substring(str.length-i);
    }
    if(str[i]===str[str.length-i-1]){
      continue;
    }
    else{
      console.log(str);
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('Able, was I ere I saw Elba!'));
module.exports = isPalindrome;
