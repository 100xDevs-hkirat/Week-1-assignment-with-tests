/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeCharacters(string, characters) {
  return string.split('').filter((char) => !characters.includes(char)).join('');
}
function isPalindrome(str) {
  const charactersToRemove = ['?', '!',',','.'];
  str = removeCharacters(str, charactersToRemove);
  str=str.split(" ").join("").toLowerCase()
  let n=str.length-1;
  let i=0;

  console.log(str)
  while(i<n){
    if(str[i]===str[n]){
      i++;
      n--;
    }else return false;
  }
  return true;
}

module.exports = isPalindrome;
