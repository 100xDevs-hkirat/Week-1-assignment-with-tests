/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  let string1= str1.toLowerCase().split('').sort().join('');
  let string2 = str2.toLowerCase().split('').sort().join('');
  
  if(str1.length!==str2.length, string1!==string2){
    return false
  }else if(string1===string2){
    return true
  }



}

isAnagram('Wasif','sifaw')

module.exports = isAnagram;
