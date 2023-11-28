/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
let obj = new Object();
  for(let i = 0; i < str1.length; i++){
    if(obj[str1[i]]) obj[str1[i]]++;
    else obj[str1[i]] = 1;
  }
  for(let i = 0; i < str2.length; i++){
    if(obj[str1[i]]) obj[str2[i]]--;   
    else return false;    
  }
    for(let key in obj){
      if(obj[key] !== 0)return false;
    }
  return true;
}

module.exports = isAnagram;
