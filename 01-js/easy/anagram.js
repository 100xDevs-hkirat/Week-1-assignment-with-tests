/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    var s1= str1.toLowerCase();
    var s2 = str2.toLowerCase();
    
    let ss1=Array.from(s1);
    let ss2=Array.from(s2);
    ss1.sort();ss2.sort();
    s1=ss1.toString();s2=ss2.toString();
    if (s1===s2) {return true;}
    else return false;
    }
  
  module.exports = isAnagram;
  