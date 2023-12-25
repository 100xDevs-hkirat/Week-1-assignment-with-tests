/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let str1Lower=str1.toLowerCase().split(" ").join("");
  let str2Lower=str2.toLowerCase().split(" ").join("");

  console.log(str1Lower+" "+ str2Lower);
  if(str1Lower.split('').sort().join('')===str2Lower.split('').sort().join(''))
    return true;
  else
    return false;
}

module.exports = isAnagram;
