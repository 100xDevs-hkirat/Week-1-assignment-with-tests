/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i].toLowerCase()] = 1 + (count1[str1[i].toLowerCase()] ?? 0);
    count2[str2[i].toLowerCase()] = 1 + (count2[str2[i].toLowerCase()] ?? 0);
  }

  for (const char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
