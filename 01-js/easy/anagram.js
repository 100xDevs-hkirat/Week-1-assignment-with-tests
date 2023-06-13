/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1, str2) {
  var lowercaseStr1 = str1.toLowerCase();
  var lowercaseStr2 = str2.toLowerCase();

  if(str1.length != str2.length) return false;
  var hashmap = new Map();
  
  for (var i = 0; i < lowercaseStr1.length; i++) {
    var character = lowercaseStr1[i];
    if(character === ' ') continue;
    if(hashmap.has(character)){
      hashmap.delete(character);
    }else{
      hashmap.set(character,1);
    }
  }
  for (var i = 0; i < lowercaseStr2.length; i++) {
    var character = lowercaseStr2[i];
    if(character === ' ') continue;
    if(hashmap.has(character)){
      hashmap.delete(character);
    }else{
      hashmap.set(character,1);
    }
  }

  if(hashmap.size>0) return false;
  return true;
}

module.exports = isAnagram;
