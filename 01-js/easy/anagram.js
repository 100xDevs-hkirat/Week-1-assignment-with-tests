/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let x = str1.toLowerCase();
  x = x.split("");
  x = x.sort();
  x = x.join("");
  let y = str2.toLowerCase();
  y = y.split("");
  y = y.sort();
  y = y.join("");
  if(x == y){
    return true;
  }
  else {
    return false;
  }
  }
 

module.exports = isAnagram;
