/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function charCounts(str) {
    var charMap = new Map();
    for (const ch of str) {
        charMap.set(ch, 0);
    }
    for (const ch of str) {
        var count = charMap.get(ch);
        charMap.set(ch, count + 1);
    }
    return charMap;
}

function isAnagram(str1, str2) {
    var ans = true;
    var charMapstr1 = charCounts(str1.toLowerCase());
    var charMapstr2 = charCounts(str2.toLowerCase());
    if (charMapstr1.size != charMapstr2.size) {
        return false;
    }
    for ([key, value] of charMapstr1) {
        if (!charMapstr2.has(key)) {
            ans = false;
            break;
        }
        if (charMapstr2.get(key) != value) {
            ans = false;
            break;
        }
    }
    return ans;
}

module.exports = isAnagram;
