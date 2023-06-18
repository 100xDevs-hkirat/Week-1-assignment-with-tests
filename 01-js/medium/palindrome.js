/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function transform(str) {
  let newstr1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == '?' || str[i] == ',' || str[i] == '!' || str[i] == '.') {

    }
    else {
      newstr1 += str[i];
    }
  }
  return newstr1;
}
function reverse(str) {
  let str1 = "";
  for (let j = str.length-1; j >=0; j--) {
    str1 += str[j];
  }
  return str1;
}
function isPalindrome(str) {
  let newstr = str.toLowerCase();
  console.log(newstr);
  let newstr2 = transform(newstr);
  console.log(newstr2);
  newstr = reverse(newstr2);
  console.log(newstr);
  if (newstr == newstr2) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = isPalindrome;
