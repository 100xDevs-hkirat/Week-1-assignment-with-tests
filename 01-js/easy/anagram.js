/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
var characterCountOfStr = new Array(128).fill(0);
  for (var i = 0; i < str1.length; ++i)
    characterCountOfStr[(str1[i].toLowerCase()).charCodeAt(0)]++;
  for (var i = 0; i < str2.length; ++i)
    characterCountOfStr[(str2[i].toLowerCase()).charCodeAt(0)]--;
  for (var i = 0; i < 128; ++i) if (characterCountOfStr[i] !== 0) return false;
  return true;
}

module.exports = isAnagram;
