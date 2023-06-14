/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var lowStr1 = str1.toLowerCase();
  var lowStr2 = str2.toLowerCase();
  if (lowStr1.length == lowStr2.length) {
    for (let i = 0; i < lowStr1.length; i++) {
      if (!lowStr2.includes(lowStr1[i])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

module.exports = isAnagram;
