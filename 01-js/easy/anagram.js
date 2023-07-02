/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let firstString = str1.toLowerCase();
  let secondString = str2.toLowerCase();
  if (firstString.length != secondString.length) {
    return false;
  }
  else {
    for (let i = 0; i < firstString.length; i++) {
      let count = 0;
      for (let j = 0; j < secondString.length; j++) {
        if (firstString[i] == secondString[j]) {
          count++;
        }
      }
      if (count == 0) {
        return false;
      }
    }
    return true;
  }
}

module.exports = isAnagram;
