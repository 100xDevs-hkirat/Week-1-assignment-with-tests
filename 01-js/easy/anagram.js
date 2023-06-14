/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  let freqstr1 = Array(256).fill(0);
  let n1 = str1.length;

  for (let i = 0; i < n1; i++) {
    freqstr1[str1.charCodeAt(i)]++;
  }

  let freqstr2 = Array(256).fill(0);
  let n2 = str2.length;

  for (let i = 0; i < n2; i++) {
    freqstr2[str2.charCodeAt(i)]++;
  }

  for (let i = 0; i < 256; i++) {
    if (freqstr1[i] !== freqstr2[i]) {
      return false;
    }
  }
  return true;
}
module.exports = isAnagram;
