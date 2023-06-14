/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;
  let map = {};
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();

  for(let i = 0; i < string1.length; i++){
    if(map[string1[i]] == undefined) map[string1[i]] = 0;
    map[string1[i]]++;
  }

  for(let i = 0; i < string2.length; i++){
    if(!map[string2[i]]) return false;
    map[string2[i]]--;
  }
  return true;
}

console.log(isAnagram('abc!', '!bac'))

module.exports = isAnagram;
