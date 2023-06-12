/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    console.log("false");
    return false;
  }

  var dict1 = {};
  var dict2 = {};
  for (var i = 0; i < str1.length; i++) {
    var val = str1[i].toLowerCase();
    if (val in dict1) {
      dict1[val]++;
    } else {
      dict1[val] = 1;
    }
  }
  for (var i = 0; i < str2.length; i++) {
    var val = str2[i].toLowerCase();
    if (val in dict2) {
      dict2[val]++;
    } else {
      dict2[val] = 1;
    }
  }
  for (var key in dict1) {
    if (key in dict2) {
      if (dict2[key] != dict1[key]) {
        return false;
      }
    }
  }
  return true;
}
module.exports = isAnagram;
