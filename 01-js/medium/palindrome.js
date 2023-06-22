/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var newstr = str.toLowerCase();
  var splitString = newstr.split("");
  let arr = []
  for (var i =0 ; i < splitString.length ; i++){
    var x = splitString[i]
    if(x === ' ' || x === '.' || x === '?' || x === ',' || x === '!'){
    }
    else{
      arr.push(x)
    }
  }
  var ori = arr.join("");
  var reverseArray = arr.reverse();
  var joinArray = reverseArray.join("");
  if(joinArray == ori){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
