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
  if (str1.length !== str2.length) return false;

  const chars1 = {}

  for (const i of str1) {
    if (chars1[i]) {
      chars1[i] += 1;
    } else {
      chars1[i] = 1;
    }
  }

  for (const i of str2) {
    if (chars1[i]) {
      chars1[i] -= 1;
    } else {
      return false;
    }
  }
  for (const key of str1) {
    if (chars1[key] !== 0) return false;
  }

  return true;
}

module.exports = isAnagram;
