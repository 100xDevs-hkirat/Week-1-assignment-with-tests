/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  var l = str.length-1;
  for(var i=0;i<l;i++,l--)
  {
  //  console.log(str.charCodeAt(i));
    
    if(96<str.charCodeAt(i) && str.charCodeAt(i)<123){
      
    }
    else {
    //  console.log(i + "  /  " + str.charCodeAt(i)+"="+str[i])
      l++
      continue
    }
    if(96<str.charCodeAt(l) && str.charCodeAt(l)<123){
      
    }
    else {
      //console.log(l + "  /  " +str.charCodeAt(l)+"-"+str[l])
      i--
      continue
    }

    if(str.charCodeAt(i)===str.charCodeAt(l))
    {}
    else
    return false;
  }
  return true;
}

console.log(isPalindrome("Eva, can I see bees in a cave?"))

module.exports = isPalindrome;
