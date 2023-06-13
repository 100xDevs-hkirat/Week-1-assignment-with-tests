/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  if (len1 != len2) {
    return false;
  }

  const firstArr = new Array(26).fill(0);
  const secondArray = new Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    const char = str1[i].toLowerCase();
    const index = char.charCodeAt(0) - "a".charCodeAt(0);

    firstArr[index]++;
  }
  for (let i = 0; i < len2; i++) {
    const char = str2[i].toLowerCase();
    const index = char.charCodeAt(0) - "a".charCodeAt(0);

    secondArray[index]++;
  }
  let check = 1;
  for (let i = 0; i < 26; i++) {
    if (firstArr[i] !== secondArray[i]) {
      check = 0;
      break;
    }
  }

  if (check === 0) {
    return false;
  }
  return true;
}

module.exports = isAnagram;
