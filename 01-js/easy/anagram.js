/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let string1 = str1.replace(/\s/g, '').toLowerCase();
  let string2 = str2.replace(/\s/g, '').toLowerCase();

  if (string1.length !== string2.length) {
    return false;
  }

  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
