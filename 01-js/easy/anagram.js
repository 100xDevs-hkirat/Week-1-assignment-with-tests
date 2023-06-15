/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

String.prototype.sort = function (){
  return this.split("").sort().join("");
}

function isAnagram(str1, str2) {
  let str1LowerCase = str1.toLowerCase();
  let str2LowerCase = str2.toLowerCase();
  return str1LowerCase.sort() == str2LowerCase.sort()
}

module.exports = isAnagram;
