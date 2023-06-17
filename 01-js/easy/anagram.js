/**
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
  @param {string} str1
  @param {string} str2
  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();
  let lenStr2 = str2.length;

  if(lenStr2 != str1.length){
       return false;
  }
  let arrChar = str2.split("");
  let anaCharCount = 0;
  for(let chr of arrChar){
      if(str1.indexOf(chr) != -1){
          anaCharCount++;
      }
  }  
  if(anaCharCount == lenStr2){
      return true;
  }
  return false;
}

module.exports = isAnagram;
