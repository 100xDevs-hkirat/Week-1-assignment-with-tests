/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  s1 = str1.toLowerCase();
  s2 = str2.toLowerCase();
  if (s1.length !== s2.length) {
    return false;
  }

  const char_count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    char_count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    char_count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (char_count[i] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
