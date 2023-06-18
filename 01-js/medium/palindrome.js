/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function cleaning(str){
  let s="";
  for(let i=0;i<str.length;i++){
    if(str[i]!=" "&&str[i]!="."&&str[i]!=","&&str[i]!=":"&&str[i]!=";"&&str[i]!="?"&&str[i]!="("&&str[i]!=")"&&str[i]!="["&&str[i]!="]"&&str[i]!='"'&&str[i]!="'"&&str[i]!="!"&&str[i]!="-"&&str[i]!="/"){
      s+=str[i];
    }
  }
  return s;
}

function isPalindrome(str) {
  let s=cleaning(str);
  s=s.toLowerCase();
  let ptrBegin=0;
  let ptrEnd=s.length-1;
  let ans=true;
  while(ptrBegin<ptrEnd){
    if(s[ptrBegin]!=s[ptrEnd]){
      ans=false;
      break;
    }
    else{
      ptrBegin++;
      ptrEnd--;
    }
  }
  return ans;
}
module.exports = isPalindrome;
