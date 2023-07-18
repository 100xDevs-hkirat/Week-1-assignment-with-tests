/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  str_lowercase = str.toLowerCase();
  str3= str_lowercase.split("");
  new_str=[];
  for(var i=0;i<str3.length;i++)
  {
    if((str3[i]===" ")||(str3[i]===",")||(str3[i]==="?")||(str3[i]==".")||(str3[i]==="!")||(str3[i]==="@")||(str3[i]==="#")||(str3[i]==="$")||(str3[i]==="%")||(str3[i]==="^")||(str3[i]==="&")||(str3[i]==="*")||(str3[i]==="+"))
    {

    }
    else 
    {
      new_str.push(str3[i]);
    }
  }
  str2 ="";
  for(var i=new_str.length-1;i>=0;i--)
  {
    str2 =str2+new_str[i];
  }
  if (str2=== (new_str.join(""))) return true;
  else return false;
}


// var answer = isPalindrome("level");
// console.log(answer);
module.exports = isPalindrome;
