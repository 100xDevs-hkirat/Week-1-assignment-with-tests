/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function transform(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "." ||
      str[i] == " " ||
      str[i] == "?" ||
      str[i] == "!" ||
      str[i] == ","
    ) {
    } else {
      ans += str[i];
    }
  }
  return ans.toLowerCase();
}

function isPalindrome(str) {
  let newStr = transform(str);
  let revstr = newStr.split("").reverse().join("");
  if (revstr == newStr) return true;
  else return false;
}

module.exports = isPalindrome;
