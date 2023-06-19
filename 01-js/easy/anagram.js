/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const obj1 = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let it of str1) {
    if (obj1[it]) {
      obj1[it]++;
    } else {
      obj1[it] = 1;
    }
  }

  const obj2 = {};

  for (let it of str2) {
    if (obj2[it]) {
      obj2[it]++;
    } else {
      obj2[it] = 1;
    }
  }

  // check
  for (let it of str1) {
    if (obj1[it] !== obj2[it]) {
      return false;
    }
  }

  for (let it of str2) {
    if (obj1[it] !== obj2[it]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
