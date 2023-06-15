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
  console.log(str1.replace(/\s/g, ""));
  s1=str1.toLowerCase().split('').sort().join('');
  s2=str2.toLowerCase().split('').sort().join('');
  console.log(s1);
  console.log(s2);
  return s1===s2;
}
 var ans = isAnagram('Debit Card', 'Bad Credit');
// console.log(ans);
module.exports = isAnagram;
