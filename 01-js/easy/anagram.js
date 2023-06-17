/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    if(str1.length != str2.length)
        return false;
    var dict = {};
    var s1 = str1.toLowerCase();
    var s2 = str2.toLowerCase();
    for(var i = 0; i < s1.length; i++) {
        dict[s1[i]] = (dict[s1[i]] || 0) + 1;
    }
    for(var i = 0; i < s2.length; i++) {
        dict[s2[i]] = (dict[s2[i]] || 0) - 1;
    }
    for(const [key, value] of Object.entries(dict)) {
        if(value != 0)
            return false;
    }
    return true;
}

module.exports = isAnagram;
