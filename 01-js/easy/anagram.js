/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
      str1Lowercase = str1.toLowerCase()
      str2Lowercase = str2.toLowerCase()

      str1Lowercase = str1Lowercase.split("").sort();
      str2Lowercase = str2Lowercase.split("").sort()


      for( i = 0; i < str1Lowercase.length; i++ ){
        if(str1Lowercase[i] !== str2Lowercase[i]){
          return false;
        }
      }return true;
}

module.exports = isAnagram;
