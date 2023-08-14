/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
         str = str.toLowerCase() ;
         let temp = "" ;
         for(var i = 0 ; i < str.length ; ++i){
            if(str[i] == ' ') continue ;
            if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) temp += str[i] ;
         }
         //console.log(temp);
         str = temp ;
         var l = 0 , r = str.length - 1 ;
         while(l <= r){
           if(str[l] !== str[r]) return false ;
           l++;
           r--;
         }
         return true ;
}
isPalindrome("paras!!!!!     hshshshhsh");
module.exports = isPalindrome;
