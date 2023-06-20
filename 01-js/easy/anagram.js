/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length === str2.length) {

  }
  else
    return false;

  var arr = new Array(25);
  for (var i = 0; i < 26; i++) {
    arr[i] = 0;

  }


  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (var i = 0; i < str1.length; i++) {
    arr[str1.charCodeAt(i) - 97]++;
  }

  for (var i = 0; i < str2.length; i++) {
    arr[str2.charCodeAt(i) - 97]++;
  }

  for (var i = 0; i < 26; i++) {
    if (arr[i] % 2 != 0)
      return false;
  }
  return true;
}

module.exports = isAnagram;
