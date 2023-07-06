/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const anagramMap = new Map();

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    anagramMap.set(str1[i], (anagramMap.get(str1[i]) ?? 0) + 1);
    anagramMap.set(str2[i], (anagramMap.get(str2[i]) ?? 0) - 1);
  }

  for (let count of anagramMap.values()) {
    if (count !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
