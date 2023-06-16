/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  s = s.toLowerCase();
  t = t.toLowerCase();
  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!charCount[t[i]]) {
      return false;
    }
    charCount[t[i]]--;
  }

  return true;
}

module.exports = isAnagram;
