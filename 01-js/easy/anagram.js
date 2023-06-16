/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

module.exports = isAnagram;
