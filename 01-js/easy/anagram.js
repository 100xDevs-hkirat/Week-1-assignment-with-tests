/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  if (str1.length === 0 && str2.length === 0) return true;
  if(str1.length !== str2.length) return false;

  let str_a = str1.trim().toLowerCase();
  let str_b = str2.trim().toLowerCase();

  
  if (str_a.split('').sort().join('') === str_b.split('').sort().join('')) return true;
  return false;

}

module.exports = isAnagram;
