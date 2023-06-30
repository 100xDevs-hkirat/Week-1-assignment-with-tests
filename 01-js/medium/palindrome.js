/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let transformedString = transformString(str);
  // console.log("Transformed String: " + transformedString);
  // let reversedString = transformedString.split('').reverse().join('').toLowerCase();
  let reversedString = reverseString(transformedString);
  // console.log("Reversed String: " + reversedString);
  if(transformedString === reversedString){
    return true;
  }
  return false;
}

function reverseString(str){
  let reversedString = ""
  for(let i = str.length -1; i >= 0; i--){
    reversedString += str[i];
  }
  return reversedString.toLowerCase();
}

function transformString(str){
  let transformedString = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] === '!' || str[i] === '?' || str[i] === ',' || str[i] === '.' || str[i] === " "){
       
    }
    else{
      // console.log("Ss:" + transformedString[i] +":d")
      transformedString += str[i];
    }
  }
  return transformedString.toLowerCase()
}

console.log(isPalindrome('gog'));
module.exports = isPalindrome;
