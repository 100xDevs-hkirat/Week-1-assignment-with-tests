/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortStr(str) {
  let newStr1 = str.toLowerCase().split(""); //toLowerCase() method converts a string to lowercase,split() method split a string into an array of substrings.
  let finalStr = newStr1.sort().join(); // join() method join elements of an array into a single string.
  return finalStr;
}

function isAnagram(str1, str2) {
  if (sortStr(str1) == sortStr(str2)) return true;
  else return false;
}

module.exports = isAnagram;
