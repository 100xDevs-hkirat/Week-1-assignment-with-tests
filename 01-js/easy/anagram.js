/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  const a = str1.split('')
  const b = str2.split('')
  const a1 = a.sort()
  const b1 = b.sort()
  const a2 = a1.join();
  const b2 = b1.join();
  return str1 === str2
}

module.exports = isAnagram;
