/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  // convert it into array then apply sorting
  var arrayStr1 = str1.split('').sort();
  var arrayStr2 = str2.split('').sort();

  var sortStr1 = str1.join('');
  var sortStr2 = str2.join('');

  return sortStr1 == sortStr2;


}

module.exports = isAnagram;
