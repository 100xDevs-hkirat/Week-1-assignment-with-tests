/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
  console.log(str.split("").sort().join(""));
  return str.toLowerCase().split("").sort().join("");
}

function isAnagram(str1, str2) {
  return sort(str1)===sort(str2);
}

module.exports = isAnagram;
