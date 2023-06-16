/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
//assuming string can consist of alphanumeric set

function isAnagram(str1, str2) {
  let charToIndexCountArr = new Array(65535).fill(0);
  for(const ch of str1){
    charToIndexCountArr[ch.toUpperCase().codePointAt(0)]++;
  }
  for(const ch of str2){
    charToIndexCountArr[ch.toUpperCase().codePointAt(0)]--;
  }
  let i = 0;
  for (const val of charToIndexCountArr) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
