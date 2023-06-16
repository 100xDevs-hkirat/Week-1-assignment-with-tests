/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function checkMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (!map1.has(key) || value !== map2.get(key)) return false;
  }
  return true;
}

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let map1 = new Map(),
    map2 = new Map();
  for (let ch of str1) {
    if (map1.has(ch)) map1.set(ch, map1.get(ch) + 1);
    else map1.set(ch, 1);
  }
  for (ch of str2) {
    if (map2.has(ch)) map2.set(ch, map2.get(ch) + 1);
    else map2.set(ch, 1);
  }
  if (checkMaps(map1, map2)) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
