/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
let arr1= Array.from(str1.toLowerCase());
  let arr2=Array.from(str2.toLowerCase());
  arr1.sort();
  arr2.sort();
  if(arr1.toString()===arr2.toString())
    return true;
  else return false;
}

module.exports = isAnagram;
