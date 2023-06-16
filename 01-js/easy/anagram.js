/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    if (str1 == null || str2 == null || str1.length != str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let alphabetMapOfStr1 = createMap(str1);
    for (let ch of str2) {
        if (!alphabetMapOfStr1[ch]) {
            return false;
        }
    }
    return true;
}

function createMap(str) {
    let alphabetMap = {};
    for (let ch of str) {
        alphabetMap[ch] = 1;
    }
    return alphabetMap;
}

module.exports = isAnagram;
