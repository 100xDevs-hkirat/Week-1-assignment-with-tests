/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {
  const arr1 = [];
  const arr2 = [];

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.split(" ").join("");
  str2 = str2.split(" ").join("");

  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < str1.length; i++) {
    arr1.push(str1.charAt(i));
    arr2.push(str2.charAt(i));
  }

  var s1 = arr1.sort().join("");
  var s2 = arr2.sort().join("");

  if (s1 === s2) {
    return true;
  } else {
    return false;
  }
}



module.exports = isAnagram;
