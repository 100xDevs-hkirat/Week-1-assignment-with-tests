/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();
  if(arr1.length !== arr2.length){
    return false
  }else {
    for (let i=0; i< arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false
      }
    }
    return true;
  }  
}

module.exports = isAnagram;
