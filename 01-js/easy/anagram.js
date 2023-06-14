/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  if(str1.length !== str2.length) return false;
  if(str1 === str2) return true;
  return false;
}

module.exports = isAnagram;
