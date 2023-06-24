/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const map1 = new Map();
  const map2 = new Map();

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let char of str1) {
    map1.set(char, 1 + (map1.get(char) ?? 0));
  }

  for (let char of str2) {
    map2.set(char, 1 + (map2.get(char) ?? 0));
  }

  if (map1.size !== map2.size) return false;

  for (let [char, count] of map1.entries()) {
    if (!map2.has(char)) return false;

    if (map2.get(char) !== count) return false;
  }
  return true;
}

// const x = isAnagram("hello", "ohell ");
// console.log(x);

module.exports = isAnagram;
