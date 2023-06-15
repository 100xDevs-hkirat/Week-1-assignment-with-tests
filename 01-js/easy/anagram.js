/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var str1Lowercase = str1.toLowerCase();
  var str2Lowercase = str2.toLowerCase();

  if(str1Lowercase.split('').sort().join('') === str2Lowercase.split('').sort().join('')){
    return true;
  }else {
    return false;
  }

}

module.exports = isAnagram;
