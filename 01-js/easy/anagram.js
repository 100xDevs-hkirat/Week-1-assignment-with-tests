/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }
  
  let sortedArray1 = str1.toLowerCase().split('').sort();
  let sortedArray2 = str2.toLowerCase().split('').sort();

  let sortedString1 = sortedArray1.join('');
  let sortedString2 = sortedArray2.join('');


  if(sortedString1 === sortedString2){
    return true;
  }
  return false;
}

module.exports = isAnagram;
