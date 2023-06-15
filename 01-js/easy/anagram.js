/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let charMap = new Map(); // To store character frequency

  // Calculate frequency of each character in str1
  for(let char of str1){
    if(!charMap.has(char)){
      charMap.set(char,0);
    }
    charMap.set(char,charMap.get(char)+1);
  }

  // check if we can negate each character in map with characters in str2
  for(let char of str2){
    if(!charMap.has(char) || charMap.get(char) == 0){
      return false;
    }
    charMap.set(char,charMap.get(char)-1);
  }

  return true;
}

console.log(isAnagram('abc','abc'));

module.exports = isAnagram;
