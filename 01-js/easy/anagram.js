/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  const frequencyTable = {};

  for (let char of str1) {
    if (frequencyTable.hasOwnProperty(char)) {
      frequencyTable[char]++;
    } else {
      frequencyTable[char] = 1;
    }
  }

  for (let char of str2) {
    if (frequencyTable.hasOwnProperty(char)) {
      frequencyTable[char]--;
    } else {
      frequencyTable[char] = -1;
    }
  }  

  for(const key in frequencyTable){
    if(frequencyTable.hasOwnProperty(key)){
      if(frequencyTable[key]!==0){
        return false;
      }
    }
  }
  return true;
}




module.exports = isAnagram;
